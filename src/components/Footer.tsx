"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#07131f] text-white">
      <div className="mx-auto max-w-[1380px] px-6 pt-16 sm:px-8 md:px-10 lg:px-14 lg:pt-24">
        {/* Main footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="border-b border-white/[0.09] pb-12 sm:pb-16"
        >
          <div className="flex flex-col gap-12 sm:flex-row sm:items-end sm:justify-between">
            {/* Brand */}
            <div>
              <div className="relative h-14 w-[190px] overflow-hidden sm:h-16 sm:w-[220px]">
                <Image
                  src="/images/meataholic/logo.jpg"
                  alt="MeataHolic"
                  fill
                  sizes="220px"
                  className="object-contain object-left"
                />
              </div>

              <p className="mt-5 text-[13px] leading-6 text-white/40 sm:text-[14px]">
                Meat · Food · Cravings
              </p>
            </div>

            {/* Order */}
            <a
              href="#order"
              className="group flex w-fit items-center gap-4 text-[11px] uppercase tracking-[0.28em] text-white/55 transition-colors duration-500 hover:text-white sm:text-[12px]"
            >
              Order now
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black">
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.2}
                  className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </a>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-5 border-b border-white/[0.09] py-8 sm:gap-x-10 sm:py-9">
          <a
            href="#products"
            className="text-[12px] text-white/45 transition-colors duration-300 hover:text-white sm:text-[13px]"
          >
            Products
          </a>

          <a
            href="#about"
            className="text-[12px] text-white/45 transition-colors duration-300 hover:text-white sm:text-[13px]"
          >
            About
          </a>

          <a
            href="#order"
            className="text-[12px] text-white/45 transition-colors duration-300 hover:text-white sm:text-[13px]"
          >
            Order
          </a>

          <a
            href="#"
            className="text-[12px] text-white/45 transition-colors duration-300 hover:text-white sm:text-[13px]"
          >
            Facebook
          </a>

          <a
            href="#"
            className="text-[12px] text-white/45 transition-colors duration-300 hover:text-white sm:text-[13px]"
          >
            Instagram
          </a>

          <a
            href="#"
            className="text-[12px] text-white/45 transition-colors duration-300 hover:text-white sm:text-[13px]"
          >
            WhatsApp
          </a>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 py-7 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[10px] text-white/25 sm:text-[11px]">
            © {new Date().getFullYear()} MeataHolic
          </span>

          <span className="text-[10px] text-white/20 sm:text-[11px]">
            Dhaka · Bangladesh
          </span>
        </div>
      </div>
    </footer>
  );
}
