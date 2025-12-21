import ScrollAnimation from "./scroll-animation"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  highlight?: string
}

export default function SectionHeader({ title, subtitle, highlight }: SectionHeaderProps) {
  return (
    <ScrollAnimation className="text-center mb-16 md:mb-20">
      <div className="inline-flex items-center gap-4 mb-6">
        <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent via-primary/50 to-primary" />
        <span className="font-[var(--font-jetbrains)] text-primary text-xs md:text-sm tracking-[0.2em] uppercase">
          {highlight || "// SECTION"}
        </span>
        <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent via-primary/50 to-primary" />
      </div>
      <h2 className="font-[var(--font-orbitron)] text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-[var(--font-sans)] text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </ScrollAnimation>
  )
}
