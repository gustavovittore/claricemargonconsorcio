import Image from "next/image";
import { assets, institutions } from "@/lib/landing-content";
import { Reveal } from "./Reveal";

export function PartnersSection() {
  const marqueeGroups = [institutions, institutions];

  return (
    <section id="parceiros" className="relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:py-28">
      <Image
        src={assets.section07Background}
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none -z-20 object-cover object-center opacity-90"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(242,240,239,0.74),rgba(242,240,239,0.42)_50%,rgba(242,240,239,0.86))]" />

      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A86D22]">
            <span className="mx-3 text-[#E19D35]">•</span>
            Nossos parceiros
            <span className="mx-3 text-[#E19D35]">•</span>
          </p>
          <h2 className="mt-6 text-balance font-serif text-[2.65rem] font-medium leading-[1.06] text-[#1F1F1F] sm:text-5xl lg:text-[4.2rem]">
            Parcerias sólidas que geram <span className="text-[#E19D35]">confiança</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-20 bg-[#E19D35]" />
          <p className="mx-auto mt-7 max-w-3xl text-pretty text-xl leading-8 text-[#1F1F1F]/68">
            Trabalhamos com as principais administradoras de consórcio e instituições financeiras do Brasil.
          </p>
        </Reveal>

        <Reveal className="mt-16 overflow-hidden rounded-[2.5rem] border border-[#E19D35]/28 bg-white/62 shadow-[0_30px_90px_rgba(31,31,31,0.07)] backdrop-blur-xl">
          <div className="overflow-hidden">
            <div className="partners-marquee flex w-max">
              {marqueeGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="flex shrink-0" aria-hidden={groupIndex === 1}>
                  {group.map((institution) => (
                    <div
                      key={`${groupIndex}-${institution.name}`}
                      className="flex min-h-[9.8rem] w-[13.5rem] shrink-0 items-center justify-center border-r border-[#E19D35]/22 p-7 sm:w-[15rem]"
                    >
                      {institution.logo ? (
                        <Image
                          src={institution.logo}
                          alt={institution.name}
                          width={190}
                          height={90}
                          sizes="190px"
                          className="max-h-20 w-auto object-contain opacity-70 grayscale contrast-125 transition duration-300 hover:opacity-100 hover:grayscale-0"
                        />
                      ) : (
                        <span className="text-center text-lg font-semibold text-[#1F1F1F]/72">{institution.name}</span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-5 rounded-[1.6rem] border border-[#D8C9B8]/72 bg-white/58 p-6 text-center text-xl leading-8 text-[#1F1F1F]/68 shadow-[0_20px_70px_rgba(31,31,31,0.045)] backdrop-blur-xl sm:flex-row sm:text-left">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-[#E19D35]/30 text-[#E19D35]">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9">
              <path d="M12 3 5 6v5c0 4.8 2.7 8.1 7 10 4.3-1.9 7-5.2 7-10V6l-7-3Zm-3 9 2 2 4-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45" />
            </svg>
          </div>
          <p>
            A parceria com grandes instituições reforça o nosso compromisso com <strong className="font-semibold text-[#1F1F1F]">segurança, transparência e as melhores oportunidades para você.</strong>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
