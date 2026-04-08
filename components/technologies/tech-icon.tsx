import { SiCss, SiHtml5 } from "react-icons/si";
import {
  Code2,
  Database,
  Globe,
  Layers,
  Lock,
  Server,
  Shield,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { TECH_COLORS, TECH_SLUGS } from "@/lib/tech-slugs";
import { cn } from "@/lib/utils";

const LUCIDE_FALLBACK: Record<string, LucideIcon> = {
  Microservices: Layers,
  Serverless: Server,
  LoRaWAN: Zap,
  Zigbee: Zap,
  OWASP: Shield,
  "OAuth 2.0 / JWT": Lock,
  "SSL / TLS": Lock,
  SOC2: Shield,
  HIPAA: Shield,
  GDPR: Shield,
};

function GenericTechIcon({ className }: { className?: string }) {
  return <Code2 className={className} />;
}

export function TechIcon({
  name,
  className = "h-4 w-4 shrink-0",
}: {
  name: string;
  className?: string;
}) {
  const slug = TECH_SLUGS[name];
  if (slug) {
    const color = TECH_COLORS[name];
    const src = color
      ? `https://cdn.simpleicons.org/${slug}/${color}`
      : `https://cdn.simpleicons.org/${slug}`;
    return (
      <img
        src={src}
        alt=""
        width={16}
        height={16}
        className={cn("shrink-0 object-contain", className)}
        loading="lazy"
        decoding="async"
      />
    );
  }

  const Lucide = LUCIDE_FALLBACK[name];
  if (Lucide) {
    return <Lucide className={className} aria-hidden />;
  }
  if (name.includes("API") || name.includes("REST")) {
    return <Globe className={className} aria-hidden />;
  }
  if (name.toLowerCase().includes("database")) {
    return <Database className={className} aria-hidden />;
  }
  return <GenericTechIcon className={className} />;
}

/** HTML + CSS brand marks for the combined row */
export function HtmlCssIcons({ className = "h-4 w-4 shrink-0" }: { className?: string }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden>
      <SiHtml5 className={className} style={{ color: "#E34F26" }} />
      <SiCss className={className} style={{ color: "#1572B6" }} />
    </span>
  );
}
