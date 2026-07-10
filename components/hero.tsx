const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention" },
  { value: "24/7", label: "Support Available" },
]

const brands = [
  { name: "Skull Peace", src: "/skull-peace.png", h: "h-12", ar: "381/378" },
  { name: "Rue de Sèvres", src: "/RUES.png", h: "h-8", ar: "756/240" },
  { name: "Diamond", src: "/logo-diamond.png", h: "h-12", ar: "597/659" },
  { name: "Living Word", src: "/living-word.png", h: "h-7", ar: "976/208" },
  { name: "1199", src: "/1199.png", h: "h-12", ar: "800/638" },
  { name: "Stray Pledge", src: "/stray-pledge.png", h: "h-7", ar: "127/27" },
  { name: "Archive Threads", src: "/archive-threads.png", h: "h-7", ar: "721/118" },
  { name: "Faith Made", src: "/faith-made.png", h: "h-7", ar: "500/86" },
  { name: "Velara", src: "/velara.png", h: "h-8", ar: "242/80" },
  { name: "Natcore", src: "/natcore.png", h: "h-8", ar: "584/143" },
  { name: "Le D'Affaires", src: "/le-daffaires.png", h: "h-7", ar: "1200/158" },
  { name: "Ruel", src: "/ruel.png", h: "h-12", ar: "219/172" },
  { name: "gLOSS", src: "/gloss.png", h: "h-7", ar: "1135/250" },
  { name: "Teddy Blocks", src: "/teddy-blocks.png", h: "h-10", ar: "500/219" },
  { name: "Curvani", src: "/curvani.png", h: "h-7", ar: "900/169" },
  { name: "Lirae", src: "/lirae.png", h: "h-8", ar: "299/94" },
  { name: "SW", src: "/sw.png", h: "h-12", ar: "632/480" },
  { name: "Simply Revival", src: "/simply-revival.png", h: "h-7", ar: "400/70" },
]

export function Hero() {
  const row = [...brands, ...brands]
  return (
    <section className="relative overflow-hidden">
      {/* Background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.6]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklch, var(--border) 100%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--border) 100%, transparent) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
        }}
      />
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
      />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 pt-10 text-center sm:px-6 sm:pt-12">
        {/* Headline */}
        <h1 className="rise rise-1 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-7xl">
          <span className="bg-gradient-to-r from-muted-foreground to-foreground bg-clip-text text-transparent">
            Your D2C <span className="whitespace-nowrap">E-Commerce</span>{" "}
            Solution
          </span>
        </h1>
        {/* Subtitle */}
        <p className="rise rise-2 mt-5 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
          We build, scale, and transform e-commerce businesses with cutting-edge
          technology and AI-driven strategies. From development to marketing,
          we&apos;re your full-service digital commerce partner.
        </p>

        {/* Stats */}
        <div className="mt-10 grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((s, idx) => (
            <div
              key={s.label}
              className="rise rounded-xl border border-border bg-card/50 p-6 backdrop-blur"
              style={{ animationDelay: `${0.35 + idx * 0.12}s` }}
            >
              <div className="text-3xl font-semibold text-foreground">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Brand marquee */}
        <div
          className="rise relative mt-10 w-screen max-w-none overflow-hidden border-y border-white/15 py-8"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
          <div className="flex w-max animate-marquee items-center gap-16">
            {[...row, ...row].map((b, i) => (
              <div
                key={i}
                role="img"
                aria-label={b.name}
                className={`${b.h} shrink-0 opacity-60 brightness-0 invert transition-opacity hover:opacity-100`}
                style={{
                  aspectRatio: b.ar,
                  backgroundImage: `url(${b.src})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
