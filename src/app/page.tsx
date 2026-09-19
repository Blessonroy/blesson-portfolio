import { ContactForm } from "@/components/contact-form"
import { JsonLd } from "@/components/json-ld"
import { About } from "@/components/sections/about"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"

export default function Page() {
  return (
    <>
    <JsonLd />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ContactForm />
    </>
  )
}