import { Check, Bot, BrainCircuit, Workflow, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const capabilities = [
  "AI-powered product recommendations",
  "Automated customer service chatbots",
  "Predictive inventory management",
  "Dynamic pricing optimization",
  "Personalized marketing automation",
  "AI-driven analytics and insights",
]

const cards = [
  { icon: Bot, title: "AI Chatbots", description: "24/7 intelligent customer support" },
  { icon: BrainCircuit, title: "Machine Learning", description: "Predictive analytics at scale" },
  { icon: Workflow, title: "Automation", description: "Streamlined operations" },
  { icon: Zap, title: "Real-Time", description: "Instant decision making" },
]

export function AiApproach() {
  return (
    <section id="ai" className="border-t border-border/60">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-medium text-primary">AI-First Approach</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Building the Future of E-Commerce with AI
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            We don&apos;t just use AI—we build AI-first brands. Our team
            specializes in implementing artificial intelligence solutions that
            transform how e-commerce businesses operate, engage customers, and
            drive growth.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <Button
            render={<a href="#contact" />}
            size="lg"
            className="mt-8 rounded-full"
          >
            Explore AI Solutions
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {cards.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card/50 p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
