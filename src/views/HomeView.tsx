import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Sparkles, 
  Layers, 
  Cpu, 
  Calculator, 
  Globe, 
  ShieldCheck, 
  Search, 
  Download, 
  ArrowUpRight, 
  Wrench,
  Languages,
  CheckCheck,
  FileEdit,
  Film,
  Building2,
  Stethoscope,
  Laptop,
  Scale,
  Megaphone,
  Filter
} from 'lucide-react';
import { 
  FAVOUR_PROFILE, 
  SERVICES, 
  LANGUAGE_PAIRS, 
  SPECIALIZATIONS 
} from '../data/initialData';

export const HomeView: React.FC = () => {
  const { 
    setActiveTab, 
    setIsQuoteModalOpen, 
    openQuoteWithService, 
    portfolioProjects, 
    setSelectedProject, 
    resources, 
    setSelectedResource,
    translatorProfiles,
    setSelectedTranslator
  } = useApp();

  const [portfolioFilter, setPortfolioFilter] = useState('All');

  const filteredProjects = portfolioFilter === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.industry.toLowerCase().includes(portfolioFilter.toLowerCase()));

  // Service icon mapper
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Languages': return <Languages className="w-5 h-5 text-[#0F766E]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#0F766E]" />;
      case 'CheckCheck': return <CheckCheck className="w-5 h-5 text-[#0F766E]" />;
      case 'FileEdit': return <FileEdit className="w-5 h-5 text-[#0F766E]" />;
      case 'Globe': return <Globe className="w-5 h-5 text-[#0F766E]" />;
      case 'Film': return <Film className="w-5 h-5 text-[#0F766E]" />;
      default: return <Languages className="w-5 h-5 text-[#0F766E]" />;
    }
  };

  const getSpecIcon = (id: string) => {
    switch (id) {
      case 'medical': return <Stethoscope className="w-5 h-5 text-[#0F766E]" />;
      case 'technical': return <Wrench className="w-5 h-5 text-[#0F766E]" />;
      case 'saas': return <Laptop className="w-5 h-5 text-[#0F766E]" />;
      case 'business': return <Building2 className="w-5 h-5 text-[#0F766E]" />;
      case 'legal': return <Scale className="w-5 h-5 text-[#0F766E]" />;
      case 'marketing': return <Megaphone className="w-5 h-5 text-[#0F766E]" />;
      default: return <Layers className="w-5 h-5 text-[#0F766E]" />;
    }
  };

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 pb-16 border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Subtle Language Pair Indicator Pill */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-tag bg-[#0F766E]/10 text-[#0F766E] border border-[#0F766E]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E]" />
              PRIMARY LANGUAGE PAIRS
            </span>
            <div className="inline-flex items-center gap-2 text-xs font-mono-tag bg-white px-3 py-1 rounded-full border border-[#CBD5E1] text-[#334155] shadow-xs">
              <span className="font-semibold text-[#0F172A]">EN ↔ NO</span>
              <span className="text-[#CBD5E1]">|</span>
              <span className="font-semibold text-[#0F172A]">EN ↔ SV</span>
            </div>
            <span className="text-xs text-[#64748B] font-mono-tag hidden sm:inline">
              Nordic Translation & Localization
            </span>
          </div>

          {/* Headline & Positioning */}
          <div className="space-y-6 max-w-4xl">
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F172A] leading-[1.08]">
              Precision in Every Word.
            </h1>
            
            <p className="font-editorial text-xl sm:text-2xl text-[#475569] font-normal leading-relaxed">
              Translation, localization and language resources for a multilingual world.
            </p>

            <div className="p-5 sm:p-6 rounded-xl bg-white border border-[#E2E8F0] shadow-xs max-w-3xl">
              <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
                "I'm <strong className="text-[#0F172A] font-semibold">Favour Dudubo</strong>, a freelance translator specializing in <strong className="text-[#0F766E]">English ↔ Norwegian</strong> and <strong className="text-[#0F766E]">English ↔ Swedish</strong>, with a focus on translation, MTPE, editing and localization."
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="hero-explore-work-btn"
                onClick={() => {
                  setActiveTab('portfolio');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 text-sm font-semibold text-[#0F172A] bg-white hover:bg-[#F8FAFC] border border-[#CBD5E1] rounded-md shadow-xs transition-colors cursor-pointer"
              >
                Explore My Work
              </button>

              <button
                id="hero-request-quote-btn"
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-white bg-[#0F766E] hover:bg-[#115E59] rounded-md shadow-sm transition-all cursor-pointer"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="text-xs text-[#64748B] font-mono-tag pl-2">
                Fast response · NDA protected
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* 2. PROFESSIONAL INTRODUCTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Content */}
            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-mono-tag uppercase tracking-wider text-[#0F766E] font-semibold">
                About the Platform
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0F172A]">
                The translator behind The Precision Desk
              </h2>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                The Precision Desk is Favour Dudubo's professional workspace for translation services, portfolio projects, practical language tools and resources.
              </p>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Rather than operating as a nameless agency middleman, The Precision Desk delivers direct, accountable expertise with full terminology transparency, verified quality control, and cutting-edge CAT tool workflows.
              </p>

              <div className="pt-2">
                <button
                  id="home-meet-favour-btn"
                  onClick={() => {
                    setActiveTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F766E] hover:text-[#115E59] transition-colors"
                >
                  <span>Meet Favour</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Profile card placeholder */}
            <div className="md:col-span-4 flex flex-col items-center text-center p-6 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
              <div className="relative mb-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
                  alt="Favour Dudubo"
                  referrerPolicy="no-referrer"
                  className="w-24 h-24 rounded-full object-cover border-2 border-[#0F766E] shadow-sm"
                />
                <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-[#10B981] border-2 border-white" title="Available for projects" />
              </div>
              <h3 className="font-editorial text-lg font-bold text-[#0F172A]">
                Favour Dudubo
              </h3>
              <p className="text-xs text-[#0F766E] font-mono-tag mt-0.5">
                Freelance Translator | Localization Specialist
              </p>
              <div className="mt-3 pt-3 border-t border-[#E2E8F0] w-full text-xs text-[#64748B] font-mono-tag space-y-1">
                <div>EN ↔ NO · EN ↔ SV</div>
                <div className="text-[11px] text-[#166534] font-medium">Open for Direct & Agency Projects</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SERVICES */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-xs font-mono-tag uppercase tracking-wider text-[#0F766E] font-semibold">
              Professional Scope
            </span>
            <h2 className="font-editorial text-3xl font-bold text-[#0F172A] mt-1">
              Translation & Language Services
            </h2>
          </div>
          <button
            onClick={() => {
              setActiveTab('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-mono-tag text-[#0F766E] hover:underline flex items-center gap-1"
          >
            <span>View all service details</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="p-6 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#0F766E]/40 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center">
                  {getServiceIcon(srv.icon)}
                </div>
                <h3 className="font-editorial text-xl font-bold text-[#0F172A]">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {srv.shortDescription}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#F1F5F9] flex items-center justify-between">
                <span className="text-[11px] font-mono-tag text-[#64748B]">
                  {srv.relevantLanguagePairs.slice(0, 2).join(' · ')}
                </span>
                <button
                  onClick={() => openQuoteWithService(srv.title)}
                  className="text-xs font-semibold text-[#0F766E] hover:text-[#115E59] flex items-center gap-1"
                >
                  <span>Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. LANGUAGE PAIRS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0F172A] text-white">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs font-mono-tag uppercase tracking-wider text-[#2DD4BF]">
              Core Specialization
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight">
              Primary Language Pairs
            </h2>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Bi-directional fluency rooted in Scandinavian linguistic standards, official orthography, and specialized domain terminology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {LANGUAGE_PAIRS.map((pair) => (
              <div 
                key={pair.id}
                className="p-5 rounded-xl bg-[#1E293B]/70 border border-[#334155] hover:border-[#2DD4BF]/50 transition-colors space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono-tag px-2 py-0.5 rounded bg-[#0F766E] text-white font-semibold">
                      {pair.sourceCode} → {pair.targetCode}
                    </span>
                    <h3 className="font-editorial text-lg font-bold text-white">
                      {pair.label}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-[#CBD5E1] leading-relaxed">
                  {pair.regionNotes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SPECIALIZATIONS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs font-mono-tag uppercase tracking-wider text-[#0F766E] font-semibold">
            Domain Rigor
          </span>
          <h2 className="font-editorial text-3xl font-bold text-[#0F172A] mt-1">
            Subject-Matter Specializations
          </h2>
          <p className="text-sm text-[#475569] mt-1">
            Zero room for terminology drift in high-consequence industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SPECIALIZATIONS.map((spec) => (
            <div 
              key={spec.id}
              className="p-6 rounded-xl bg-white border border-[#E2E8F0] space-y-3"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                  {getSpecIcon(spec.id)}
                </div>
                <h3 className="font-editorial text-lg font-bold text-[#0F172A]">
                  {spec.title}
                </h3>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                {spec.description}
              </p>
              <div className="pt-2 border-t border-[#F1F5F9] space-y-1">
                <span className="text-[10px] font-mono-tag uppercase text-[#64748B] block">
                  Typical deliverables
                </span>
                <p className="text-xs text-[#334155] line-clamp-2">
                  {spec.typicalDocuments.slice(0, 2).join(' · ')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PORTFOLIO PREVIEW */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono-tag uppercase tracking-wider text-[#0F766E] font-semibold">
              The Precision Portfolio
            </span>
            <h2 className="font-editorial text-3xl font-bold text-[#0F172A] mt-1">
              Selected Translation & Localization Work
            </h2>
            <p className="text-xs text-[#64748B] mt-1">
              Samples clearly designated to preserve confidentiality while demonstrating specialized capability.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveTab('portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-mono-tag text-[#0F766E] hover:underline flex items-center gap-1"
          >
            <span>Explore full portfolio</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Industry Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {['All', 'Medical', 'Technical', 'SaaS', 'Business', 'Legal', 'Media'].map((f) => (
            <button
              key={f}
              onClick={() => setPortfolioFilter(f)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono-tag transition-colors ${
                portfolioFilter === f
                  ? 'bg-[#0F766E] text-white font-semibold'
                  : 'bg-white text-[#475569] border border-[#CBD5E1] hover:border-[#94A3B8]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.slice(0, 6).map((proj) => (
            <div
              key={proj.id}
              className="p-6 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#0F766E]/40 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono-tag uppercase text-[#0F766E] font-semibold">
                    {proj.industry}
                  </span>
                  {proj.isDemonstrationSample ? (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono-tag bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]">
                      DEMO SAMPLE
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono-tag bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]">
                      CLIENT WORK
                    </span>
                  )}
                </div>

                <h3 className="font-editorial text-lg font-bold text-[#0F172A] leading-snug">
                  {proj.title}
                </h3>

                <div className="flex items-center gap-2 text-xs font-mono-tag text-[#475569]">
                  <span className="font-semibold text-[#0F172A]">{proj.languagePair}</span>
                  <span>·</span>
                  <span>{proj.service}</span>
                </div>

                <p className="text-xs text-[#64748B] leading-relaxed line-clamp-3">
                  {proj.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#F1F5F9] flex items-center justify-between">
                <span className="text-[11px] text-[#64748B] font-mono-tag">
                  {proj.tools[0]}
                </span>
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="text-xs font-semibold text-[#0F766E] hover:underline flex items-center gap-1"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PRECISION TOOLS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <span className="text-xs font-mono-tag uppercase tracking-wider text-[#0F766E] font-semibold">
                Language Engineering Hub
              </span>
              <h2 className="font-editorial text-3xl font-bold text-[#0F172A] mt-1">
                Useful Tools for Language Professionals
              </h2>
              <p className="text-sm text-[#64748B] mt-1">
                Interactive utilities engineered for freelance translators, project managers, and clients.
              </p>
            </div>

            <button
              onClick={() => {
                setActiveTab('tools');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F766E] hover:text-[#115E59]"
            >
              <span>Explore Tools</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Tool 1: Rate Calculator */}
            <div 
              onClick={() => {
                setActiveTab('tools');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-6 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#0F766E] hover:bg-white transition-all cursor-pointer space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-white border border-[#CBD5E1] flex items-center justify-center text-[#0F766E]">
                <Calculator className="w-5 h-5" />
              </div>
              <h3 className="font-editorial text-lg font-bold text-[#0F172A]">
                Rate Calculator
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Compute estimated translation and MTPE project fees across EUR, USD, NOK, SEK, and GBP with custom word count inputs.
              </p>
              <span className="text-xs font-mono-tag text-[#0F766E] block font-semibold pt-1">
                Launch Calculator →
              </span>
            </div>

            {/* Tool 2: Project Quote Generator */}
            <div 
              onClick={() => setIsQuoteModalOpen(true)}
              className="p-6 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#0F766E] hover:bg-white transition-all cursor-pointer space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-white border border-[#CBD5E1] flex items-center justify-center text-[#0F766E]">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-editorial text-lg font-bold text-[#0F172A]">
                Project Quote Generator
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Configure your document type, word volume, deadline, and target languages to generate an itemized request directly stored in the workspace.
              </p>
              <span className="text-xs font-mono-tag text-[#0F766E] block font-semibold pt-1">
                Generate Quote →
              </span>
            </div>

            {/* Tool 3: Word & Deadline Calculator */}
            <div 
              onClick={() => {
                setActiveTab('tools');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-6 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#0F766E] hover:bg-white transition-all cursor-pointer space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-white border border-[#CBD5E1] flex items-center justify-center text-[#0F766E]">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-editorial text-lg font-bold text-[#0F172A]">
                Word & Deadline Calculator
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Plan realistic delivery dates based on daily throughput capacity, weekend buffers, and multi-pass QA timelines.
              </p>
              <span className="text-xs font-mono-tag text-[#0F766E] block font-semibold pt-1">
                Estimate Deadline →
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 8. TRANSLATOR RESOURCES */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-xs font-mono-tag uppercase tracking-wider text-[#0F766E] font-semibold">
              Knowledge Sharing
            </span>
            <h2 className="font-editorial text-3xl font-bold text-[#0F172A] mt-1">
              Resources for Translators
            </h2>
            <p className="text-sm text-[#64748B] mt-1">
              Practical, battle-tested templates and checklists for independent language careers.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveTab('resources');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F766E] hover:text-[#115E59]"
          >
            <span>Browse Resources</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {resources.slice(0, 4).map((res) => (
            <div
              key={res.id}
              onClick={() => setSelectedResource(res)}
              className="p-5 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#0F766E] hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono-tag bg-[#F8FAFC] text-[#0F766E] border border-[#E2E8F0]">
                  {res.category}
                </span>
                <h3 className="font-editorial text-base font-bold text-[#0F172A] leading-snug">
                  {res.title}
                </h3>
                <p className="text-xs text-[#64748B] line-clamp-3">
                  {res.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#0F766E] font-mono-tag font-semibold">
                  {res.freeStatus}
                </span>
                <span className="text-xs text-[#334155] font-medium flex items-center gap-1">
                  Preview <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. TRANSLATOR DIRECTORY PREVIEW */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono-tag uppercase tracking-wider text-[#0F766E] font-semibold">
                Network Foundation
              </span>
              <h2 className="font-editorial text-3xl font-bold text-[#0F172A] mt-1">
                Find a Language Professional
              </h2>
              <p className="text-sm text-[#475569] mt-1 max-w-2xl leading-relaxed">
                The Precision Desk is building a curated directory of <strong className="text-[#0F172A]">independent language professionals</strong>. We connect you directly with qualified freelance translators—not agency middlemen or anonymous broker queues.
              </p>
            </div>

            <button
              onClick={() => {
                setActiveTab('directory');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono-tag uppercase tracking-wider font-semibold text-white bg-[#0F766E] hover:bg-[#115E59] rounded-md transition-colors shrink-0"
            >
              <span>Explore Directory</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Directory Search preview filters mockup */}
          <div className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div>
              <label className="text-[11px] font-mono-tag text-[#64748B] block mb-1">Language</label>
              <div className="p-2 bg-white rounded border border-[#CBD5E1] text-[#334155]">Norwegian, Swedish, English</div>
            </div>
            <div>
              <label className="text-[11px] font-mono-tag text-[#64748B] block mb-1">Language Pair</label>
              <div className="p-2 bg-white rounded border border-[#CBD5E1] text-[#334155]">EN ↔ NO, EN ↔ SV</div>
            </div>
            <div>
              <label className="text-[11px] font-mono-tag text-[#64748B] block mb-1">Specialization</label>
              <div className="p-2 bg-white rounded border border-[#CBD5E1] text-[#334155]">Medical, Technical, SaaS</div>
            </div>
            <div>
              <label className="text-[11px] font-mono-tag text-[#64748B] block mb-1">Service</label>
              <div className="p-2 bg-white rounded border border-[#CBD5E1] text-[#334155]">Translation, MTPE, L10n</div>
            </div>
          </div>

          {/* Display Favour Dudubo as the first profile */}
          <div className="pt-2">
            <h4 className="text-xs font-mono-tag uppercase tracking-wider text-[#64748B] mb-3 font-semibold">
              Featured Directory Listing
            </h4>
            
            <div className="p-6 rounded-xl bg-white border-2 border-[#0F766E]/30 hover:border-[#0F766E] shadow-sm transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start sm:items-center gap-4">
                <img
                  src={translatorProfiles[0].profileImage}
                  alt={translatorProfiles[0].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#0F766E]"
                />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-editorial text-xl font-bold text-[#0F172A]">
                      {translatorProfiles[0].name}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono-tag bg-[#0F766E] text-white font-semibold">
                      FOUNDER & LEAD
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono-tag bg-[#F1F5F9] text-[#475569] border">
                      Independent Freelancer
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#0F766E] font-medium">
                    {translatorProfiles[0].headline}
                  </p>
                  <p className="text-xs text-[#64748B] line-clamp-1">
                    Pairs: {translatorProfiles[0].languagePairs.join(' · ')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <button
                  onClick={() => setSelectedTranslator(translatorProfiles[0])}
                  className="w-full md:w-auto px-4 py-2 text-xs font-semibold text-[#0F172A] bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#CBD5E1] rounded-md transition-colors"
                >
                  View Profile
                </button>
                <button
                  onClick={() => openQuoteWithService()}
                  className="w-full md:w-auto px-4 py-2 text-xs font-semibold text-white bg-[#0F766E] hover:bg-[#115E59] rounded-md transition-colors"
                >
                  Direct Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-14 rounded-2xl bg-[#0C131F] text-white text-center space-y-6 border border-[#1E293B]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tag bg-[#2DD4BF]/10 text-[#2DD4BF] border border-[#2DD4BF]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
            FAVOUR DUDUBO · FREELANCE TRANSLATOR
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight max-w-2xl mx-auto">
            Have a language project?
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
            Tell me what you need translated, localized or reviewed.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              id="final-cta-request-quote-btn"
              onClick={() => setIsQuoteModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-[#0F766E] hover:bg-[#115E59] rounded-md shadow-sm transition-all cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="final-cta-view-portfolio-btn"
              onClick={() => {
                setActiveTab('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 text-sm font-semibold text-[#CBD5E1] hover:text-white bg-[#1E293B] hover:bg-[#334155] border border-[#334155] rounded-md transition-colors cursor-pointer"
            >
              View Portfolio
            </button>
          </div>

          <p className="text-xs text-[#64748B] font-mono-tag pt-2">
            theprecisiondesk.com · Confidentiality & NDAs Guaranteed
          </p>
        </div>
      </section>

    </div>
  );
};
