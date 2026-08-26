import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import cargoPort from "../assets/cargo-port.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "B&T Solutions | Web, Apps & Hosting in South Africa" },
      {
        name: "description",
        content:
          "B&T Solutions is a young, founder-led South African company building websites, apps and managed hosting — plus smart supply & demand sourcing support.",
      },
      { property: "og:title", content: "B&T Solutions | Web, Apps & Hosting in South Africa" },
      {
        property: "og:description",
        content:
          "Websites, apps, hosting and sourcing support from two young South African founders.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SERVICES = [
  {
    id: "web",
    label: "Web Development",
    tint: "from-primary to-brand-violet",
    blurb:
      "Custom websites and web apps built for speed, mobile and growth — landing pages, booking systems, dashboards and full business platforms.",
    points: ["React & modern stacks", "SEO-ready builds", "Lighthouse 90+ targets"],
    price: "from R4 500",
  },
  {
    id: "apps",
    label: "App Development",
    tint: "from-brand-violet to-brand-pink",
    blurb:
      "Mobile and internal tools that fit how your team actually works, from MVP to production release.",
    points: ["Cross-platform builds", "Offline-friendly UX", "Play Store deployment"],
    price: "from R12 000",
  },
  {
    id: "hosting",
    label: "Hosting & Care",
    tint: "from-brand-cyan to-primary",
    blurb:
      "Managed hosting, domains, email and monthly maintenance so your site stays fast, patched and online.",
    points: ["99.5% uptime target", "Daily backups", "SSL & domain setup"],
    price: "from R250 / mo",
  },
  {
    id: "supply",
    label: "Supply & Demand",
    tint: "from-brand-amber to-brand-pink",
    blurb:
      "Connecting South African buyers with the right suppliers — sourcing, quotations, procurement support and demand planning.",
    points: ["Verified sourcing", "Quote comparison", "Delivery coordination"],
    price: "quoted per job",
  },
];

const STACK = [
  "React",
  "TypeScript",
  "Next.js",
  "Node",
  "PostgreSQL",
  "Tailwind",
  "Figma",
  "Cloudflare",
  "Supabase",
  "React Native",
  "Docker",
  "Vercel",
];

const PACKAGES = [
  {
    name: "Starter Site",
    price: "R4 500",
    note: "once-off",
    accent: "border-brand-cyan/40",
    features: ["Up to 5 pages", "Mobile responsive", "Contact form", "Basic SEO setup", "2 weeks delivery"],
  },
  {
    name: "Business Build",
    price: "R12 000",
    note: "once-off",
    accent: "border-primary",
    featured: true,
    features: [
      "Up to 12 pages + CMS",
      "Custom design system",
      "Bookings / payments ready",
      "Analytics + SEO",
      "30 days aftercare",
    ],
  },
  {
    name: "Growth Retainer",
    price: "R1 900",
    note: "per month",
    accent: "border-brand-amber/40",
    features: ["Hosting & domain", "Unlimited small edits", "Monthly performance report", "Priority support", "Security patching"],
  },
];

const FAQS = [
  {
    q: "How fast can you deliver a website?",
    a: "A starter site typically takes 1–2 weeks from approved content, and a larger business build 3–5 weeks. We give a fixed timeline in the quote.",
  },
  {
    q: "Do you work with small businesses and startups?",
    a: "Yes — most of our clients are small South African businesses. We scope work to your budget and start with what actually moves the needle.",
  },
  {
    q: "Can you also handle supply and sourcing?",
    a: "We help connect buyers with suppliers, compare quotes and coordinate delivery. It runs alongside our IT work for clients who need both.",
  },
  {
    q: "Who are the founders?",
    a: "Two young South African IT students who build production software for real clients. You deal with us directly — no account managers.",
  },
];

function useCountUp(target: number, run: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let frame = 0;
    const total = 48;
    const id = setInterval(() => {
      frame += 1;
      setValue(Math.round(target * Math.min(1, frame / total)));
      if (frame >= total) clearInterval(id);
    }, 20);
    return () => clearInterval(id);
  }, [target, run]);
  return value;
}

function Stat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const [run, setRun] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setRun(true), 200);
    return () => clearTimeout(t);
  }, []);
  const value = useCountUp(target, run);
  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-extrabold tracking-tighter text-gradient">
        {value}
        {suffix}
      </p>
      <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-2">{label}</p>
    </div>
  );
}

