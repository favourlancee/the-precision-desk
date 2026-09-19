import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  Send, 
  Calculator, 
  UploadCloud, 
  AlertCircle, 
  CheckCircle2, 
  FileText 
} from 'lucide-react';
import { SERVICES } from '../data/initialData';

export const QuoteModal: React.FC = () => {
  const { isQuoteModalOpen, setIsQuoteModalOpen, prefilledQuoteService, addQuoteRequest } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('English');
  const [targetLanguage, setTargetLanguage] = useState('Norwegian');
  const [service, setService] = useState('Translation');
  const [industry, setIndustry] = useState('Medical / Life Sciences');
  const [wordCount, setWordCount] = useState<number>(2500);
  const [deadline, setDeadline] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [fileName, setFileName] = useState<string | undefined>(undefined);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledQuoteService) {
      setService(prefilledQuoteService);
    }
  }, [prefilledQuoteService]);

  if (!isQuoteModalOpen) return null;

  // Rate benchmark calculation for live estimate preview
  const getBaseRatePerWord = (srv: string) => {
    switch (srv.toLowerCase()) {
      case 'mtpe':
      case 'mtpe (machine translation post-editing)':
        return 0.07;
      case 'proofreading':
        return 0.05;
      case 'editing':
      case 'editing (bilingual review)':
        return 0.08;
      case 'localization':
      case 'localization (l10n)':
        return 0.13;
      case 'subtitling':
      case 'subtitling & audiovisual':
        return 0.11;
      case 'translation':
      default:
        return 0.12;
    }
  };

  const estimatedFee = Math.round(wordCount * getBaseRatePerWord(service));

  const handleFileUploadMock = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !projectDescription.trim()) return;

    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 600));

    await addQuoteRequest({
      name: name.trim(),
      email: email.trim(),
      company: company.trim() || undefined,
      sourceLanguage,
      targetLanguage,
      service,
      industry,
      wordCount: Number(wordCount) || 0,
      deadline: deadline || undefined,
      projectDescription: projectDescription.trim(),
      fileName,
      estimatedFee,
      currency: 'EUR'
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsQuoteModalOpen(false);
    setIsSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div 
        id="quote-modal-container"
        className="relative w-full max-w-2xl my-8 bg-white rounded-xl shadow-2xl border border-[#E2E8F0] overflow-hidden"
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
              <h3 className="font-editorial text-xl font-bold text-[#0F172A]">
                Request a Project Quote
              </h3>
            </div>
            <p className="text-xs text-[#64748B] font-mono-tag mt-0.5">
              Direct consultation with Favour Dudubo · Freelance Translator
            </p>
          </div>
          <button
            id="close-quote-modal-btn"
            onClick={handleClose}
            className="p-1.5 text-[#64748B] hover:text-[#0F172A] hover:bg-[#E2E8F0] rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#0F766E]/10 flex items-center justify-center text-[#0F766E]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-editorial text-2xl font-bold text-[#0F172A]">
              Quote Request Received
            </h4>
            <p className="text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{name}</strong>. Your project specification has been logged into the workspace records. Favour Dudubo will review your files, terminology requirements, and target timeline, then respond directly to <strong>{email}</strong>.
            </p>
            <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg max-w-md mx-auto text-left text-xs text-[#64748B] space-y-1 font-mono-tag">
              <div><span className="text-[#334155] font-semibold">Service:</span> {service}</div>
              <div><span className="text-[#334155] font-semibold">Language Pair:</span> {sourceLanguage} → {targetLanguage}</div>
              <div><span className="text-[#334155] font-semibold">Volume:</span> ~{wordCount.toLocaleString()} words</div>
              <div><span className="text-[#334155] font-semibold">Planning Estimate:</span> €{estimatedFee.toLocaleString()} (Subject to final review)</div>
            </div>
            <div className="pt-2">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 text-sm font-medium text-white bg-[#0F766E] hover:bg-[#115E59] rounded-md transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
            
            {/* Disclaimer notification */}
            <div className="p-3 bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg text-xs text-[#166534] flex items-start gap-2">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-[#0F766E]" />
              <p className="leading-relaxed">
                <strong>Transparent Pricing:</strong> This form calculates a preliminary planning estimate. As an independent professional, final quotes depend on exact file format, repetitions/TM match percentages, regulatory complexity, and deadline.
              </p>
            </div>

            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#334155] mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. Maria Lindgren"
                  className="w-full px-3 py-2 text-sm border border-[#CBD5E1] rounded-md focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#334155] mb-1">
                  Business Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="e.g. maria@company.com"
                  className="w-full px-3 py-2 text-sm border border-[#CBD5E1] rounded-md focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none"
                />
              </div>
            </div>

            {/* Row 2: Company & Industry */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#334155] mb-1">
                  Company / Organization <span className="text-xs font-normal text-[#64748B]">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                  placeholder="e.g. Nordic MedTech AS"
                  className="w-full px-3 py-2 text-sm border border-[#CBD5E1] rounded-md focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#334155] mb-1">
                  Industry / Domain
                </label>
                <select
                  value={industry}
                  onChange={e => setIndustry(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#CBD5E1] rounded-md focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none bg-white"
                >
                  <option value="Medical / Life Sciences">Medical / Life Sciences</option>
                  <option value="Technical / Engineering">Technical / Engineering</option>
                  <option value="SaaS / Software">SaaS / Software</option>
                  <option value="Business">Business & Corporate</option>
                  <option value="Legal">Legal & Contracts</option>
                  <option value="Marketing / General">Marketing / General</option>
                </select>
              </div>
            </div>

            {/* Row 3: Service & Language Pair */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#334155] mb-1">
                  Service
                </label>
                <select
                  value={service}
                  onChange={e => setService(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#CBD5E1] rounded-md focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none bg-white"
                >
                  {SERVICES.map(s => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#334155] mb-1">
                  Source Language
                </label>
                <select
                  value={sourceLanguage}
                  onChange={e => setSourceLanguage(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#CBD5E1] rounded-md focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none bg-white"
                >
                  <option value="English">English</option>
                  <option value="Norwegian">Norwegian (Bokmål)</option>
                  <option value="Swedish">Swedish</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#334155] mb-1">
                  Target Language
                </label>
                <select
                  value={targetLanguage}
                  onChange={e => setTargetLanguage(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#CBD5E1] rounded-md focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none bg-white"
                >
                  <option value="Norwegian">Norwegian (Bokmål)</option>
                  <option value="Swedish">Swedish</option>
                  <option value="English">English</option>
                </select>
              </div>
            </div>

            {/* Row 4: Word count & Deadline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#334155] mb-1">
                  Estimated Word Count
                </label>
                <input
                  type="number"
                  min="50"
                  step="50"
                  value={wordCount}
                  onChange={e => setWordCount(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full px-3 py-2 text-sm border border-[#CBD5E1] rounded-md focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#334155] mb-1">
                  Desired Delivery Deadline
                </label>
                <input
                  type="date"
                  value={deadline}
                  onChange={e => setDeadline(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#CBD5E1] rounded-md focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none bg-white"
                />
              </div>
            </div>

            {/* Project description */}
            <div>
              <label className="block text-xs font-semibold text-[#334155] mb-1">
                Project Scope & Instructions <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={3}
                value={projectDescription}
                onChange={e => setProjectDescription(e.target.value)}
                placeholder="Describe your document type, target audience, CAT tool requirements, or special formatting notes..."
                className="w-full px-3 py-2 text-sm border border-[#CBD5E1] rounded-md focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none resize-none"
              />
            </div>

            {/* File Upload mock */}
            <div>
              <label className="block text-xs font-semibold text-[#334155] mb-1">
                Attach Sample File / Source Document
              </label>
              <div className="border-2 border-dashed border-[#CBD5E1] hover:border-[#0F766E] rounded-lg p-3 text-center transition-colors bg-[#F8FAFC]">
                <input
                  type="file"
                  id="quote-file-input"
                  onChange={handleFileUploadMock}
                  className="hidden"
                />
                <label htmlFor="quote-file-input" className="cursor-pointer flex flex-col items-center gap-1">
                  <UploadCloud className="w-5 h-5 text-[#64748B]" />
                  <span className="text-xs text-[#334155] font-medium">
                    {fileName ? fileName : 'Click to select or drag document (.docx, .pdf, .sdlxliff, .json, .xlsx)'}
                  </span>
                  <span className="text-[11px] text-[#94A3B8]">
                    Strict confidentiality guaranteed. NDAs honored.
                  </span>
                </label>
              </div>
            </div>

            {/* Real-time Calculation Display & Disclaimer */}
            <div className="p-4 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-xs font-mono-tag text-[#64748B]">
                  <Calculator className="w-3.5 h-3.5 text-[#0F766E]" />
                  <span>PRELIMINARY ESTIMATE</span>
                </div>
                <div className="text-xl font-bold font-mono-tag text-[#0F172A]">
                  €{estimatedFee.toLocaleString()} <span className="text-xs font-normal text-[#64748B]">EUR (excl. VAT)</span>
                </div>
              </div>

              <div className="text-[11px] text-[#64748B] max-w-xs leading-tight">
                "Estimates are for planning purposes only. Final pricing may vary depending on project complexity, formatting, deadline, repetitions, terminology requirements and other project conditions."
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-end gap-3 border-t border-[#E2E8F0]">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 text-sm text-[#475569] hover:text-[#0F172A] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-[#0F766E] hover:bg-[#115E59] rounded-md shadow-sm transition-colors disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Logging Request...</span>
                ) : (
                  <>
                    <span>Submit Quote Request</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
