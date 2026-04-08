"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="w-full min-h-screen bg-surface">
      <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto min-h-screen">
        {/* Hero Title Section */}
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-on-surface leading-tight mb-6">
            Terms of Engagement
          </h1>
          <p className="text-xl font-sans text-on-surface-variant leading-relaxed">
            Defining the standard of our professional relationship.
          </p>
          <div className="mt-12 h-px w-24 bg-primary"></div>
        </motion.header>

        {/* Main Content Area with Editorial Layout */}
        <div className="grid md:grid-cols-[280px_1fr] gap-16 items-start">
          
          {/* Sidebar Navigation */}
          <aside className="hidden md:block sticky top-32">
            <nav className="space-y-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6 block">Quick Navigation</span>
                <ul className="space-y-4 font-sans font-semibold text-sm">
                  <li><Link className="text-primary hover:text-primary transition-colors" href="#acceptance">Acceptance</Link></li>
                  <li><Link className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#site-use">Use of Site</Link></li>
                  <li><Link className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#intellectual-property">Intellectual Property</Link></li>
                  <li><Link className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#liability">Limitation of Liability</Link></li>
                  <li><Link className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#governing-law">Governing Law</Link></li>
                  <li><Link className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#contact">Legal Contact</Link></li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/10">
                <p className="text-xs text-on-surface-variant italic leading-relaxed">
                  Last Updated: October 24, 2024. UrbanNest Realty reserves the right to modify these terms without prior notice.
                </p>
              </div>
            </nav>
          </aside>

          {/* Terms Content */}
          <article className="space-y-20 font-sans text-on-surface-variant leading-loose">
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl scroll-mt-32" 
              id="acceptance"
            >
              <h2 className="text-3xl font-bold font-serif text-on-surface mb-8">1. Acceptance of Terms</h2>
              <p className="mb-6">
                By accessing the Architectural Curator platform, operated under the brand name UrbanNest Realty, you agree to be bound by these Terms of Engagement. These terms represent a legally binding agreement between you and UrbanNest Realty.
              </p>
              <p>
                If you do not agree with any part of these terms, you are prohibited from using our services or accessing the digital property showcases presented herein.
              </p>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl scroll-mt-32" 
              id="site-use"
            >
              <h2 className="text-3xl font-bold font-serif text-on-surface mb-8">2. Use of Site & Services</h2>
              <p className="mb-6">
                The content provided on this platform is for curated editorial and informational purposes regarding high-end real estate listings and architectural designs. 
              </p>
              <ul className="space-y-4 list-disc pl-5 marker:text-primary">
                <li>Users must be at least 18 years of age.</li>
                <li>Automated data scraping or harvesting is strictly prohibited.</li>
                <li>Any inquiries made through the "Inquire" function must be bona fide.</li>
              </ul>
            </motion.section>

            {/* Asymmetric Featured Block */}
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="relative scroll-mt-32" 
              id="intellectual-property"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold font-serif text-on-surface mb-8">3. Intellectual Property</h2>
                  <p className="mb-6">
                    All architectural renderings, photography, floor plans, and textual descriptions are the exclusive intellectual property of UrbanNest Realty or its partners. 
                  </p>
                  <p>
                    Reproduction, distribution, or commercial exploitation of these materials without express written consent constitutes a violation of the Copyright Act, 1957.
                  </p>
                </div>
                <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative">
                  <Image 
                    className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700" 
                    alt="dramatic architectural interior of a luxury minimalist home with golden hour sunlight hitting concrete walls and floor" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMyXDetWdfLMqRLCMBiH1uVHELkpMsDefnkqCyd5uEi-GTpxF78agBoBftMb_NwWY-WsilyO5fvjWd4UaxoNQHDlVyqnZQA_a2tz1g9SRMLdwdsZjYC7l68dEbiORz0toD31sHV388r1LSrkAQ581TcVI7UbAt-TvNseSWWJQEEWc-4xDq8lWjIgt80_NSLG0Z6TKRAaaBfErHPZ4SggOu7QRufvNnUCEQJd5fHzV4oomrFYuWG6o0Rplr33u7r4RYfTUrFPbXzqc"
                    fill
                  />
                </div>
              </div>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="bg-surface-container-low p-12 rounded-xl scroll-mt-32 border border-white/5" 
              id="liability"
            >
              <h2 className="text-3xl font-bold font-serif text-on-surface mb-8">4. Limitation of Liability</h2>
              <p className="mb-6">
                UrbanNest Realty provides these listings on an "as-is" basis. While we strive for architectural precision, we do not warrant that property descriptions or images are free of error. 
              </p>
              <p>
                To the maximum extent permitted by law, UrbanNest Realty shall not be liable for any indirect, incidental, or consequential damages resulting from your use of the site or the reliance upon the architectural data provided.
              </p>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl scroll-mt-32" 
              id="governing-law"
            >
              <h2 className="text-3xl font-bold font-serif text-on-surface mb-8">5. Governing Law & Jurisdiction</h2>
              <p className="mb-6">
                These Terms of Engagement are governed by and construed in accordance with the <strong className="text-white">Laws of India</strong>. 
              </p>
              <div className="p-8 border-l-4 border-primary bg-surface-container-high/50 rounded-r-xl">
                <p className="text-on-surface italic font-serif">
                  "Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra."
                </p>
              </div>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="pt-12 border-t border-outline-variant/20 scroll-mt-32" 
              id="contact"
            >
              <h2 className="text-3xl font-bold font-serif text-on-surface mb-8">Legal Inquiries</h2>
              <p className="mb-8">
                For all legal correspondence regarding these terms or intellectual property rights, please contact our counsel:
              </p>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex items-center space-x-4 bg-surface-container-high px-6 py-4 rounded-xl border border-white/5">
                  <Mail className="text-primary w-5 h-5" />
                  <span className="text-white font-bold tracking-wide">legal@urbannest.in</span>
                </div>
                <div className="flex items-center space-x-4 bg-surface-container-high px-6 py-4 rounded-xl border border-white/5">
                  <MapPin className="text-primary w-5 h-5" />
                  <span className="text-white font-bold tracking-wide">Nariman Point, Mumbai, India</span>
                </div>
              </div>
            </motion.section>
          </article>
        </div>
      </main>
    </div>
  );
}
