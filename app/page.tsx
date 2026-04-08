import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { Capabilities } from "@/components/sections/capabilities";
import { AgenticAI } from "@/components/sections/agentic-ai";
import { Testimonials } from "@/components/sections/testimonials";
import { Gallery } from "@/components/sections/gallery";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Capabilities />
      <AgenticAI />
      <Testimonials />
      <Gallery />
    </>
  );
}
