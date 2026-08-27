import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import cargoPort from "../assets/cargo-port.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "B&T Solutions | Web, Apps & Hosting in South Africa" },
      {
        name: "description",
        content:
          "B&T Solutions is a young, founder-led South African IT company building websites, apps and managed hosting — plus supply & demand sourcing support.",
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
    blurb:
      "Custom websites and web apps built for speed, mobile and growth — landing pages, booking systems, dashboards and full business platforms.",
    points: ["React & modern stacks", "SEO-ready builds", "Lighthouse 90+ targets"],
    price: "from R4 500",
  },
  {
    id: "apps",
    label: "App Development",
    blurb:
      "Mobile and internal tools that fit how your team actually works, from MVP to production release.",
    points: ["Cross-platform builds", "Offline-friendly UX", "Play Store deployment"],
    price: "from R12 000",
  },
  {
    id: "hosting",
    label: "Hosting & Care",
    blurb:
      "Managed hosting, domains, email and monthly maintenance so your site stays fast, patched and online.",
    points: ["99.5% uptime target", "Daily backups", "SSL & domain setup"],
    price: "from R250 / mo",
  },
  {
    id: "supply",
    label: "Supply & Demand",
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
    features: ["Up to 5 pages", "Mobile responsive", "Contact form", "Basic SEO setup", "2 weeks delivery"],
  },
  {
    name: "Business Build",
    price: "R12 000",
    note: "once-off",
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

const PROCESS = [
  ["01", "Discovery", "We map your goals, users and budget before writing a line of code."],
  ["02", "Design", "Clickable design you sign off on, so there are no surprises later."],
  ["03", "Build", "Transparent development with weekly progress check-ins."],
  ["04", "Launch", "Deployment, training and ongoing care so it keeps performing."],
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function useCountUp(target: number, run: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let frame = 0;
    const total = 56;
    const id = setInterval(() => {
      frame += 1;
      const t = 1 - Math.pow(1 - Math.min(1, frame / total), 3);
      setValue(Math.round(target * t));
      if (frame >= total) clearInterval(id);
    }, 18);
    return () => clearInterval(id);
  }, [target, run]);
  return value;
}

