import type { Metadata } from "next";
import { AboutHero } from "./sections/about-hero";
import { Mission } from "./sections/mission";
import { GlobalPresence } from "./sections/global-presence";
import { Values } from "./sections/values";
import { Team } from "./sections/team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AIRYSys — offices in Nandyal & Hyderabad, building intelligent solutions for clients in India, USA, UK, Middle East, Africa, and worldwide.",
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
