import Image from "next/image";
import { assets, processSteps } from "@/lib/landing-content";
import { Reveal } from "./Reveal";

const stepIcons = [
  "/icons/escolhado-plano.png.png",
  "/icons/pagamento-das-parcelas.png.png",
  "/icons/contemplação.png.png",
  "/icons/uso-do-crédito.png.png",
  "/icons/realização-do-objetivo.png.png",
];

function StepIcon({ index }: { index: number }) {
  return (
    <Image
      src={stepIcons[index]}
      alt=""
      width={38}
      height={38}
      className="h-9 w-9 object-contain"
    />
  );
}

export function ProcessSection() {
  return (
    <section id="como-funciona" className="relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:py-28">
      <Image
        src={assets.section03Background}
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none -z-20 object-cover object-center opacity-90"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(242,240,239,0.86),rgba(242,240,239,0.52)_44%,rgba(242,240,239,0.9))]" />

      <div className="mx-auto max-w-[1180px]">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="mx-auto inline-flex items-center gap-3 rounded-full border border-[#E19D35]/30 bg-white/42 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#A86D22] backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[#E19D35]" />
            Como funciona
          </p>
          <h2 className="mt-7 font-serif text-[2.65rem] font-medium leading-[1.05] text-[#1F1F1F] sm:text-5xl lg:text-[4.15rem]">
            Como funciona o <span className="text-[#E19D35]">consórcio</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-20 bg-[#E19D35]" />
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-xl leading-8 text-[#1F1F1F]/68">
            Entenda o caminho para transformar planejamento em conquista com acompanhamento especializado.
          </p>
        </Reveal>

        <div className="relative mt-16 lg:mt-20">
          <div className="absolute left-7 top-0 h-full w-px bg-[#E19D35]/40 lg:left-1/2" />
          <div className="grid gap-8 lg:gap-14">
            {processSteps.map((item, index) => {
              const right = index % 2 === 1;
              return (
                <Reveal
                  key={item.step}
                  delay={index * 0.04}
                  className={`relative grid gap-5 pl-20 lg:grid-cols-2 lg:pl-0 ${
                    right ? "lg:[&>article]:col-start-2" : ""
                  }`}
                >
                  <div className="absolute left-7 top-8 z-20 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-full border border-[#E19D35]/45 bg-[#F8F5EF] font-serif text-3xl text-[#D18B2C] shadow-[0_14px_42px_rgba(31,31,31,0.06)] lg:left-1/2 lg:h-16 lg:w-16">
                    {Number(item.step)}
                  </div>
                  <article className="relative rounded-[1.85rem] border border-[#D8C9B8]/72 bg-white/68 p-6 shadow-[0_24px_76px_rgba(31,31,31,0.06)] backdrop-blur-xl sm:p-8">
                    <span className={`absolute top-14 hidden h-px w-10 bg-[#E19D35]/55 lg:block ${right ? "right-full" : "left-full"}`} />
                    <div className="flex items-center gap-5">
                      <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-[#E19D35]/30 bg-[#E19D35]/8 text-[#E19D35]">
                        <StepIcon index={index} />
                      </div>
                      <h3 className="font-serif text-[1.8rem] font-medium leading-tight text-[#1F1F1F]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-6 text-[1.05rem] leading-8 text-[#1F1F1F]/66">{item.text}</p>
                    <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3 text-[0.99rem] leading-7 text-[#1F1F1F]/70">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E19D35]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
