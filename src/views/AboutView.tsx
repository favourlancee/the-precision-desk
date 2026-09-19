import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  GraduationCap, 
  Wrench, 
  Workflow, 
  BookOpen, 
  Award,
  Languages
} from 'lucide-react';
import { FAVOUR_PROFILE, SPECIALIZATIONS, SERVICES, LANGUAGE_PAIRS } from '../data/initialData';

export const AboutView: React.FC = () => {
  const { setIsQuoteModalOpen, setSelectedResource, resources } = useApp();

  const handleDownloadCV = () => {
    const cvResource = resources.find(r => r.slug === 'translator-cv-template') || resources[0];
    if (cvResource) {
      setSelectedResource(cvResource);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header Profile Section */}
      <section className="p-8 sm:p-12 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tag bg-[#0F766E]/10 text-[#0F766E]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E]" />
              FREELANCE TRANSLATOR | LOCALIZATION SPECIALIST
            </div>
            
            <h1 className="font-editorial text-3xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
              Favour Dudubo
            </h1>
            
            <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-editorial italic">
              "Dedicated to rigorous linguistic precision, semantic integrity, and modern language technology for high-stakes Nordic markets."
            </p>

            <p className="text-sm text-[#475569] leading-relaxed">
              {FAVOUR_PROFILE.bio}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                id="about-request-quote-btn"
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#0F766E] hover:bg-[#115E59] rounded-md transition-colors"
              >
                <span>Request a Project Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="about-download-cv-btn"
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#0F172A] bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#CBD5E1] rounded-md transition-colors"
              >
                <Download className="w-4 h-4 text-[#0F766E]" />
                <span>Download CV / Profile</span>
              </button>

              <a
                href={`mailto:${FAVOUR_PROFILE.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono-tag text-[#475569] hover:text-[#0F172A]"
              >
                <Mail className="w-3.5 h-3.5 text-[#0F766E]" />
                <span>{FAVOUR_PROFILE.email}</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col items-center text-center p-6 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
              alt="Favour Dudubo"
              referrerPolicy="no-referrer"
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md mb-3"
            />
            <h3 className="font-editorial text-lg font-bold text-[#0F172A]">Favour Dudubo</h3>
            <p className="text-xs text-[#0F766E] font-mono-tag">Founder, The Precision Desk</p>
            <div className="w-full mt-4 pt-4 border-t border-[#E2E8F0] text-xs font-mono-tag text-[#64748B] space-y-1.5 text-left">
              <div><strong className="text-[#334155]">Location:</strong> Remote / Global</div>
              <div><strong className="text-[#334155]">Capacity:</strong> ~2,000 words/day</div>
              <div><strong className="text-[#334155]">Direct Contact:</strong> favourlancee@gmail.com</div>
            </div>
          </div>

        </div>
      </section>

      {/* Language Pairs & Service Scope Grid */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono-tag uppercase tracking-wider text-[#0F766E] font-semibold">
            Linguistic Range
          </span>
          <h2 className="font-editorial text-3xl font-bold text-[#0F172A] mt-1">
            Language Pairs & Working Competency
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {LANGUAGE_PAIRS.map((pair) => (
            <div key={pair.id} className="p-5 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono-tag bg-[#0F766E]/10 text-[#0F766E] font-bold">
                  {pair.sourceCode} ↔ {pair.targetCode}
                </span>
                <h3 className="font-editorial text-lg font-bold text-[#0F172A]">
                  {pair.label}
                </h3>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                {pair.regionNotes}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CAT Tools & Technical Infrastructure */}
      <section className="p-8 rounded-2xl bg-[#0F172A] text-white space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono-tag uppercase tracking-wider text-[#2DD4BF]">
            Technology Stack
          </span>
          <h2 className="font-editorial text-3xl font-bold tracking-tight">
            CAT Tools & Linguistic Technology
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Proficient in industry-standard computer-assisted translation environments, terminology management suites, and automated verification tools to ensure 100% concordance and zero tag loss.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {FAVOUR_PROFILE.catTools.map((tool, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-[#1E293B] border border-[#334155] space-y-1">
              <div className="w-2 h-2 rounded-full bg-[#2DD4BF]" />
              <div className="text-sm font-semibold font-mono-tag text-[#F1F5F9]">{tool}</div>
              <div className="text-[11px] text-[#94A3B8]">Production Ready</div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional 4-Step Workflow */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono-tag uppercase tracking-wider text-[#0F766E] font-semibold">
            Delivery Protocol
          </span>
          <h2 className="font-editorial text-3xl font-bold text-[#0F172A] mt-1">
            Professional Translation Workflow
          </h2>
          <p className="text-sm text-[#475569] mt-1">
            Every deliverable passes through a structured four-stage quality gate before client handoff.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FAVOUR_PROFILE.workflow.map((w) => (
            <div key={w.step} className="p-6 rounded-xl bg-white border border-[#E2E8F0] space-y-3">
              <span className="font-mono-tag text-2xl font-bold text-[#0F766E] block">
                {w.step}
              </span>
              <h3 className="font-editorial text-lg font-bold text-[#0F172A]">
                {w.title}
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {w.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Philosophy & Standards */}
      <section className="p-8 rounded-2xl bg-white border border-[#E2E8F0] space-y-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#0F766E]" />
          <h2 className="font-editorial text-2xl font-bold text-[#0F172A]">
            Quality Philosophy
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
          {FAVOUR_PROFILE.qualityPhilosophy}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#F1F5F9]">
          <div className="p-4 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0] space-y-1 text-xs">
            <span className="font-mono-tag font-semibold text-[#0F766E]">ISO 17100 ALIGNED</span>
            <p className="text-[#64748B] leading-relaxed">
              Processes structured in accordance with international requirements for translation services, terminology management, and verified competence.
            </p>
          </div>
          <div className="p-4 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0] space-y-1 text-xs">
            <span className="font-mono-tag font-semibold text-[#0F766E]">ISO 18587 MTPE COMPLIANCE</span>
            <p className="text-[#64748B] leading-relaxed">
              Standardized rubric differentiating light post-editing from comprehensive full post-editing to guarantee publishable quality without semantic hallucination.
            </p>
          </div>
        </div>
      </section>

      {/* Education & Continuous Professional Development (Placeholder Section) */}
      <section className="p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-4">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-[#0F766E]" />
          <h2 className="font-editorial text-2xl font-bold text-[#0F172A]">
            Education & Professional Training
          </h2>
        </div>
        
        <p className="text-xs text-[#64748B] italic">
          Professional development profile maintained by Favour Dudubo without exaggerated or unverified claims.
        </p>

        <div className="space-y-4 pt-2">
          <div className="p-4 bg-white rounded-lg border border-[#E2E8F0] space-y-1 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm text-[#0F172A]">Continuous Professional Development in Translation Studies</span>
              <span className="text-[#64748B] font-mono-tag">Ongoing</span>
            </div>
            <p className="text-[#475569]">
              Specialized coursework and practical workshops covering Scandinavian lexicography, European medical device terminology, and automated CAT tool QA routines.
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-[#E2E8F0] space-y-1 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm text-[#0F172A]">Terminology Management & Corpus Linguistics</span>
              <span className="text-[#64748B] font-mono-tag">Technical Competency</span>
            </div>
            <p className="text-[#475569]">
              Mastery of concordance extraction, bilingual alignment in memoQ and Trados, and regulatory term-base structuring conforming to TBX standards.
            </p>
          </div>
        </div>
      </section>

      {/* Contact & Quote Trigger */}
      <section className="p-8 rounded-2xl bg-[#0C131F] text-white text-center space-y-4">
        <h3 className="font-editorial text-2xl sm:text-3xl font-bold">
          Ready to discuss your Nordic translation project?
        </h3>
        <p className="text-sm text-[#94A3B8] max-w-lg mx-auto">
          Contact Favour Dudubo directly for a detailed project review, word count analysis, or non-disclosure agreement.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="px-6 py-3 text-sm font-semibold text-white bg-[#0F766E] hover:bg-[#115E59] rounded-md transition-colors"
          >
            Request a Quote
          </button>
        </div>
      </section>

    </div>
  );
};
