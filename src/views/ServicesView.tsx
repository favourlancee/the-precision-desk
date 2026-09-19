import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  ArrowRight, 
  CheckCircle2, 
  Languages, 
  Cpu, 
  CheckCheck, 
  FileEdit, 
  Globe, 
  Film, 
  Clock, 
  ShieldAlert, 
  FileText 
} from 'lucide-react';
import { SERVICES } from '../data/initialData';

export const ServicesView: React.FC = () => {
  const { openQuoteWithService } = useApp();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Languages': return <Languages className="w-6 h-6 text-[#0F766E]" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#0F766E]" />;
      case 'CheckCheck': return <CheckCheck className="w-6 h-6 text-[#0F766E]" />;
      case 'FileEdit': return <FileEdit className="w-6 h-6 text-[#0F766E]" />;
      case 'Globe': return <Globe className="w-6 h-6 text-[#0F766E]" />;
      case 'Film': return <Film className="w-6 h-6 text-[#0F766E]" />;
      default: return <Languages className="w-6 h-6 text-[#0F766E]" />;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-mono-tag uppercase tracking-wider text-[#0F766E] font-semibold">
          Comprehensive Language Capabilities
        </span>
        <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
          Translation & Language Services
        </h1>
        <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
          From full human translation of high-stakes regulatory dossiers to ISO 18587 post-editing and software localization, every service follows uncompromising quality criteria.
        </p>
      </div>

      {/* Services List */}
      <div className="space-y-12">
        {SERVICES.map((srv, index) => (
          <div
            key={srv.id}
            id={`service-card-${srv.id}`}
            className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-8"
          >
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] flex items-center justify-center">
                  {getServiceIcon(srv.icon)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono-tag text-[#64748B]">SERVICE 0{index + 1}</span>
                    <span className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
                    <span className="text-xs font-mono-tag text-[#0F766E] font-semibold">
                      {srv.standardTurnaround}
                    </span>
                  </div>
                  <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0F172A]">
                    {srv.title}
                  </h2>
                </div>
              </div>

              <button
                onClick={() => openQuoteWithService(srv.title)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#0F766E] hover:bg-[#115E59] rounded-md transition-colors shrink-0"
              >
                <span>Request a Quote for {srv.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Overview */}
            <p className="text-base text-[#334155] leading-relaxed">
              {srv.shortDescription}
            </p>

            {/* 3 Column Detailed Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* What It Involves */}
              <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
                <h4 className="text-xs font-mono-tag uppercase tracking-wider text-[#0F172A] font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
                  What It Involves
                </h4>
                <ul className="space-y-2 text-xs text-[#475569] leading-relaxed">
                  {srv.whatItInvolves.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#0F766E] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Typical Content */}
              <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
                <h4 className="text-xs font-mono-tag uppercase tracking-wider text-[#0F172A] font-bold flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#0F766E]" />
                  Typical Content
                </h4>
                <ul className="space-y-2 text-xs text-[#475569] leading-relaxed">
                  {srv.typicalContent.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#0F766E] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quality Considerations */}
              <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
                <h4 className="text-xs font-mono-tag uppercase tracking-wider text-[#0F172A] font-bold flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-[#0F766E]" />
                  Quality Considerations
                </h4>
                <ul className="space-y-2 text-xs text-[#475569] leading-relaxed">
                  {srv.qualityConsiderations.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#0F766E] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Relevant Language Pairs footer tag */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs font-mono-tag">
              <div className="flex items-center gap-2">
                <span className="text-[#64748B]">Relevant Language Pairs:</span>
                <div className="flex gap-1.5">
                  {srv.relevantLanguagePairs.map((p, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-[#F1F5F9] text-[#0F766E] font-semibold border border-[#CBD5E1]">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <span className="text-[#64748B]">
                Standard turnaround: {srv.standardTurnaround}
              </span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
