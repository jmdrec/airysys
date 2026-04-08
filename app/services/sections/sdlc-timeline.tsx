"use client";

import { motion } from "framer-motion";
import {
  Search,
  Palette,
  Code2,
  Brain,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "Deep dive into your business goals, user needs, and technical requirements.",
    color: "bg-blue-500",
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "UX/UI design with wireframes, prototypes, and a user-centered design system.",
    color: "bg-purple-500",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Agile sprints with clean architecture, code reviews, and continuous integration.",
    color: "bg-primary",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "Embed ML models, AI agents, and intelligent automation into your platform.",
    color: "bg-amber-500",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description:
      "Cloud deployment with monitoring, scaling, and ongoing optimization support.",
    color: "bg-rose-500",
  },
];

export function SDLCTimeline() {
  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-white">
            How We Build
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
            A proven SDLC framework enhanced with AI at every stage.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Connector Line */}
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-white/10" />

          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center"
              >
                {/* Node */}
                <div className="relative z-10 mx-auto mb-6">
                  <div
                    className={`inline-flex p-4 rounded-2xl ${step.color} text-white shadow-lg`}
                  >
                    <step.icon className="h-6 w-6" />
                  </div>
                </div>

                {/* Step number */}
                <div className="text-xs font-medium text-white/30 mb-2">
                  STEP {i + 1}
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div
                  className={`flex-shrink-0 p-3 rounded-xl ${step.color} text-white`}
                >
                  <step.icon className="h-5 w-5" />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-white/10 mt-2" />
                )}
              </div>
              <div className="pb-8">
                <div className="text-xs font-medium text-white/30 mb-1">
                  STEP {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-white/50 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
