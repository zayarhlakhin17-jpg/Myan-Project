/**
 * Design: Aurora Scholar — Button Component
 * Reusable button with size variants, smooth hover animations
 */
import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium text-sm transition-all duration-200 active:scale-[0.97]",
  {
    variants: {
      variant: {
        default: "btn-primary text-white",
        outline: "border border-white/20 text-gray-300 hover:text-white hover:border-blue-500/50 bg-transparent",
        ghost: "text-gray-400 hover:text-white hover:bg-white/5",
      },
      size: {
        sm: "h-8 px-4 text-xs",
        md: "h-10 px-5 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export function Button({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}
