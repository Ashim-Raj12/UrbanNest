"use client";

import PropertyCard from "@/components/ui/PropertyCard";
import { motion } from "framer-motion";
import { properties } from "@/lib/data";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { MapPin, Search } from "lucide-react";
import { CustomSelect } from "@/components/ui/CustomSelect";

function PropertiesContent() {
  const searchParams = useSearchParams();
  const initialLocation = searchParams?.get("location")?.toLowerCase() || "";
  
  const [searchLocation, setSearchLocation] = useState(initialLocation);
  const [priceRange, setPriceRange] = useState("Any Price");
  const [propertyType, setPropertyType] = useState("Any Type");
  const [bhk, setBhk] = useState("Any Size");
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  // Real-time filtering based on state
  const filteredProperties = properties.filter((property) =>
    property.location.toLowerCase().includes(searchLocation.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Scroll to top when page changes
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="w-full max-w-7xl mx-auto px-8 py-24 min-h-screen">
      {/* Hero Section & Title */}
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight text-on-surface">Curated Estates</h1>
        <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
          {searchLocation 
            ? `Discovering masterpieces matching "${searchLocation}", where every residence is a testament to high-end design.`
            : 'Discover a portfolio of architectural masterpieces, where every residence is a testament to high-end design and intentional living.'}
        </p>
      </motion.header>

      {/* Advanced Filters UI */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12 md:mb-16 relative z-50"
      >
        <div className="bg-[#131313]/70 backdrop-blur-xl p-2 md:p-4 rounded-xl shadow-2xl max-w-6xl flex flex-col md:flex-row gap-2 border border-white/5 mx-auto">
          <div className="flex-1 px-4 py-3 flex flex-col text-left">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-1">Location</span>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <input 
                className="w-full bg-transparent border-none text-on-surface focus:ring-0 p-0 placeholder:text-zinc-600 font-medium outline-none" 
                placeholder="Search City, Area..." 
                type="text"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
            </div>
          </div>
          
          <div className="w-px bg-outline-variant/20 hidden md:block my-2" />
          
          <CustomSelect 
            label="Price Range" 
            options={["Any Price", "₹5Cr - ₹15Cr", "₹15Cr - ₹30Cr", "₹30Cr+"]}
            value={priceRange}
            onChange={setPriceRange}
          />
          
          <div className="w-px bg-outline-variant/20 hidden md:block my-2" />
          
          <CustomSelect 
            label="Property Type" 
            options={["Any Type", "Penthouse", "Modern Villa", "Glass House", "Estate"]}
            value={propertyType}
            onChange={setPropertyType}
          />
          
          <div className="w-px bg-outline-variant/20 hidden md:block my-2" />
          
          <CustomSelect 
            label="BHK" 
            options={["Any Size", "3+", "4+", "5+", "6+"]}
            value={bhk}
            onChange={setBhk}
          />
          
          <button className="bg-gold-gradient text-on-primary px-8 py-4 font-bold rounded-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all shrink-0">
            <Search className="w-5 h-5 text-on-primary" />
          </button>
        </div>
      </motion.section>

      {/* Properties Grid */}
      <section>
        {filteredProperties.length === 0 ? (
          <div className="text-on-surface-variant py-10 text-center col-span-full border border-dashed border-white/10 rounded-xl p-20">
            No properties found matching your criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {paginatedProperties.map((property, idx) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (idx % 3) }}
              >
                <PropertyCard 
                  id={property.id}
                  title={property.title}
                  location={property.location}
                  price={property.price}
                  imageUrl={property.images[0]}
                  featured={property.featured}
                  features={property.features}
                />
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="mt-20 pb-10 flex justify-center items-center gap-4">
          <button 
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:bg-surface-container-high hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-zinc-500"
          >
            &larr;
          </button>
          
          {Array.from({ length: totalPages }).map((_, i) => (
            <button 
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all font-bold ${
                currentPage === i + 1 
                  ? 'bg-primary text-on-primary shadow-md shadow-primary/20' 
                  : 'border border-white/10 text-zinc-500 hover:bg-surface-container-high hover:text-white'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button 
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:bg-surface-container-high hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-zinc-500"
          >
            &rarr;
          </button>
        </section>
      )}
    </main>
  );
}

export default function PropertiesGridPage() {
  return (
    <Suspense fallback={<div className="w-full min-h-screen flex items-center justify-center text-on-surface">Loading properties...</div>}>
      <PropertiesContent />
    </Suspense>
  );
}
