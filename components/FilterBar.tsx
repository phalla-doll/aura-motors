"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

type FilterBarProps = {
  categories: string[];
  makes: string[];
  years: number[];
  selectedCategory: string | null;
  selectedMake: string | null;
  selectedYear: number | null;
  onCategoryChange: (category: string | null) => void;
  onMakeChange: (make: string | null) => void;
  onYearChange: (year: number | null) => void;
};

export function FilterBar({
  categories,
  makes,
  years,
  selectedCategory,
  selectedMake,
  selectedYear,
  onCategoryChange,
  onMakeChange,
  onYearChange,
}: FilterBarProps) {
  return (
    <div className="sticky top-14 z-30 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-gray-900">Inventory</h2>
        
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto no-scrollbar">
          {/* Category Filter */}
          <div className="flex items-center gap-2 bg-gray-100/80 p-1 rounded-full">
            <button
              onClick={() => onCategoryChange(null)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                selectedCategory === null
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              All Models
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-white text-black shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Make Filter */}
          <div className="hidden md:flex items-center gap-2 bg-gray-100/80 p-1 rounded-full ml-2">
            <button
              onClick={() => onMakeChange(null)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                selectedMake === null
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              All Brands
            </button>
            {makes.map((make) => (
              <button
                key={make}
                onClick={() => onMakeChange(make)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  selectedMake === make
                    ? "bg-white text-black shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {make}
              </button>
            ))}
          </div>

          {/* Year Filter */}
          <div className="hidden lg:flex items-center gap-2 bg-gray-100/80 p-1 rounded-full ml-2">
            <button
              onClick={() => onYearChange(null)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                selectedYear === null
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              All Years
            </button>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => onYearChange(year)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  selectedYear === year
                    ? "bg-white text-black shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
