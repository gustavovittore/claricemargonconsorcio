import Image from "next/image";
import { aboutHighlights, assets } from "@/lib/landing-content";
import { Reveal } from "./Reveal";

export function AboutSection() {
  return (
    <section id="sobre" className="relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:py-28">
      <Image
        src={assets.section08Background}
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none -z-20 object-cover object-center opacity-92"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(242,240,239,0.56),rgba(242,240,239,0.78)_50%,rgba(242,240,239,0.52))]" />

      <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal className="relative">
          <div className="relative rounded-[2rem] border border-[#E19D35]/40 bg-white/42 p-3 shadow-[0_32px_90px_rgba(31,31,31,0.12)] lg:rounded-[2.45rem]">
            <div className="relative aspect-[0.86/1.24] overflow-hidden rounded-[1.55rem] lg:rounded-[2rem]">
              <Image
                src={assets.aboutPhoto}
                alt="Clarice Margon, consultora financeira especializada em consórcios"
                fill
                sizes="(max-width: 1024px) 92vw, 43vw"
                className="object-cover object-[50%_42%]"
              />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A86D22]">
            Sobre mim
          </p>
          <h2 className="mt-5 max-w-3xl font-serif text-[3rem] font-medium leading-[1.03] text-[#1F1F1F] sm:text-6xl lg:text-[5rem]">
            Conheça Clarice Margon
          </h2>
          <div className="mt-6 h-px w-64 max-w-full bg-[#E19D35]/55" />

          <div className="mt-8 grid gap-5 text-[1.14rem] leading-8 text-[#1F1F1F]/70">
            <p>
              Clarice Margon é consultora financeira especializada em consórcios e atua com foco em planejamento patrimonial, atendimento personalizado e orientação clara para decisões de alto valor.
            </p>
            <p>
              Seu trabalho é ajudar famílias, empresários e brasileiros que vivem fora do país a entenderem como o consórcio pode ser usado de forma estratégica para conquistar imóveis, veículos, construir, reformar ou investir no Brasil.
            </p>
            <p>
              Com atuação junto ao Grupo Vix Invest e acesso a grandes bancos e administradoras, Clarice une atendimento humano, visão estratégica e acompanhamento próximo para tornar o processo mais claro, seguro e personalizado.
            </p>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {aboutHighlights.map((point) => (
              <div
                key={point}
                className="flex min-h-20 items-center gap-4 rounded-[1.2rem] border border-[#D8C9B8]/72 bg-white/58 p-4 text-[1.02rem] leading-7 text-[#1F1F1F]/72 shadow-[0_18px_52px_rgba(31,31,31,0.035)] backdrop-blur-xl"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#E19D35]/18 bg-white/45">
                  <Image
                    src={assets.checkIcon}
                    alt=""
                    width={26}
                    height={26}
                    className="h-6 w-6 object-contain"
                  />
                </span>
                <span>{point}</span>
              </div>
            ))}
          </div>

        </Reveal>
      </div>
    </section>
  );
}
