import { cn } from "@/lib/utils";
import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "tertiary";
  href?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "primary", href, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium text-sm transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none px-6 py-3";
    
    const variants = {
      primary: "bg-gold-gradient text-on-primary hover:brightness-110 hover:shadow-[0_0_20px_rgba(242,202,80,0.3)]",
      secondary: "border border-outline-variant/15 text-on-surface hover:bg-surface-container-low hover:border-outline-variant/30",
      tertiary: "text-primary hover:text-primary-container px-0 py-0 uppercase tracking-widest text-xs",
    };

    const combinedClasses = cn(baseStyles, variants[variant], className);

    if (href) {
      return (
        <Link href={href} className={combinedClasses} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref as any} className={combinedClasses} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
