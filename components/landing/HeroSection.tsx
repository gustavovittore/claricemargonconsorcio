"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { motion, useReducedMotion } from "motion/react";
import { assets, brand, heroBadges, stats } from "@/lib/landing-content";
import { PremiumButton, WhatsAppCtaIcon } from "./PremiumButton";

const floatingCards = [
  {
    title: "Consultoria nacional e internacional",
    icon: "/icons/2/icon-consultoria-nacional-e-internacional.png",
  },
  {
    title: "Planejamento patrimonial com estratégia",
    icon: "/icons/2/icon-planejamento-patrimonial-com-estratégia.png",
  },
];

const heroBadgeIcons = [
  "/icons/3/icon-hero-atendimento-no-brasil-e-exterior.png.png",
  "/icons/3/icon-grandes-bancos.png.png",
  "/icons/3/icon-imóveis-veículos.png.png",
];

const heroBadgeCardWidths = [
  "md:w-[215px] md:min-w-[215px]",
  "md:w-[215px] md:min-w-[215px]",
  "md:w-[295px] md:min-w-[295px]",
];

const statIcons = [
  "/icons/2/icon-bancos-e-administradoras-parceiras.png",
  "/icons/2/icon.clientes-orientados.png.png",
  "/icons/2/icon-atendimento-online-e-personalizado.png.png",
  "/icons/2/icon-atendimento-para-brasileiros-onde-estiverem.png",
];

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const reveal = {
    initial: prefersReducedMotion ? false : { opacity: 0, y: 18 },
    animate: prefersReducedMotion ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  } as const;

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-[#F2F0EF] px-4 pb-10 pt-32 sm:px-6 sm:pb-14 sm:pt-36 lg:min-h-[930px] lg:px-8 lg:pb-8 lg:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[#F2F0EF]" />
      <Image
        src={assets.heroBackground}
        alt=""
        fill
        preload
        sizes="100vw"
        className="pointer-events-none -z-10 object-cover object-[58%_38%] opacity-100 max-lg:object-[62%_30%]"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,#F2F0EF_0%,rgba(242,240,239,0.9)_25%,rgba(242,240,239,0.2)_64%,rgba(242,240,239,0.03)_100%)] max-lg:bg-[linear-gradient(180deg,rgba(242,240,239,0.96)_0%,rgba(242,240,239,0.78)_43%,rgba(242,240,239,0.18)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 bg-[linear-gradient(180deg,rgba(242,240,239,0),rgba(242,240,239,0.92)_88%)]" />

      <div className="mx-auto grid max-w-[1250px] gap-8 lg:grid-cols-[0.99fr_1.01fr] lg:items-end">
        <div className="relative z-20 flex min-w-0 flex-col pb-1 lg:min-h-[620px] lg:justify-start lg:pb-20">
          <motion.div
            {...reveal}
            className="inline-flex w-fit max-w-full items-center gap-3 rounded-full border border-[#E19D35]/24 bg-white/42 px-4 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#A86D22] shadow-[0_18px_48px_rgba(31,31,31,0.06)] backdrop-blur-xl sm:text-xs"
          >
            <span className="h-2 w-2 rounded-full bg-[#E19D35]" />
            Consultoria em consórcios no Brasil e exterior
          </motion.div>

          <motion.h1
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.06 }}
            className="mt-8 max-w-full break-words font-serif text-[2.12rem] font-medium leading-[1.08] tracking-[-0.005em] text-[#1F1F1F] [overflow-wrap:anywhere] sm:max-w-[680px] sm:text-[3.15rem] sm:leading-[1.05] lg:max-w-[720px] lg:text-[3.08rem] xl:text-[3.28rem]"
          >
            <span className="block">Invista em consórcio</span>
            <span className="block">com orientação</span>
            <span className="block lg:whitespace-nowrap">especialista e transforme</span>
            <span className="block">
              planejamento em <span className="text-[#E19D35]">patrimônio.</span>
            </span>
          </motion.h1>

          <motion.div
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.14 }}
            className="mt-6 h-px w-16 bg-[#E19D35]"
          />

          <motion.p
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.18 }}
            className="mt-5 max-w-[625px] text-pretty text-[1.1rem] font-semibold leading-8 text-[#1F1F1F]/80 sm:text-[1.16rem] sm:leading-8"
          >
            Com a orientação certa, o consórcio pode ser uma forma inteligente de
            conquistar imóveis, veículos e construir patrimônio com mais estratégia.
          </motion.p>

          <motion.p
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.24 }}
            className="mt-4 max-w-[600px] text-pretty text-[1.04rem] leading-7 text-[#1F1F1F]/68 sm:text-[1.08rem] sm:leading-8"
          >
            Clarice Margon é consultora financeira especializada em consórcios,
            com atendimento personalizado para famílias, empresários e brasileiros
            que vivem fora do Brasil.
          </motion.p>

          <motion.div
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.3 }}
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >
            <PremiumButton href={brand.whatsappUrl} target="_blank" rel="noreferrer" className="min-h-[3.65rem] w-full px-7 sm:w-auto">
              <WhatsAppCtaIcon />
              Falar com a Clarice
            </PremiumButton>
            <PremiumButton href="#solucoes" variant="secondary" className="min-h-[3.65rem] w-full px-7 sm:w-auto">
              Conhecer soluções
              <span aria-hidden="true" className="text-lg leading-none">→</span>
            </PremiumButton>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.36 }}
            className="relative z-40 mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:w-fit md:max-w-none md:items-stretch lg:flex-nowrap"
          >
            {heroBadges.map((item, index) => (
              <div
                key={item}
                className={`relative z-40 flex min-h-[5rem] w-full flex-none items-center gap-2 rounded-[1.1rem] border border-[#D8C9B8]/70 bg-white px-3 py-3 text-[0.9rem] font-medium leading-[1.35] text-[#1F1F1F]/90 shadow-[0_18px_44px_rgba(31,31,31,0.055)] sm:w-[calc(50%-0.375rem)] sm:text-[0.9rem] xl:text-[0.93rem] ${heroBadgeCardWidths[index]}`}
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center">
                  <Image
                    src={heroBadgeIcons[index]}
                    alt=""
                    width={40}
                    height={40}
                    className="h-9 w-9 object-contain"
                  />
                </span>
                {index === 0 ? (
                  <span>
                    <span className="block whitespace-nowrap">Atendimento no</span>
                    <span className="block whitespace-nowrap">Brasil e exterior</span>
                  </span>
                ) : index === 1 ? (
                  <span>
                    <span className="block">Grandes bancos</span>
                    <span className="block whitespace-nowrap">e administradoras</span>
                  </span>
                ) : index === 2 ? (
                  <span>
                    <span className="block whitespace-nowrap">Imóveis, veículos,</span>
                    <span className="block whitespace-nowrap">construção e investimentos</span>
                  </span>
                ) : (
                  <span>{item}</span>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: 22 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto flex min-h-[520px] w-full max-w-[760px] items-end justify-center lg:mx-0 lg:min-h-[650px] lg:max-w-none lg:justify-end"
        >
          <div className="absolute inset-x-0 bottom-0 h-[72%] rounded-[42%_58%_0_0/46%_50%_0_0] bg-[radial-gradient(circle_at_53%_34%,rgba(255,255,255,0.56),rgba(255,255,255,0)_62%)]" />
          <Image
            src={assets.heroCutout}
            alt="Clarice Margon, consultora financeira especializada em consórcios"
            width={900}
            height={1280}
            preload
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 54vw, 47vw"
            className="relative z-20 h-auto w-[92%] max-w-[660px] object-contain drop-shadow-[0_34px_45px_rgba(31,31,31,0.16)] sm:w-[78%] lg:h-[835px] lg:w-auto lg:max-w-none lg:-translate-x-[10%] lg:translate-y-[5%] xl:h-[870px] xl:-translate-x-[8%]"
          />

          <div className="absolute bottom-9 right-[5.25rem] z-30 grid gap-3 sm:bottom-12 sm:right-6 lg:bottom-auto lg:right-[-1.4rem] lg:top-[32%] xl:right-[-0.35rem]">
            {floatingCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.42 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex w-[10.5rem] items-center gap-3 rounded-[1.2rem] border border-white/70 bg-white/66 p-3.5 text-[#1F1F1F] shadow-[0_14px_42px_rgba(31,31,31,0.065)] backdrop-blur-xl sm:w-[12.6rem] sm:p-4 lg:w-[12.15rem] lg:bg-white/62"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center">
                  <Image
                    src={card.icon}
                    alt=""
                    width={36}
                    height={36}
                    className="h-8 w-8 object-contain"
                  />
                </span>
                <span className="text-[0.82rem] font-medium leading-5 sm:text-[0.92rem] sm:leading-6">
                  {card.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-30 mx-auto -mt-1 grid max-w-[1250px] overflow-hidden rounded-[1.65rem] border border-[#D8C9B8]/76 bg-white/66 shadow-[0_24px_70px_rgba(31,31,31,0.09)] backdrop-blur-2xl sm:grid-cols-2 lg:-mt-8 lg:grid-cols-4"
      >
        {stats.map((item, index) => (
          <div
            key={item.label}
            className="flex min-h-[7.8rem] items-center gap-4 border-[#1F1F1F]/9 px-5 py-5 sm:px-7 lg:border-l first:lg:border-l-0"
          >
            <div className="grid h-14 w-14 shrink-0 place-items-center">
              <Image
                src={statIcons[index]}
                alt=""
                width={38}
                height={38}
                className="h-10 w-10 object-contain"
              />
            </div>
            <div>
              <p
                className={`font-semibold leading-none text-[#1F1F1F] ${
                  item.valueText
                    ? "whitespace-nowrap text-[1.62rem] sm:text-[1.86rem] lg:text-[1.66rem] xl:text-[1.9rem]"
                    : "text-[1.9rem] sm:text-[2.16rem]"
                }`}
              >
                {item.valueText ? (
                  item.valueText
                ) : (
                  <>
                    <CountUp end={item.value ?? 0} duration={1.8} />
                    {item.suffix}
                  </>
                )}
              </p>
              <p className="mt-2 max-w-[14rem] text-[0.94rem] leading-6 text-[#1F1F1F]/64">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
