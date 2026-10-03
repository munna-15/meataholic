"use client";

import { motion } from "motion/react";

export default function WhatsAppButton() {
  const phone = "8801XXXXXXXXX";

  return (
    <motion.a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      aria-label="Order on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(0,0,0,0.28)] transition-shadow duration-500 hover:shadow-[0_10px_35px_rgba(37,211,102,0.25)] sm:bottom-7 sm:right-7 sm:h-13 sm:w-13"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5 sm:h-[21px] sm:w-[21px]"
        aria-hidden="true"
      >
        <path
          d="M20.52 3.48A11.84 11.84 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.91c0 2.1.55 4.15 1.59 5.96L.06 24l6.27-1.64a11.86 11.86 0 0 0 5.74 1.46h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.17-3.47-8.43ZM12.08 21.82h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.9 9.9 0 0 1-1.52-5.3C2.2 6.45 6.63 2.02 12.08 2.02c2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 7c0 5.45-4.43 9.9-9.89 9.9Zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
          fill="currentColor"
        />
      </svg>
    </motion.a>
  );
}
