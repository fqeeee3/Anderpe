const brands = [
  { name: "Skull Peace", src: "/skull-peace.png", h: "h-12" },
  { name: "Diamond", src: "/logo-diamond.png", h: "h-12" },
  { name: "Living Word", src: "/living-word.png", h: "h-7" },
  { name: "1199", src: "/1199.png", h: "h-12" },
  { name: "Stray Pledge", src: "/stray-pledge.png", h: "h-7" },
  { name: "Faith Made", src: "/faith-made.png", h: "h-7" },
  { name: "Velara", src: "/velara.png", h: "h-8" },
  { name: "Natcore", src: "/natcore.png", h: "h-8" },
  { name: "Le D'Affaires", src: "/le-daffaires.png", h: "h-7" },
  { name: "Ruel", src: "/ruel.png", h: "h-12" },
  { name: "Teddy Blocks", src: "/teddy-blocks.png", h: "h-10" },
  { name: "Curvani", src: "/curvani.png", h: "h-7" },
  { name: "Lirae", src: "/lirae.png", h: "h-8" },
  { name: "SW", src: "/sw.png", h: "h-12" },
  { name: "Simply Revival", src: "/simply-revival.png", h: "h-7" },
]

export function Brands() {
  const row = [...brands, ...brands]
  return (
    <section className="border-y border-border/60 py-10">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-16">
          {[...row, ...row].map((b, i) => (
            <img
              key={i}
              src={b.src}
              alt={b.name}
              className={`${b.h} w-auto opacity-60 brightness-0 invert transition-opacity hover:opacity-100`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
