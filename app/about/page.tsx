import type { Metadata } from "next";
import { AboutHero } from "./sections/about-hero";
import { Mission } from "./sections/mission";
import { GlobalPresence } from "./sections/global-presence";
import { Values } from "./sections/values";
import { Team } from "./sections/team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AIRYSys — a next-generation IT company building intelligent solutions for global businesses across India, USA, and UK.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      <Team />
      <Values />
      <GlobalPresence />
    </>
  );
}
