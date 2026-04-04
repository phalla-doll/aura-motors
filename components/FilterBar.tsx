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
        
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          {/* Category Filter */}
          <div className="relative w-full sm:w-40">
            <select
              value={selectedCategory || ""}
              onChange={(e) => onCategoryChange(e.target.value === "" ? null : e.target.value)}
              className="appearance-none w-full bg-gray-100/80 border border-transparent text-gray-900 text-sm rounded-full focus:ring-2 focus:ring-gray-900 focus:border-transparent px-4 py-2 pr-8 transition-colors hover:bg-gray-200/80 outline-none cursor-pointer"
            >
              <option value="">All Models</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
              <ChevronDown size={16} />
            </div>
          </div>

          {/* Make Filter */}
          <div className="relative w-full sm:w-40">
            <select
              value={selectedMake || ""}
              onChange={(e) => onMakeChange(e.target.value === "" ? null : e.target.value)}
              className="appearance-none w-full bg-gray-100/80 border border-transparent text-gray-900 text-sm rounded-full focus:ring-2 focus:ring-gray-900 focus:border-transparent px-4 py-2 pr-8 transition-colors hover:bg-gray-200/80 outline-none cursor-pointer"
            >
              <option value="">All Brands</option>
              {makes.map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
              <ChevronDown size={16} />
            </div>
          </div>

          {/* Year Filter */}
          <div className="relative w-full sm:w-40">
            <select
              value={selectedYear || ""}
              onChange={(e) => onYearChange(e.target.value === "" ? null : Number(e.target.value))}
              className="appearance-none w-full bg-gray-100/80 border border-transparent text-gray-900 text-sm rounded-full focus:ring-2 focus:ring-gray-900 focus:border-transparent px-4 py-2 pr-8 transition-colors hover:bg-gray-200/80 outline-none cursor-pointer"
            >
              <option value="">All Years</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
