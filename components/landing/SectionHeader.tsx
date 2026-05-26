type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  text,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : ""
      } ${className}`}
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#9B651F]">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold leading-tight text-[#1F1F1F] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-pretty text-base leading-8 text-[#1F1F1F]/68 sm:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );
}
