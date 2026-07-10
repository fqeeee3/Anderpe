import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { AiApproach } from "@/components/ai-approach"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"

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
        <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-muted-foreground sm:px-6">
          <p>This website is operated by Anderpe LLC</p>
          <p>30 N. Gould St. Ste N, Sheridan, WY 82801</p>
          <p>
            {"\u00A9"} {new Date().getFullYear()} Anderpe LLC. All rights
            reserved
          </p>
        </div>
      </footer>
    </main>
  )
}
