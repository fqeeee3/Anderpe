import { Code2, Megaphone, Mail, LineChart } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom e-commerce platforms built with modern technologies. Scalable, fast, and optimized for conversion.",
  },
  {
    icon: Megaphone,
    title: "Ads Management",
    description:
      "Data-driven advertising across all major platforms. Maximize ROI with strategic campaign management.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Automated email flows and campaigns that nurture leads and drive repeat purchases.",
  },
  {
    icon: LineChart,
    title: "E-Commerce Consulting",
    description:
      "Strategic guidance to optimize your operations, increase margins, and scale sustainably.",
  },
]

export function Services() {
  return (
    <section id="services" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">What We Do</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Full-Service E-Commerce Solutions
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Everything you need to launch, grow, and scale your online business.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