function Stat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const [run, setRun] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        setRun(true);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const value = useCountUp(target, run);
  return (
    <div ref={ref}>
      <p className="text-3xl md:text-4xl font-semibold tracking-tight tabular-nums">
        {value}
        {suffix}
      </p>
      <p className="mt-2 text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

function Index() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [active, setActive] = useState(SERVICES[0]!.id);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const current = SERVICES.find((s) => s.id === active)!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-foreground selection:text-background">
      {/* Navigation */}
      <nav
        className={`sticky top-0 z-50 w-full card-glass transition-all duration-500 ${
          scrolled ? "border-b border-border" : "border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-baseline gap-2">
            <span className="font-semibold tracking-tight">B&amp;T</span>
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
              Solutions
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#services" className="link-underline hover:text-foreground">Services</a>
            <a href="#pricing" className="link-underline hover:text-foreground">Pricing</a>
            <a href="#process" className="link-underline hover:text-foreground">Process</a>
            <a href="#faq" className="link-underline hover:text-foreground">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle dark mode"
              className="size-9 grid place-items-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
            >
              {dark ? "☀" : "☾"}
            </button>
            <a
              href="#contact"
              className="hidden sm:inline-flex px-4 py-2 rounded-full bg-foreground text-background text-xs font-medium tracking-wide hover:opacity-85 transition-opacity"
            >
              Get a quote
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden px-6 pt-28 pb-24">
        <div className="pointer-events-none absolute -top-52 left-1/4 size-[34rem] rounded-full bg-primary/8 blur-3xl animate-float" />
        <div className="relative max-w-6xl mx-auto">
          <div className="animate-in inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-foreground animate-pulse" />
            Operational in South Africa
          </div>
          <h1 className="animate-in [animation-delay:120ms] mt-8 max-w-3xl text-[2.75rem] md:text-7xl font-semibold tracking-[-0.04em] leading-[1.02]">
            Modern IT, built by
            <br />
            <span className="text-muted-foreground">young founders.</span>
          </h1>
          <div className="animate-in [animation-delay:220ms] mt-10 h-px w-full bg-border rule-grow" />
          <div className="mt-10 grid gap-10 md:grid-cols-12">
            <p className="animate-in [animation-delay:280ms] md:col-span-7 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              B&amp;T Solutions is a South African IT company delivering websites, apps,
              hosting and digital infrastructure — plus sourcing support that connects
              supply with demand.
            </p>
            <div className="animate-in [animation-delay:360ms] md:col-span-5 flex flex-wrap items-start gap-3">
              <a
                href="#services"
                className="px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-85 transition-opacity"
              >
                Explore services
              </a>
              <a
                href="#pricing"
                className="px-6 py-3 rounded-full border border-border text-sm font-medium hover:border-foreground/40 transition-colors"
              >
                Pricing
              </a>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-border pt-10">
            <Stat target={2} suffix="" label="Founders" />
            <Stat target={24} suffix="h" label="Reply time" />
            <Stat target={99} suffix=".5%" label="Uptime target" />
            <Stat target={14} suffix=" days" label="Starter build" />
          </div>
        </div>
      </header>

      {/* Stack marquee */}
      <section className="border-y border-border overflow-hidden py-5">
        <div className="flex w-max animate-marquee gap-10 px-6">
          {[...STACK, ...STACK].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-28">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              What we build
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-[-0.03em]">
              Services
            </h2>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <ul className="divide-y divide-border border-y border-border">
                {SERVICES.map((s, i) => (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => setActive(s.id)}
                      className={`group w-full flex items-baseline justify-between gap-4 py-5 text-left transition-colors ${
                        active === s.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="text-[11px] font-mono tabular-nums opacity-60">
                          0{i + 1}
                        </span>
                        <span className="text-lg font-medium tracking-tight">{s.label}</span>
                      </span>
                      <span
                        className={`text-xs transition-transform duration-500 ${
                          active === s.id ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                        }`}
                      >
                        →
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-7">
              <div
                key={current.id}
                className="animate-in rounded-2xl border border-border p-8 md:p-10 shadow-soft"
              >
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  {current.price}
                </p>
                <h3 className="mt-5 text-2xl md:text-3xl font-semibold tracking-[-0.03em]">
                  {current.label}
                </h3>
                <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg">
                  {current.blurb}
                </p>
                <ul className="mt-8 grid gap-3 text-sm">
                  {current.points.map((p, i) => (
                    <li
                      key={p}
                      className="animate-in flex items-center gap-3 text-muted-foreground"
                      style={{ animationDelay: `${120 + i * 90}ms` }}
                    >
                      <span className="h-px w-6 bg-border" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-28 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              Transparent pricing
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-[-0.03em]">
              Packages that fit your stage
            </h2>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {PACKAGES.map((p, i) => (
              <Reveal key={p.name} delay={i * 120}>
                <div
                  className={`h-full rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft ${
                    p.featured ? "border-foreground/60" : "border-border"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium tracking-tight">{p.name}</h3>
                    {p.featured && (
                      <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="mt-6 text-3xl font-semibold tracking-[-0.03em]">{p.price}</p>
                  <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mt-1">
                    {p.note}
                  </p>
                  <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3">
                        <span className="mt-2.5 h-px w-4 shrink-0 bg-border" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`mt-9 block rounded-full px-5 py-3 text-center text-sm font-medium transition-all ${
                      p.featured
                        ? "bg-foreground text-background hover:opacity-85"
                        : "border border-border hover:border-foreground/40"
                    }`}
                  >
                    Start here
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Supply & Demand */}
      <section className="px-6 py-28 border-t border-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src={cargoPort}
                alt="Cargo port at dusk representing supply and demand sourcing"
                className="h-64 md:h-80 w-full object-cover grayscale transition-all duration-[1200ms] hover:grayscale-0 hover:scale-[1.03]"
                loading="lazy"
                width={1024}
                height={768}
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              Also available
            </p>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-[-0.03em]">
              Supply &amp; demand services
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
              Connecting South African buyers with the right suppliers — from sourcing and
              procurement to demand planning for companies, government contracts and
              institutions.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium link-underline"
            >
              Discuss your project <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="px-6 py-28 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              Method
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-[-0.03em]">
              How we deliver
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
            {PROCESS.map(([step, title, body], i) => (
              <Reveal key={step} delay={i * 110} className="bg-background">
                <div className="group h-full bg-background p-8 transition-colors duration-500 hover:bg-secondary/60">
                  <span className="text-[11px] font-mono tabular-nums text-muted-foreground">
                    {step}
                  </span>
                  <h3 className="mt-5 text-lg font-medium tracking-tight">{title}</h3>
                  <div className="mt-4 h-px w-8 bg-border transition-all duration-500 group-hover:w-16 group-hover:bg-foreground/40" />
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-28 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em]">
              Questions, answered
            </h2>
          </Reveal>
          <div className="mt-12 border-t border-border">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left text-base font-medium hover:text-muted-foreground transition-colors"
                  >
                    {f.q}
                    <span
                      className={`text-lg leading-none transition-transform duration-500 ${
                        open ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      gridTemplateRows: open ? "1fr" : "0fr",
                      opacity: open ? 1 : 0,
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-10 text-sm text-muted-foreground leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-28 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em]">
              Let&apos;s build something solid.
            </h2>
            <p className="mt-5 text-muted-foreground max-w-lg mx-auto">
              Tell us what you need and we&apos;ll come back within 24 hours with a clear,
              fixed-price plan.
            </p>
          </Reveal>
          <Reveal delay={120}>
            {submitted ? (
              <p className="mt-10 text-sm font-medium">Thank you — we&apos;ll be in touch shortly.</p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-10 mx-auto flex max-w-md items-center gap-2 rounded-full border border-border p-1.5 transition-colors focus-within:border-foreground/50"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Business email address"
                  required
                  aria-label="Business email address"
                  className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-85 transition-opacity"
                >
                  Inquire
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-xs text-muted-foreground">
          <p>© 2026 B&amp;T Solutions — Proudly South African.</p>
          <div className="flex gap-8 font-mono uppercase tracking-[0.18em]">
            <a href="#faq" className="link-underline hover:text-foreground">FAQ</a>
            <a href="#pricing" className="link-underline hover:text-foreground">Pricing</a>
            <a href="#contact" className="link-underline hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
