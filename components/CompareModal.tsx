"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { X, Trash2 } from "lucide-react";
import { Car } from "@/lib/data";

type CompareModalProps = {
  cars: Car[];
  onClose: () => void;
  onRemove: (id: string) => void;
};

export function CompareModal({ cars, onClose, onRemove }: CompareModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (cars.length === 0) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-7xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Compare Vehicles</h2>
          <button
            onClick={onClose}
            className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="overflow-x-auto overflow-y-auto p-6 no-scrollbar flex-grow">
          <div className="min-w-[800px]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="w-1/5 p-4 border-b border-gray-100 font-medium text-gray-500">Vehicle</th>
                  {cars.map((car) => (
                    <th key={car.id} className="w-1/4 p-4 border-b border-gray-100 relative">
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 mb-4">
                        <Image
                          src={car.image}
                          alt={`${car.make} ${car.model}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 25vw"
                          referrerPolicy="no-referrer"
                        />
                        <button
                          onClick={() => onRemove(car.id)}
                          className="absolute top-2 right-2 p-1.5 bg-white/80 hover:bg-red-50 hover:text-red-600 text-gray-700 rounded-full backdrop-blur-md transition-colors"
                          aria-label="Remove from comparison"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="text-lg font-bold text-gray-900">{car.make} {car.model}</div>
                      <div className="text-sm font-medium text-gray-500">{car.year}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="p-4 border-b border-gray-100 font-medium text-gray-500">Price</td>
                  {cars.map((car) => (
                    <td key={car.id} className="p-4 border-b border-gray-100 font-semibold text-gray-900">
                      ${car.price.toLocaleString()}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-100 font-medium text-gray-500">Category</td>
                  {cars.map((car) => (
                    <td key={car.id} className="p-4 border-b border-gray-100 text-gray-900">
                      {car.category}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-100 font-medium text-gray-500">Condition</td>
                  {cars.map((car) => (
                    <td key={car.id} className="p-4 border-b border-gray-100 text-gray-900">
                      {car.condition}%
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-100 font-medium text-gray-500">Power</td>
                  {cars.map((car) => (
                    <td key={car.id} className="p-4 border-b border-gray-100 text-gray-900">
                      {car.specs.power || "N/A"}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-100 font-medium text-gray-500">0-60 mph</td>
                  {cars.map((car) => (
                    <td key={car.id} className="p-4 border-b border-gray-100 text-gray-900">
                      {car.specs.acceleration || "N/A"}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-100 font-medium text-gray-500">Range</td>
                  {cars.map((car) => (
                    <td key={car.id} className="p-4 border-b border-gray-100 text-gray-900">
                      {car.specs.range || "N/A"}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-100 font-medium text-gray-500">Top Speed</td>
                  {cars.map((car) => (
                    <td key={car.id} className="p-4 border-b border-gray-100 text-gray-900">
                      {car.specs.topSpeed || "N/A"}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
