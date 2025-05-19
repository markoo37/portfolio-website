import React, { useRef, useEffect } from "react"

const images = [                             // 1. Itt add meg a saját sportképeid elérési útját
  "/projects/IMG_1282.jpeg",
  "/projects/IMG_6654.jpeg",
  "/projects/IMG_7188.jpg",
]

export function SportsGallerySection() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    let index = 0
    const interval = setInterval(() => {
      if (!container) return
      // 2. Minden 3 másodpercben görgessünk a következő képhez
      index = (index + 1) % images.length
      container.scrollTo({
        left: container.clientWidth * index,
        behavior: "smooth",
      })
    }, 3000)

    return () => clearInterval(interval)   // 3. Komponens eltávolításakor töröljük az intervallumot
  }, [])

  return (
    <section id="sports-gallery" className="py-24 px-4 bg-secondary/10">
      <div className="container mx-auto max-w-5xl">
        {/* Szekció címe és leírása */}
        <h2 className="text-3xl font-bold mb-4 text-center">
          Sport és Én<span className="text-primary">.</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Gyerekkorom óta élsportoló vagyok, jelenleg a Szegedi VE első osztályú vízilabdacsapatában játszom. A sport megtanított a fegyelemre, kitartásra és a csapatmunka fontosságára – ezek az értékek pedig a programozásban is elengedhetetlenek. Fejlesztőként ugyanazzal az elhivatottsággal és csapatszellemben dolgozom, mint a medencében.
        </p>

        {/* Automatikusan görgetődő galéria */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory space-x-4 scrollbar-hide"
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="snap-center flex-shrink-0 w-full md:w-1/3"
            >
              <img
                src={src}
                alt={`Sport ${idx + 1}`}
                className="w-full h-60 object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
