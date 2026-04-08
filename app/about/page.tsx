"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Compass, ShieldCheck, Zap, History, Globe, PenTool } from "lucide-react";

export default function About() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-surface overflow-hidden">
      {/* Hero Section */}
      <header className="relative h-[80vh] min-h-[600px] flex items-center pt-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image 
            className="w-full h-full object-cover grayscale-[40%] opacity-60" 
            alt="Ultra-modern minimalist living room with floor-to-ceiling windows, dramatic evening lighting, and high-end marble textures with architectural shadows" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA45UghEtt9tecJOTIpW2vSlsqhMymcslRim9lZr6Navt-qNMuwMwuGp-4daG8ET2U8BXsXyekZuDrCsUMSHyvSCet051epaaKvn_esXAfYFYcfPLwldgo1VfArf9imLSEFTHc-PaCNZpmEd8GxCVFwfI49-u2KSB1rJJwPzpxaiALs_AjQhJILGvbi_9_WGzaSkBdLvNDp6N04AvR5xbQ6fHCw1OyfQCFwuiVX5OzIwXFRsVeDkLp_JfR5mCpfY9RIlGHwp2V4buY"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-7xl mx-auto px-8 w-full"
        >
          <div className="max-w-3xl">
            <span className="text-[10px] text-primary tracking-[0.3em] uppercase mb-6 block font-bold">Architectural Curators</span>
            <h1 className="font-serif text-5xl md:text-8xl font-bold leading-[1.1] mb-8 text-on-surface">
              Defining the <br/><span className="italic text-gold-gradient">New Standard</span>
            </h1>
            <p className="text-on-surface-variant max-w-xl leading-relaxed text-lg">
              UrbanNest is more than a real estate firm. We are curators of space, light, and form, connecting visionaries with homes that resonate with their ambition.
            </p>
          </div>
        </motion.div>
      </header>

      {/* Our Story Section (Asymmetrical Layout) */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-32 px-8 max-w-7xl mx-auto bg-surface w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <h2 className="font-serif text-4xl mb-8 font-bold text-white">Our Story</h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed">
              <p>Founded on the principle that architecture is the silent narrator of our lives, UrbanNest began a decade ago with a singular focus: to bridge the gap between traditional Indian aesthetics and modern global expression.</p>
              <p>We don't just sell properties; we facilitate the acquisition of legacies across India's most prestigious pin codes. Our team spends hundreds of hours vetting every listing to ensure it meets our strict criteria for material honesty and design integrity.</p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary font-serif mb-1">500+</div>
                <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Properties Sold</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary font-serif mb-1">10+</div>
                <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="relative">
              <div className="relative rounded-xl w-full h-[600px] overflow-hidden">
                <Image 
                  className="object-cover" 
                  alt="Close-up of modern concrete and glass architecture with sharp angular shadows and warm evening glow hitting the edges" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbyI96swBAkalExQvuyPn_jIOU9BMvcGIC27rS3AXmmrqsbchqkqEZCWIovF6tbRebKnIMsBaPBYNwNn9oqG9L0i-1K4LKrSLSUXHO02kgPbsnk7oloNxmvKwcx4_Rd4Rrkkg1UxHPvVZZrnGe2l6kyWf13VQA2wWtwEQNEyibeEaDmcv1YyjFR11QHVgWDc1rqTuGRXqFHPj9WKpQuEaeDpSF83lktoTOKitdBMM3R35qvC6eWx6KxyDfECmMyG6h6nPQfKlVrXg"
                  fill
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-surface-container-high p-8 hidden md:block max-w-xs shadow-2xl border border-white/5 rounded-xl">
                <PenTool className="text-primary w-8 h-8 mb-4" />
                <p className="text-sm italic leading-relaxed text-on-surface">Founded on the principle that architecture is the silent narrator of our lives, UrbanNest began a decade ago with a singular focus: to bridge the gap between traditional Indian aesthetics and modern global expression.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Values (Bento Grid) */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-32 bg-surface-container-low w-full relative z-10"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">Core Principles</span>
              <h2 className="font-serif text-5xl mt-2 font-bold text-white">Mission & Values</h2>
            </div>
            <p className="max-w-sm text-on-surface-variant text-sm leading-relaxed">The foundations upon which we build every client relationship and select every architectural masterpiece.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 auto-rows-fr h-auto md:h-[600px]">
            {/* Integrity */}
            <div className="md:col-span-2 md:row-span-1 bg-surface-container-high rounded-xl p-10 flex flex-col justify-between group hover:bg-surface-bright transition-all duration-300 border border-white/5">
              <ShieldCheck className="text-primary w-8 h-8" />
              <div>
                <h3 className="text-2xl font-serif mb-4 text-white font-bold">Uncompromising Integrity</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">We refuse to cut corners, maintaining strict vetting protocols for every property.</p>
              </div>
            </div>
            {/* Curation */}
            <div className="md:col-span-1 md:row-span-2 bg-[#f2ca50] rounded-xl p-10 flex flex-col justify-between shadow-2xl">
              <Zap className="text-black w-8 h-8" />
              <div>
                <h3 className="text-2xl font-serif mb-4 text-black font-bold">Bespoke Curation</h3>
                <p className="text-black/80 text-sm leading-relaxed font-medium">Every property in our portfolio is hand-selected. If it doesn't move the soul, it doesn't make the list.</p>
              </div>
            </div>
            {/* Innovation */}
            <div className="md:col-span-1 md:row-span-1 bg-surface-container-high rounded-xl p-10 flex flex-col justify-between border border-white/5">
              <Globe className="text-primary w-8 h-8" />
              <div>
                <h3 className="text-xl font-serif mb-2 text-white font-bold">Technological Edge</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Utilizing advanced spatial imaging and market analytics.</p>
              </div>
            </div>
            {/* Legacy */}
            <div className="md:col-span-2 md:row-span-1 bg-surface-container-lowest rounded-xl p-10 flex flex-col justify-between border border-white/10 shadow-inner">
              <History className="text-primary w-8 h-8" />
              <div>
                <h3 className="text-2xl font-serif mb-4 text-white font-bold">Built for Legacy</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">We focus on enduring value. Our goal is to find you a home that appreciates as both an asset and an heirloom.</p>
              </div>
            </div>
            {/* Global Reach */}
            <div className="md:col-span-1 md:row-span-1 bg-surface-container-high rounded-xl p-10 flex flex-col justify-between border border-white/5">
              <Compass className="text-primary w-8 h-8" />
              <div>
                <h3 className="text-xl font-serif mb-2 text-white font-bold">Global Perspective</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Architecture knows no borders. We find aesthetics everywhere.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Team Members Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-32 bg-surface w-full"
      >
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-serif text-5xl mb-20 text-center font-bold text-white">The Curators</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Member 1 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[4/5] rounded-xl border border-white/5">
                <Image 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt="Professional portrait of a middle-aged male executive in a charcoal tailored suit, soft studio lighting, architectural background" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNgEEB404L491g6ej2QEbKzk3q_X2yfEoIckGWkaya8w96StmhXJ78a0isLDDnyJz8iq0U9PGXjSe277ZkWtaNom0KY9cg7paxtBcuPIo4Dd3lPAoml8HXFZFWub0J8AMuRbg7UOnJl6JsYCah5guXIcc6vjMln3RjC-Moxn-yS95pCejRyn91nLTiYbW_h9dQIPXOeruRyOF8SqK318l9YH_nCZ1Feh0sJlb9xjTGo8weJuSaRLte7VgNl42giERV-RnAmF24Omc"
                  fill
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-xl font-serif font-bold mb-1 text-white group-hover:text-primary transition-colors">Vikram Malhotra</h3>
              <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-4">Founder & Principal</p>
              <p className="text-on-surface-variant text-sm leading-relaxed">A veteran in heritage restoration and modern architecture with over 15 years in the Indian luxury real estate sector.</p>
            </div>
            {/* Member 2 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[4/5] rounded-xl border border-white/5">
                <Image 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt="Professional portrait of a sophisticated woman in modern business attire, warm lighting, minimalist office setting" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDftMz7hcHHfiH9WCkwP5baJrfrLxKh3OniwZO0WOTDzKyne8LQvof6qgtV6FF_QtdyDAfhvKl5iqxKZgXpV2PDHNodAACr1ZJOxRkzoYPI1j8rg5IIZNbXvkueH4pU5Lxegxv14j0t9oZhQ6n0TMxE7UmuRC1n3L6jtTxtXiNzMcGNdEUYttM1QvHVYKkUV26Oca7I9mWrhPHkNBbRMmnvQTRi1L2iZhVc2WxQqS2rjsx31412WLxSOWQ10-rKG6O4xBVpsnc3bp0"
                  fill
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-xl font-serif font-bold mb-1 text-white group-hover:text-primary transition-colors">Ananya Sharma</h3>
              <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-4">Lead Design Consultant</p>
              <p className="text-on-surface-variant text-sm leading-relaxed">Expert interior architect specializing in blending contemporary luxury with Vaastu-compliant design principles.</p>
            </div>
            {/* Member 3 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[4/5] rounded-xl border border-white/5">
                <Image 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt="Professional portrait of a young male agent, smart casual attire, modern glass building in the background" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcfmWpcRC1pRq2BfPc7fE1xSsvHv-P2wmEnKxreAJz-99Q7sE1Oh9tqPSom0wyRNy4PgqzQrvD00tIzgRPHKiJmjWURhwNNjcvvWsCm6qqXsKRGgP7TsF1aLMETuseubl2B7JJKu3ScAaML8phJ10v3gDIHLAhUQeThY4kqvGeeewHmqjQecYWpmWsvRjCcVvaI_cvK99QEMBotWUhWyDdpDLT6cZVXWN0TwlUrfXdxoUaCKjEvHjRq4yhbuekjLMyvsF36dCKXQk"
                  fill
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-xl font-serif font-bold mb-1 text-white group-hover:text-primary transition-colors">Arjun Kapoor</h3>
              <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-4">Acquisitions Director</p>
              <p className="text-on-surface-variant text-sm leading-relaxed">Specialist in identifying high-growth luxury markets across Mumbai, Delhi NCR, and Bengaluru's most sought-after enclaves.</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
