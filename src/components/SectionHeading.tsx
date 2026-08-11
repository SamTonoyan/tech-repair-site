interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      data-reveal
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-steel">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink text-balance sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-ink/62">{description}</p>
    </div>
  );
}
