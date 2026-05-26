"use client";

import CountUp from "react-countup";
import { stats } from "@/lib/landing-content";
import { Reveal } from "./Reveal";

export function StatsSection() {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 0.04}
              className="rounded-[1.75rem] border border-[#1F1F1F]/10 bg-white/58 p-5 text-center shadow-[0_18px_60px_rgba(31,31,31,0.06)]"
            >
              <p className="min-h-12 text-3xl font-semibold leading-tight text-[#1F1F1F] sm:text-4xl">
                {item.valueText ? (
                  item.valueText
                ) : (
                  <>
                    <CountUp end={item.value ?? 0} duration={1.8} enableScrollSpy scrollSpyOnce />
                    {item.suffix}
                  </>
                )}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#1F1F1F]/62">{item.label}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mx-auto mt-5 max-w-3xl text-center text-xs leading-6 text-[#1F1F1F]/48">
          Indicadores institucionais editáveis, apresentados como referência de
          contexto e sujeitos à validação final.
        </Reveal>
      </div>
    </section>
  );
}
