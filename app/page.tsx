"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, ArrowRight, CheckCircle, Users, TrendingUp, Quote } from "lucide-react";
import { CustomSelect } from "@/components/ui/CustomSelect";

const TESTIMONIALS = [
  {
    text: "UrbanNest doesn't just sell houses; they curate lifestyles. The attention to detail in their property selection and the level of service we received was unparalleled in the luxury market.",
    name: "Aditya Birla-Vardhan",
    title: "Chairman & Philanthropist",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMuzJCGlwvLlPowLz8kLKAoDtxDNtQj2f9AgE184PT_K2BgQbZLFDDFO3wrBQ1w3x8gsQnM1zOEGfBzSgYwcJwMVdXiS-G2ciiZZk33rInnOG_0hcTycIbqWG2DuFr4uxOiua5iYAahnpsZhmbLUWSI9htiW02QYTF7NYDQRaGl3sgKgNb8AF1HtCOuNwRc7fwPufp1TzF7I6e8TmXUWV_gTTDFGFbPBIZB6CH9W_SwrUAatS4G2p4p-E_T1SxV1hzgpU-D47or4s"
  },
  {
    text: "Finding our family estate in Alibaug was seamless. Their off-market connections are truly exceptional and discreet. Highly recommended for busy professionals.",
    name: "Natasha Oberoi",
    title: "CEO, Style Luxe",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop"
  },
  {
    text: "A genuinely premium experience from start to finish. The bespoke showings respected my time and fully aligned with my architectural tastes. Truly the best in India.",
    name: "Vikram Singh",
    title: "Tech Entrepreneur",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2000&auto=format&fit=crop"
  },
  {
    text: "The curation of properties at UrbanNest is phenomenal. Every single home they showed me was an absolute masterpiece in design and location. Amazing team.",
    name: "Meera Rajput",
    title: "Creative Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function Home() {
  const router = useRouter();
  const [searchLocation, setSearchLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Any Price");
  const [propertyType, setPropertyType] = useState("Any Type");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="w-full bg-surface text-on-surface">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj2htv5e8Wli26LurUngfe81li9Z-ji0NrkDuwlil19vIzpMRNOUr3b7Z3pkqR0R5jDMls2TuRBiTKAgMimtf8YRIYi-DHaORts6UblRy7aQmosYlLaZon9ATBXSerzxmElAtCUAAAYldwlj8RcdJqJ56db2n5cMDHfaA0buVdyLcdMcsqV85IufIsJEzb5zooUa1VXh93kObfXoQhtZW6BL6NcuE04xr3CUNDUE_jQ1KUI1dWpLXU3orYPcHCeQRdDunxqxaonXQ"
            alt="ultra-modern luxury architectural villa"
            fill
            className="w-full h-full object-cover brightness-[0.4]"
            priority
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-50 text-center px-6 max-w-5xl"
        >
          <h1 className="font-serif text-5xl md:text-8xl font-bold text-on-surface mb-6 tracking-tight leading-[1.1]">
            Find Your <span className="text-primary italic">Dream</span> Home
          </h1>
          <p className="font-sans text-xl md:text-2xl text-on-surface-variant mb-12 max-w-2xl mx-auto font-light">
            Discover premium properties in prime locations, curated for those who appreciate architectural excellence.
          </p>
          
          {/* Search Bar */}
          <div className="bg-[#131313]/70 backdrop-blur-xl p-2 md:p-4 rounded-xl shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row gap-2 border border-white/5">
            <div className="flex-1 px-4 py-3 flex flex-col text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-1">Location</span>
              <input 
                className="bg-transparent border-none text-on-surface focus:ring-0 p-0 placeholder:text-zinc-600 font-medium outline-none" 
                placeholder="e.g. South Delhi" 
                type="text" 
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
            </div>
            <div className="w-px bg-outline-variant/20 hidden md:block my-2" />
            <div className="w-px bg-outline-variant/20 hidden md:block my-2" />
            <CustomSelect 
              label="Price Range" 
              options={["Any Price", "₹5 Cr - ₹15 Cr", "₹15 Cr - ₹50 Cr", "₹50 Cr+"]}
              value={priceRange}
              onChange={setPriceRange}
            />
            <div className="w-px bg-outline-variant/20 hidden md:block my-2" />
            <CustomSelect 
              label="Property Type" 
              options={["Any Type", "Luxury Villa", "Penthouse", "Heritage Estate"]}
              value={propertyType}
              onChange={setPropertyType}
            />
            <button 
              onClick={() => router.push(`/properties?location=${encodeURIComponent(searchLocation)}`)}
              className="bg-gold-gradient text-on-primary px-10 py-4 font-bold rounded-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all z-10"
            >
              <Search className="w-5 h-5" />
              SEARCH
            </button>
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] uppercase tracking-widest font-sans">Scroll to Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* Featured Properties Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-32 px-12 max-w-[1536px] mx-auto bg-surface"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Curated Collection</span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold leading-tight">Featured Masterpieces</h2>
          </div>
          <Link className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-bold tracking-wide group" href="/properties">
            VIEW ALL PROPERTIES 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto">
          {/* Large Card */}
          <Link href="/properties/the-azure-estate" className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low h-[600px] block">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSGwga2kO5VPWrbyTmll9g7drJp_1AqKfUvaNGxzcHNLAQBF9b5CIgRmUveOsfXULqZC8Ja4ZY3R1GLmhSyLvzzvLUABgdz6ZkWX8DFMIyeiJNpJFWbURMHrwSOND7BEoeRRSwkQDq6xMdZQ4UEI-Nb6-UXA71ptqghYsXqSLKoQ2uO84v4jJl3KbkF_uuncUaVuf7--hIFS0_a_rI4ruLJUcvfGiFRKP9avorRRT6MjriyEnMqhmlx4LmQLmOVjrRODRUy0llcqM" 
              alt="expansive luxury waterfront mansion" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-10 w-full">
              <div className="flex justify-between items-end">
                <div>
                  <span className="bg-primary/20 text-primary text-[10px] font-bold tracking-widest px-3 py-1 rounded-full backdrop-blur-md mb-4 inline-block">WATERFRONT</span>
                  <h3 className="font-serif text-3xl font-bold text-white">The Azure Estate</h3>
                  <p className="text-zinc-400 mt-2 font-light flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> Alibaug, Maharashtra
                  </p>
                </div>
                <div className="text-right">
                  <span className="block text-primary text-2xl font-bold font-serif">₹45 Cr</span>
                  <div className="flex gap-4 mt-2 text-zinc-300 text-sm">
                    <span>6 Bed</span>
                    <span>8 Bath</span>
                    <span>12,000 sqft</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Vertical Stack */}
          <div className="md:col-span-4 flex flex-col gap-8 h-[600px]">
            {/* Small Card 1 */}
            <Link href="/properties/skyline-penthouse" className="group relative overflow-hidden rounded-xl bg-surface-container-low flex-1 h-full block">
              <div className="absolute inset-0">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuApij7Yml5i72YeFAdR38d3Jv4d-WwEcQtTiPIsa7G_AxKSdgGHu160ICcd_wMJkZSgZpvLTYFnCvlhpE5vBdXoI66R3E6-1uGr8ePocFunjNY3l8ePnWsPIlgYDl7iYz148J6-UyOOIJi3absGRm43hfIKvPgm6A6pvUI2S5zMPkFcROxtXuDmQQsg7dpQHuViR6vuqxZmzbPMSAsvC8xbGl1WevYbGRn2lnVIqIUgDsuXaooP2B3WsYZrbtK8TyPreOrRGfYeaZU" 
                  alt="modern minimalist interior of a penthouse" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-6 z-10 w-full">
                <h3 className="font-serif text-xl font-bold text-white">Skyline Penthouse</h3>
                <div className="flex justify-between items-end">
                  <p className="text-zinc-400 text-sm mt-1">Worli, Mumbai</p>
                  <p className="text-primary font-bold font-serif">₹28 Cr</p>
                </div>
              </div>
            </Link>

            {/* Small Card 2 */}
            <Link href="/properties/the-onyx-residence" className="group relative overflow-hidden rounded-xl bg-surface-container-low flex-1 h-full block">
              <div className="absolute inset-0">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb49bo-W0CfoA0iFyDsrnAtRBnBBVfBxYbFKfGIv9TBAVH95b3tnUR-MW95o79JXuwhG54xHTbGRgIgCZGrCJrzACdc1Frb5Z9d9CGqdlpgs5aaJ_E9lzkkJhD8Lgwe-iW9WfZqkoWm7YYfdz4OMhyDkT7-xGERgVoTCJMOK-XlT0kljmbEimtWxIbm3YWtQBNQMIMaxNIEJriAiYO4nvEjYcitl1Sl43c0DLLt3i1qTg3bV8iK9ogTmQz5IqrO1xFzwxehety2BQ" 
                  alt="luxury modern kitchen with marble island" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-6 z-10 w-full">
                <h3 className="font-serif text-xl font-bold text-white">The Onyx Residence</h3>
                <div className="flex justify-between items-end">
                  <p className="text-zinc-400 text-sm mt-1">Jubilee Hills, Hyderabad</p>
                  <p className="text-primary font-bold font-serif">₹18.5 Cr</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-32 bg-surface-container-low"
      >
        <div className="max-w-[1536px] mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 border border-primary/20 -z-10" />
              <div className="relative z-10 w-full h-[600px] rounded-xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVE7rZ9kLUkXsE8BY0PyUnywEtSiOrW3QV6TF_EjUv6Eskc43-BP8CzLhWuIL2q7EDVO3ktjJVxzoSe178pO5iuwqoZrIB4svQqM6EbCmF7PCJwgabgy1_wmvS6ChYnqVWKQ8geNyafGysJ_4O4kUXhp7q3zSHTE1VIMoidRT4es1viGoh2-agUlVMivVLyrQc1ZbW6Y3O09Ed921dp82GLsHAb0ljbkBc5Lfx5XaoVzpdB8QmYh0sPvqdvfuu2JmFrqKomuhMj9g" 
                  alt="detailed close-up of high-end architectural materials" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-[#131313]/90 backdrop-blur-xl p-8 rounded-xl z-20 shadow-2xl border border-white/5 max-w-xs">
                <span className="text-5xl font-serif font-bold text-primary block mb-2">25+</span>
                <p className="text-on-surface font-semibold tracking-wide">Years of Curating Premium Architectural Spaces</p>
              </div>
            </div>

            <div>
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">The Distinction</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 leading-tight">Elevating the Standard of Modern Luxury</h2>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-surface border border-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold mb-2">Architectural Integrity</h4>
                    <p className="text-on-surface-variant font-light">We exclusively represent properties that demonstrate superior craftsmanship and unique design philosophy.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-surface border border-primary/20 flex items-center justify-center text-primary">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold mb-2">Concierge Experience</h4>
                    <p className="text-on-surface-variant font-light">Our dedicated team provides a bespoke transition service, from private viewings to architectural consulting.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-surface border border-primary/20 flex items-center justify-center text-primary">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold mb-2">Market Exclusivity</h4>
                    <p className="text-on-surface-variant font-light">Gain access to off-market listings and private portfolios before they reach the general luxury market.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Slider */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-32 bg-surface"
      >
        <div className="max-w-5xl mx-auto px-12 text-center">
          <Quote className="w-16 h-16 text-primary/30 mb-8 mx-auto" />
          <div className="relative overflow-hidden min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <p className="font-serif text-2xl md:text-3xl italic leading-relaxed text-on-surface mb-12 max-w-4xl mx-auto">
                  "{TESTIMONIALS[currentTestimonial].text}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Image 
                    className="rounded-full object-cover border-2 border-primary h-16 w-16" 
                    alt={`portrait of ${TESTIMONIALS[currentTestimonial].name}`} 
                    src={TESTIMONIALS[currentTestimonial].image}
                    width={64}
                    height={64}
                  />
                  <div className="text-left">
                    <span className="block font-bold text-on-surface">{TESTIMONIALS[currentTestimonial].name}</span>
                    <span className="text-primary text-sm uppercase tracking-widest font-bold">{TESTIMONIALS[currentTestimonial].title}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-2 mt-12">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`transition-all duration-300 ${
                  currentTestimonial === idx 
                    ? "w-12 h-1 bg-primary" 
                    : "w-8 h-1 bg-surface-container-high hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-32 px-12"
      >
        <div className="max-w-[1536px] mx-auto relative rounded-3xl overflow-hidden bg-surface-container-high">
          <div className="absolute inset-0 z-0">
            <Image 
              className="object-cover opacity-30 brightness-50" 
              alt="aerial view of a luxury residential estate pool at night" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1B2g1W7tiHyk-sVbEU6QK9SVQ919A9sC4JfZLkjXCyrZy5R3hO7EnWmL6gu17Jn4cMZEcQKUSB4Twu8iEpzPiedBW-e2U7wRiNwka3ZMHadQXjAA2DcsYQUlEnfT39c4nnqESFMZbzJzHLnAS1wQx606HzemWhhO5KUWofzho0GCFvTRb8_0-6yC1zkys8KCnsk1i1KC1maRRZY15DFuTiLPMWCw3BbCp8V0pA4mBab6VU-6B1qARYr0WTFVo-m8AxFcI_R11abE"
              fill
            />
          </div>
          <div className="relative z-10 p-16 md:p-32 text-center flex flex-col items-center">
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8 max-w-3xl leading-tight text-white">
              Ready to Secure Your Piece of Architectural Excellence?
            </h2>
            <p className="text-zinc-300 text-xl mb-12 max-w-xl font-light">
              Join our exclusive circle of homeowners and gain access to the world's most prestigious residences.
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              <button className="bg-gold-gradient text-on-primary px-12 py-5 font-bold rounded-lg hover:scale-105 transition-transform text-lg">
                Book a Private Visit
              </button>
              <button className="bg-transparent border border-outline-variant/30 text-on-surface px-12 py-5 font-bold rounded-lg hover:bg-white/5 transition-colors text-lg">
                Speak with a Consultant
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
