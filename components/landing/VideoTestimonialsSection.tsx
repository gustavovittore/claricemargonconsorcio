import Image from "next/image";
import { assets, brand } from "@/lib/landing-content";
import { PremiumButton, WhatsAppCtaIcon } from "./PremiumButton";
import { Reveal } from "./Reveal";

const videoHighlights = [
  {
    title: "Brasil + EUA",
    text: "Orientação para brasileiros no exterior",
    icon: "globe",
  },
  {
    title: "100% online",
    text: "Atendimento pelo WhatsApp",
    icon: "whatsapp",
  },
];

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path d="M9 7.2v9.6L16.4 12 9 7.2Z" fill="currentColor" />
    </svg>
  );
}

function CardIcon({ name }: { name: string }) {
  if (name === "globe") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-11 w-11">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3.8 12h16.4M12 3c2.3 2.5 3.4 5.5 3.4 9s-1.1 6.5-3.4 9M12 3c-2.3 2.5-3.4 5.5-3.4 9s1.1 6.5 3.4 9" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-11 w-11">
      <path d="M5.1 19.2 6 15.9A7.2 7.2 0 1 1 8.9 18l-3.8 1.2Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45" />
      <path d="M9.1 8.7c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.3 0 .5-.1.6l-.5.6c.8 1.4 1.9 2.4 3.3 3.1l.6-.7c.2-.2.4-.2.7-.1l1.5.7c.3.1.4.3.4.6v.4c0 .4-.2.7-.5.9-.5.3-1.1.5-1.7.4-3.2-.4-6.3-3.3-6.8-6.5-.1-.6.1-1.1.4-1.5Z" fill="currentColor" />
    </svg>
  );
}

function VideoFrame() {
  return (
    <div className="relative mx-auto rounded-[3.2rem] bg-[linear-gradient(135deg,#2A2119,#C89442_18%,#141414_32%,#4C3820_66%,#E2B464)] p-[7px] shadow-[0_34px_95px_rgba(31,31,31,0.24)]">
      <div className="rounded-[2.95rem] bg-[#101010] p-3">
        <div className="relative overflow-hidden rounded-[2.35rem] border border-white/10 bg-black">
          <div className="absolute left-1/2 top-4 z-20 h-8 w-32 -translate-x-1/2 rounded-full border border-white/8 bg-[#060606] shadow-[0_8px_22px_rgba(0,0,0,0.28)]">
            <span className="absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#27313A]" />
          </div>
          <video
            className="aspect-[9/16] h-auto w-full bg-black object-cover"
            controls
            playsInline
            preload="metadata"
          >
            <source src="/videos/depoimento-junior-pena-eua-01.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export function VideoTestimonialsSection() {
  return (
    <section id="depoimento-video" className="relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:py-28">
      <Image
        src={assets.videoTestimonialBackground}
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none -z-20 object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(242,240,239,0.7),rgba(255,252,247,0.28)_48%,rgba(242,240,239,0.72))]" />

      <div className="mx-auto grid max-w-[1260px] gap-11 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <Reveal className="mx-auto hidden w-full max-w-[410px] lg:block lg:max-w-[440px]">
          <VideoFrame />
        </Reveal>

        <Reveal delay={0.06} className="lg:pl-2">
          <p className="inline-flex items-center gap-3 rounded-full border border-[#E19D35]/55 bg-white/44 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#A86D22] shadow-[0_16px_44px_rgba(31,31,31,0.035)] backdrop-blur-xl">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[#E19D35] text-white">
              <PlayIcon />
            </span>
            Depoimentos em vídeo
          </p>
          <h2 className="mt-7 max-w-3xl font-serif text-[2.35rem] font-medium leading-[1.07] text-[#1F1F1F] sm:text-5xl lg:text-[4.35rem]">
            <span className="block">Histórias <span className="text-[#E19D35]">reais</span>.</span>
            <span className="block">Depoimentos <span className="text-[#E19D35]">reais</span>.</span>
          </h2>
          <div className="mt-7 h-px w-24 bg-[#E19D35]" />

          <div className="mx-auto mt-8 w-full max-w-[410px] lg:hidden">
            <VideoFrame />
          </div>

          <p className="mt-7 max-w-3xl text-[1.1rem] leading-8 text-[#1F1F1F]/68">
            O consórcio é uma estratégia inteligente para quem deseja construir patrimônio com planejamento e visão de longo prazo. Veja o depoimento de brasileiros que confiaram na orientação da Clarice Margon para investir no Brasil mesmo morando no exterior.
          </p>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {videoHighlights.map((item) => (
              <div
                key={item.title}
                className="flex min-h-[8.4rem] items-center gap-5 rounded-[1.35rem] border border-[#E3C892]/54 bg-white/58 p-5 shadow-[0_18px_54px_rgba(31,31,31,0.045)] backdrop-blur-xl"
              >
                <span className="shrink-0 text-[#D89324]">
                  <CardIcon name={item.icon} />
                </span>
                <div>
                  <p className="font-serif text-[1.72rem] font-medium leading-tight text-[#D89324]">{item.title}</p>
                  <p className="mt-2 text-[1rem] leading-7 text-[#1F1F1F]/66">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-[1.55rem] border border-[#E3C892]/55 bg-white/66 p-6 shadow-[0_22px_70px_rgba(31,31,31,0.06)] backdrop-blur-xl sm:p-8">
            <span className="font-serif text-6xl leading-none text-[#D89324]" aria-hidden="true">“</span>
            <p className="mt-2 max-w-3xl font-serif text-[1.55rem] leading-9 text-[#1F1F1F] sm:text-[1.8rem] sm:leading-10">
              “Clarice transmite segurança e clareza para quem está fora do Brasil e quer investir com mais tranquilidade.”
            </p>
            <div className="mt-7 h-px w-full bg-[#E19D35]/34" />
            <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-semibold text-[#1F1F1F]">Junior Pena</p>
                <p className="mt-1 text-[0.98rem] text-[#1F1F1F]/58">Estados Unidos</p>
              </div>
              <PremiumButton href={brand.whatsappUrl} target="_blank" rel="noreferrer" className="min-h-12 px-7">
                <WhatsAppCtaIcon />
                Fale com a Clarice
              </PremiumButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
