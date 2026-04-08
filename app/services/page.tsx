import type { Metadata } from "next";
import { ServicesHero } from "./sections/services-hero";
import { ServicesList } from "./sections/services-list";
import { SDLCTimeline } from "./sections/sdlc-timeline";
import { ServicesCTA } from "./sections/services-cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end technology services — Web Development, Mobile Apps, Machine Learning, Agentic AI, and Cloud Deployment.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <SDLCTimeline />
      <ServicesCTA />
    </>
  );
}
