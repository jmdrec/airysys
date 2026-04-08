import type { Metadata } from "next";
import { PortfolioHero } from "./sections/portfolio-hero";
import { PortfolioGrid } from "./sections/portfolio-grid";
import { PortfolioCTA } from "./sections/portfolio-cta";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our portfolio of AI-powered platforms, web applications, and mobile solutions built for global clients.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioCTA />
    </>
  );
}
