"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ProjectCard } from "@/components/project-card";
import { projectCategories, projects } from "@/content/projects";
import { cn } from "@/lib/utils";

export function ProjectGallery({
  showAll = true,
  limit,
}: {
  showAll?: boolean;
  limit?: number;
}) {
  const [active, setActive] = useState<(typeof projectCategories)[number]["value"]>("all");

  const filtered = projects.filter(
    (p) => active === "all" || p.category === active,
  );
  const visible = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {projectCategories.map((category) => {
          const selected = active === category.value;
          return (
            <button
              key={category.value}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(category.value)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                selected
                  ? "border-transparent bg-brand-gradient text-white shadow-glow"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-brand-400/40 hover:text-white",
              )}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div
        id="projects-grid"
        className={cn(
          "grid gap-6 sm:grid-cols-2",
          showAll ? "lg:grid-cols-3" : "lg:grid-cols-2",
        )}
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}