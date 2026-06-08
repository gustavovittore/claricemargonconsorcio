import Image from "next/image";
import { brand, assets, services } from "@/lib/landing-content";
import { PremiumButton, WhatsAppCtaIcon } from "./PremiumButton";
import { Reveal } from "./Reveal";

const serviceIcons = [
  "/icons/2/icon-consórcio-de-imóveis.png",
  "/icons/2/icon-construção-e-reforma.png",
  "/icons/2/icon-consórcio-de-veiculos.png",
  "/icons/caminhões-e-pesados.png.png",
  "/icons/consórcio-para-empresários.png",
  "/icons/brasileiros-no-exterior.png.png",
];

function ServiceIcon({ index }: { index: number }) {
  return (
    <Image
      src={serviceIcons[index]}
      alt=""
      width={48}
      height={48}
      className="h-12 w-12 object-contain"
    />
  );
}

export function ServicesSection() {
  return (
    <section id="solucoes" className="relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:py-28">
      <Image
        src={assets.section02Background}
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none -z-20 object-cover object-center opacity-95"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(242,240,239,0.72),rgba(242,240,239,0.36)_42%,rgba(242,240,239,0.82))]" />

      <div className="mx-auto max-w-[1240px]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mx-auto inline-flex items-center gap-3 rounded-full border border-[#E19D35]/30 bg-white/42 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#A86D22] shadow-[0_18px_48px_rgba(31,31,31,0.045)] backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[#E19D35]" />
            Soluções em consórcio
          </p>
          <h2 className="mt-7 text-balance font-serif text-[2.35rem] font-medium leading-[1.07] text-[#1F1F1F] sm:text-5xl lg:text-[4.25rem]">
            Soluções em consórcio para <span className="text-[#E19D35]">cada objetivo</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-xl leading-8 text-[#1F1F1F]/68">
            Escolha uma estratégia alinhada ao seu momento, ao seu perfil e ao patrimônio que você deseja construir.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 0.04}
              className="group flex min-h-[28rem] flex-col rounded-[1.85rem] border border-[#D8C9B8]/78 bg-white/68 p-6 shadow-[0_24px_70px_rgba(31,31,31,0.06)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#E19D35]/45 hover:bg-white/82 sm:p-7"
            >
              <div className="grid h-16 w-16 place-items-center">
                <ServiceIcon index={index} />
              </div>
              <h3 className="mt-9 font-serif text-[1.65rem] font-medium leading-tight text-[#1F1F1F]">
                {service.title}
              </h3>
              <p className="mt-5 text-[1.06rem] leading-8 text-[#1F1F1F]/66">{service.text}</p>
              <ul className="mt-7 grid gap-3">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[1.01rem] leading-7 text-[#1F1F1F]/70">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E19D35]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <PremiumButton href={brand.whatsappUrl} target="_blank" rel="noreferrer" className="min-h-14 px-8">
            <WhatsAppCtaIcon />
            Quero entender a melhor solução
          </PremiumButton>
        </Reveal>
      </div>
    </section>
  );
}
