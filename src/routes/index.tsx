import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import cargoPort from "../assets/cargo-port.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "B&T Solutions | Supply & IT Services" },
      {
        name: "description",
        content:
          "B&T Solutions is a young, founder-led company delivering supply-chain logistics and IT services — from websites and apps to managed hosting and procurement support.",
      },
      { property: "og:title", content: "B&T Solutions | Supply & IT Services" },
      {
        property: "og:description",
        content:
          "B&T Solutions is a young, founder-led company delivering supply-chain logistics and IT services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 selection:text-primary">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="size-8 bg-primary rounded-sm flex items-center justify-center">
              <div className="w-4 h-0.5 bg-white rotate-45 translate-y-0.5" />
              <div className="w-4 h-0.5 bg-white -rotate-45 -translate-y-0.5" />
            </div>
            <span className="font-extrabold tracking-tighter text-xl">
              B&T<span className="font-normal text-muted-foreground">.SOLUTIONS</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#it-sector" className="hover:text-foreground transition-colors">
              IT Sector
            </a>
            <a href="#methodology" className="hover:text-foreground transition-colors">
              Methodology
            </a>
            <a
              href="#contact"
              className="px-4 py-2 bg-foreground text-white rounded-full text-xs hover:bg-foreground/90 transition-all"
            >
              Request Proposal
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-8 animate-in">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-mono font-medium text-primary uppercase tracking-wider">
              Operational in UK & EMEA
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] max-w-4xl mb-8 animate-in [animation-delay:100ms]">
            Bridging Physical Supply <br />
            with <span className="text-primary">Digital Infrastructure.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-in [animation-delay:200ms]">
            We are young entrepreneurs building B&T Solutions — a modern supply and IT
            services company for businesses that need reliable logistics, websites, apps,
            and hosting.
          </p>
          <div className="flex flex-wrap gap-4 animate-in [animation-delay:300ms]">
            <a
              href="#services"
              className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              Explore Services
            </a>
            <a
              href="#it-sector"
              className="px-8 py-4 bg-background border border-border font-semibold rounded-lg hover:bg-secondary transition-all"
            >
              Our IT Portfolio
            </a>
          </div>
        </div>
      </header>

      {/* Trust Bar */}
      <section className="border-y border-border bg-secondary/50 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 opacity-60 grayscale">
          <span className="font-mono text-xs uppercase tracking-[0.3em]">Strategic Partners</span>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            <span className="text-2xl font-bold tracking-tighter">GOV.PROCURE</span>
            <span className="text-2xl font-bold tracking-tighter">EUROLOGIC</span>
            <span className="text-2xl font-bold tracking-tighter">CLOUDNET</span>
            <span className="text-2xl font-bold tracking-tighter">INFRASTRUCTURE.A</span>
          </div>
        </div>
      </section>

      {/* Services Bento */}
      <section id="tenders" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-4">
              Core Capabilities
            </h2>
            <h3 className="text-4xl font-extrabold tracking-tight">Dual-Sector Excellence</h3>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm">
            We bridge the gap between heavy logistical requirements and specialized
            technological advancement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Big Supply Card */}
          <div className="md:col-span-7 group relative bg-zinc-900 text-white rounded-2xl p-10 overflow-hidden ring-1 ring-white/5">
            <img
              src={cargoPort}
              alt="Modern cargo port at dusk"
              className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width={1024}
              height={768}
            />
            <div className="relative z-10 flex flex-col h-full justify-between min-h-[300px]">
              <div>
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-mono uppercase tracking-widest">
                  Logistics Division
                </span>
                <h4 className="text-3xl font-bold mt-6 tracking-tight">Supply & Delivery Tenders</h4>
              </div>
              <p className="text-white/60 text-sm max-w-md">
                End-to-end procurement and delivery strategies for large-scale government
                contracts and international logistics.
              </p>
            </div>
          </div>

          {/* IT Card */}
          <div
            id="it-sector"
            className="md:col-span-5 bg-card border border-border rounded-2xl p-8 flex flex-col justify-between hover:border-primary/50 transition-colors"
          >
            <div>
              <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <div className="size-5 border-2 border-primary border-t-transparent animate-spin rounded-full" />
              </div>
              <h4 className="text-xl font-bold tracking-tight mb-3">Managed Hosting</h4>
              <p className="text-muted-foreground text-sm">
                Secure, high-availability server infrastructure tailored for sensitive
                institutional data.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-border flex justify-between items-center">
              <span className="text-xs font-mono text-muted-foreground">99.9% Uptime SLA</span>
              <span className="text-primary">→</span>
            </div>
          </div>

          {/* Development Card */}
          <div className="md:col-span-4 bg-secondary border border-border rounded-2xl p-8 hover:bg-card transition-all">
            <h4 className="text-lg font-bold tracking-tight mb-2">App Development</h4>
            <p className="text-muted-foreground text-xs mb-6">
              Custom enterprise applications designed for scale.
            </p>
            <div className="space-y-2">
              <div className="h-1 bg-border rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[85%]" />
              </div>
              <div className="h-1 bg-border rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[92%]" />
              </div>
            </div>
          </div>

          {/* Consulting Card */}
          <div className="md:col-span-8 bg-card border border-border rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h4 className="text-xl font-bold tracking-tight mb-3">IT Strategic Consulting</h4>
              <p className="text-muted-foreground text-sm">
                Guiding government sectors through digital transformation with audit-ready
                frameworks.
              </p>
            </div>
            <div className="w-full md:w-48 aspect-square bg-secondary rounded-lg grid place-items-center border border-dashed border-border">
              <span className="text-[10px] font-mono text-muted-foreground">ISO 27001</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section id="methodology" className="py-24 px-6 bg-zinc-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold tracking-tighter mb-20 text-center">
            The Tender Lifecycle
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
            {/* Progress Line */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-white/10" />

            <div className="relative pt-12 pb-8 px-4 border-l md:border-l-0 border-white/10">
              <div className="absolute top-6 md:top-[31px] -left-[5px] md:left-0 size-2.5 rounded-full bg-primary shadow-[0_0_15px_rgba(0,71,255,0.8)]" />
              <span className="text-xs font-mono text-primary mb-4 block">01. Analysis</span>
              <h5 className="text-lg font-bold mb-2">Requirement Scoping</h5>
              <p className="text-white/40 text-xs">
                Deep dive into procurement specifications and compliance hurdles.
              </p>
            </div>

            <div className="relative pt-12 pb-8 px-4 border-l md:border-l-0 border-white/10">
              <div className="absolute top-6 md:top-[31px] -left-[5px] md:left-0 size-2.5 rounded-full bg-white/20" />
              <span className="text-xs font-mono text-white/40 mb-4 block">02. Strategy</span>
              <h5 className="text-lg font-bold mb-2">Proposal Architecture</h5>
              <p className="text-white/40 text-xs">
                Engineering the most competitive and technically sound bid.
              </p>
            </div>

            <div className="relative pt-12 pb-8 px-4 border-l md:border-l-0 border-white/10">
              <div className="absolute top-6 md:top-[31px] -left-[5px] md:left-0 size-2.5 rounded-full bg-white/20" />
              <span className="text-xs font-mono text-white/40 mb-4 block">03. Delivery</span>
              <h5 className="text-lg font-bold mb-2">Execution Cycle</h5>
              <p className="text-white/40 text-xs">
                Mobilizing logistics or dev teams for rapid deployment.
              </p>
            </div>

            <div className="relative pt-12 pb-8 px-4 border-l md:border-l-0 border-white/10">
              <div className="absolute top-6 md:top-[31px] -left-[5px] md:left-0 size-2.5 rounded-full bg-white/20" />
              <span className="text-xs font-mono text-white/40 mb-4 block">04. Handover</span>
              <h5 className="text-lg font-bold mb-2">Operational Launch</h5>
              <p className="text-white/40 text-xs">
                Final verification and long-term support transition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-secondary border border-border rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,71,255,0.05),transparent)]" />
          <div className="relative z-10">
            <h2 className="text-4xl font-extrabold tracking-tighter mb-6">
              Ready to secure your next tender?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              Our multidisciplinary team of IT students and logistics experts is ready to
              scale with your project.
            </p>
            {submitted ? (
              <div className="max-w-md mx-auto px-4 py-3 bg-primary/10 border border-primary/20 rounded-lg text-primary font-medium">
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
                  className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-foreground text-white rounded-lg text-sm font-bold hover:bg-foreground/90 transition-colors"
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
              <div className="size-6 bg-foreground rounded-sm" />
              <span className="font-extrabold tracking-tighter">B&T SOLUTIONS</span>
            </div>
            <p className="text-xs text-muted-foreground">
              © 2026 B&T Solutions Group. All rights reserved.
            </p>
          </div>
          <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
