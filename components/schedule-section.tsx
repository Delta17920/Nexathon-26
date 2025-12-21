"use client"

import { Calendar, Clock, MapPin, Coffee, Code, Presentation, Award } from "lucide-react"
import SectionHeader from "./section-header"
import ScrollAnimation from "./scroll-animation"
import ContactCTA from "./contact-cta"
import TiltCard from "./tilt-card"

const scheduleData = [
  {
    day: "Day 1 - March 15",
    events: [
      { time: "08:00 AM", title: "Registration & Check-in", icon: Calendar, description: "Get your badges and swag" },
      { time: "10:00 AM", title: "Opening Ceremony", icon: Presentation, description: "Keynote & rules announcement" },
      { time: "11:00 AM", title: "Hacking Begins!", icon: Code, description: "Start building your projects" },
      { time: "01:00 PM", title: "Lunch Break", icon: Coffee, description: "Networking lunch" },
      { time: "04:00 PM", title: "Workshop 1: AI/ML", icon: Presentation, description: "Hands-on AI workshop" },
      { time: "08:00 PM", title: "Dinner", icon: Coffee, description: "Evening refreshments" },
    ],
  },
  {
    day: "Day 2 - March 16",
    events: [
      { time: "08:00 AM", title: "Breakfast", icon: Coffee, description: "Fuel up for the day" },
      { time: "10:00 AM", title: "Workshop 2: Web3", icon: Presentation, description: "Blockchain fundamentals" },
      { time: "01:00 PM", title: "Lunch & Mentoring", icon: Coffee, description: "Meet the mentors" },
      { time: "06:00 PM", title: "Progress Check", icon: Code, description: "Mid-hackathon updates" },
      { time: "08:00 PM", title: "Dinner & Fun", icon: Coffee, description: "Games and networking" },
      { time: "11:00 PM", title: "Midnight Snacks", icon: Coffee, description: "Late night coding fuel" },
    ],
  },
  {
    day: "Day 3 - March 17",
    events: [
      { time: "08:00 AM", title: "Final Sprint", icon: Code, description: "Last push for completion" },
      { time: "11:00 AM", title: "Submissions Close", icon: Calendar, description: "Submit your projects" },
      { time: "12:00 PM", title: "Lunch", icon: Coffee, description: "Relax before presentations" },
      { time: "02:00 PM", title: "Project Demos", icon: Presentation, description: "Show what you built" },
      { time: "05:00 PM", title: "Judging", icon: Award, description: "Evaluation by experts" },
      { time: "07:00 PM", title: "Closing Ceremony", icon: Award, description: "Winners announcement" },
    ],
  },
]

const venueInfo = {
  name: "Tech Innovation Center",
  address: "123 Technology Park, Silicon Valley",
  city: "Bangalore, Karnataka 560001",
  date: "March 15-17, 2025",
  time: "8:00 AM onwards",
}

export default function ScheduleSection() {
  return (
    <section id="schedule" className="relative py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Event Schedule"
          subtitle="36 hours of non-stop innovation, learning, and creation"
          highlight="// SCHEDULE"
        />

        <ScrollAnimation className="mb-12">
          <TiltCard tiltAmount={6}>
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 max-w-3xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 holographic opacity-50" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="space-y-4">
                  <h3 className="font-[var(--font-orbitron)] text-2xl font-bold text-foreground">{venueInfo.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-muted-foreground group">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="font-[var(--font-sans)] text-sm">
                        {venueInfo.address}, {venueInfo.city}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground group">
                      <Calendar className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="font-[var(--font-sans)] text-sm">{venueInfo.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground group">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="font-[var(--font-sans)] text-sm">{venueInfo.time}</span>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center pulse-glow">
                    <MapPin className="w-12 h-12 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-3 gap-6 perspective-2000">
          {scheduleData.map((day, dayIndex) => (
            <ScrollAnimation key={day.day} delay={100 * (dayIndex + 1)}>
              <TiltCard tiltAmount={8} className="h-full">
                <div className="h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-500">
                  <div className="bg-primary/10 border-b border-border px-6 py-4">
                    <h3 className="font-[var(--font-orbitron)] text-lg font-bold text-primary neon-flicker">
                      {day.day}
                    </h3>
                  </div>
                  <div className="p-4 space-y-3">
                    {day.events.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className="group flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300"
                        style={{ animationDelay: `${eventIndex * 0.1}s` }}
                      >
                        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <event.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-[var(--font-jetbrains)] text-xs text-primary mb-1">{event.time}</div>
                          <div className="font-[var(--font-rajdhani)] font-semibold text-foreground text-sm">
                            {event.title}
                          </div>
                          <div className="font-[var(--font-sans)] text-xs text-muted-foreground">
                            {event.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </ScrollAnimation>
          ))}
        </div>

        <ContactCTA />
      </div>
    </section>
  )
}
