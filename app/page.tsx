"use client";

import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FilterBar } from "@/components/FilterBar";
import { CarGrid } from "@/components/CarGrid";
import { CarCarousel } from "@/components/CarCarousel";
import { CompareModal } from "@/components/CompareModal";
import { Footer } from "@/components/Footer";
import { cars } from "@/lib/data";
import { motion, AnimatePresence } from "motion/react";
import { Scale, X } from "lucide-react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedMake, setSelectedMake] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");
  
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const handleToggleCompare = (carId: string) => {
    setCompareIds((prev) => {
      if (prev.includes(carId)) {
        return prev.filter((id) => id !== carId);
      }
      if (prev.length >= 4) {
        return prev;
      }
      return [...prev, carId];
    });
  };

  const comparedCars = useMemo(() => {
    return cars.filter((car) => compareIds.includes(car.id));
  }, [compareIds]);

  const categories = useMemo(() => {
    const cats = new Set(cars.map((car) => car.category));
    return Array.from(cats).sort();
  }, []);

  const makes = useMemo(() => {
    const mks = new Set(cars.map((car) => car.make));
    return Array.from(mks).sort();
  }, []);

  const years = useMemo(() => {
    const yrs = new Set(cars.map((car) => car.year));
    return Array.from(yrs).sort((a, b) => b - a); // Descending
  }, []);

  const filteredCars = useMemo(() => {
    const filtered = cars.filter((car) => {
      const categoryMatch = selectedCategory ? car.category === selectedCategory : true;
      const makeMatch = selectedMake ? car.make === selectedMake : true;
      const yearMatch = selectedYear ? car.year === selectedYear : true;
      
      const searchMatch = searchQuery === "" || 
        car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.category.toLowerCase().includes(searchQuery.toLowerCase());

      return categoryMatch && makeMatch && yearMatch && searchMatch;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "year-desc":
          return b.year - a.year;
        case "year-asc":
          return a.year - b.year;
        case "model-asc":
          return a.model.localeCompare(b.model);
        case "model-desc":
          return b.model.localeCompare(a.model);
        default:
          return 0;
      }
    });
  }, [selectedCategory, selectedMake, selectedYear, searchQuery, sortBy]);

  const hasActiveFilters = selectedCategory !== null || selectedMake !== null || selectedYear !== null || searchQuery !== "" || sortBy !== "";

  // Get some cars for the special sections
  const newArrivals = useMemo(() => {
    return [...cars].sort((a, b) => b.year - a.year);
  }, []);

  const recommendations = useMemo(() => {
    return [...cars].sort((a, b) => b.condition - a.condition);
  }, []);

  return (
    <main className="min-h-screen bg-[#f5f5f7] font-sans selection:bg-gray-900 selection:text-white pb-20">
      <Navbar />
      <Hero />
      
      <div id="inventory" className="pt-8 pb-24">
        <FilterBar
          categories={categories}
          makes={makes}
          years={years}
          selectedCategory={selectedCategory}
          selectedMake={selectedMake}
          selectedYear={selectedYear}
          searchQuery={searchQuery}
          sortBy={sortBy}
          onCategoryChange={setSelectedCategory}
          onMakeChange={setSelectedMake}
          onYearChange={setSelectedYear}
          onSearchChange={setSearchQuery}
          onSortChange={setSortBy}
        />

        {!hasActiveFilters && (
          <>
            <CarCarousel 
              cars={newArrivals} 
              title="New Arrivals" 
              subtitle="The latest additions to our premium inventory." 
              compareIds={compareIds}
              onToggleCompare={handleToggleCompare}
            />
            <CarCarousel 
              cars={recommendations} 
              title="Recommended for You" 
              subtitle="Hand-picked vehicles based on pristine condition and value." 
              compareIds={compareIds}
              onToggleCompare={handleToggleCompare}
            />
          </>
        )}

        <CarGrid 
          cars={filteredCars} 
          title={hasActiveFilters ? "Search Results" : "All Vehicles"} 
          subtitle={hasActiveFilters ? `Showing ${filteredCars.length} vehicles matching your criteria.` : "Browse our complete collection of premium electric vehicles."}
          compareIds={compareIds}
          onToggleCompare={handleToggleCompare}
        />
      </div>

      <Footer />

      {/* Floating Compare Banner */}
      <AnimatePresence>
        {compareIds.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-md bg-white/80 backdrop-blur-md border border-gray-200/50 text-gray-900 rounded-full shadow-2xl px-6 py-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="bg-gray-100/80 p-2 rounded-full text-gray-900">
                <Scale size={20} />
              </div>
              <div>
                <div className="font-medium">{compareIds.length} {compareIds.length === 1 ? 'vehicle' : 'vehicles'} selected</div>
                <div className="text-xs text-gray-500">Compare up to 4</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsCompareModalOpen(true)}
                disabled={compareIds.length < 2}
                className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors shadow-sm"
              >
                Compare
              </button>
              <button
                onClick={() => setCompareIds([])}
                className="p-2 text-gray-400 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100"
                aria-label="Clear comparison"
              >
                <X size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isCompareModalOpen && (
          <CompareModal 
            cars={comparedCars} 
            onClose={() => setIsCompareModalOpen(false)} 
            onRemove={handleToggleCompare}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
