import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { AiApproach } from "@/components/ai-approach"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"

const footerLinks = [
  { label: "Services", href: "/#services" },
  { label: "AI Solutions", href: "/#ai" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Services />
      <AiApproach />
      <About />
      <Contact />
      <footer className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <span className="text-lg font-bold italic">Anderpe</span>
            <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              {footerLinks.map((l) => (
                <a key={l.label} href={l.href} className="transition-colors hover:text-foreground">{l.label}</a>
              ))}
            </nav>
          </div>
          <div className="mt-10 border-t border-border/60 pt-8 text-center text-sm text-muted-foreground">
            <p>This website is operated by Anderpe LLC</p>
            <p className="mt-2">30 N. Gould St. Ste N, Sheridan, WY 82801</p>
            <p className="mt-2">
              {"\u00A9"} {new Date().getFullYear()} Anderpe LLC. All rights
              reserved
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
