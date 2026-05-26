import Image from "next/image";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type PremiumButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function PremiumButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: PremiumButtonProps) {
  const styles = {
    primary:
      "border-[#E19D35] bg-[#E19D35] text-[#1F1F1F] shadow-[0_18px_45px_rgba(225,157,53,0.22)] hover:-translate-y-0.5 hover:bg-[#d9922f]",
    secondary:
      "border-[#1F1F1F]/15 bg-white/45 text-[#1F1F1F] hover:-translate-y-0.5 hover:border-[#E19D35]/70 hover:bg-white/75",
    ghost:
      "border-transparent bg-transparent text-[#1F1F1F] hover:text-[#9B651F]",
  };

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-5 text-sm font-semibold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E19D35] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F2F0EF] sm:px-6 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

export function WhatsAppCtaIcon() {
  return (
    <Image
      src="/icons/4/icon-whats-botão.png.png"
      alt=""
      width={18}
      height={18}
      aria-hidden="true"
      className="h-[18px] w-[18px] shrink-0 object-contain"
    />
  );
}
