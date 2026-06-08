import Image from "next/image";
import { assets, personalizedHighlights } from "@/lib/landing-content";
import { Reveal } from "./Reveal";

export function PersonalizedSection() {
  return (
    <section className="relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_92%_15%,rgba(225,157,53,0.11),transparent_34%),radial-gradient(circle_at_4%_86%,rgba(225,157,53,0.09),transparent_32%)]" />

      <Reveal className="mx-auto max-w-[1320px] overflow-hidden rounded-[2.5rem] border border-[#E19D35]/36 bg-white/50 shadow-[0_34px_95px_rgba(31,31,31,0.11)] backdrop-blur-xl lg:rounded-[3.2rem]">
        <div className="grid min-h-[720px] lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative z-10 flex flex-col justify-center p-6 sm:p-10 lg:p-20">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A86D22]">
              Atendimento personalizado
            </p>
            <h2 className="mt-7 max-w-3xl font-serif text-[2.35rem] font-medium leading-[1.07] text-[#1F1F1F] sm:text-5xl lg:text-[4rem]">
              Atendimento personalizado para <span className="text-[#E19D35]">decisões importantes</span>
            </h2>
            <div className="mt-7 h-px w-52 max-w-full bg-[#E19D35]/55" />

            <div className="relative mt-8 min-h-[430px] overflow-hidden rounded-[1.85rem] border border-[#D8C9B8]/70 shadow-[0_24px_70px_rgba(31,31,31,0.08)] lg:hidden">
              <Image
                src={assets.about}
                alt="Clarice Margon em atendimento personalizado"
                fill
                loading="eager"
                sizes="92vw"
                className="object-cover object-[48%_42%]"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-[linear-gradient(180deg,rgba(242,240,239,0),rgba(242,240,239,0.38))]" />
            </div>

            <p className="mt-7 max-w-2xl text-[1.12rem] leading-8 text-[#1F1F1F]/70">
              Mais do que apresentar planos de consórcio, Clarice acompanha você na escolha de uma estratégia alinhada ao seu objetivo, prazo e realidade financeira.
            </p>
            <p className="mt-5 max-w-2xl text-[1.08rem] leading-8 text-[#1F1F1F]/64">
              Cada cliente tem um momento, uma meta e uma realidade. Por isso, o atendimento é consultivo, claro e próximo, seja para quem está no Brasil ou para brasileiros que vivem no exterior.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {personalizedHighlights.map((item) => (
                <div
                  key={item}
                  className="flex min-h-20 items-center gap-4 rounded-[1.2rem] border border-[#D8C9B8]/76 bg-white/58 p-4 text-[1.02rem] leading-7 text-[#1F1F1F]/72 shadow-[0_18px_50px_rgba(31,31,31,0.035)]"
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
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>

          <div className="relative hidden min-h-[430px] overflow-hidden lg:block lg:min-h-full">
            <Image
              src={assets.about}
              alt="Clarice Margon em atendimento personalizado"
              fill
              loading="eager"
              sizes="(max-width: 1024px) 92vw, 48vw"
              className="object-cover object-[48%_42%]"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-[linear-gradient(180deg,rgba(242,240,239,0),rgba(242,240,239,0.38))]" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
