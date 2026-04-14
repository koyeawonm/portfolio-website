import { useEffect, useRef, useState } from "react";
import { Hero } from "@/components/ui/animated-hero";
import { DitheringShader } from "@/components/ui/dithering-shader";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  MapPin,
  Calendar,
  TrendingUp,
  Users,
  Lightbulb,
  Globe,
} from "lucide-react";

// ── DATA ─────────────────────────────────────────────────────────────────────

const experience = [
  {
    company: "ProGuard",
    companyNote: "Coleville Partners Portfolio Company",
    role: "Growth Strategy & Marketing MBA Intern, Office of the CEO",
    period: "Sep 2025 – Jan 2026",
    location: "New York, NY / Remote",
    promo: null,
    bullets: [
      "Served as the primary marketing and growth operator to the Founder and CEO, shaping ProGuard's 2026 GTM roadmap across acquisition, lifecycle, and conversion in a lean, early-stage environment",
      "Built ProGuard's GTM foundation across positioning, lifecycle strategy, channel testing, and retention programs — creating the messaging and experimentation infrastructure used to guide 2026 growth planning",
      "Synthesized market signals into a positioning architecture that led the product's pivot from a simple warranty offering to a broader home infrastructure platform",
    ],
  },
  {
    company: "NVIDIA",
    companyNote: null,
    role: "Agentic AI Marketing, MBA Intern",
    period: "Jul – Sep 2025",
    location: "Santa Clara, CA / Remote",
    promo: null,
    bullets: [
      "Identified adoption barriers across 25+ AI partners and translated findings into enablement recommendations, influencing a shift toward curated, co-brandable toolkits and campaign guides adopted for 2026 planning",
      "Led a web analytics audit across 50+ pages using Adobe Analytics and Contentsquare, converting raw engagement signals into a prioritized roadmap for GTC 2026",
      "Designed developer-facing content architecture and learning pathways for Agentic AI products, helping clarify use cases and reduce adoption friction across NVIDIA's ecosystem",
    ],
  },
  {
    company: "Niantic, Inc.",
    companyNote: null,
    role: "Product Marketing Manager, Pokémon GO",
    period: "2019 – 2024",
    location: "New York, NY",
    promo: "Promoted twice from Associate Product Marketing Manager roles",
    bullets: [
      "Led product strategy and go-to-market execution for high-priority Pokémon GO features, driving a 6% YoY increase in feature adoption through user research, adoption data, and market insights",
      "Launched 10+ global campaigns (500+ creative assets each) across digital, paid media, PR, influencer, and experiential channels — generating 1B+ impressions and contributing to one of the largest DAU surges in the game's history",
      "Directed alignment across 12+ cross-functional teams (product, engineering, analytics), shaping product strategy, prioritizing roadmaps, and integrating user insights into development plans",
      "Created scalable cross-functional workflows, product documentation, and GTM requirements — reducing time-to-execution by 40% across internal teams and external partners (e.g., The Pokémon Company)",
      "Supported strategic brand partnerships with Gucci, Longchamp, and Nike, embedding co-branded experiences into gameplay to increase foot traffic and new user acquisition",
      "Secured co-marketing opportunities with Google and Apple App Store teams, achieving a 15% average lift in new user acquisition during significant campaign periods",
      "Strategically managed a $MM marketing budget to maximize ROI, optimize resource allocation, and drive upper-funnel growth and brand impact",
    ],
  },
];

const education = [
  {
    school: "The Wharton School, University of Pennsylvania",
    degree: "Master of Business Administration",
    sub: "Majors in Neuromarketing & Artificial Intelligence in Business",
    period: "2024 – Present",
    location: "Philadelphia, PA",
    badges: ["Moelis Fellow", "CEO Fellow", "Neuromarketing", "AI in Business"],
    bullets: [
      "Moelis Fellow — fewer than 5% of applicants admitted",
      "Coalition for Equity and Opportunity (CEO) Fellow",
      "Wharton Africa Student Association (President)",
      "Wharton Marketing Club (Partnerships) · AI & Analytics Club · 1Gen Club (Mentor)",
      "Global: Growth in Emerging Markets (São Paulo) · Sustainable Development (Jakarta)",
    ],
  },
  {
    school: "D'Amore-McKim School of Business, Northeastern University",
    degree: "BS, International Business & Marketing",
    sub: "Minor in International Affairs · Magna Cum Laude with University Honors",
    period: "Boston, MA",
    location: null,
    badges: ["Magna Cum Laude", "University Honors", "Torch Scholar"],
    bullets: [
      "Huntington 100 — selected among top 1% of students",
      "Senior Excellence Award in Global Engagement (one senior selected yearly)",
      "Torch First-Generation Scholar — full-ride fellowship",
      "Norma P. Rosin Award for Outstanding Critical Thinking & Writing",
      "Global: Goldsmiths, University of London · Centre d'Études Franco-Américain (Lyon)",
    ],
  },
];

