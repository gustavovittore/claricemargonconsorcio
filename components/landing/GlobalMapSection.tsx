import Image from "next/image";
import { assets } from "@/lib/landing-content";
import { Reveal } from "./Reveal";

const routes = [
  { name: "Califórnia", x: 239, y: 452, d: "M605 705 C480 590 360 500 239 452", delay: "0s" },
  { name: "Flórida", x: 410, y: 486, d: "M605 705 C555 610 480 535 410 486", delay: "0.45s" },
  { name: "Massachusetts", x: 487, y: 394, d: "M605 705 C606 560 570 430 487 394", delay: "0.9s" },
  { name: "Europa", x: 885, y: 373, d: "M605 705 C650 520 770 390 885 373", delay: "1.35s" },
  { name: "Ásia", x: 1253, y: 505, d: "M605 705 C785 560 1030 485 1253 505", delay: "1.8s" },
];

export function GlobalMapSection() {
  return (
    <section id="atendimento-global" className="relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_0%_55%,rgba(225,157,53,0.08),transparent_28%),radial-gradient(circle_at_100%_35%,rgba(225,157,53,0.08),transparent_30%)]" />

      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A86D22]">
            <span className="mx-3 text-[#E19D35]">•</span>
            Atendimento no Brasil e exterior
            <span className="mx-3 text-[#E19D35]">•</span>
          </p>
          <h2 className="mt-6 text-balance font-serif text-[2.75rem] font-medium leading-[1.04] text-[#1F1F1F] sm:text-5xl lg:text-[4.8rem]">
            Onde você estiver, a Clarice <span className="text-[#E19D35]">atende</span> você
          </h2>
          <div className="mx-auto mt-6 h-px w-20 bg-[#E19D35]" />
          <p className="mx-auto mt-6 max-w-4xl text-pretty text-xl leading-8 text-[#1F1F1F]/70">
            Atendimento online para brasileiros que vivem no Brasil, nos Estados Unidos e em outros países, com orientação para quem deseja construir patrimônio no Brasil.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-pretty text-[1.06rem] leading-8 text-[#1F1F1F]/56">
            Mesmo morando fora, você pode planejar imóveis, investimentos e grandes conquistas no Brasil com acompanhamento próximo e comunicação clara.
          </p>
        </Reveal>

        <Reveal className="relative mt-12 overflow-hidden rounded-[2.35rem] border border-[#D8C9B8]/70 bg-white/52 p-2 shadow-[0_30px_90px_rgba(31,31,31,0.07)] backdrop-blur-xl sm:p-4">
          <div className="relative aspect-[1.5/1] min-h-[280px] overflow-hidden rounded-[1.85rem]">
            <Image
              src={assets.globalServiceMapBase}
              alt="Mapa global com base visual de atendimento no Brasil e exterior"
              fill
              loading="eager"
              sizes="(max-width: 768px) 94vw, 1220px"
              className="object-cover object-center"
            />
            <svg
              viewBox="0 0 1536 1024"
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <filter id="routeGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <circle className="map-origin-pulse" cx="605" cy="705" r="42" fill="none" stroke="#E19D35" strokeWidth="1.1" />
              <circle cx="605" cy="705" r="19" fill="#F8F1E7" stroke="#E19D35" strokeWidth="5" />
              <circle cx="605" cy="705" r="10" fill="#E19D35" stroke="#F2F0EF" strokeWidth="4" />
              {routes.map((route) => (
                <g key={route.name}>
                  <path
                    d={route.d}
                    className="map-route-glow"
                    pathLength="1"
                    style={{ animationDelay: route.delay }}
                    fill="none"
                    stroke="#E19D35"
                    strokeLinecap="round"
                    strokeWidth="6"
                    filter="url(#routeGlow)"
                  />
                  <path
                    d={route.d}
                    className="map-route-line"
                    pathLength="1"
                    style={{ animationDelay: route.delay }}
                    fill="none"
                    stroke="#D89324"
                    strokeLinecap="round"
                    strokeWidth="2.4"
                  />
                  <circle cx={route.x} cy={route.y} r="8" fill="#E19D35" stroke="#F2F0EF" strokeWidth="4" />
                </g>
              ))}
            </svg>
          </div>
        </Reveal>

        <Reveal className="mx-auto mt-9 flex max-w-3xl items-center justify-center gap-3 text-center text-[1.02rem] leading-7 text-[#1F1F1F]/62">
          <span className="hidden h-px flex-1 bg-[#E19D35]/35 sm:block" />
          <span className="text-[#E19D35]">ⓘ</span>
          <span>Atendimento 100% online, com orientação personalizada para o seu perfil e objetivos.</span>
          <span className="hidden h-px flex-1 bg-[#E19D35]/35 sm:block" />
        </Reveal>
      </div>
    </section>
  );
}
