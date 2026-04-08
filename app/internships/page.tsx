import type { Metadata } from "next";
import { InternshipHero } from "./sections/internship-hero";
import { WhyChooseUs } from "./sections/why-choose-us";
import { Programs } from "./sections/programs";
import { CareerPath } from "./sections/career-path";
import { InternshipCTA } from "./sections/internship-cta";

export const metadata: Metadata = {
  title: "Internship Program | AIRYSys Academy",
  description:
    "Break the 'No Experience – No Job' cycle. Join AIRYSys Academy for real-world projects, mentorship, and a career path in tech.",
};

export default function InternshipsPage() {
  return (
    <>
      <InternshipHero />
      <WhyChooseUs />
      <Programs />
      <CareerPath />
      <InternshipCTA />
    </>
  );
}
