"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { CarModal } from "./CarModal";
import { cars } from "@/lib/data";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroCar = cars[0]; // Aero Model S

  return (
    <>
      <section className="relative h-[75vh] min-h-[600px] w-full overflow-hidden bg-black flex flex-col items-center justify-between pt-24 pb-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop"
            alt="Hero Car"
            fill
            className="object-cover object-center opacity-80"
            priority
            referrerPolicy="no-referrer"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 mt-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-2"
          >
            Aero Model S
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.1 }}
            className="text-xl md:text-2xl font-medium text-gray-200"
          >
            Beyond performance.
          </motion.p>
        </div>

        {/* Bottom Actions & Specs */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto"
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 rounded-full bg-white text-black font-medium text-sm transition-transform hover:scale-105 active:scale-95 w-full sm:w-64"
            >
              Order Now
            </button>
            <button className="px-8 py-3 rounded-full bg-black/50 backdrop-blur-md text-white font-medium text-sm border border-white/20 transition-transform hover:scale-105 active:scale-95 w-full sm:w-64">
              Demo Drive
            </button>
          </motion.div>

          {/* Specs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden md:flex items-center justify-center gap-12 text-white"
          >
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">396 mi</span>
              <span className="text-xs text-gray-300 uppercase tracking-wider mt-1">Range (EPA est.)</span>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">1.99 s</span>
              <span className="text-xs text-gray-300 uppercase tracking-wider mt-1">0-60 mph*</span>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">200 mph</span>
              <span className="text-xs text-gray-300 uppercase tracking-wider mt-1">Top Speed</span>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">1,020 hp</span>
              <span className="text-xs text-gray-300 uppercase tracking-wider mt-1">Peak Power</span>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <CarModal car={heroCar} onClose={() => setIsModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
