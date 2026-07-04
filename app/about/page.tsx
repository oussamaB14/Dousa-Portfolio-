"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Briefcase,
  Award,
  Target,
  Lightbulb,
  ChevronRight,
} from "lucide-react";
import { aboutContent, experienceTimeline } from "@/lib/data";
import SectionHeading from "@/components/section-heading";

export default function AboutPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="My Story" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[var(--text-heading)]">
              {aboutContent.headline}{" "}
              <span className="text-gradient">
                {aboutContent.headlineHighlight}
              </span>
            </h3>
            {aboutContent.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-[var(--text-muted)] leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {aboutContent.highlights.map((item, i) => {
                const icons = [Briefcase, Award, Target, Lightbulb];
                const colors = [
                  "text-sky-400",
                  "text-violet-400",
                  "text-emerald-400",
                  "text-amber-400",
                ];
                const Icon = icons[i] ?? Briefcase;
                return (
                  <div
                    key={item.label}
                    className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-4"
                  >
                    <Icon className={`h-5 w-5 ${colors[i]} mb-2`} />
                    <p className="text-lg font-semibold text-[var(--text-heading)]">
                      {item.label}
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[var(--text-heading)] mb-6">
              Experience
            </h3>
            <div ref={ref} className="space-y-6">
              {experienceTimeline.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="relative pl-6 border-l border-[var(--border)]"
                >
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-sky-500 ring-4 ring-sky-500/20" />
                  <p className="text-xs text-sky-400 font-medium mb-1">
                    {exp.year}
                  </p>
                  <h4 className="text-base font-semibold text-[var(--text-heading)]">
                    {exp.role}
                  </h4>
                  <p className="text-sm text-[var(--text-muted)] mb-2">
                    {exp.company}
                  </p>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-1 text-xs text-[var(--text-muted)] bg-[var(--input-bg)] px-2 py-1 rounded-md"
                      >
                        <ChevronRight className="h-3 w-3 text-sky-500" /> {h}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
