import { CircuitBoard, HardDrive, Smartphone } from "lucide-react";

export function TechVisual() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] sm:aspect-square">
      <div className="absolute inset-6 border border-white/12 bg-white/[0.035]" />
      <div className="absolute left-1/2 top-1/2 h-[70%] w-[68%] -translate-x-1/2 -translate-y-1/2 border border-mint/35 bg-ink shadow-premium">
        <div className="absolute inset-5 border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
        <div className="absolute left-7 right-7 top-8 h-2 bg-mint/70" />
        <div className="absolute bottom-8 left-8 right-8 grid gap-3">
          <span className="h-2 w-3/4 bg-white/22" />
          <span className="h-2 w-1/2 bg-white/14" />
          <span className="h-2 w-5/6 bg-white/12" />
        </div>
        <CircuitBoard className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 text-mint" aria-hidden />
      </div>
      <div className="absolute left-1 top-14 w-36 border border-white/12 bg-white p-4 text-ink shadow-soft sm:left-0">
        <Smartphone aria-hidden className="text-steel" size={26} />
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-steel">
          Telephone
        </p>
        <p className="mt-1 text-sm font-semibold">Verification rapide</p>
      </div>
      <div className="absolute bottom-10 right-0 w-44 border border-white/12 bg-mint p-4 text-ink shadow-soft">
        <HardDrive aria-hidden size={28} />
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em]">
          Donnees
        </p>
        <p className="mt-1 text-sm font-semibold">Vos fichiers comptent</p>
      </div>
      <div className="absolute right-8 top-0 h-20 w-20 border border-mint/40 bg-mint/12" />
      <div className="absolute bottom-0 left-10 h-24 w-24 border border-white/14 bg-white/5" />
    </div>
  );
}
