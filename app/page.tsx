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
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");

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
          searchQuery={searchQuery}
          sortBy={sortBy}
          onCategoryChange={setSelectedCategory}
          onMakeChange={setSelectedMake}
          onYearChange={setSelectedYear}
          onSearchChange={setSearchQuery}
          onSortChange={setSortBy}
        />
        <CarGrid cars={filteredCars} />
      </div>

      <Footer />
    </main>
  );
}
