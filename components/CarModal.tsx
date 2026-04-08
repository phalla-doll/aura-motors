"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { X, Phone, Mail, ChevronLeft, ChevronRight, Send } from "lucide-react";
import { Car } from "@/lib/data";

type CarModalProps = {
  car: Car;
  onClose: () => void;
};

export function CarModal({ car, onClose }: CarModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"overview" | "specs">("overview");
  const allImages = [car.image, ...(car.gallery || [])];

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
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
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white text-gray-900 rounded-full backdrop-blur-md transition-colors shadow-sm"
        >
          <X size={20} />
        </button>

        {/* Image Section */}
        <div className="relative w-full md:w-3/5 h-64 md:h-auto bg-gray-100 flex-shrink-0 group overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={allImages[currentImageIndex]}
                alt={`${car.make} ${car.model} - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </AnimatePresence>

          {allImages.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 bg-white/80 hover:bg-white text-gray-900 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 shadow-sm"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 bg-white/80 hover:bg-white text-gray-900 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 shadow-sm"
              >
                <ChevronRight size={24} />
              </button>
              
              {/* Dots indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {allImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      idx === currentImageIndex ? "bg-white" : "bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col overflow-y-auto no-scrollbar">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              {car.make} {car.model}
            </h2>
            <p className="text-lg text-gray-500 mt-1">{car.tagline}</p>
            <div className="text-2xl font-semibold text-gray-900 mt-4">
              ${car.price.toLocaleString()}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 border-b border-gray-100 mb-6">
            <button
              onClick={() => setActiveTab("overview")}
              className={`pb-3 text-sm font-medium transition-colors relative ${
                activeTab === "overview" ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Overview
              {activeTab === "overview" && (
                <motion.div layoutId="modal-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("specs")}
              className={`pb-3 text-sm font-medium transition-colors relative ${
                activeTab === "specs" ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Specifications
              {activeTab === "specs" && (
                <motion.div layoutId="modal-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />
              )}
            </button>
          </div>

          {activeTab === "overview" ? (
            <>
              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-2xl">
                  <div className="text-sm text-gray-500 mb-1">Year</div>
                  <div className="font-medium text-gray-900">{car.year}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl">
                  <div className="text-sm text-gray-500 mb-1">Color</div>
                  <div className="font-medium text-gray-900">{car.color}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl">
                  <div className="text-sm text-gray-500 mb-1">Condition</div>
                  <div className="font-medium text-gray-900">{car.condition}%</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl">
                  <div className="text-sm text-gray-500 mb-1">Category</div>
                  <div className="font-medium text-gray-900">{car.category}</div>
                </div>
                {car.specs.power && (
                  <div className="bg-gray-50 p-4 rounded-2xl">
                    <div className="text-sm text-gray-500 mb-1">Power</div>
                    <div className="font-medium text-gray-900">{car.specs.power}</div>
                  </div>
                )}
                {car.specs.acceleration && (
                  <div className="bg-gray-50 p-4 rounded-2xl">
                    <div className="text-sm text-gray-500 mb-1">0-60 mph</div>
                    <div className="font-medium text-gray-900">{car.specs.acceleration}</div>
                  </div>
                )}
              </div>

              {/* Seller Section */}
              <div className="mt-auto pt-6 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Seller</h3>
                <div className="flex flex-col gap-4 bg-gray-50 p-4 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-sm">
                      <Image
                        src={car.seller.image}
                        alt={car.seller.name}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="font-medium text-gray-900">{car.seller.name}</div>
                      <div className="text-sm text-gray-500 flex items-center gap-1.5 mt-1">
                        <Phone size={14} />
                        {car.seller.phone}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 mt-3">
                    <a 
                      href={`tel:${car.seller.phone.replace(/[^0-9+]/g, '')}`}
                      className="flex-1 py-2.5 bg-white border border-gray-200 text-gray-900 text-sm font-medium rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Phone size={16} />
                      Call
                    </a>
                    <a 
                      href={`mailto:${car.seller.email}`}
                      className="flex-1 py-2.5 bg-white border border-gray-200 text-gray-900 text-sm font-medium rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Mail size={16} />
                      Email
                    </a>
                    <a 
                      href={`https://t.me/${car.seller.phone.replace(/[^0-9+]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 bg-[#0088cc] text-white text-sm font-medium rounded-full hover:bg-[#0077b5] transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Send size={16} />
                      Telegram
                    </a>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-4 mb-8"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Specifications</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-500">Make</span>
                  <span className="font-medium text-gray-900">{car.make}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-500">Model</span>
                  <span className="font-medium text-gray-900">{car.model}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-500">Year</span>
                  <span className="font-medium text-gray-900">{car.year}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-500">Category</span>
                  <span className="font-medium text-gray-900">{car.category}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-500">Color</span>
                  <span className="font-medium text-gray-900">{car.color}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-500">Condition</span>
                  <span className="font-medium text-gray-900">{car.condition}%</span>
                </div>
                {car.specs.power && (
                  <div className="flex justify-between py-2 border-b border-gray-50">
                    <span className="text-gray-500">Power</span>
                    <span className="font-medium text-gray-900">{car.specs.power}</span>
                  </div>
                )}
                {car.specs.acceleration && (
                  <div className="flex justify-between py-2 border-b border-gray-50">
                    <span className="text-gray-500">0-60 mph</span>
                    <span className="font-medium text-gray-900">{car.specs.acceleration}</span>
                  </div>
                )}
                {car.specs.range && (
                  <div className="flex justify-between py-2 border-b border-gray-50">
                    <span className="text-gray-500">Range</span>
                    <span className="font-medium text-gray-900">{car.specs.range}</span>
                  </div>
                )}
                {car.specs.topSpeed && (
                  <div className="flex justify-between py-2 border-b border-gray-50">
                    <span className="text-gray-500">Top Speed</span>
                    <span className="font-medium text-gray-900">{car.specs.topSpeed}</span>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
