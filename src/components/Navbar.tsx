"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const links = [
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Order", href: "#order" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#090807]/95 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-[82px] max-w-[1500px] items-center justify-between px-6 sm:px-8 lg:px-12">
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <div className="relative h-9 w-9 overflow-hidden">
              <Image
                src="/images/meataholic/logo.jpg"
                alt="MeataHolic"
                fill
                priority
                quality={100}
                className="object-contain"
              />
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-[13px] font-medium tracking-[0.22em]">
                MEATAHOLIC
              </span>

              <span className="mt-1.5 text-[6px] uppercase tracking-[0.35em] text-white/30">
                Meat · Food · Cravings
              </span>
            </div>
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative px-3 py-2 text-[8px] uppercase tracking-[0.25em] text-white/45 transition-colors duration-500 hover:text-white"
              >
                {link.label}

                <span className="absolute bottom-0.5 left-3 right-3 h-px origin-left scale-x-0 bg-white transition-transform duration-500 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="#order"
              className="group flex items-center gap-3 border border-white/20 px-5 py-3.5 text-[8px] uppercase tracking-[0.25em] transition-all duration-500 hover:border-white hover:bg-white hover:text-black"
            >
              Order now
              <ArrowUpRight
                size={13}
                strokeWidth={1}
                className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-end lg:hidden"
          >
            <Menu size={22} strokeWidth={1.1} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[100] bg-[#090807] text-white"
          >
            <div className="flex h-[82px] items-center justify-between border-b border-white/[0.08] px-6 sm:px-8">
              <Link
                href="/"
                onClick={closeMenu}
                className="flex items-center gap-3"
              >
                <div className="relative h-9 w-9 overflow-hidden">
                  <Image
                    src="/images/meataholic/logo.jpg"
                    alt="MeataHolic"
                    fill
                    quality={100}
                    className="object-contain"
                  />
                </div>

                <span className="text-[13px] tracking-[0.22em]">
                  MEATAHOLIC
                </span>
              </Link>

              <button
                type="button"
                aria-label="Close menu"
                onClick={closeMenu}
                className="flex h-10 w-10 items-center justify-end"
              >
                <X size={22} strokeWidth={1.1} />
              </button>
            </div>

            <div className="h-[calc(100dvh-82px)] overflow-y-auto px-6 pb-8 pt-8 sm:px-8">
              <nav>
                {links.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.07,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="group flex items-center justify-between border-b border-white/[0.09] py-7"
                    >
                      <span className="text-[clamp(2.2rem,10vw,4rem)] font-light tracking-[-0.05em]">
                        {link.label}
                      </span>

                      <ArrowUpRight
                        size={20}
                        strokeWidth={1}
                        className="text-white/25 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-10 border-t border-white/[0.08] pt-6"
              >
                <Link
                  href="#order"
                  onClick={closeMenu}
                  className="group flex items-center justify-between"
                >
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/45">
                    Order now
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20">
                    <ArrowUpRight size={14} strokeWidth={1} />
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
