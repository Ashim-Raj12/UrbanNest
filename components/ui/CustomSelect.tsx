import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function CustomSelect({ 
  label, 
  options, 
  value, 
  onChange,
  variant = "transparent"
}: { 
  label: string; 
  options: string[]; 
  value: string; 
  onChange: (v: string) => void;
  variant?: "transparent" | "solid";
}) {
  const [isOpen, setIsOpen] = useState(false);
  
  const containerClass = variant === "solid" 
    ? "relative w-full bg-surface-container-high rounded-xl py-4 px-6 flex flex-col text-left transition-all"
    : "relative flex-1 px-4 py-3 flex flex-col text-left min-w-[150px]";

  return (
    <div className={containerClass}>
      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-1">{label}</span>
      <div 
        className="w-full bg-transparent border-none text-on-surface p-0 font-medium cursor-pointer flex justify-between items-center outline-none"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        <span>{value}</span>
        <ChevronDown size={14} className={`text-zinc-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-zinc-900 border border-white/10 rounded-lg shadow-2xl z-50 overflow-hidden">
            {options.map(opt => (
              <div 
                key={opt}
                className="px-4 py-3 hover:bg-zinc-800 cursor-pointer text-sm text-white transition-colors block"
                onClick={() => { onChange(opt); setIsOpen(false); }}
              >
                {opt}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
