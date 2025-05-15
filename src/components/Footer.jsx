// src/components/Footer.tsx

import { ArrowUp } from "lucide-react"

export const Footer = () => {
  return (
    <footer
      className="
        py-8 px-4 
        bg-card border-t border-border 
        flex flex-col md:flex-row items-center 
        justify-between gap-4
      "
    >
      {/* 1. Személyes azonosító */}
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Spitz Márk. Minden jog fenntartva.
      </p>

      {/* 2. Kapcsolati linkek – cseréld ki a megfelelő URL-ekre */}
      <div className="flex space-x-4">
        <a
          href="mailto:spitz.mark@example.com"
          className="text-sm hover:underline"
        >
          spitz.marko@gmail.com
        </a>
      </div>

      {/* 3. Vissza a tetejére gomb */}
      <a
        href="#hero"
        className="
          p-2 rounded-full 
          bg-primary/10 hover:bg-primary/20 
          text-primary transition-colors
        "
        aria-label="Vissza a tetejére"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  )
}
