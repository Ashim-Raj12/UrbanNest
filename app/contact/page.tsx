"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, Compass } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CustomSelect } from "@/components/ui/CustomSelect";

export default function Contact() {
  const [propertyOfInterest, setPropertyOfInterest] = useState("Other Architectural Inquiry");

  return (
    <main className="w-full max-w-7xl mx-auto px-8 py-24 min-h-screen">
      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16 text-center md:text-left"
      >
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-6 text-gold-gradient">Inquiries & Curated Tours</h1>
        <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed mx-auto md:mx-0">
          Experience architectural excellence first-hand. Our consultants are ready to assist you in securing your next legacy estate.
        </p>
      </motion.header>

      {/* Main Layout: Asymmetric Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-16"
      >
        {/* Contact Form Section */}
        <div className="lg:col-span-7">
          <section className="bg-[#131313]/70 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-xl shadow-2xl relative z-20">
            <h2 className="text-2xl font-serif font-bold mb-10 text-white">Send a Private Inquiry</h2>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-primary uppercase tracking-widest pl-1">Full Name</label>
                  <input className="w-full bg-surface-container-high border-none rounded-xl py-4 px-6 text-on-surface focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-zinc-500 outline-none" placeholder="Julianne Sterling" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-primary uppercase tracking-widest pl-1">Email Address</label>
                  <input className="w-full bg-surface-container-high border-none rounded-xl py-4 px-6 text-on-surface focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-zinc-500 outline-none" placeholder="j.sterling@example.com" type="email" />
                </div>
              </div>
              
              <div className="w-full flex-col flex gap-2">
                   <div className="w-full">
                       <CustomSelect 
                         variant="solid"
                         label="Property of Interest" 
                         options={["The Obsidian Penthouse", "Golden Hour Manor", "Skyline Terrace", "Other Architectural Inquiry"]}
                         value={propertyOfInterest}
                         onChange={setPropertyOfInterest}
                       />
                   </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-primary uppercase tracking-widest pl-1">Message</label>
                <textarea className="w-full bg-surface-container-high border-none rounded-xl py-4 px-6 text-on-surface focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-zinc-500 resize-none outline-none" placeholder="Tell us about your requirements..." rows={5}></textarea>
              </div>

              <button className="bg-gold-gradient text-on-primary font-bold py-5 px-12 rounded-xl hover:scale-[0.98] transition-transform flex items-center justify-center gap-3 w-full md:w-auto" type="submit">
                Submit Inquiry
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </section>
        </div>

        {/* Sidebar Details */}
        <aside className="lg:col-span-5 space-y-12">
          {/* Location Details */}
          <div className="space-y-8 mt-4">
            <div className="group flex items-start gap-6">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-white font-serif font-bold text-xl mb-1">Global Headquarters</h4>
                <p className="text-on-surface-variant leading-relaxed">Level 7, Platina, G Block, BKC<br />Bandra East, Mumbai, Maharashtra 400051</p>
              </div>
            </div>

            <div className="group flex items-start gap-6">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-white font-serif font-bold text-xl mb-1">Private Line</h4>
                <p className="text-on-surface-variant font-sans">+91 22 6700 0000<br /><span className="text-sm opacity-60">Mon - Fri: 9:00 AM — 6:00 PM IST</span></p>
              </div>
            </div>

            <div className="group flex items-start gap-6">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-white font-serif font-bold text-xl mb-1">Concierge Email</h4>
                <p className="text-on-surface-variant font-sans">concierge@urbannest.realty</p>
              </div>
            </div>
          </div>

          {/* Dark Map Section */}
          <div className="rounded-xl overflow-hidden relative group aspect-video lg:aspect-square">
            <Image 
              alt="Mumbai Office Location Map" 
              className="w-full h-full object-cover grayscale brightness-50 contrast-125 transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkb-dbK7b2rnO5DaR66UnAAvIHd_gT3xVbZs5nRAD9GcSCp1MdNK8u1YEK3XfQ4ZysuxLsdjgnvpni8Dgfz-i-XHwa4THpGtAj-Ah6olL2BEn2IkHUHftIArO6B28F7W1BCa360y1Qn97ggeWbJKCDsof3TzMZzckrhxMqwWk_znPV36498soBwoa_j6s7At8FbE8huGepBeWpBegRy-nmHmkvbtS1iMSiE-m1G6gGUsFuBF91jQPiCHccI8keIt6vxzwJpTJcUNw"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#131313]/90 backdrop-blur-xl rounded-xl border border-white/5">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">+91 22 6700 0000<br /><span className="text-xs opacity-60">Mon - Fri: 9:00 AM — 6:00 PM IST</span></p>
                  <p className="text-white font-serif font-bold">Visit Mumbai Office</p>
                </div>
                <div className="bg-primary/10 p-3 rounded-full">
                  <Compass className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </aside>
      </motion.div>

      {/* Featured Property Teaser (Asymmetric/Bento Style) */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mt-32"
      >
        <h3 className="text-3xl font-serif font-bold text-white mb-12">While You Wait</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/properties/the-onyx-residence" className="md:col-span-2 relative h-96 rounded-xl overflow-hidden group block">
            <Image 
              alt="Luxury Estate" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-iElu1U7EXn71kBQtL3D55AW04Klgz6KeZ2fcUjeCA8wlVQ3peU17JHsoCKo5SxmHwnScG0T7wl0o5xvr9adIwOhb7L08xLSp6xXZKPsLfDQsgExxV1A4NJHuXXFsyQDEhPdoHdsAoQIWyKEjOpA6Ri5SLlnDR3rTFYBKO3pXpYIhrGumZjO0UJ7embIfaJbN6kqZsaeZIwgJyR0CKA5DE6pEmsEVcelRsFQd4XJvwfPM88-9zhJ-YYj7_mlNRzDBiOprsNDylJo"
              fill
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
            <div className="absolute bottom-8 left-8">
              <p className="text-primary font-bold tracking-widest uppercase text-xs mb-2">Exclusive Release</p>
              <h4 className="text-3xl font-serif text-white font-bold">The Onyx Residence</h4>
            </div>
          </Link>
          
          <div className="bg-surface-container-high rounded-xl p-10 flex flex-col justify-center border border-white/5">
            <h4 className="text-2xl font-serif font-bold text-white mb-4">View Full Portfolio</h4>
            <p className="text-on-surface-variant mb-8 leading-relaxed text-sm">Discover top curated architectural masterpieces across the globe inside our fully digital private catalog.</p>
            <Link className="text-primary font-bold flex items-center gap-2 group text-sm tracking-wide uppercase" href="/properties">
              Explore Listings 
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
