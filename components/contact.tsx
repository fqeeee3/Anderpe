import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

function Field({
  id,
  label,
  type = "text",
  textarea = false,
}: {
  id: string
  label: string
  type?: string
  textarea?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={4}
          className="rounded-lg border border-input bg-background/60 px-3 py-2 text-sm outline-none ring-ring/50 transition-shadow placeholder:text-muted-foreground focus-visible:ring-2"
        />
      ) : (
        <input
          id={id}
          type={type}
          className="rounded-lg border border-input bg-background/60 px-3 py-2 text-sm outline-none ring-ring/50 transition-shadow placeholder:text-muted-foreground focus-visible:ring-2"
        />
      )}
    </div>
  )
}

export function Contact() {
  return (
    <section id="contact" className="border-t border-border/60">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-primary">Get in Touch</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Let&apos;s discuss how we can help you build, grow, and scale your
            e-commerce business with our comprehensive solutions.
          </p>

          <a
            href="mailto:support@anderpe.com"
            className="mt-8 inline-flex items-center gap-3 rounded-xl border border-border bg-card/50 p-4 transition-colors hover:border-primary/40"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Mail className="h-5 w-5" />
            </span>
            <span className="text-left">
              <span className="block text-sm text-muted-foreground">
                Email us at
              </span>
              <span className="block font-medium">support@anderpe.com</span>
            </span>
          </a>
        </div>

        <div className="rounded-2xl border border-border bg-card/50 p-6 sm:p-8">
          <h3 className="text-lg font-semibold">Send us a message</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Fill out the form below and we&apos;ll get back to you within 24
            hours.
          </p>

          <form className="mt-6 flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field id="firstName" label="First name" />
              <Field id="lastName" label="Last name" />
            </div>
            <Field id="email" label="Email" type="email" />
            <Field id="company" label="Company" />
            <Field id="message" label="Message" textarea />
            <Button type="submit" size="lg" className="mt-2 w-full rounded-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
