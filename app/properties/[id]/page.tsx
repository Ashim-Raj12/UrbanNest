"use client";

import { useParams } from "next/navigation";
import BentoGallery from "@/components/ui/BentoGallery";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Check, MapPin } from "lucide-react";
import { properties } from "@/lib/data";
import Link from "next/link";

export default function PropertyDetail() {
  const params = useParams();
  const id = params?.id as string;

  const property = properties.find(p => p.id === id) || properties[0];

  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-24 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">{property.location}</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h1 className="font-serif text-5xl font-bold text-on-surface">{property.title}</h1>
          <p className="text-3xl text-gold-gradient font-medium">{property.price}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <BentoGallery images={property.images} />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16">
        <motion.div 
          className="md:col-span-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="font-serif text-2xl mb-6 text-on-surface">About the Residence</h2>
          <p className="text-on-surface-variant leading-loose">{property.description}</p>
          
          <h3 className="font-serif text-xl mt-12 mb-6 text-on-surface">Key Amenities</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {property.features.map(feature => (
              <li key={feature} className="flex items-center gap-3 text-on-surface-variant">
                <Check className="w-5 h-5 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <h3 className="font-serif text-xl mt-12 mb-6 text-on-surface">Neighborhood Map</h3>
          <div className="w-full h-80 rounded-xl overflow-hidden border border-outline-variant/10">
            <iframe 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               loading="lazy" 
               allowFullScreen 
               referrerPolicy="no-referrer-when-downgrade" 
               src={`https://www.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`}>
            </iframe>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-surface-container-low p-8 rounded-xl sticky top-32 border border-outline-variant/10">
            <h3 className="font-serif text-2xl mb-4 text-on-surface">Interested?</h3>
            <p className="text-sm text-on-surface-variant mb-8">Schedule a private viewing or request the detailed brochure from our concierge.</p>
            <div className="flex flex-col gap-4">
              <Button href="/contact" variant="primary" className="w-full">Schedule Viewing</Button>
              <a href="/brochure.pdf" download className="w-full">
                <Button variant="secondary" className="w-full pointer-events-none">Download Brochure</Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
