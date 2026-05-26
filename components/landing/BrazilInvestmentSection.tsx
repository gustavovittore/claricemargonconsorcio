import Image from "next/image";
import { assets, brand } from "@/lib/landing-content";
import { PremiumButton, WhatsAppCtaIcon } from "./PremiumButton";
import { Reveal } from "./Reveal";

const columns = [
  {
    title: (
      <>
        Especialista em brasileiros <span className="text-[#E19D35]">no exterior</span>
      </>
    ),
    text: "Clarice atende brasileiros que vivem fora do país e desejam investir no Brasil com mais segurança, clareza e acompanhamento próximo. Mesmo à distância, você pode entender suas opções, organizar sua estratégia e tomar decisões com orientação profissional.",
    bullets: [
      "Atendimento 100% online pelo WhatsApp",
      "Comunicação clara para quem mora fora",
      "Orientação personalizada para investir no Brasil",
      "Acompanhamento próximo em cada etapa",
    ],
  },
  {
    title: (
      <>
        Por que investir no <span className="text-[#E19D35]">Brasil</span>?
      </>
    ),
    text: "Mesmo morando fora, você pode construir patrimônio no Brasil com consórcio. É uma forma estratégica de planejar imóveis, veículos, construção ou investimentos de longo prazo com mais organização e previsibilidade.",
    bullets: [
      "Planejamento para imóveis, veículos e construção",
      "Alternativa sem juros de financiamento",
      "Estratégia alinhada ao seu objetivo",
      "Suporte para brasileiros nos EUA e outros países",
    ],
  },
];

export function BrazilInvestmentSection() {
  return (
    <section id="brasileiros-exterior" className="relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(242,240,239,0.94),rgba(248,245,239,0.68)_48%,rgba(242,240,239,0.94))]" />

      <Reveal className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[2.35rem] border border-[#E3C892]/72 shadow-[0_34px_105px_rgba(31,31,31,0.08)] sm:rounded-[3rem]">
        <Image
          src={assets.internationalInvestmentBackground}
          alt=""
          fill
          sizes="(max-width: 768px) 94vw, 1320px"
          className="pointer-events-none -z-20 object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,252,247,0.62),rgba(255,252,247,0.34)_48%,rgba(255,252,247,0.2))]" />

        <div className="px-6 py-12 sm:px-10 sm:py-14 lg:px-24 lg:py-24">
          <div className="grid gap-10 divide-y divide-[#E19D35]/38 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-y-0">
            {columns.map((column) => (
              <article
                key={column.text}
                className="pt-10 first:pt-0 lg:px-16 lg:pt-0 lg:first:pl-0 lg:last:pr-0"
              >
                <h2 className="max-w-[13ch] font-serif text-[2.45rem] font-medium leading-[1.12] text-[#1F1F1F] sm:text-[3.25rem] lg:text-[3.45rem]">
                  {column.title}
                </h2>
                <div className="mt-7 h-px w-16 bg-[#E19D35]" />
                <p className="mt-7 max-w-xl text-[1.05rem] leading-8 text-[#1F1F1F]/68 sm:text-[1.1rem]">
                  {column.text}
                </p>

                <ul className="mt-9 grid gap-4">
                  {column.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex min-h-14 items-center gap-4 rounded-[0.9rem] border border-white/68 bg-white/76 px-4 py-3 text-[0.98rem] leading-6 text-[#1F1F1F]/76 shadow-[0_16px_42px_rgba(31,31,31,0.045)] backdrop-blur-sm sm:px-5 sm:text-[1.02rem]"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#E19D35]/22 bg-white shadow-[0_8px_24px_rgba(225,157,53,0.12)]">
                        <Image src={assets.checkIcon} alt="" width={22} height={22} className="h-[22px] w-[22px] object-contain" />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center lg:mt-14">
            <PremiumButton href={brand.whatsappUrl} target="_blank" rel="noreferrer" className="min-h-14 w-full max-w-[430px] px-8 text-base sm:w-fit">
              <WhatsAppCtaIcon />
              Falar com a Clarice no WhatsApp
            </PremiumButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
