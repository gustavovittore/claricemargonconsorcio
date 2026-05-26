import Image from "next/image";
import type { ReactNode } from "react";
import { assets, brand, responsibilityText } from "@/lib/landing-content";

function FooterIcon({ children }: { children: ReactNode }) {
  return (
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-[#E19D35]">
      {children}
    </span>
  );
}

function FooterPngIcon({ src }: { src: string }) {
  return (
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full">
      <Image src={src} alt="" width={24} height={24} className="h-6 w-6 object-contain" />
    </span>
  );
}

const footerIcons = {
  whatsapp: "/icons/whatsapp-icon-produtos.png.png",
  instagram: "/icons/instagram-icon-rodape.png.png",
  email: "/icons/email-icon-rodape.png.png",
};

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden px-4 pb-12 pt-6 sm:px-6 lg:pb-20">
      <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[2rem] border border-[#D8C9B8]/72 bg-white/58 p-7 shadow-[0_24px_84px_rgba(31,31,31,0.065)] backdrop-blur-xl sm:p-10">
        <div className="grid gap-10 text-[#1F1F1F]/68 lg:grid-cols-[1fr_0.95fr_1.3fr] lg:divide-x lg:divide-[#D8C9B8]/72">
          <div className="lg:pr-10">
            <Image
              src={assets.logo}
              alt="Clarice Margon"
              width={220}
              height={54}
              loading="eager"
              className="h-auto w-56 max-w-full"
            />
            <p className="mt-7 max-w-md text-[1.08rem] leading-8">
              Consultoria financeira especializada em consórcios para quem deseja construir patrimônio com estratégia, segurança e inteligência.
            </p>
          </div>

          <div className="lg:px-10">
            <h3 className="font-serif text-2xl font-medium text-[#1F1F1F]">Contato</h3>
            <div className="mt-3 h-px w-10 bg-[#E19D35]" />
            <div className="mt-7 grid gap-5 text-[1.04rem]">
              <a className="flex items-center gap-4 transition hover:text-[#9B651F]" href={brand.whatsappUrl} target="_blank" rel="noreferrer">
                <FooterPngIcon src={footerIcons.whatsapp} />
                <span>{brand.whatsappDisplay}</span>
              </a>
              <a className="flex items-center gap-4 transition hover:text-[#9B651F]" href={brand.instagramUrl} target="_blank" rel="noreferrer">
                <FooterPngIcon src={footerIcons.instagram} />
                <span>{brand.instagram}</span>
              </a>
              <div className="flex items-center gap-4">
                <FooterPngIcon src={footerIcons.email} />
                <span>contato@claricemargon.com.br</span>
              </div>
            </div>
          </div>

          <div className="lg:pl-10">
            <h3 className="font-serif text-2xl font-medium text-[#1F1F1F]">Grupo Vix Invest</h3>
            <div className="mt-3 h-px w-10 bg-[#E19D35]" />
            <div className="mt-7 grid gap-5 text-[1.04rem]">
              <a className="flex items-center gap-4 transition hover:text-[#9B651F]" href={brand.groupInstagramUrl} target="_blank" rel="noreferrer">
                <FooterPngIcon src={footerIcons.instagram} />
                <span>{brand.groupInstagram}</span>
              </a>
              <div className="flex items-start gap-4">
                <FooterIcon>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
                    <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45" />
                  </svg>
                </FooterIcon>
                <span className="leading-8">
                  Rua Inácio Higino, nº 1050, sala 204, Praia da Costa, Vila Velha/ES - CEP: 29101-435, Centro Empresarial Praia da Costa - Torre Leste
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#D8C9B8]/72 pt-7 text-center text-[0.95rem] text-[#1F1F1F]/62">
          <p>© 2025 Clarice Margon. Todos os direitos reservados.</p>
          <p className="mx-auto mt-4 max-w-4xl text-sm leading-6 text-[#1F1F1F]/48">
            {responsibilityText}
          </p>
        </div>
      </div>
    </footer>
  );
}
