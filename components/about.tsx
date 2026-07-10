import { ShieldCheck, Award, Handshake, Lock } from "lucide-react"

const values = [
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    description:
      "We operate with complete transparency, ensuring our clients always know exactly where their investment goes.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards, delivering work that exceeds expectations every time.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We see ourselves as an extension of your team, invested in your long-term success.",
  },
  {
    icon: Lock,
    title: "Compliance & Security",
    description:
      "We maintain the highest standards of data security and regulatory compliance, designed to meet the requirements of financial institutions and payment processors.",
  },
]

const badges = [
  { name: "PCI DSS", status: "Compliant" },
  { name: "GDPR", status: "Compliant" },
  { name: "SOC 2", status: "Type II" },
  { name: "SSL/TLS", status: "Secured" },
]

export function About() {
  return (
    <section id="about" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Your Trusted E-Commerce Partner
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Anderpe is a full-service digital commerce agency dedicated to
            helping businesses thrive in the online marketplace. We combine
            technical expertise, creative strategy, and AI innovation to deliver
            measurable results.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex gap-4 rounded-xl border border-border bg-card/50 p-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {badges.map((b) => (
            <div
              key={b.name}
              className="rounded-xl border border-border bg-card/50 p-6 text-center"
            >
              <div className="text-lg font-semibold">{b.name}</div>
              <div className="mt-1 text-sm text-muted-foreground">
                {b.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
