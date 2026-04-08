import Image from "next/image";
import Link from "next/link";
import { Bed } from "lucide-react";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  imageUrl: string;
  featured?: boolean;
  features?: string[];
}

export default function PropertyCard({ id, title, location, price, imageUrl, featured, features }: PropertyCardProps) {
  const primaryFeature = features && features.length > 0 ? features[0] : "4 BHK";

  return (
    <Link href={`/properties/${id}`} className="group cursor-pointer block">
      <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 z-10 transition-colors group-hover:bg-primary/90">
          <p className="text-primary group-hover:text-on-primary font-bold text-sm tracking-tight transition-colors">{price}</p>
        </div>
        {featured && (
          <div className="absolute top-3 left-3 bg-surface/80 backdrop-blur rounded px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase text-primary border border-primary/20 z-10">
            Signature
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <h3 className="font-serif text-xl font-bold text-on-surface">{title}</h3>
        <p className="text-on-surface-variant text-sm font-medium">{location}</p>
        <div className="flex items-center gap-2 text-sm text-zinc-400 mt-3 pt-3 border-t border-white/5">
          <Bed className="w-4 h-4 text-primary" /> {primaryFeature}
        </div>
      </div>
    </Link>
  );
}
