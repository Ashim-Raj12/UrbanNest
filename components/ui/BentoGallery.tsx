import Image from "next/image";

interface BentoGalleryProps {
  images: string[];
}

export default function BentoGallery({ images }: BentoGalleryProps) {
  if (images.length < 3) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full h-[600px] mb-12">
      <div className="md:col-span-8 h-full relative rounded-xl overflow-hidden bg-surface-container-high group">
        <Image 
          src={images[0]} 
          alt="Main Property View" 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105" 
        />
      </div>
      <div className="md:col-span-4 flex flex-col gap-4 h-full">
        <div className="flex-1 relative rounded-xl overflow-hidden bg-surface-container-high group">
          <Image 
            src={images[1]} 
            alt="Secondary View" 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105" 
          />
        </div>
        <div className="flex-1 relative rounded-xl overflow-hidden bg-surface-container-high group">
          <Image 
            src={images[2]} 
            alt="Detail View" 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105" 
          />
        </div>
      </div>
    </div>
  );
}
