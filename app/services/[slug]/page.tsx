import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug, getAllServiceSlugs } from "@/lib/services-data";
import { ServiceDetailContent } from "./service-detail-content";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return <ServiceDetailContent service={service} otherServices={otherServices} />;
}
