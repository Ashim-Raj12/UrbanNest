"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden px-6 min-h-[80vh] w-full">
      {/* Atmospheric Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-container-low to-surface opacity-90 z-10"></div>
        <Image 
          className="w-full h-full object-cover grayscale opacity-40 blur-sm scale-110" 
          alt="Minimalist architectural corridor with clean lines and dramatic shadows" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQf4cRFobJsPp5EQ9OACpPhPCeA9GFzhaTQRRxbRFifxLwIjL-FjjCRJgwW9cV_OKfj7ybXPEuYzG2MFI1GEpCDO_dGKtjpQecYO1-ixxSG8XRIQWs_-Ui2IXoKQKMwMxGcFJ2cBK_jRwKYwcedRjE2jXz-VGKzXKvLoM4aeZISgzMeuFv81VcOk1gibN5hKyElJMb_STh7vrn4H-PDTof_zqVJ8GN1CGpp5vI2SX-Visw-T_ZlfFsz8QQfIyVCU0hWDlwSReWpw8"
          fill
        />
      </div>

      {/* Content Canvas */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 max-w-4xl w-full text-center space-y-12 py-24"
      >
        {/* Error Indicator */}
        <div className="flex flex-col items-center space-y-4">
          <span className="font-sans text-primary text-xs tracking-[0.4em] uppercase opacity-80 font-bold">Ref. 404 — Void Status</span>
          <div className="h-24 w-[1px] bg-gradient-to-b from-primary to-transparent opacity-60"></div>
        </div>

        {/* Main Message */}
        <div className="space-y-6">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-on-surface leading-tight">
            Architectural <br/>
            <span className="italic font-normal text-gold-gradient">Departure</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            The page you are seeking has been moved or de-listed from our private collection. The space you intended to visit no longer exists in this dimension.
          </p>
        </div>

        {/* Bento-style Interaction Grid */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
          <Link 
            href="/"
            className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden rounded-lg bg-gradient-to-r from-primary to-primary-container active:scale-95 duration-150 transition-all shadow-2xl shadow-primary/10" 
          >
            <span className="relative z-10 font-sans font-bold text-black tracking-widest uppercase text-sm">Return Home</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>

          <Link 
            href="/properties"
            className="group inline-flex items-center justify-center px-10 py-5 rounded-lg border border-outline-variant/30 hover:bg-surface-container-high transition-all duration-300 active:scale-95 bg-surface/50" 
          >
            <span className="font-sans text-on-surface font-semibold tracking-widest uppercase text-sm mr-2">Explore Properties</span>
            <ArrowRight className="text-primary w-5 h-5 scale-90 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Decorative Coordinate */}
        <div className="pt-24 opacity-40 flex justify-between items-end w-full border-t border-outline-variant/20 px-4">
          <div className="text-left hidden md:block text-on-surface-variant">
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold">Coordinate</p>
            <p className="font-sans text-sm">40.7128° N, 74.0060° W</p>
          </div>
          <div className="text-right hidden md:block text-on-surface-variant">
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold">Archive</p>
            <p className="font-sans text-sm">Vol. 2024.04</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
