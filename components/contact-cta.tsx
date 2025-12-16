import { MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "./scroll-animation"

export default function ContactCTA() {
  return (
    <ScrollAnimation className="mt-16 text-center">
      <Link
        href="#contact"
        className="group inline-flex items-center gap-4 px-8 py-4 bg-card/50 backdrop-blur-sm border border-border rounded-full hover:border-primary/40 hover:bg-card/80 transition-all duration-300"
      >
        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <MessageCircle className="w-5 h-5 text-primary" />
        </div>
        <span className="font-[var(--font-sans)] text-muted-foreground group-hover:text-foreground transition-colors">
          Have questions?
        </span>
        <span className="font-[var(--font-rajdhani)] font-bold text-primary">Contact Us</span>
        <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
      </Link>
    </ScrollAnimation>
  )
}