const skills = [
  {
    icon: <TrendingUp className="w-5 h-5 text-brand-500" />,
    category: "Core Competencies",
    tags: [
      "GTM Strategy",
      "Product Marketing",
      "Technical Storytelling",
      "Consumer Behavior",
      "Adoption Strategy",
      "Behavioral Insights",
      "Campaign Analytics",
      "Partner Enablement",
      "Product Strategy",
      "Global Launches",
    ],
  },
  {
    icon: <Lightbulb className="w-5 h-5 text-brand-500" />,
    category: "AI Tools",
    tags: [
      "Claude",
      "ChatGPT",
      "Google Gemini",
      "NotebookLM",
      "Perplexity",
      "Midjourney",
      "Runway",
    ],
  },
  {
    icon: <Users className="w-5 h-5 text-brand-500" />,
    category: "Marketing Tools",
    tags: [
      "Adobe Analytics",
      "Contentsquare",
      "Looker",
      "Sprinklr",
      "Figma",
      "Asana",
      "Jira",
      "Confluence",
      "Crowdin",
    ],
  },
  {
    icon: <Globe className="w-5 h-5 text-brand-500" />,
    category: "Leadership & Operations",
    tags: [
      "Cross-functional Leadership",
      "Stakeholder Management",
      "Budget Management",
      "Roadmap Prioritization",
      "Team Alignment",
    ],
  },
  {
    icon: <ArrowUpRight className="w-5 h-5 text-brand-500" />,
    category: "Research & Analysis",
    tags: [
      "User Research",
      "Market Insights",
      "Web Analytics Audits",
      "User Personas",
      "Adoption Data",
    ],
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-brand-500" />,
    category: "Channels & Growth",
    tags: [
      "Paid Media",
      "PR",
      "Influencer",
      "Experiential",
      "Lifecycle Marketing",
      "Acquisition",
      "Retention",
      "Co-marketing",
    ],
  },
];

const affiliations = [
  { role: "President", org: "Wharton Africa Student Association" },
  { role: "Fellow", org: "Management Leaders of Tomorrow (MLT)" },
  { role: "Mentor", org: "1Gen Club, Wharton" },
  {
    role: "Alumni Mentor",
    org: "D'Amore-McKim School of Business, Northeastern",
  },
  { role: "Guest Lecturer (2022)", org: "Developing for AR 101, Cal-State East Bay" },
  {
    role: "Member",
    org: "African American MBA Association (Prospective Students Chair)",
  },
];

const stats = [
  { number: "1B+", label: "Impressions generated" },
  { number: "10+", label: "Global campaigns launched" },
  { number: "40%", label: "Reduction in time-to-execution" },
  { number: "15%", label: "Avg. lift in user acquisition" },
];

// ── FADE-IN HOOK ─────────────────────────────────────────────────────────────

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ── SECTION HEADER ───────────────────────────────────────────────────────────

function SectionHeader({
  tag,
  title,
}: {
  tag: string;
  title: React.ReactNode;
}) {
  return (
    <FadeIn className="mb-16">
      <p className="text-xs font-semibold tracking-widest uppercase text-brand-500 mb-3">
        {tag}
      </p>
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
        {title}
      </h2>
      <div className="w-10 h-0.5 bg-brand-500 mt-5" />
    </FadeIn>
  );
}

