import type { Metadata } from "next";
import { TechnologiesContent } from "./technologies-content";

export const metadata: Metadata = {
  title: "Technologies",
  description:
    "Explore the cutting-edge technologies AIRYSys uses — from web & mobile frameworks to AI/ML, cloud, blockchain, and IoT platforms.",
};

export default function TechnologiesPage() {
  return <TechnologiesContent />;
}
