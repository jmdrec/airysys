"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Arjun Reddy",
    role: "Founder & CEO",
    bio: "Visionary leader with 12+ years in enterprise software and AI product strategy.",
    image: "/images/team-ceo.png",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    bio: "Full-stack architect and AI engineer driving technical innovation across all projects.",
    image: "/images/team-cto.png",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Vikram Patel",
    role: "Lead Developer",
    bio: "MERN/Next.js specialist leading frontend and backend engineering for client projects.",
    image: "/images/team-lead-dev.png",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "Ananya Iyer",
    role: "AI/ML Lead",
    bio: "Machine learning engineer specializing in NLP, computer vision, and agentic AI systems.",
    image: "/images/team-ai-lead.png",
    socials: { linkedin: "#", github: "#" },
  },
];

export function Team() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-foreground">
            Meet the People Behind AIRYSys
          </h2>
          <p className="mt-4 text-lg text-foreground-muted max-w-2xl mx-auto">
            A passionate team of engineers, architects, and innovators building
            the future of technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-5">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Social links overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm text-white text-xs font-bold hover:bg-primary transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      in
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm text-white text-xs font-bold hover:bg-primary transition-colors"
                      aria-label={`${member.name} Twitter`}
                    >
                      X
                    </a>
                  )}
                  {"github" in member.socials && member.socials.github && (
                    <a
                      href={member.socials.github}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm text-white text-xs font-bold hover:bg-primary transition-colors"
                      aria-label={`${member.name} GitHub`}
                    >
                      GH
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="text-sm text-primary font-medium">{member.role}</p>
              <p className="mt-2 text-sm text-foreground-muted leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
