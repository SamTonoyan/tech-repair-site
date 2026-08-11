"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {  MonitorCog, Smartphone, Wrench } from "lucide-react";

const storySteps = [
  {
    number: "01",
    title: "Vous avez un problème.",
    text: "Ordinateur lent, téléphone cassé ou imprimante qui ne fonctionne plus.",
  },
  {
    number: "02",
    title: "Nous trouvons la cause.",
    text: "Nous diagnostiquons votre appareil et vous expliquons clairement le problème.",
  },
  {
    number: "03",
    title: "Nous le réparons.",
    text: "Une solution simple, professionnelle et adaptée à votre appareil.",
  },
];

export function ScrollStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const visual = visualRef.current;

    if (!section || !visual) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const context = gsap.context(() => {
      const copyBlocks = gsap.utils.toArray<HTMLElement>("[data-scroll-story-copy]");
      const progressItems = gsap.utils.toArray<HTMLElement>("[data-scroll-story-progress]");
      const chips = gsap.utils.toArray<HTMLElement>("[data-scroll-story-chip]");
      const scanLine = section.querySelector<HTMLElement>("[data-scroll-story-scan]");
      const orbit = section.querySelector<HTMLElement>("[data-scroll-story-orbit]");
      const grid = section.querySelector<HTMLElement>("[data-scroll-story-grid]");

      gsap.set(copyBlocks, { autoAlpha: 0, y: 28, filter: "blur(10px)" });
      gsap.set(copyBlocks[0], { autoAlpha: 1, y: 0, filter: "blur(0px)" });
      gsap.set(progressItems, { autoAlpha: 0.34, scaleX: 0.72, transformOrigin: "left center" });
      gsap.set(progressItems[0], { autoAlpha: 1, scaleX: 1 });
      gsap.set(chips, { autoAlpha: 0, y: 18, scale: 0.92 });
      gsap.set(chips[0], { autoAlpha: 1, y: 0, scale: 1 });

      const timeline = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=260%",
          scrub: 0.85,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .to(visual, { xPercent: 10, yPercent: -5, rotate: 7, scale: 1.08, duration: 1 }, 0)
        .to(scanLine, { yPercent: 540, duration: 0.9, ease: "none" }, 0.05)
        .to(orbit, { rotate: 120, scale: 1.1, duration: 1 }, 0)
        .to(grid, { autoAlpha: 0.72, scale: 1.08, duration: 1 }, 0)
        .to(copyBlocks[0], { autoAlpha: 0, y: -28, filter: "blur(10px)", duration: 0.34 }, 0.56)
        .to(copyBlocks[1], { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.45 }, 0.68)
        .to(progressItems[0], { autoAlpha: 0.34, scaleX: 0.72, duration: 0.3 }, 0.58)
        .to(progressItems[1], { autoAlpha: 1, scaleX: 1, duration: 0.45 }, 0.64)
        .to(chips[0], { autoAlpha: 0, y: -16, scale: 0.92, duration: 0.3 }, 0.54)
        .to(chips[1], { autoAlpha: 1, y: 0, scale: 1, duration: 0.42 }, 0.66)
        .to(visual, { xPercent: -8, yPercent: 4, rotate: -6, scale: 0.96, duration: 1 }, 1)
        .to(scanLine, { yPercent: 40, duration: 0.9, ease: "none" }, 1.05)
        .to(orbit, { rotate: 270, scale: 0.94, duration: 1 }, 1)
        .to(grid, { autoAlpha: 0.48, scale: 0.98, duration: 1 }, 1)
        .to(copyBlocks[1], { autoAlpha: 0, y: -28, filter: "blur(10px)", duration: 0.34 }, 1.56)
        .to(copyBlocks[2], { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.45 }, 1.68)
        .to(progressItems[1], { autoAlpha: 0.34, scaleX: 0.72, duration: 0.3 }, 1.58)
        .to(progressItems[2], { autoAlpha: 1, scaleX: 1, duration: 0.45 }, 1.64)
        .to(chips[1], { autoAlpha: 0, y: -16, scale: 0.92, duration: 0.3 }, 1.54)
        .to(chips[2], { autoAlpha: 1, y: 0, scale: 1, duration: 0.42 }, 1.66)
        .to(visual, { xPercent: 0, yPercent: -2, rotate: 0, scale: 1.04, duration: 0.7 }, 2);
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Méthode de réparation"
      className="relative isolate min-h-screen overflow-hidden bg-ink text-white"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_38%,rgba(78,221,183,0.16),transparent_30%),linear-gradient(180deg,#101719_0%,#162224_56%,#f5f3ee_100%)]" />
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 py-24 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14 lg:px-8">
        <div className="relative z-10 order-2 lg:order-1">
          <div className="mb-8 flex gap-3" aria-hidden>
            {storySteps.map((step) => (
              <span
                key={step.number}
                data-scroll-story-progress
                className="h-1 w-16 origin-left bg-mint/90"
              />
            ))}
          </div>
          <div className="relative min-h-[18rem] sm:min-h-[15rem]">
            {storySteps.map((step, index) => (
              <article
                key={step.number}
                data-scroll-story-copy
                className={`absolute inset-0 flex flex-col justify-center motion-reduce:static motion-reduce:mb-10 motion-reduce:opacity-100 ${
                  index === 0 ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-mint">
                  {step.number}
                </p>
                <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight text-balance sm:text-5xl">
                  {step.title}
                </h2>
                <p className="mt-6 max-w-lg text-lg leading-8 text-white/70">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative order-1 mx-auto aspect-square w-full max-w-[34rem] lg:order-2">
          <div
            data-scroll-story-grid
            className="absolute inset-[7%] border border-white/10 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:42px_42px] opacity-55"
            aria-hidden
          />
          <div
            data-scroll-story-orbit
            className="absolute inset-[3%] rounded-full border border-mint/20"
            aria-hidden
          />
          <div
            ref={visualRef}
            className="absolute left-1/2 top-1/2 aspect-[4/5] w-[56%] max-w-[19rem] -translate-x-1/2 -translate-y-1/2 transform-gpu border border-white/14 bg-[#0d1718] shadow-premium will-change-transform"
          >
            <div className="absolute inset-4 border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.1),rgba(255,255,255,0.02))]" />
            <div
              data-scroll-story-scan
              className="absolute left-8 right-8 top-10 h-1 bg-mint shadow-[0_0_22px_rgba(78,221,183,0.95)]"
              aria-hidden
            />
            <img
              src="/images/hero/tech-repair-hero.png"
              alt="Réparation informatique"
             className="absolute left-1/2 top-1/2 w-[90%] max-w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-2xl object-cover shadow-2xl"
            />
            
            <div className="absolute bottom-8 left-8 right-8 grid gap-3">
              <span className="h-2 w-4/5 bg-white/22" />
              <span className="h-2 w-3/5 bg-mint/55" />
              <span className="h-2 w-5/6 bg-white/12" />
            </div>
          </div>

          <div
            data-scroll-story-chip
            className="absolute left-0 top-[18%] w-36 border border-white/12 bg-white p-4 text-ink opacity-100 shadow-soft sm:w-40"
          >
            <Smartphone aria-hidden className="text-steel" size={25} />
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-steel">
              Signal
            </p>
            <p className="mt-1 text-sm font-semibold">Panne visible</p>
          </div>
          <div
            data-scroll-story-chip
            className="absolute right-0 top-[12%] w-40 border border-white/12 bg-paper p-4 text-ink opacity-0 shadow-soft motion-reduce:opacity-100 sm:w-44"
          >
            <MonitorCog aria-hidden className="text-steel" size={26} />
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-steel">
              Diagnostic
            </p>
            <p className="mt-1 text-sm font-semibold">Cause identifiée</p>
          </div>
          <div
            data-scroll-story-chip
            className="absolute bottom-[10%] left-1/2 w-40 -translate-x-1/2 border border-mint/50 bg-mint p-4 text-ink opacity-0 shadow-soft motion-reduce:opacity-100 sm:w-44"
          >
            <Wrench aria-hidden size={26} />
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em]">
              Solution
            </p>
            <p className="mt-1 text-sm font-semibold">Réparation prête</p>
          </div>
        </div>
      </div>
    </section>
  );
}
