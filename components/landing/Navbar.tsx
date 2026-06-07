"use client";

import Image from "next/image";
import { useState } from "react";
import { assets, brand, navItems } from "@/lib/landing-content";
import { PremiumButton, WhatsAppCtaIcon } from "./PremiumButton";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        style={{ width: "calc(100vw - 2rem)" }}
        className="mx-auto flex max-w-full items-center justify-between rounded-[2.25rem] border border-[#1F1F1F]/10 bg-white px-5 py-4 shadow-[0_18px_55px_rgba(31,31,31,0.08)] backdrop-blur-xl sm:px-6 lg:max-w-6xl lg:rounded-full lg:bg-[#F2F0EF]/90 lg:px-4 lg:py-3 lg:shadow-[0_18px_55px_rgba(31,31,31,0.08)]"
      >
        <a href="#inicio" className="flex items-center gap-3" aria-label="Ir para o início">
          <Image
            src={assets.logo}
            alt="Clarice Margon"
            width={168}
            height={41}
            loading="eager"
            className="h-auto w-36 sm:w-40 lg:w-40"
          />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[#1F1F1F]/68 transition hover:bg-white/60 hover:text-[#1F1F1F]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <PremiumButton href={brand.whatsappUrl} target="_blank" rel="noreferrer">
            <WhatsAppCtaIcon />
            Falar com a Clarice
          </PremiumButton>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#1F1F1F]/10 bg-white text-[#1F1F1F] shadow-[0_10px_24px_rgba(31,31,31,0.07)] sm:h-14 sm:w-14 lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className={`h-px w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      {open ? (
        <div className="mx-auto mt-3 max-w-6xl rounded-3xl border border-[#1F1F1F]/10 bg-[#F2F0EF]/96 p-3 shadow-[0_24px_65px_rgba(31,31,31,0.12)] backdrop-blur-xl lg:hidden">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-[#1F1F1F]/76 hover:bg-white/60"
              >
                {item.label}
              </a>
            ))}
            <PremiumButton
              href={brand.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              <WhatsAppCtaIcon />
              Falar com a Clarice
            </PremiumButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
