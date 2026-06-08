import Image from "next/image";
import { assets, testimonials } from "@/lib/landing-content";
import { Reveal } from "./Reveal";

function Stars() {
  return (
    <div className="flex gap-1.5 text-[#E19D35]" aria-label="Avaliação positiva">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className="text-sm">★</span>
      ))}
    </div>
  );
}

function QuoteMark({ small = false }: { small?: boolean }) {
  return (
    <span className={`font-serif font-semibold leading-none text-[#E19D35] ${small ? "text-4xl" : "text-6xl"}`} aria-hidden="true">
      “
    </span>
  );
}

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:py-28">
      <Image
        src={assets.section05Background}
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none -z-20 object-cover object-center opacity-90"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(242,240,239,0.8),rgba(242,240,239,0.42)_48%,rgba(242,240,239,0.86))]" />

      <div className="mx-auto max-w-[1260px]">
        <Reveal className="mx-auto max-w-5xl text-center">
          <p className="mx-auto inline-flex items-center gap-3 rounded-full border border-[#E19D35]/30 bg-white/42 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#A86D22] backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[#E19D35]" />
            Depoimentos institucionais
          </p>
          <h2 className="mt-7 text-balance font-serif text-[2.05rem] font-medium leading-[1.08] text-[#1F1F1F] sm:text-5xl lg:text-[4rem]">
            <span className="block sm:inline">Histórias reais de</span>{" "}
            <span className="block sm:inline">quem escolheu</span>{" "}
            <span className="block sm:inline"><span className="text-[#E19D35]">construir patrimônio</span></span>{" "}
            <span className="block sm:inline">com mais estratégia</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-xl leading-8 text-[#1F1F1F]/68">
            Relatos e experiências de clientes atendidos através da estrutura e consultoria do Grupo Vix Invest.
          </p>
          <div className="mx-auto mt-6 h-px w-20 bg-[#E19D35]" />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal
              key={item.name}
              delay={index * 0.035}
              className="relative flex min-h-[23rem] flex-col overflow-hidden rounded-[1.55rem] border border-[#D8C9B8]/72 bg-white/68 p-6 shadow-[0_20px_66px_rgba(31,31,31,0.055)] backdrop-blur-xl sm:p-7"
            >
              <div className="flex items-center gap-3">
                <QuoteMark small />
                <Stars />
              </div>
              <p className="mt-5 flex-1 text-[1.04rem] leading-8 text-[#1F1F1F]/70">“{item.quote}”</p>
              <div className="mt-6 h-px w-full bg-[#E19D35]/26" />
              <div className="mt-5">
                <p className="font-semibold text-[#1F1F1F]">{item.name}</p>
                  <p className="mt-2 text-[0.95rem] text-[#1F1F1F]/54">
                  {item.modality} · {item.location}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-9 flex flex-col gap-5 rounded-[1.4rem] border border-[#D8C9B8]/72 bg-white/62 p-6 text-[1.04rem] leading-8 text-[#1F1F1F]/68 shadow-[0_18px_60px_rgba(31,31,31,0.045)] backdrop-blur-xl sm:flex-row sm:items-center sm:px-8">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-[#E19D35]/28 text-[#E19D35]">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
              <path d="m12 3 2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8L12 3Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.35" />
            </svg>
          </div>
          <div>
            <p>Os depoimentos representam experiências reais de clientes atendidos através da estrutura e consultoria do Grupo Vix Invest.</p>
            <p className="font-medium text-[#1F1F1F]">A contemplação e as condições de cada consórcio dependem das regras do grupo, sorteio, lance e condições da administradora.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
