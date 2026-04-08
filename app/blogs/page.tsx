import type { Metadata } from "next";
import { BlogsHero } from "./sections/blogs-hero";
import { BlogsList } from "./sections/blogs-list";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on AI, machine learning, web development, and technology trends from the AIRYSys engineering team.",
};

export default function BlogsPage() {
  return (
    <>
      <BlogsHero />
      <BlogsList />
    </>
  );
}
