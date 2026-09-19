"use server"

import { Resend } from "resend"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Your message should be at least 10 characters.")
    .max(2000, "Your message is too long (2000 characters max)."),
})

type Field = "name" | "email" | "message"

export type ContactState = {
  success: boolean
  message: string
  errors?: Partial<Record<Field, string>>
}

export async function sendMessage(formData: FormData): Promise<ContactState> {
  // Honeypot: real users never see or fill this field, bots often do.
  // Pretend it worked so the bot doesn't retry.
  if (formData.get("website")) {
    return { success: true, message: "Message sent!" }
  }

  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  })

  if (!parsed.success) {
    const errors: Partial<Record<Field, string>> = {}
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as Field
      if (!errors[field]) errors[field] = issue.message
    }
    return {
      success: false,
      message: "Please fix the highlighted fields.",
      errors,
    }
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL

  if (!apiKey || !to) {
    console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL")
    return {
      success: false,
      message: "The contact form isn't configured yet. Please email me directly.",
    }
  }

  const { name, email, message } = parsed.data
  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `New portfolio message from ${name.replace(/[\r\n]+/g, " ")}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })

    if (error) {
      console.error("Resend error:", error)
      return {
        success: false,
        message: "Something went wrong while sending. Please try again.",
      }
    }

    return { success: true, message: "Message sent! I'll get back to you soon." }
  } catch (err) {
    console.error("Contact form error:", err)
    return {
      success: false,
      message: "Something went wrong while sending. Please try again.",
    }
  }
}