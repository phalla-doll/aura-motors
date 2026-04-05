"use client";

import { useState, useRef } from "react";
import { Car } from "@/lib/data";
import { CarCard } from "./CarCard";
import { CarModal } from "./CarModal";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarCarouselProps = {
  cars: Car[];
  title: string;
  subtitle?: string;
  compareIds?: string[];
  onToggleCompare?: (carId: string) => void;
};

export function CarCarousel({ cars, title, subtitle, compareIds = [], onToggleCompare }: CarCarouselProps) {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.8; // Scroll by 80% of container width
      
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (cars.length === 0) return null;

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{title}</h2>
            {subtitle && <p className="text-gray-500 mt-2">{subtitle}</p>}
          </div>
          
          {cars.length > 3 && (
            <div className="flex gap-2">
              <button 
                onClick={() => scroll("left")}
                className="p-2 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scroll("right")}
                className="p-2 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
        
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 pt-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cars.map((car) => (
              <div 
                key={car.id} 
                className="w-[85vw] sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-21px)] flex-none snap-start"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="h-full"
                >
                  <CarCard 
                    car={car} 
                    onClick={() => setSelectedCar(car)}
                    isCompared={compareIds.includes(car.id)}
                    onToggleCompare={onToggleCompare ? (e) => {
                      e.stopPropagation();
                      onToggleCompare(car.id);
                    } : undefined}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedCar && (
          <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
