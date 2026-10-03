"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-82px)] min-h-[620px] overflow-hidden bg-[#090807] text-white">
      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.035 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          opacity: {
            duration: 1.2,
            ease,
          },
          scale: {
            duration: 2.2,
            ease,
          },
        }}
        className="absolute inset-0"
      >
        <Image
          src="/images/meataholic/hero.png"
          alt="MeataHolic"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Cinematic atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-black/10" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/10" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1500px] flex-col items-center justify-end px-6 pb-8 text-center sm:px-8 sm:pb-10 lg:px-12 lg:pb-12">
        {/* Small identity */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.45,
            ease,
          }}
          className="mb-5 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-white/35" />

          <span className="text-[7px] uppercase tracking-[0.45em] text-white/50">
            Meat · Food · Cravings
          </span>

          <span className="h-px w-8 bg-white/35" />
        </motion.div>

        {/* Main heading */}
        <h1 className="overflow-hidden">
          <motion.span
            initial={{
              y: "115%",
              opacity: 0,
              letterSpacing: "0.08em",
            }}
            animate={{
              y: "0%",
              opacity: 1,
              letterSpacing: "-0.075em",
            }}
            transition={{
              duration: 1.25,
              delay: 0.25,
              ease,
            }}
            className="block text-[clamp(4rem,11vw,11rem)] font-light leading-[0.78] text-white"
          >
            MEATAHOLIC
          </motion.span>
        </h1>

        {/* Supporting line */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.8,
            ease,
          }}
          className="mt-6"
        >
          <p className="mx-auto max-w-[380px] text-[11px] leading-5 text-white/50 md:text-[12px]">
            Bold flavours. Serious cravings.
          </p>
        </motion.div>

        {/* Explore */}
        <motion.a
          href="#products"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.95,
            ease,
          }}
          className="group mt-6 flex items-center gap-3 text-[8px] uppercase tracking-[0.3em] text-white/70 transition-colors duration-500 hover:text-white"
        >
          Explore
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/10 backdrop-blur-sm transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black">
            <ArrowUpRight
              size={13}
              strokeWidth={1}
              className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        </motion.a>

        {/* Bottom metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.15,
          }}
          className="mt-7 flex w-full items-center justify-between border-t border-white/15 pt-4"
        >
          <span className="text-[7px] uppercase tracking-[0.35em] text-white/25">
            MEATAHOLIC
          </span>

          <span className="flex items-center gap-2 text-[7px] uppercase tracking-[0.3em] text-white/30">
            Scroll
            <ArrowDown size={12} strokeWidth={1} />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
