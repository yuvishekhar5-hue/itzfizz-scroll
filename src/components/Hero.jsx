import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Car from "./Car.jsx";
import StatCard from "./StatCard.jsx";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const HEADLINE = "WELCOME ITZFIZZ";
const STATS = [
  { value: "58%", text: "Increase in pick up point use", bg: "#dfff4f", fg: "#111" },
  { value: "27%", text: "Increase in pick up point use", bg: "#2b2b2b", fg: "#fff" },
  { value: "23%", text: "Decreased in customer phone calls", bg: "#6fcfff", fg: "#111" },
  { value: "40%", text: "Decreased in customer phone calls", bg: "#f26a21", fg: "#111" },
];

export default function Hero() {
  const root = useRef(null);

  useGSAP(
    () => {
      // 1) Intro (time-based, once on load)
      gsap.set(".ch", { opacity: 0, y: 30 });
      gsap.set(".stat", { opacity: 0, y: 14 });
      gsap.set(".car", { x: "-70vw" });
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(".ch", { opacity: 0.35, y: 0, duration: 0.9, stagger: 0.05 })
        .to(".car", { x: "-25vw", duration: 1.2, ease: "power2.out" }, "-=.8");

      // 2) Scroll-linked (scrub ties progress to scroll; 1 = 1s smoothing)
      // Wheel rotation = distance travelled / wheel radius -> tyres roll like real ones.
      const wheelDeg = () => {
        const car = root.current.querySelector(".car");
        const radiusPx = (car.getBoundingClientRect().width / 460) * 27;
        return ((window.innerWidth * 1.25) / radiusPx) * (180 / Math.PI);
      };

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          })
          .fromTo(".car", { x: "-25vw" }, { x: "100vw", ease: "none", duration: 1, immediateRender: false }, 0)
          .to(".w1", { rotation: wheelDeg, svgOrigin: "105 120", ease: "none", duration: 1 }, 0)
          .to(".w2", { rotation: wheelDeg, svgOrigin: "355 120", ease: "none", duration: 1 }, 0)
          // stat cards fade in one after another as the car passes
          .to(".stat", { opacity: 1, y: 0, ease: "none", duration: 0.16, stagger: 0.16 }, 0.12)
          // headline letters light up behind the car
          .to(".ch", { opacity: 1, color: "#c6ff3d", stagger: 0.05, ease: "none", duration: 0.15 }, 0.1);
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <main ref={root} style={{ height: "400vh" }}>
      <section
        className="sticky top-0 h-screen overflow-hidden flex flex-col items-center"
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        <h1
          className="mt-[12vh] px-4 text-center font-light uppercase text-[clamp(1.4rem,5.2vw,4.5rem)] tracking-[.35em] leading-tight"
          aria-label="Welcome Itzfizz"
        >
          {[...HEADLINE].map((c, i) => (
            <span key={i} className="ch inline-block" aria-hidden="true">
              {c === " " ? "\u00A0" : c}
            </span>
          ))}
        </h1>

        <div className="mt-10 flex flex-col gap-4 px-6 w-full max-w-3xl">
          <div className="flex gap-4 self-end">
            {STATS.slice(0, 2).map((s) => <StatCard key={s.value} {...s} />)}
          </div>
          <div className="flex gap-4 self-center">
            {STATS.slice(2).map((s) => <StatCard key={s.value} {...s} />)}
          </div>
        </div>

        <div className="road absolute left-0 right-0 bottom-[14vh] h-[3px]" />
        <Car />
      </section>
    </main>
  );
}
