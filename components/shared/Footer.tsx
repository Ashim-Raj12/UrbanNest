import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest pt-20 pb-10 px-8 md:px-16 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <span className="font-serif text-2xl font-bold tracking-widest uppercase text-on-surface block mb-6">
            Urban<span className="text-primary">Nest</span>
          </span>
          <p className="text-on-surface-variant text-sm max-w-md mb-8 leading-relaxed">
            Curating India's finest architectural estates. We provide an exclusive gateway to luxury living in South Mumbai, Bandra, and New Delhi.
          </p>
        </div>
        
        <div>
          <h4 className="font-serif text-on-surface font-semibold mb-6">Explore</h4>
          <ul className="flex flex-col gap-4 text-sm text-on-surface-variant">
            <li><Link href="/properties" className="hover:text-primary transition-colors">Portfolio</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Concierge</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-on-surface font-semibold mb-6">Contact</h4>
          <ul className="flex flex-col gap-4 text-sm text-on-surface-variant">
            <li>Bandra Kurla Complex, Mumbai, India</li>
            <li>+91 98200 12345</li>
            <li>curator@urbannest.in</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-surface-container/50 text-xs text-outline-variant flex justify-between">
        <p>&copy; {new Date().getFullYear()} UrbanNest Realty. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-on-surface transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-on-surface transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
