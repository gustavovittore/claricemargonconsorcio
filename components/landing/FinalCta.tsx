import Image from "next/image";
import { assets, brand } from "@/lib/landing-content";
import { PremiumButton, WhatsAppCtaIcon } from "./PremiumButton";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section id="contato" className="relative isolate overflow-hidden px-4 pb-10 pt-20 sm:px-6 lg:pt-28">
      <Image
        src={assets.section09Background}
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none -z-20 object-cover object-center opacity-90"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(242,240,239,0.68),rgba(242,240,239,0.38)_48%,rgba(242,240,239,0.86))]" />

      <Reveal className="mx-auto max-w-[1180px] overflow-hidden rounded-[2.5rem] border border-[#E19D35]/28 bg-white/50 p-7 text-center shadow-[0_34px_95px_rgba(31,31,31,0.08)] backdrop-blur-xl sm:p-12 lg:rounded-[3rem] lg:p-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A86D22]">
          <span className="mx-3 text-[#E19D35]">â€¢</span>
          PrÃ³ximo passo
          <span className="mx-3 text-[#E19D35]">â€¢</span>
        </p>
        <div className="mx-auto mt-5 h-px w-20 bg-[#E19D35]" />
        <h2 className="mx-auto mt-8 max-w-3xl text-balance font-serif text-[2.55rem] font-medium leading-[1.08] text-[#1F1F1F] sm:text-5xl lg:text-[4rem]">
          Pronto para transformar seu planejamento em <span className="text-[#E19D35]">patrimÃ´nio?</span>
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-pretty text-xl leading-8 text-[#1F1F1F]/66">
          Fale com a Clarice e descubra qual estratÃ©gia de consÃ³rcio faz mais sentido para o seu objetivo.
        </p>
        <PremiumButton href={brand.whatsappUrl} target="_blank" rel="noreferrer" className="mt-10 min-h-14 px-8">
          <WhatsAppCtaIcon />
          Falar com a Clarice no WhatsApp
        </PremiumButton>
      </Reveal>
    </section>
  );
}
