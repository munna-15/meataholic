"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FinalOrder() {
  return (
    <section
      id="order"
      className="relative overflow-hidden bg-[#090807] text-white"
    >
      <div className="mx-auto max-w-[1380px] px-6 py-24 sm:px-8 md:px-10 lg:px-14 lg:py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-8 bg-white/35" />

          <span className="text-[8px] uppercase tracking-[0.45em] text-white/30">
            04 / Order
          </span>
        </motion.div>

        {/* Main */}
        <div className="mt-10 grid items-end gap-14 lg:grid-cols-[1fr_0.72fr] lg:gap-20">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1, ease }}
              className="max-w-[900px] text-[clamp(3.5rem,7.5vw,8.5rem)] font-light leading-[0.82] tracking-[-0.085em]"
            >
              Feed the
              <br />
              <span className="text-white/25">craving.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15, ease }}
              className="mt-9"
            >
              <p className="max-w-[340px] text-[12px] leading-6 text-white/35 md:text-[13px]">
                Something seriously good is only a message away.
              </p>

              <a
                href="#"
                className="group mt-7 inline-flex items-center gap-4 text-[8px] uppercase tracking-[0.35em] text-white/65 transition-colors duration-500 hover:text-white"
              >
                Order on WhatsApp
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1}
                    className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, ease }}
            className="relative"
          >
            <div className="relative h-[320px] w-full overflow-hidden sm:h-[370px]">
              <iframe
                title="Dhaka map"
                src="https://www.google.com/maps?q=Dhaka%2C%20Bangladesh&output=embed"
                className="absolute inset-0 h-full w-full border-0 grayscale opacity-45"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Dark cinematic overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[#090807]/25" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090807]/85 via-transparent to-[#090807]/25" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#090807]/35 via-transparent to-[#090807]/20" />

              {/* Label */}
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center gap-2">
                  <MapPin size={11} strokeWidth={1} className="text-white/50" />

                  <span className="text-[7px] uppercase tracking-[0.4em] text-white/50">
                    Dhaka
                  </span>
                </div>

                <p className="mt-2 text-[8px] uppercase tracking-[0.3em] text-white/25">
                  Online orders
                </p>
              </div>

              <div className="absolute right-5 top-5">
                <span className="text-[7px] uppercase tracking-[0.35em] text-white/20">
                  MEATAHOLIC / 04
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-16 flex items-center justify-between border-t border-white/[0.08] pt-5"
        >
          <span className="text-[7px] uppercase tracking-[0.4em] text-white/20">
            MEATAHOLIC
          </span>

          <span className="text-[7px] uppercase tracking-[0.35em] text-white/20">
            Meat · Food · Cravings
          </span>
        </motion.div>
      </div>
    </section>
  );
}
