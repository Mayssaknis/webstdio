import { ArrowRight } from "lucide-react";
import { ProjectGallery } from "@/components/project-gallery";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function ProjectsPreview() {
  return (
    <section className="bg-ink-900 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Nos réalisations"
            title="Des projets qui font la différence"
            description="Un aperçu de ce que nous savons créer. Les projets présentés sont des démonstrations fictives illustrant notre savoir-faire."
          />
          <Button href="/projets" variant="secondary" className="shrink-0">
            Tous les projets
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>

        <div className="mt-14">
          <ProjectGallery limit={3} />
        </div>
      </div>
    </section>
  );
}