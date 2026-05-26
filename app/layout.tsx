import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clarice Margon | Consultoria em Consórcios",
  description:
    "Invista em consórcio com orientação especialista e atendimento personalizado no Brasil e exterior.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full bg-[#F2F0EF] font-sans text-[#1F1F1F]">
        {children}
      </body>
    </html>
  );
}
