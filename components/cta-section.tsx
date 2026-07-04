"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-40" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-heading)] mb-4">
            Ready to Build Something <span className="text-gradient">Amazing?</span>
          </h2>
          <p className="text-lg text-[var(--text-muted)] mb-10 max-w-2xl mx-auto">
            Looking for an internship or junior role in Data Engineering, Machine Learning, or AI Development? Let&apos;s connect.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:shadow-sky-500/40">
              Start a Project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--input-bg)] px-8 py-3.5 text-sm font-semibold text-[var(--text)] hover:bg-[var(--surface-hover)] transition-colors">
              <Mail className="h-4 w-4" /> Send an Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
