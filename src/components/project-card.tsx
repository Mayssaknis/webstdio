import Image from "next/image";
import { ArrowUpRight, FlaskConical } from "lucide-react";
import type { Project } from "@/content/projects";
import { projectCategoryLabel } from "@/content/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-glow",
        className,
      )}
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} — illustration`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute right-3 top-3 flex flex-col items-end gap-2">
          <span className="rounded-full border border-white/20 bg-ink-950/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            {projectCategoryLabel(project)}
          </span>
          {project.fictional && (
            <span className="inline-flex items-center gap-1 rounded-full border border-amber-300/40 bg-amber-400/15 px-3 py-1 text-xs font-medium text-amber-300 backdrop-blur">
              <FlaskConical className="h-3 w-3" aria-hidden="true" />
              Projet fictif
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-white">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
          {project.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-300 transition-colors hover:text-white"
          >
            Voir la démo
            <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : null}
      </div>
    </article>
  );
}