"use client";

import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FilterBar } from "@/components/FilterBar";
import { CarGrid } from "@/components/CarGrid";
import { Footer } from "@/components/Footer";
import { cars } from "@/lib/data";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedMake, setSelectedMake] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

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
    return cars.filter((car) => {
      const categoryMatch = selectedCategory ? car.category === selectedCategory : true;
      const makeMatch = selectedMake ? car.make === selectedMake : true;
      const yearMatch = selectedYear ? car.year === selectedYear : true;
      return categoryMatch && makeMatch && yearMatch;
    });
  }, [selectedCategory, selectedMake, selectedYear]);

  return (
    <main className="min-h-screen bg-[#f5f5f7] font-sans selection:bg-gray-900 selection:text-white">
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
          onCategoryChange={setSelectedCategory}
          onMakeChange={setSelectedMake}
          onYearChange={setSelectedYear}
        />
        <CarGrid cars={filteredCars} />
      </div>

      <Footer />
    </main>
  );
}
