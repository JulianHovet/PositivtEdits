"use client";

import { Check, Lightning01, Star01, Film01, Sliders01, Mail01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";

const BARLOW = "'Barlow Condensed', sans-serif";
const ANOTHER_DANGER = "'Another Danger - Demo', sans-serif";

const NAV_LINKS = ["Hjem", "Tjenester", "Eksempler", "Priser", "Om Meg", "Kontakt"];
const EXAMPLES = [1, 2, 3, 4, 5];

const SERVICES = [
    {
        icon: Film01,
        name: "Cinematic Edits",
        desc: "Dynamiske og stemningsfulle edits som viser frem serveren din på best mulig måte.",
    },
    {
        icon: Star01,
        name: "Highlight Edits",
        desc: "Perfekt for events, raids, drift eller andre høydepunkter.",
    },
    {
        icon: Sliders01,
        name: "Tilpasset din server",
        desc: "Jeg tilpasser editten etter din server, stil, farger og ønsket stemning.",
    },
];

const PLANS = [
    {
        tier: "Basic Edit",
        range: "30–60 sek edit",
        price: "499,–",
        features: ["30–60 sek edit", "Musikk etter valg", "1 revisjon"],
        featured: false,
    },
    {
        tier: "Standard Edit",
        range: "60–90 sek edit",
        price: "899,–",
        features: ["60–90 sek edit", "Musikk etter valg", "2 revisjoner", "Color grading & effects"],
        featured: true,
    },
    {
        tier: "Premium Edit",
        range: "90–120 sek edit",
        price: "1299,–",
        features: ["90–120 sek edit", "Musikk etter valg", "Ubegrensede revisjoner", "Advanced effects"],
        featured: false,
    },
];

const THUMB_GRADIENTS = [ 
    "linear-gradient(135deg, #080808 0%, #220909 35%, #450d0d 70%, #120404 100%)", 
    "linear-gradient(135deg, #090909 0%, #2b0808 30%, #5a1010 65%, #160404 100%)", 
    "linear-gradient(135deg, #080808 0%, #260909 30%, #731111 70%, #170303 100%)", 
    "linear-gradient(160deg, #090909 0%, #300909 45%, #120404 100%)", 
    "linear-gradient(135deg, #080808 0%, #3a0b0b 35%, #6b1010 65%, #180404 100%)", ];

export const HomeScreen = () => {
    return (
        <div className="flex min-h-dvh flex-col bg-[#050505] text-[#f5f5f5]">

            {/* ── NAV ── */}
            <nav className="fixed left-0 right-0 top-0 z-50 flex h-[68px] items-center justify-between border-b border-white/[0.07] bg-[#050505]/85 px-12 backdrop-blur-md">
                <a href="#" className="flex items-baseline gap-1.5 no-underline">
                    <span className="text-[22px] font-black uppercase tracking-wide text-white" style={{ fontFamily: BARLOW }}>
                        POSITIVT
                    </span>
                    <span className="text-[24px] text-[#ef4444]" style={{ fontFamily: ANOTHER_DANGER, lineHeight: 1 }}>
                        EDITS
                    </span>
                </a>

                <div className="flex items-center gap-9">
    {NAV_LINKS.map((link) => (
        <a
            key={link}
            href="#"
            className="text-[13px] font-medium uppercase tracking-widest text-[#9a9a9a] transition-colors hover:text-white"
        >
            {link}
        </a>
    ))}
</div>

                <Button href="#" size="md" className="bg-red-600">
                    Kontakt
                </Button>
            </nav>

            {/* ── HERO ── */}
            <section className="relative flex min-h-dvh items-center overflow-hidden pt-[68px]">

                {/* Background image — the red GT-R photo */}
                {/* Replace /hero-car.jpg with the actual path to your image in /public */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "url('/hero-car.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center right",
                        backgroundRepeat: "no-repeat",
                    }}
                />

                {/* Dark overlay — fades left side to near-black, keeps right side visible */}
                <div
    className="absolute inset-0 z-[1]"
    style={{
        background:
            "linear-gradient(to right, rgba(10,10,15,0.97) 0%, rgba(10,10,15,0.85) 35%, rgba(10,10,15,0.4) 60%, rgba(10,10,15,0.1) 100%), linear-gradient(to top, rgba(10,10,15,0.8) 0%, transparent 30%)",
    }}
/>

                {/* Red atmospheric glow matching the car taillights */}
                <div
                    className="absolute inset-0 z-[1]"
                    style={{
                        background: "radial-gradient(ellipse 50% 60% at 75% 65%, rgba(220,38,38,0.35) 0%, transparent 70%)",
                    }}
                />

                <div className="relative z-[2] mx-auto flex w-full  h-167 items-center justify-between gap-16 px-12"> 
                    {/* Left side */} 
                    <div className="max-w-2xl"> 
                        <p className="mb-5 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-[#ef4444]"> 
                            <span>✦
                                </span> Profesjonelle FiveM Edits 
                                </p> 
                                <h1 className="mb-6 font-black uppercase leading-[0.92] tracking-tight text-white" style={{ fontFamily: BARLOW, fontSize: "clamp(64px, 8vw, 96px)", }} > 
                                    CLEAN EDITS. 
                                  <br /> MAX{" "} 
                                    <span className="text-[#ef4444]" style={{ fontFamily: ANOTHER_DANGER, fontSize: "clamp(58px, 7.5vw, 90px)", }} > 
                                        IMPACT. 
                                     </span> 
                                </h1> 

                                <p className="mb-9 max-w-sm text-[15px] leading-[1.7] text-[#a3a3a3]"> 
                                    Jeg lager cinematic FiveM edits som får serveren din til å skille seg ut. Høy kvalitet, raske leveranser og 100% fokus på dine ønsker. 
                                </p> 

                            <div className="flex gap-3"> 
                            <Button href="#" size="xl" className="bg-red-600"> 
                                Bestill en edit 
                            </Button> 

                            <Button href="#" color="secondary" size="xl"> 
                                Se eksempler 
                            </Button> 
                        </div> 
                    </div> 

                {/* Right side image */} 
                <div className="hidden lg:flex flex-1 items-stretch justify-end h-full"> 

                    <div className="relative w-full h-full flex-[1.5]" style={{ 
                        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)", 
                        maskImage: "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)", }} 
                       > 

                    </div> 
                  </div>
                </div>
            </section>

            {/* ── EXAMPLES ── */}
            <section className="bg-[#0b0b0b] px-12 py-20">
                <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.1em] text-white before:block before:h-[18px] before:w-[3px] before:rounded-sm before:bg-[#dc2626] before:content-['']">
                        Nylige eksempler
                    </div>
                    <a href="#" className="text-[13px] font-semibold text-[#ef4444] transition-colors hover:text-white">
                        Se flere eksempler →
                    </a>
                </div>

                <div className="grid grid-cols-5 gap-3">
                    {EXAMPLES.map((i) => (
                        <div
                            key={i}
                            className="group relative aspect-[16/10] cursor-pointer overflow-hidden rounded-xl border border-white/[0.07] bg-[#121212]"
                        >
                            <div className="absolute inset-0" style={{ background: THUMB_GRADIENTS[i - 1] }} />
                            <div className="absolute inset-0 z-10 flex items-center justify-center transition-colors group-hover:bg-[#dc2626]/10">
                                <div className="flex size-11 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm transition-all group-hover:scale-105 group-hover:bg-[#dc2626]">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="white" className="ml-0.5">
                                        <path d="M3 2l10 6-10 6z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── SERVICES + PRICING ── */}
            <div className="grid grid-cols-[1fr_1.5fr] divide-x divide-white/[0.07]">

                {/* Services */}
                <section className="px-12 py-20">
                    <div className="flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.1em] text-white before:block before:h-[18px] before:w-[3px] before:rounded-sm before:bg-[#dc2626] before:content-['']">
                        Tjenester
                    </div>
                    <div className="mt-9 flex flex-col gap-7">
                        {SERVICES.map(({ icon: Icon, name, desc }) => (
                            <div key={name} className="grid grid-cols-[48px_1fr] items-start gap-4">
                                <div className="flex size-12 items-center justify-center rounded-xl border border-[#dc2626]/20 bg-[#dc2626]/10 text-[#ef4444]">
                                    <Icon className="size-5" />
                                </div>
                                <div>
                                    <p className="text-[15px] uppercase tracking-wide text-white" style={{ fontFamily: BARLOW, fontWeight: 800 }}>
                                        {name}
                                    </p>
                                    <p className="mt-1 text-[13px] leading-relaxed text-[#9a9a9a]">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pricing */}
                <section className="px-12 py-20">
                    <div className="flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.1em] text-white before:block before:h-[18px] before:w-[3px] before:rounded-sm before:bg-[#dc2626] before:content-['']">
                        Priser
                    </div>
                    <div className="mt-9 grid grid-cols-3 gap-3.5">
                        {PLANS.map(({ tier, range, price, features, featured }) => (
                            <div
                                key={tier}
                                className={[
                                    "relative flex flex-col rounded-xl border p-6 transition-colors",
                                    featured
                                        ? "border-[#dc2626]/50 bg-[#181010]"
                                        : "border-white/[0.07] bg-[#121212] hover:border-[#dc2626]/40",
                                ].join(" ")}
                            >
                                {featured && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#dc2626] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                                        Populær
                                    </div>
                                )}
                                <p className="text-[13px] uppercase tracking-[0.08em] text-white" style={{ fontFamily: BARLOW, fontWeight: 800 }}>
                                    {tier}
                                </p>
                                <p className="mt-0.5 text-[11px] text-[#9a9a9a]">{range}</p>
                                <p className="my-4 leading-none text-white" style={{ fontFamily: BARLOW, fontSize: 52, fontWeight: 900 }}>
                                    {price}
                                </p>
                                <ul className="mb-5 flex flex-1 flex-col gap-2">
                                    {features.map((f) => (
                                        <li key={f} className="flex items-center gap-2 text-[12.5px] text-[#f5f5f5]">
                                            <Check className="size-3.5 flex-shrink-0 text-[#ef4444]" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <Button href="#" size="md" className="w-full justify-center bg-red-600">
                                    Bestill
                                </Button>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* ── FOOTER ── */}
            <footer className="flex items-center gap-3.5 border-t border-white/[0.07] bg-[#0b0b0b] px-12 py-10">
                <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-xl border border-[#dc2626]/20 bg-[#dc2626]/10 text-[#ef4444]">
                    <Mail01 className="size-5" />
                </div>
                <div>
                    <p className="text-[13px] font-bold text-white bg-red-600">Kontakt</p>
                    <p className="text-[12px] text-[#9a9a9a]">Send meg en melding for bestilling eller spørsmål!</p>
                </div>
            </footer>
        </div>
    );
};