// ── APP ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* ── NAV ── */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-brand-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-serif text-xl font-bold text-brand-500 hover:text-brand-600 transition-colors"
          >
            KM
          </a>
          <ul className="hidden md:flex gap-8 list-none">
            {["About", "Experience", "Education", "Skills", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-xs font-semibold tracking-widest uppercase text-stone-500 hover:text-brand-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="pt-16 border-b border-brand-200">
        <Hero />
      </section>

      {/* ── STATS ── */}
      <section className="bg-brand-500 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-serif text-4xl font-bold text-white mb-1">
                  {s.number}
                </div>
                <div className="text-xs font-medium text-orange-200 tracking-wide uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader tag="Background" title={<>The space between<br />technology and people</>} />
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <div className="space-y-5 text-stone-600 leading-relaxed text-[1.05rem]">
                <p>
                  I'm a <strong className="text-stone-900 font-semibold">product marketer and GTM strategist</strong>{" "}
                  who thrives at the intersection of technology and human behavior. My career has been defined by one question:{" "}
                  <em>how do you make complex technology feel essential to the people who need it?</em>
                </p>
                <p>
                  At <strong className="text-stone-900 font-semibold">Niantic</strong>, I spent five years shaping go-to-market strategy for Pokémon GO — one of the world's most-played mobile games — leading campaigns that generated over a billion impressions.
                </p>
                <p>
                  At <strong className="text-stone-900 font-semibold">NVIDIA</strong>, I applied that same lens to Agentic AI — identifying adoption barriers across 25+ AI partners and designing enablement architecture to reduce friction across NVIDIA's ecosystem.
                </p>
                <p>
                  Today I'm completing my{" "}
                  <strong className="text-stone-900 font-semibold">Wharton MBA</strong> with majors in Neuromarketing and AI in Business, deepening my understanding of why people adopt — or resist — new technologies.
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 gap-5">
              {[
                {
                  icon: <TrendingUp className="w-5 h-5 text-brand-500" />,
                  title: "GTM Strategy",
                  desc: "End-to-end launch architecture — from positioning and messaging to channel strategy, lifecycle programs, and conversion infrastructure.",
                },
                {
                  icon: <Lightbulb className="w-5 h-5 text-brand-500" />,
                  title: "Neuromarketing & Behavioral Insight",
                  desc: "Wharton-trained in the science of consumer behavior and technology adoption — translating psychological insight into effective growth strategy.",
                },
                {
                  icon: <Users className="w-5 h-5 text-brand-500" />,
                  title: "Cross-functional Leadership",
                  desc: "Proven track record aligning product, engineering, analytics, and external partners across global organizations to drive coherent, high-impact launches.",
                },
                {
                  icon: <Globe className="w-5 h-5 text-brand-500" />,
                  title: "Global Perspective",
                  desc: "Hands-on experience across emerging markets — Brazil, Indonesia, UK, France — informing strategies that resonate across cultural contexts.",
                },
              ].map((card, i) => (
                <FadeIn key={card.title} delay={i * 80}>
                  <div className="flex gap-4 p-5 rounded-xl border border-brand-200 bg-brand-50 hover:border-brand-300 hover:-translate-y-0.5 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-white border border-brand-200 flex items-center justify-center flex-shrink-0">
                      {card.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-900 text-sm mb-1">
                        {card.title}
                      </h4>
                      <p className="text-stone-500 text-sm leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-24 bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader tag="Career" title={<>Professional<br />Experience</>} />
          <div className="relative pl-8 border-l-2 border-brand-200 space-y-14">
            {experience.map((job, i) => (
              <FadeIn key={job.company} delay={i * 100}>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-3 h-3 rounded-full bg-brand-500 border-2 border-white ring-2 ring-brand-300" />
                  <div className="flex flex-wrap justify-between gap-3 mb-2">
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase text-brand-500 mb-1">
                        {job.company}
                        {job.companyNote && (
                          <span className="font-normal text-stone-400 normal-case tracking-normal ml-1.5">
                            — {job.companyNote}
                          </span>
                        )}
                      </p>
                      <h3 className="text-xl font-bold text-stone-900 leading-snug">
                        {job.role}
                      </h3>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="flex items-center gap-1.5 text-sm text-stone-500 justify-end">
                        <Calendar className="w-3.5 h-3.5" />
                        {job.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-stone-400 justify-end mt-1">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </div>
                    </div>
                  </div>
                  {job.promo && (
                    <span className="inline-block text-xs font-semibold text-brand-500 bg-brand-100 border border-brand-200 px-3 py-1 rounded-full mb-4">
                      ↑ {job.promo}
                    </span>
                  )}
                  <ul className="space-y-2.5">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm text-stone-600 leading-relaxed">
                        <span className="text-brand-400 mt-0.5 flex-shrink-0">→</span>
                        <span dangerouslySetInnerHTML={{
                          __html: b.replace(
                            /(\d+%|\d+\+|6%|\$MM|1B\+|40%|15%|12\+|25\+|50\+|10\+)/g,
                            '<strong class="text-stone-900 font-semibold">$1</strong>'
                          ),
                        }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader tag="Academic Background" title="Education" />
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, i) => (
              <FadeIn key={edu.school} delay={i * 120}>
                <div className="h-full p-8 rounded-2xl border border-brand-200 bg-brand-50 hover:border-brand-400 hover:-translate-y-1 transition-all">
                  <p className="text-xs font-bold tracking-widest uppercase text-brand-500 mb-3">
                    {edu.school}
                  </p>
                  <h3 className="text-xl font-bold text-stone-900 mb-1 leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-stone-500 italic mb-1">{edu.sub}</p>
                  <div className="flex items-center gap-1.5 text-xs text-stone-400 mb-5">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                    {edu.location && (
                      <>
                        <span>·</span>
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {edu.badges.map((b) => (
                      <span
                        key={b}
                        className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white border border-brand-300 text-brand-600"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {edu.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-sm text-stone-600 leading-relaxed"
                      >
                        <span className="text-brand-400 flex-shrink-0">·</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY / DITHERING ── */}
      <section className="relative h-[420px] md:h-[480px] overflow-hidden flex items-center justify-center">
        <DitheringShader
          shape="swirl"
          type="4x4"
          colorBack="#1A0800"
          colorFront="#C2530E"
          pxSize={3}
          speed={0.5}
          width={1600}
          height={600}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-orange-300 mb-6">
            Philosophy
          </p>
          <blockquote className="font-serif text-2xl md:text-4xl font-bold text-white leading-tight mb-6">
            "The real challenge is rarely the technology itself — it's the
            translation layer around it."
          </blockquote>
          <p className="text-orange-200 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            My career has been about building that translation layer: the
            strategies, stories, and systems that make complex technology feel
            reliable, legible, and genuinely useful.
          </p>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-24 bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader tag="Capabilities" title={<>Skills &amp; Tools</>} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((cat, i) => (
              <FadeIn key={cat.category} delay={i * 60}>
                <div className="p-6 rounded-xl border border-brand-200 bg-white hover:border-brand-400 transition-colors h-full">
                  <div className="flex items-center gap-2.5 mb-4">
                    {cat.icon}
                    <p className="text-xs font-bold tracking-widest uppercase text-brand-500">
                      {cat.category}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-stone-600 hover:border-brand-400 hover:text-brand-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── AFFILIATIONS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            tag="Community"
            title={<>Affiliations &amp;<br />Community Leadership</>}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {affiliations.map((a, i) => (
              <FadeIn key={a.org} delay={i * 60}>
                <div className="p-5 rounded-xl border border-brand-200 bg-brand-50 hover:border-brand-400 hover:-translate-y-0.5 transition-all">
                  <p className="text-xs font-bold tracking-widest uppercase text-brand-500 mb-1.5">
                    {a.role}
                  </p>
                  <p className="font-semibold text-stone-900 text-sm leading-snug">
                    {a.org}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-28 bg-[#FFF8F0] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-500 mb-4">
              Let's Connect
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
              Get in Touch
            </h2>
            <div className="w-10 h-0.5 bg-brand-500 mx-auto mb-8" />
            <p className="text-stone-500 text-lg leading-relaxed mb-10">
              Open to full-time product marketing and GTM strategy roles. Always
              happy to talk about technology adoption, emerging markets, or
              neuromarketing.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button size="lg" className="gap-2" asChild>
                <a href="mailto:koyeawon@wharton.upenn.edu">
                  koyeawon@wharton.upenn.edu
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a
                  href="https://www.linkedin.com/in/koyeawon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-white border-t border-brand-200 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <p className="text-sm text-stone-400">
            © 2026{" "}
            <span className="text-brand-500 font-semibold">Koyeawon Mendee</span>.
            All rights reserved.
          </p>
          <p className="text-sm text-stone-400">
            Product Marketing · GTM Strategy ·{" "}
            <span className="text-brand-500">Wharton MBA</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
