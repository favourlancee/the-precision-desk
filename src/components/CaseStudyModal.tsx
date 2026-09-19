import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  ArrowRight, 
  Layers, 
  Wrench, 
  CheckCircle, 
  AlertTriangle, 
  FileCheck, 
  Sparkles 
} from 'lucide-react';

export const CaseStudyModal: React.FC = () => {
  const { selectedProject, setSelectedProject, openQuoteWithService } = useApp();

  if (!selectedProject) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div 
        id="case-study-modal"
        className="relative w-full max-w-3xl my-8 bg-white rounded-xl shadow-2xl border border-[#E2E8F0] overflow-hidden"
      >
        {/* Header bar */}
        <div className="px-6 py-5 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center justify-between">
          <div className="flex items-center gap-3">
            {selectedProject.isDemonstrationSample ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F1F5F9] text-[#475569] text-xs font-mono-tag border border-[#CBD5E1]">
                <Sparkles className="w-3 h-3 text-[#0F766E]" />
                DEMONSTRATION SAMPLE
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#ECFDF5] text-[#065F46] text-xs font-mono-tag border border-[#A7F3D0]">
                <FileCheck className="w-3 h-3 text-[#059669]" />
                CLIENT WORK (ANONYMIZED)
              </span>
            )}
            <span className="text-xs font-mono-tag text-[#64748B]">
              {selectedProject.languagePair}
            </span>
          </div>

          <button
            id="close-case-study-modal-btn"
            onClick={() => setSelectedProject(null)}
            className="p-1.5 text-[#64748B] hover:text-[#0F172A] hover:bg-[#E2E8F0] rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          <div>
            <div className="text-xs uppercase font-mono-tag text-[#0F766E] font-semibold tracking-wider">
              {selectedProject.industry} · {selectedProject.service}
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0F172A] mt-1 leading-snug">
              {selectedProject.title}
            </h2>
            <p className="text-sm text-[#475569] mt-2 leading-relaxed">
              {selectedProject.description}
            </p>
          </div>

          {/* Key metadata grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0] text-xs font-mono-tag">
            <div>
              <span className="text-[#64748B] block">Language Pair</span>
              <span className="font-semibold text-[#0F172A]">{selectedProject.languagePair}</span>
            </div>
            <div>
              <span className="text-[#64748B] block">Service Provided</span>
              <span className="font-semibold text-[#0F172A]">{selectedProject.service}</span>
            </div>
            <div>
              <span className="text-[#64748B] block">Approx. Volume</span>
              <span className="font-semibold text-[#0F172A]">
                {selectedProject.wordCountApprox ? `~${selectedProject.wordCountApprox.toLocaleString()} words` : 'Comprehensive'}
              </span>
            </div>
            <div>
              <span className="text-[#64748B] block">Project Date</span>
              <span className="font-semibold text-[#0F172A]">{selectedProject.created_at}</span>
            </div>
          </div>

          {/* Bilingual Excerpt Comparison */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono-tag uppercase tracking-wider text-[#475569] flex items-center gap-1.5 font-bold">
                <Layers className="w-3.5 h-3.5 text-[#0F766E]" />
                Bilingual Segment Comparison
              </h4>
              <span className="text-[11px] text-[#64748B] font-mono-tag">
                Verbatim excerpt from deliverable
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Source */}
              <div className="p-4 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono-tag text-[#64748B] pb-1 border-b border-[#E2E8F0]">
                  <span>Source ({selectedProject.sourceLanguage})</span>
                  <span className="px-1.5 py-0.5 rounded bg-white text-[10px] border">ORIGINAL</span>
                </div>
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed italic whitespace-pre-line font-sans-ui">
                  "{selectedProject.sampleContent.sourceExcerpt}"
                </p>
              </div>

              {/* Target */}
              <div className="p-4 rounded-lg bg-[#F0FDF4] border border-[#BBF7D0] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono-tag text-[#166534] pb-1 border-b border-[#BBF7D0]">
                  <span>Target ({selectedProject.targetLanguage})</span>
                  <span className="px-1.5 py-0.5 rounded bg-white text-[10px] text-[#0F766E] border border-[#BBF7D0] font-semibold">
                    LOCALIZED DELIVERABLE
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#0F172A] leading-relaxed font-sans-ui whitespace-pre-line font-medium">
                  "{selectedProject.sampleContent.targetExcerpt}"
                </p>
              </div>
            </div>

            {selectedProject.sampleContent.notes && (
              <p className="text-xs text-[#64748B] italic pt-1">
                Linguistic note: {selectedProject.sampleContent.notes}
              </p>
            )}
          </div>

          {/* Deep Dive: Challenge, Approach & Outcome */}
          <div className="space-y-4 pt-2 border-t border-[#E2E8F0]">
            <div>
              <h4 className="text-xs font-mono-tag uppercase tracking-wider text-[#B91C1C] flex items-center gap-1.5 font-bold mb-1">
                <AlertTriangle className="w-3.5 h-3.5" />
                The Linguistic / Technical Challenge
              </h4>
              <p className="text-sm text-[#475569] leading-relaxed">
                {selectedProject.challenge}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono-tag uppercase tracking-wider text-[#0F766E] flex items-center gap-1.5 font-bold mb-1">
                <Wrench className="w-3.5 h-3.5" />
                Methodology & Professional Approach
              </h4>
              <p className="text-sm text-[#475569] leading-relaxed">
                {selectedProject.approach}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono-tag uppercase tracking-wider text-[#15803D] flex items-center gap-1.5 font-bold mb-1">
                <CheckCircle className="w-3.5 h-3.5" />
                Measurable Deliverable & Quality Outcome
              </h4>
              <p className="text-sm text-[#475569] leading-relaxed">
                {selectedProject.outcome}
              </p>
            </div>
          </div>

          {/* Tools applied */}
          <div className="pt-2">
            <h4 className="text-xs font-mono-tag uppercase tracking-wider text-[#64748B] mb-2 font-bold">
              CAT & Quality Assurance Tools Applied
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tools.map((t, i) => (
                <span 
                  key={i} 
                  className="px-2.5 py-1 text-xs font-mono-tag rounded bg-[#F1F5F9] text-[#334155] border border-[#CBD5E1]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Disclaimer banner if Demonstration Sample */}
          {selectedProject.isDemonstrationSample && (
            <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-md text-xs text-[#64748B]">
              <strong>Transparency Notice:</strong> This project is a curated demonstration sample translating realistic technical or regulatory texts to illustrate specialized competence without infringing third-party non-disclosure agreements (NDAs).
            </div>
          )}

        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => setSelectedProject(null)}
            className="text-xs text-[#64748B] hover:text-[#0F172A] font-mono-tag"
          >
            ← Back to Portfolio
          </button>

          <button
            onClick={() => {
              const srv = selectedProject.service;
              setSelectedProject(null);
              openQuoteWithService(srv);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-[#0F766E] hover:bg-[#115E59] rounded-md transition-colors"
          >
            <span>Request a Quote for Similar Scope</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
