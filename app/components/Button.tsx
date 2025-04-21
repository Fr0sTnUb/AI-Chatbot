import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  icon?: ReactNode;
}

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  isLoading = false,
  icon,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: "bg-primary hover:bg-secondary text-white relative overflow-hidden",
    secondary: "bg-dark-100 hover:bg-dark-200 text-white",
    outline: "border border-primary/50 text-primary hover:bg-dark-300",
    ghost: "text-white hover:bg-dark-300",
    danger: "bg-accent-500 hover:bg-accent-400 text-white",
  };

  const sizeClasses = {
    sm: "text-xs px-3 py-1.5 rounded-md",
    md: "text-sm px-4 py-2.5 rounded-lg",
    lg: "text-base px-6 py-3 rounded-xl",
  };

  return (
    <button
      className={cn(
        "font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-opacity-50 flex items-center justify-center",
        variant === "primary" ? "pearl-effect" : "",
        variantClasses[variant],
        sizeClasses[size],
        isLoading && "opacity-70 cursor-not-allowed",
        className
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      <span className="relative z-10 flex items-center">
        {isLoading ? (
          <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : icon ? (
          <span className="mr-2">{icon}</span>
        ) : null}
        {children}
      </span>
    </button>
  );
} 