"use client";

import Image from "next/image";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function BrandIntro() {
  return (
    <section id="about" className="overflow-hidden bg-[#0a0908] text-[#f3eee8]">
      <div className="mx-auto max-w-[1380px] px-6 py-24 sm:px-8 md:px-10 lg:px-14 lg:py-32">
        {/* Small label */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-9 bg-white/40" />

          <span className="text-[8px] uppercase tracking-[0.42em] text-white/35">
            The brand
          </span>
        </motion.div>

        {/* Main statement */}
        <div className="mt-12 grid gap-12 md:grid-cols-[0.5fr_1.5fr] md:gap-16 lg:mt-16 lg:gap-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[8px] uppercase tracking-[0.35em] text-white/20"
          >
            01 / MEATAHOLIC
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className="max-w-[1000px]"
          >
            <h2 className="text-[clamp(3rem,6.5vw,7.5rem)] font-light leading-[0.88] tracking-[-0.08em]">
              For people who
              <br />
              <span className="text-white/30">take meat seriously.</span>
            </h2>

            <p className="mt-8 max-w-[540px] text-[13px] leading-7 text-white/38 md:text-[14px]">
              A focused food brand built around bold flavours, quality cuts and
              the simple pleasure of a really good meal.
            </p>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.1, ease }}
          className="relative mt-16 overflow-hidden md:mt-20"
        >
          <div className="relative aspect-[16/8] min-h-[280px] w-full">
            <Image
              src="/images/meataholic/brand-02.jpg"
              alt="MeataHolic"
              fill
              sizes="(max-width: 768px) 100vw, 90vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/15" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 lg:bottom-10 lg:left-10">
              <span className="text-[7px] uppercase tracking-[0.4em] text-white/45">
                MEATAHOLIC
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="mt-8 flex items-center justify-between border-t border-white/[0.08] pt-5"
        >
          <span className="text-[7px] uppercase tracking-[0.35em] text-white/20">
            Meat · Food · Cravings
          </span>

          <span className="text-[7px] uppercase tracking-[0.35em] text-white/20">
            01
          </span>
        </motion.div>
      </div>
    </section>
  );
}
