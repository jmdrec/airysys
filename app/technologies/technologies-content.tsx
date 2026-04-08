"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Globe,
  Smartphone,
  Brain,
  Cloud,
  Database,
  Shield,
  Code2,
  Palette,
  Cpu,
  Link as LinkIcon,
  Wifi,
  TestTubeDiagonal,
} from "lucide-react";

const categories = [
  {
    title: "Web Technologies",
    icon: Globe,
    color: "text-blue-600 bg-blue-100",
    techs: [
      "Next.js",
      "React",
      "Angular",
      "Vue.js",
      "Node.js",
      "Express.js",
      "TypeScript",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "GraphQL",
      "REST APIs",
      "WebSocket",
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "text-purple-600 bg-purple-100",
    techs: [
      "React Native",
      "Flutter",
      "Swift (iOS)",
      "Kotlin (Android)",
      "Expo",
      "Ionic",
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "text-amber-600 bg-amber-100",
    techs: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Hugging Face",
      "LangChain",
      "OpenAI GPT",
      "Anthropic Claude",
      "CrewAI",
      "MLflow",
      "CUDA",
      "Pandas / NumPy",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "text-rose-600 bg-rose-100",
    techs: [
      "AWS",
      "Google Cloud",
      "Microsoft Azure",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Jenkins",
      "Grafana",
      "Datadog",
      "Nginx",
      "Vercel",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "text-green-600 bg-green-100",
    techs: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "Pinecone",
      "ChromaDB",
      "InfluxDB",
      "Supabase",
      "Firebase",
    ],
  },
  {
    title: "Backend & Frameworks",
    icon: Code2,
    color: "text-primary bg-primary/10",
    techs: [
      "FastAPI",
      "Django",
      "Flask",
      "Spring Boot",
      "Java",
      ".NET Core",
      "PHP / Laravel",
      "Ruby on Rails",
      "Microservices",
      "Serverless",
    ],
  },
  {
    title: "Blockchain",
    icon: LinkIcon,
    color: "text-indigo-600 bg-indigo-100",
    techs: [
      "Solidity",
      "Ethereum",
      "Polygon",
      "Hyperledger",
      "Web3.js",
      "Hardhat",
      "IPFS",
      "Rust (Solana)",
    ],
  },
  {
    title: "IoT Platforms",
    icon: Wifi,
    color: "text-teal-600 bg-teal-100",
    techs: [
      "AWS IoT",
      "Azure IoT Hub",
      "MQTT",
      "Node-RED",
      "Raspberry Pi",
      "Arduino",
      "LoRaWAN",
      "Zigbee",
    ],
  },
  {
    title: "Design & UI/UX",
    icon: Palette,
    color: "text-pink-600 bg-pink-100",
    techs: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Framer",
      "Storybook",
      "Tailwind CSS",
      "Shadcn UI",
      "Material UI",
    ],
  },
  {
    title: "Data & Analytics",
    icon: Cpu,
    color: "text-orange-600 bg-orange-100",
    techs: [
      "Power BI",
      "Tableau",
      "Apache Spark",
      "Snowflake",
      "Airflow",
      "dbt",
      "Metabase",
      "Jupyter",
    ],
  },
  {
    title: "Testing & QA",
    icon: TestTubeDiagonal,
    color: "text-cyan-600 bg-cyan-100",
    techs: [
      "Jest",
      "Cypress",
      "Playwright",
      "Selenium",
      "JMeter",
      "Postman",
      "SonarQube",
      "k6",
    ],
  },
  {
    title: "Security & Compliance",
    icon: Shield,
    color: "text-red-600 bg-red-100",
    techs: [
      "OWASP",
      "OAuth 2.0 / JWT",
      "SSL / TLS",
      "Vault",
      "Cloudflare",
      "SOC2",
      "HIPAA",
      "GDPR",
    ],
  },
];

export function TechnologiesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-dark-bg overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-ai-expertise.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-dark-bg/80" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-6">
              <Cpu className="h-4 w-4" />
              Our Tech Stack
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight">
              Technologies We{" "}
              <span className="gradient-text">Master</span>
            </h1>
            <p className="mt-5 text-lg text-white/60 leading-relaxed">
              We leverage the latest and most innovative technologies to deliver
              exceptional results that drive businesses forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Grid */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl ${cat.color}`}>
                    <cat.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm rounded-lg bg-background-alt text-foreground-muted border border-border hover:border-primary/30 hover:text-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background-alt">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-foreground">
              Need a Specific Technology?
            </h2>
            <p className="mt-4 text-lg text-foreground-muted max-w-xl mx-auto">
              Our team adapts to your technology requirements. Let&apos;s
              discuss the best stack for your project.
            </p>
            <div className="mt-8">
              <a href="/contact">
                <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                  Discuss Your Tech Needs
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
