"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/properties" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-24 items-center justify-between px-8 md:px-16 bg-surface/70 backdrop-blur-xl border-b border-surface-container-low transition-colors duration-300">
      <Link href="/" className="flex items-center gap-2">
        <span className="font-serif text-2xl font-bold tracking-widest uppercase text-on-surface">
          Urban<span className="text-primary">Nest</span>
        </span>
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === link.href ? "text-primary" : "text-on-surface-variant"
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="hidden md:block">
        <Button href="/contact" variant="primary">Inquire Now</Button>
      </div>
      
      <button className="md:hidden flex flex-col gap-1.5 p-2">
        <span className="block w-6 h-0.5 bg-on-surface" />
        <span className="block w-6 h-0.5 bg-on-surface" />
        <span className="block w-4 h-0.5 bg-on-surface" />
      </button>
    </header>
  );
}
