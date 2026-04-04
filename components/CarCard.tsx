"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Car } from "@/lib/data";

export function CarCard({ car }: { car: Car }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col bg-white rounded-3xl overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow duration-300 border border-gray-100"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <Image
          src={car.image}
          alt={`${car.make} ${car.model}`}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
              {car.make} {car.model}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{car.tagline}</p>
          </div>
          <span className="text-lg font-medium text-gray-900">
            ${car.price.toLocaleString()}
          </span>
        </div>

        <div className="mt-auto pt-6">
          <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-4">
            {car.specs.range && (
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">{car.specs.range}</span>
                <span className="text-xs text-gray-500">Range</span>
              </div>
            )}
            {car.specs.acceleration && (
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">{car.specs.acceleration.split(' ')[0]}</span>
                <span className="text-xs text-gray-500">0-60 mph</span>
              </div>
            )}
            {car.specs.topSpeed && (
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">{car.specs.topSpeed}</span>
                <span className="text-xs text-gray-500">Top Speed</span>
              </div>
            )}
            {!car.specs.topSpeed && car.specs.power && (
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">{car.specs.power}</span>
                <span className="text-xs text-gray-500">Power</span>
              </div>
            )}
          </div>
          
          <button className="w-full mt-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium transition-colors hover:bg-gray-800">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}