function Index() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [active, setActive] = useState(SERVICES[0]!.id);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const current = SERVICES.find((s) => s.id === active)!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full card-glass border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="size-8 bg-brand-gradient rounded-lg flex items-center justify-center glow">
              <span className="text-[11px] font-extrabold text-primary-foreground">B&T</span>
            </div>
            <span className="font-extrabold tracking-tighter text-xl">
              B&T<span className="font-normal text-muted-foreground">.SOLUTIONS</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
            <a href="#it-sector" className="hover:text-primary transition-colors">Services</a>
            <a href="#work" className="hover:text-primary transition-colors">Packages</a>
            <a href="#methodology" className="hover:text-primary transition-colors">Process</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <button
              type="button"
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle dark mode"
              className="size-9 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              {dark ? "☀" : "☾"}
            </button>
            <a
              href="#contact"
              className="px-4 py-2 bg-brand-gradient text-primary-foreground rounded-full text-xs font-semibold hover:opacity-90 transition-all"
            >
              Get a Quote
            </a>
          </div>
          <button
            type="button"
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle dark mode"
            className="md:hidden size-9 grid place-items-center rounded-full border border-border"
          >
            {dark ? "☀" : "☾"}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -left-24 size-[28rem] rounded-full bg-primary/25 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -top-20 right-0 size-[24rem] rounded-full bg-brand-violet/25 blur-3xl animate-float [animation-delay:2s]" />
        <div className="pointer-events-none absolute top-64 left-1/3 size-[20rem] rounded-full bg-brand-cyan/20 blur-3xl animate-float [animation-delay:4s]" />

        <div className="relative max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gradient/10 border border-primary/20 mb-8 animate-in">
            <span className="size-1.5 rounded-full bg-brand-lime animate-pulse" />
            <span className="text-[10px] font-mono font-medium text-primary uppercase tracking-wider">
              Operational in South Africa
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] max-w-4xl mb-8 animate-in [animation-delay:100ms]">
            Modern IT Built <br />
            by <span className="text-gradient animate-shimmer">Young Founders.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-in [animation-delay:200ms]">
            We are young entrepreneurs building B&T Solutions — a South African IT company
            delivering websites, apps, hosting, and digital infrastructure. We also help
            clients connect supply with demand through smart sourcing support.
          </p>
          <div className="flex flex-wrap gap-4 animate-in [animation-delay:300ms]">
            <a
              href="#it-sector"
              className="px-8 py-4 bg-brand-gradient text-primary-foreground font-semibold rounded-xl glow hover:opacity-90 transition-all"
            >
              Explore IT Services
            </a>
            <a
              href="#work"
              className="px-8 py-4 bg-card border border-border font-semibold rounded-xl hover:border-primary hover:text-primary transition-all"
            >
              See Packages & Pricing
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-in [animation-delay:400ms]">
            <Stat target={2} suffix="" label="Founders" />
            <Stat target={24} suffix="h" label="Reply Time" />
            <Stat target={99} suffix=".5%" label="Uptime Target" />
            <Stat target={14} suffix=" days" label="Starter Build" />
          </div>
        </div>
      </header>

      {/* Tech marquee */}
      <section className="border-y border-border bg-secondary/40 py-6 overflow-hidden">
        <div className="flex w-max animate-marquee gap-4">
          {[...STACK, ...STACK].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="px-5 py-2 rounded-full border border-border bg-card text-sm font-mono whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Interactive services */}
      <section id="it-sector" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-4">
              What We Build
            </h2>
            <h3 className="text-4xl font-extrabold tracking-tight">
              IT Services <span className="text-gradient">First</span>
            </h3>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm">
            Pick a service to see what's included and what it typically costs.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(s.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${
                active === s.id
                  ? "bg-brand-gradient text-primary-foreground border-transparent glow"
                  : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-12 gap-6">
          <div
            className={`md:col-span-7 rounded-3xl p-10 bg-gradient-to-br ${current.tint} text-primary-foreground relative overflow-hidden`}
          >
            <div className="absolute -bottom-24 -right-16 size-72 rounded-full bg-white/20 blur-3xl" />
            <div className="relative">
              <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-mono uppercase tracking-widest">
                {current.price}
              </span>
              <h4 className="text-4xl font-extrabold mt-6 tracking-tight">{current.label}</h4>
              <p className="mt-4 max-w-md opacity-90 leading-relaxed">{current.blurb}</p>
              <ul className="mt-8 grid gap-2 text-sm">
                {current.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-current" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-5 grid gap-6">
            {SERVICES.filter((s) => s.id !== active)
              .slice(0, 3)
              .map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(s.id)}
                  className="text-left bg-card border border-border rounded-2xl p-6 hover:border-primary hover:-translate-y-1 transition-all"
                >
                  <div className={`size-9 rounded-lg mb-4 bg-gradient-to-br ${s.tint}`} />
                  <h4 className="font-bold tracking-tight">{s.label}</h4>
                  <p className="text-muted-foreground text-xs mt-1">{s.price}</p>
                </button>
              ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="work" className="py-24 px-6 bg-secondary/40 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-xs font-mono text-primary uppercase tracking-widest mb-4">Transparent Pricing</h2>
            <h3 className="text-4xl font-extrabold tracking-tighter">Packages that fit your stage</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PACKAGES.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-3xl p-8 bg-card border-2 ${p.accent} ${
                  p.featured ? "glow md:-translate-y-3" : ""
                } hover:-translate-y-1 transition-transform`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-brand-gradient text-primary-foreground text-[10px] font-mono uppercase tracking-widest">
                    Most Popular
                  </span>
                )}
                <h4 className="font-bold text-lg tracking-tight">{p.name}</h4>
                <p className="mt-4 text-4xl font-extrabold tracking-tighter text-gradient">{p.price}</p>
                <p className="text-xs font-mono text-muted-foreground">{p.note}</p>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-primary">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 block text-center px-5 py-3 rounded-xl text-sm font-bold transition-all ${
                    p.featured
                      ? "bg-brand-gradient text-primary-foreground hover:opacity-90"
                      : "border border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  Start here
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply & Demand */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 relative">
            <div className="absolute -inset-3 bg-warm-gradient opacity-30 blur-2xl rounded-3xl" />
            <img
              src={cargoPort}
              alt="Modern cargo port at dusk"
              className="relative rounded-3xl w-full object-cover h-64 md:h-80"
              loading="lazy"
              width={1024}
              height={768}
            />
          </div>
          <div className="flex-1">
            <h2 className="text-xs font-mono font-medium text-brand-amber uppercase tracking-widest mb-4">
              Also Available
            </h2>
            <h3 className="text-3xl font-extrabold tracking-tight mb-4">Supply & Demand Services</h3>
            <p className="text-muted-foreground text-sm max-w-md mb-6">
              Connecting South African buyers with the right suppliers — from sourcing
              and procurement to demand planning for companies, government contracts,
              and institutions.
            </p>
            <a
              href="#contact"
              className="inline-flex px-6 py-3 bg-warm-gradient text-foreground rounded-xl text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="methodology" className="py-24 px-6 bg-zinc-950 text-white overflow-hidden relative">
        <div className="pointer-events-none absolute top-10 right-10 size-80 rounded-full bg-brand-violet/30 blur-3xl animate-float" />
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-4xl font-extrabold tracking-tighter mb-20 text-center">
            How We <span className="text-gradient">Deliver</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-brand-gradient opacity-60" />
            {[
              ["01. Discovery", "Requirement Scoping", "We map your goals, users and budget before writing a line of code."],
              ["02. Design", "Prototype & Approve", "Clickable design you sign off on, so there are no surprises later."],
              ["03. Build", "Execution Cycle", "Rapid, transparent development with weekly progress check-ins."],
              ["04. Launch", "Handover & Support", "Deployment, training and ongoing care so it keeps performing."],
            ].map(([step, title, body], i) => (
              <div key={step} className="relative pt-12 pb-8 px-4 border-l md:border-l-0 border-white/10">
                <div
                  className={`absolute top-6 md:top-[31px] -left-[5px] md:left-0 size-2.5 rounded-full ${
                    i === 0 ? "bg-brand-lime" : "bg-white/25"
                  }`}
                />
                <span className="text-xs font-mono text-brand-cyan mb-4 block">{step}</span>
                <h5 className="text-lg font-bold mb-2">{title}</h5>
                <p className="text-white/50 text-xs">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold tracking-tighter mb-10 text-center">
            Questions, <span className="text-gradient">answered</span>
          </h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <div key={f.q} className="border border-border rounded-2xl bg-card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center gap-4 px-6 py-5 text-left font-semibold hover:text-primary transition-colors"
                >
                  {f.q}
                  <span className={`text-primary transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <p className="px-6 pb-6 -mt-1 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-brand-gradient rounded-3xl p-12 text-center relative overflow-hidden text-primary-foreground">
          <div className="absolute -top-20 -left-10 size-72 rounded-full bg-white/20 blur-3xl animate-float" />
          <div className="relative z-10">
            <h2 className="text-4xl font-extrabold tracking-tighter mb-6">
              Ready to work with young, driven founders?
            </h2>
            <p className="opacity-90 max-w-xl mx-auto mb-10">
              Tell us what you need and we'll come back within 24 hours with a clear,
              fixed-price plan.
            </p>
            {submitted ? (
              <div className="max-w-md mx-auto px-4 py-3 bg-white/20 rounded-xl font-medium">
                Thank you — we'll be in touch shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Business email address"
                  required
                  className="flex-1 px-4 py-3 bg-background text-foreground rounded-xl text-sm outline-none focus:ring-2 focus:ring-background/50"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-foreground text-background rounded-xl text-sm font-bold hover:opacity-90 transition-opacity"
                >
                  Inquire
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="size-6 bg-brand-gradient rounded-md" />
              <span className="font-extrabold tracking-tighter">B&T SOLUTIONS</span>
            </div>
            <p className="text-xs text-muted-foreground">
              © 2026 B&T Solutions. All rights reserved. Proudly South African.
            </p>
          </div>
          <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#work" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
