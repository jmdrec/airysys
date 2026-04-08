import type { Metadata } from "next";
import { ContactHero } from "./sections/contact-hero";
import { ContactForm } from "./sections/contact-form";
import { ContactInfo } from "./sections/contact-info";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with AIRYSys. Let's discuss your project, partnership, or internship opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
