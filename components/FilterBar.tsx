"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, Search } from "lucide-react";

type FilterBarProps = {
  categories: string[];
  makes: string[];
  years: number[];
  selectedCategory: string | null;
  selectedMake: string | null;
  selectedYear: number | null;
  searchQuery: string;
  sortBy: string;
  onCategoryChange: (category: string | null) => void;
  onMakeChange: (make: string | null) => void;
  onYearChange: (year: number | null) => void;
  onSearchChange: (query: string) => void;
  onSortChange: (sort: string) => void;
};

export function FilterBar({
  categories,
  makes,
  years,
  selectedCategory,
  selectedMake,
  selectedYear,
  searchQuery,
  sortBy,
  onCategoryChange,
  onMakeChange,
  onYearChange,
  onSearchChange,
  onSortChange,
}: FilterBarProps) {
  return (
    <div className="sticky top-14 z-30 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-4">
        
        {/* Left side: Selects */}
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          {/* Category Filter */}
          <div className="relative flex-1 min-w-[130px] sm:flex-none sm:w-40">
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
          <div className="relative flex-1 min-w-[130px] sm:flex-none sm:w-40">
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
          <div className="relative flex-1 min-w-[130px] sm:flex-none sm:w-40">
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

        {/* Right side: Sort & Search */}
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          {/* Sort Filter */}
          <div className="relative flex-1 min-w-[180px] sm:flex-none sm:w-48">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="appearance-none w-full bg-gray-100/80 border border-transparent text-gray-900 text-sm rounded-full focus:ring-2 focus:ring-gray-900 focus:border-transparent px-4 py-2 pr-8 transition-colors hover:bg-gray-200/80 outline-none cursor-pointer"
            >
              <option value="">Sort By: Recommended</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="year-desc">Year: Newest</option>
              <option value="year-asc">Year: Oldest</option>
              <option value="model-asc">Model: A-Z</option>
              <option value="model-desc">Model: Z-A</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
              <ChevronDown size={16} />
            </div>
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search inventory..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-gray-100/80 border border-transparent text-gray-900 text-sm rounded-full focus:ring-2 focus:ring-gray-900 focus:border-transparent pl-10 pr-4 py-2 transition-colors hover:bg-gray-200/80 outline-none placeholder:text-gray-500"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
