"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, User, Monitor } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="w-full min-h-screen bg-surface">
      <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto min-h-screen">
        {/* Hero Section */}
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-serif text-on-surface">Privacy & Discretion</h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
            Our commitment to protecting your digital footprint and private data.
          </p>
          <div className="mt-12 h-px w-24 bg-primary"></div>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sidebar Navigation/TOC (Hidden on mobile) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit">
            <nav className="flex flex-col space-y-6">
              <Link className="text-primary font-bold border-l-2 border-primary pl-4 py-1" href="#compliance">Indian IT Act Compliance</Link>
              <Link className="text-on-surface-variant hover:text-primary transition-colors pl-4 py-1" href="#data-collection">Data Collection</Link>
              <Link className="text-on-surface-variant hover:text-primary transition-colors pl-4 py-1" href="#usage">How We Use Information</Link>
              <Link className="text-on-surface-variant hover:text-primary transition-colors pl-4 py-1" href="#cookies">Cookies & Tracking</Link>
              <Link className="text-on-surface-variant hover:text-primary transition-colors pl-4 py-1" href="#rights">Your Rights</Link>
            </nav>
          </aside>

          {/* Policy Content */}
          <div className="lg:col-span-9 space-y-24">
            
            {/* Compliance Notice Card */}
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="bg-surface-container-low p-8 md:p-12 rounded-xl border border-white/5 scroll-mt-32" 
              id="compliance"
            >
              <div className="flex items-start space-x-6">
                <div className="bg-primary/10 p-4 rounded-full">
                  <ShieldCheck className="text-primary w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-serif mb-4 text-white">Statutory Compliance: Information Technology Act, 2000</h2>
                  <p className="text-on-surface-variant leading-relaxed">
                    As an entity operating within India, UrbanNest Realty strictly adheres to the provisions of the <strong className="text-white">Information Technology Act, 2000</strong> and the <strong className="text-white">Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong>. We maintain rigorous standards for the collection, handling, and security of sensitive personal information.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Data Collection */}
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="scroll-mt-32" 
              id="data-collection"
            >
              <h2 className="text-3xl font-bold font-serif text-white mb-8 border-b border-outline-variant/15 pb-4">Data Collection</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-surface-container-high p-8 rounded-xl border border-white/5">
                  <User className="text-primary w-8 h-8 mb-4" />
                  <h3 className="text-xl font-bold font-serif text-white mb-3">Identity Information</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    We collect names, contact details, PAN, and Aadhaar (where required for property transactions) to facilitate high-value real estate acquisitions.
                  </p>
                </div>
                <div className="bg-surface-container-high p-8 rounded-xl border border-white/5">
                  <Monitor className="text-primary w-8 h-8 mb-4" />
                  <h3 className="text-xl font-bold font-serif text-white mb-3">Digital Interactions</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    IP addresses, browser types, and navigation behavior are analyzed anonymously to optimize our architectural viewing experience.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Usage */}
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="space-y-8 scroll-mt-32" 
              id="usage"
            >
              <h2 className="text-3xl font-bold font-serif text-white mb-8 border-b border-outline-variant/15 pb-4">How We Use Your Information</h2>
              <div className="text-on-surface-variant leading-loose space-y-6">
                <p>Your data serves as the foundation of a tailored luxury service. We utilize collected information for:</p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="flex items-center space-x-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Verifying legal eligibility for estate transactions under Indian Law.</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Personalizing residential portfolios based on your architectural preferences.</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Maintaining secure communication during high-stakes negotiations.</span>
                  </li>
                </ul>
              </div>
              
              {/* Decorative Imagery */}
              <div className="relative h-64 rounded-xl overflow-hidden mt-12 bg-surface-container-high">
                <Image 
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:opacity-100 transition-opacity duration-700" 
                  alt="luxury minimalist villa exterior with clean architectural lines and pool at twilight reflecting warm golden light" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC42_bFFArmJ0rWWekmn23-S_EVRvo0xnGGdEr3gFUjj1yKvQjHCfi8qzscaRh02MZa04O8JKBpaMIU1Suy0YCv_pKUL0FO0a6akyKQzY-UTfIkxcqWQV9i3LXajHI0peVv7ONCwtR5cwwEBhPEQPLolqhRGMA2uW45Gv3Z_tgmRf91nMkImqf40_n8zKOiSX3mUc20mlK0eqb4N33DQa-UUTbRMwUine32EXsz_-9Ja1nb0OtVU6UtvxqtHQC8ZJ_3LRAzHUBvrWg"
                  fill
                />
              </div>
            </motion.section>

            {/* Cookies */}
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-32" 
              id="cookies"
            >
              <div>
                <h2 className="text-3xl font-bold font-serif text-white mb-6">Cookies & Tracking</h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  UrbanNest uses essential and analytical cookies to ensure our digital gallery performs with precision. We do not use third-party tracking for advertising. 
                </p>
                <button className="text-primary font-bold tracking-widest text-[10px] uppercase border border-primary/30 px-6 py-3 rounded hover:bg-primary hover:text-on-primary transition-all">
                  Manage Cookie Preferences
                </button>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl grid grid-cols-2 gap-4 border border-white/5">
                <div className="p-4 bg-surface-container-high rounded-lg text-center border border-white/5">
                  <span className="block text-primary font-bold text-lg">99.9%</span>
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Secure Data Transit</span>
                </div>
                <div className="p-4 bg-surface-container-high rounded-lg text-center border border-white/5">
                  <span className="block text-primary font-bold text-lg">Strict</span>
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Zero Third-Party Sales</span>
                </div>
                <div className="p-4 bg-surface-container-high rounded-lg text-center border border-white/5">
                  <span className="block text-primary font-bold text-lg">256-bit</span>
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Encryption Standard</span>
                </div>
                <div className="p-4 bg-surface-container-high rounded-lg text-center border border-white/5">
                  <span className="block text-primary font-bold text-lg">ISO</span>
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Security Protocols</span>
                </div>
              </div>
            </motion.section>

            {/* Rights */}
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="bg-surface-container-lowest p-12 rounded-2xl border border-white/10 scroll-mt-32 shadow-2xl" 
              id="rights"
            >
              <h2 className="text-3xl font-bold font-serif text-white mb-8">Your Rights</h2>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                <div>
                  <h4 className="font-bold text-white mb-2">Right to Rectification</h4>
                  <p className="text-sm text-on-surface-variant">Update or correct inaccurate personal information within our records at any time via your concierge.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Data Portability</h4>
                  <p className="text-sm text-on-surface-variant">Request a copy of your personal data in a structured, commonly used digital format.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Erasure (Right to be Forgotten)</h4>
                  <p className="text-sm text-on-surface-variant">Request the deletion of your data once statutory retention periods under Indian tax law have elapsed.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Grievance Redressal</h4>
                  <p className="text-sm text-on-surface-variant">Access to our dedicated Grievance Officer as mandated by the IT Act, 2000 for swift resolution.</p>
                </div>
              </div>
            </motion.section>

          </div>
        </div>
      </main>
    </div>
  );
}
