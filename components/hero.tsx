const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention" },
  { value: "24/7", label: "Support Available" },
]

export function Hero() {
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
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-20">
        {/* Headline */}
        <h1 className="rise rise-1 mt-8 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-7xl">
          <span className="bg-gradient-to-r from-muted-foreground to-foreground bg-clip-text text-transparent">
            Your D2C <span className="whitespace-nowrap">E-Commerce</span>{" "}
            Solution
          </span>
        </h1>
        {/* Subtitle */}
        <p className="rise rise-2 mt-5 max-w-2xl pb-[100px] text-pretty text-base text-muted-foreground sm:text-lg">
          We build, scale, and transform e-commerce businesses with cutting-edge
          technology and AI-driven strategies. From development to marketing,
          we&apos;re your full-service digital commerce partner.
        </p>
        {/* Stats */}
        <div className="mt-5 grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((s, idx) => (
            <div
              key={s.label}
              className={`rise rounded-xl border border-border bg-card/50 p-6 backdrop-blur ${idx === 0 ? "-mt-[10px]" : ""}`}
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
      </div>
    </section>
  )
}

<h1 className="rise rise-1 ...existing classes">
  Your D2C <span className="whitespace-nowrap">E-Commerce</span> Solution
</h1>
<p className="rise rise-2 ...existing classes">
  We build, scale, and transform...
</p>
<div className="rise rise-3 ...existing classes">
  {/* buttons */}
</div>
