"use client";

import Image from "next/image";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const products = [
  {
    number: "01",
    name: "Signature Beef",
    type: "Premium selection",
    image: "/images/meataholic/product-01.jpg",
  },
  {
    number: "02",
    name: "Prime Cuts",
    type: "Selected cuts",
    image: "/images/meataholic/product-02.jpg",
  },
  {
    number: "03",
    name: "Special Selection",
    type: "MeataHolic choice",
    image: "/images/meataholic/product-03.jpg",
  },
  {
    number: "04",
    name: "House Selection",
    type: "Made for cravings",
    image: "/images/meataholic/product-04.jpg",
  },
  {
    number: "05",
    name: "Premium Cuts",
    type: "Carefully selected",
    image: "/images/meataholic/product-01.jpg",
  },
  {
    number: "06",
    name: "Meat Selection",
    type: "For every craving",
    image: "/images/meataholic/product-02.jpg",
  },
];

function ProductItem({ product }: { product: (typeof products)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease }}
      className="group"
    >
      <div className="flex min-h-[112px] items-center gap-5 border-b border-white/[0.09] py-5 sm:min-h-[124px] sm:gap-7 sm:py-6">
        {/* Image */}
        <div className="relative h-[78px] w-[105px] shrink-0 overflow-hidden bg-white/[0.04] sm:h-[88px] sm:w-[120px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            quality={92}
            sizes="120px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
          />
        </div>

        {/* Product information */}
        <div className="min-w-0">
          <div className="flex items-baseline gap-3">
            <span className="text-[7px] tracking-[0.2em] text-white/25">
              {product.number}
            </span>

            <h3 className="truncate text-[15px] font-normal tracking-[-0.02em] text-white/85 sm:text-[17px]">
              {product.name}
            </h3>
          </div>

          <p className="mt-2 text-[7px] uppercase tracking-[0.28em] text-white/30">
            {product.type}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  return (
    <section id="products" className="overflow-hidden bg-[#07131f] text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-8 md:px-10 lg:px-14 lg:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease }}
          className="border-b border-white/[0.09] pb-8"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/35" />

              <span className="text-[8px] uppercase tracking-[0.45em] text-white/35">
                02 / Selection
              </span>
            </div>

            <span className="text-[7px] uppercase tracking-[0.35em] text-white/20">
              MeataHolic
            </span>
          </div>

          <div className="mt-7 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-[clamp(3rem,5.5vw,6rem)] font-light leading-[0.85] tracking-[-0.075em]">
              The selection
            </h2>

            <p className="max-w-[300px] text-[11px] leading-5 text-white/30 md:pb-1">
              A considered collection of cuts and flavours, made for every kind
              of craving.
            </p>
          </div>
        </motion.div>

        {/* Products — Perfect 3 / 3 alignment */}
        <div className="mt-12 grid gap-x-10 md:grid-cols-2 lg:gap-x-20">
          {/* Left column */}
          <div>
            {products.slice(0, 3).map((product) => (
              <ProductItem key={product.number} product={product} />
            ))}
          </div>

          {/* Right column */}
          <div>
            {products.slice(3, 6).map((product) => (
              <ProductItem key={product.number} product={product} />
            ))}
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 flex items-center justify-between border-t border-white/[0.09] pt-5"
        >
          <span className="text-[7px] uppercase tracking-[0.4em] text-white/20">
            Meat · Food · Cravings
          </span>

          <span className="text-[7px] uppercase tracking-[0.35em] text-white/20">
            06 selections
          </span>
        </motion.div>
      </div>
    </section>
  );
}
