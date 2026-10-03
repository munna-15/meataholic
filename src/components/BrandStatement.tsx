"use client";

import Image from "next/image";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const standards = [
  {
    number: "01",
    title: "Quality",
    text: "Carefully selected for the right cut, texture and taste.",
  },
  {
    number: "02",
    title: "Flavour",
    text: "Bold food built around the kind of taste you remember.",
  },
  {
    number: "03",
    title: "Craving",
    text: "Made for those moments when nothing ordinary will do.",
  },
];

export default function BrandStatement() {
  return (
    <section className="overflow-hidden bg-[#07131f] text-white">
      <div className="mx-auto max-w-[1380px] px-6 py-24 sm:px-8 md:px-10 lg:px-14 lg:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease }}
          className="flex items-center justify-between border-b border-white/[0.09] pb-6"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-white/35" />

            <span className="text-[10px] uppercase tracking-[0.4em] text-white/35">
              03 / The standard
            </span>
          </div>

          <span className="hidden text-[9px] uppercase tracking-[0.35em] text-white/20 sm:block">
            MEATAHOLIC
          </span>
        </motion.div>

        {/* Statement */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1fr_220px] lg:gap-16">
          {/* Heading */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1, ease }}
              className="max-w-[1050px] text-[clamp(3.4rem,7vw,8rem)] font-light leading-[0.86] tracking-[-0.085em]"
            >
              Made for people
              <br />
              <span className="text-white/25">who know</span>{" "}
              <span>good meat.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease,
              }}
              className="mt-9 max-w-[470px] text-[14px] leading-7 text-white/40"
            >
              No unnecessary fuss. Just bold flavour, quality and food worth
              craving.
            </motion.p>
          </div>

          {/* Compact image */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease,
            }}
            className="mx-auto w-full max-w-[220px] lg:mx-0"
          >
            <div className="relative aspect-[0.82/1] overflow-hidden border border-white/[0.1] bg-white/[0.03]">
              <Image
                src="/images/meataholic/product-06.jpg"
                alt="MeataHolic"
                fill
                quality={95}
                sizes="220px"
                className="object-cover transition-transform duration-[1600ms] ease-out hover:scale-[1.035]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            <div className="mt-3 flex items-center justify-between">
              <span className="text-[8px] uppercase tracking-[0.35em] text-white/25">
                MEATAHOLIC
              </span>

              <span className="text-[8px] tracking-[0.3em] text-white/15">
                06
              </span>
            </div>
          </motion.div>
        </div>

        {/* Standards */}
        <div className="mt-20 grid border-t border-white/[0.09] md:grid-cols-3">
          {standards.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease,
              }}
              className={`py-8 md:px-8 md:py-9 ${
                index !== 0
                  ? "border-t border-white/[0.09] md:border-l md:border-t-0"
                  : ""
              } ${index === 0 ? "md:pl-0" : ""} ${
                index === standards.length - 1 ? "md:pr-0" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] tracking-[0.3em] text-white/20">
                  {item.number}
                </span>

                <span className="h-px w-8 bg-white/15" />
              </div>

              <h3 className="mt-8 text-[20px] font-light tracking-[-0.02em] text-white/85">
                {item.title}
              </h3>

              <p className="mt-4 max-w-[280px] text-[12px] leading-6 text-white/35">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 flex items-center justify-between border-t border-white/[0.09] pt-5"
        >
          <span className="text-[9px] uppercase tracking-[0.35em] text-white/20">
            Meat · Food · Cravings
          </span>

          <span className="text-[9px] uppercase tracking-[0.35em] text-white/20">
            03
          </span>
        </motion.div>
      </div>
    </section>
  );
}
