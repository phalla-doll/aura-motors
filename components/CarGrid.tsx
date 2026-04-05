"use client";

import { useState } from "react";
import { Car } from "@/lib/data";
import { CarCard } from "./CarCard";
import { CarModal } from "./CarModal";
import { motion, AnimatePresence } from "motion/react";

type CarGridProps = {
  cars: Car[];
  title?: string;
  subtitle?: string;
};

export function CarGrid({ cars, title, subtitle }: CarGridProps) {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {(title || subtitle) && (
          <div className="mb-8">
            {title && <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{title}</h2>}
            {subtitle && <p className="text-gray-500 mt-2">{subtitle}</p>}
          </div>
        )}
        
        {cars.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No vehicles found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more results.</p>
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {cars.map((car) => (
                <motion.div
                  key={car.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <CarCard car={car} onClick={() => setSelectedCar(car)} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedCar && (
          <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
