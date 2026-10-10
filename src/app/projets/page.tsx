import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ProjectGallery } from "@/components/project-gallery";
import { CtaSection } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Découvrez les réalisations de WebStudio : sites vitrines, e-commerce, sites d'entreprises et applications web. Projets de démonstration présentés à titre d'exemple.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nos projets"
        title={
          <>
            Nos réalisations,{" "}
            <span className="text-gradient">source d&apos;inspiration</span>
          </>
        }
        description="Filtrez par catégorie et parcourez un aperçu de notre savoir-faire. Les projets présentés sont des démonstrations fictives destinées à illustrer nos réalisations types."
      />

      <section className="bg-ink-950 pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjectGallery />
        </div>
      </section>

      <CtaSection />
    </>
  );
}