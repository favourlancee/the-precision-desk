import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Calculator, 
  Clock, 
  FileText, 
  Calendar, 
  Send, 
  AlertCircle, 
  CheckCircle2, 
  UploadCloud, 
  ChevronRight, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { SERVICES, LANGUAGE_PAIRS } from '../data/initialData';

export const ToolsView: React.FC = () => {
  const { addQuoteRequest, openQuoteWithService } = useApp();

  // Active Tool Tab
  const [activeTool, setActiveTool] = useState<'rate' | 'quote' | 'deadline'>('rate');

  // --- 1. Rate Calculator State ---
  const [calcService, setCalcService] = useState('Translation');
  const [calcPair, setCalcPair] = useState('English → Norwegian');
  const [calcWords, setCalcWords] = useState<number>(3500);
  const [calcRate, setCalcRate] = useState<number>(0.12);
  const [calcCurrency, setCalcCurrency] = useState<'EUR' | 'USD' | 'NOK' | 'SEK' | 'GBP'>('EUR');

  // Auto-adjust default rates based on service
  const handleServiceChange = (serviceName: string) => {
    setCalcService(serviceName);
    switch (serviceName.toLowerCase()) {
      case 'mtpe (machine translation post-editing)':
      case 'mtpe':
        setCalcRate(calcCurrency === 'NOK' || calcCurrency === 'SEK' ? 0.85 : 0.07);
        break;
      case 'proofreading':
        setCalcRate(calcCurrency === 'NOK' || calcCurrency === 'SEK' ? 0.60 : 0.05);
        break;
      case 'editing (bilingual review)':
      case 'editing':
        setCalcRate(calcCurrency === 'NOK' || calcCurrency === 'SEK' ? 0.95 : 0.08);
        break;
      case 'localization (l10n)':
      case 'localization':
        setCalcRate(calcCurrency === 'NOK' || calcCurrency === 'SEK' ? 1.55 : 0.13);
        break;
      case 'subtitling & audiovisual':
      case 'subtitling':
        setCalcRate(calcCurrency === 'NOK' || calcCurrency === 'SEK' ? 1.30 : 0.11);
        break;
      case 'translation':
      default:
        setCalcRate(calcCurrency === 'NOK' || calcCurrency === 'SEK' ? 1.40 : 0.12);
        break;
    }
  };

  const estimatedTotal = Math.round(calcWords * calcRate * 100) / 100;

  // --- 2. Quote Generator State ---
  const [qName, setQName] = useState('');
  const [qEmail, setQEmail] = useState('');
  const [qCompany, setQCompany] = useState('');
  const [qSourceLang, setQSourceLang] = useState('English');
  const [qTargetLang, setQTargetLang] = useState('Norwegian');
  const [qService, setQService] = useState('Translation');
  const [qIndustry, setQIndustry] = useState('Medical / Life Sciences');
  const [qWordCount, setQWordCount] = useState<number>(4000);
  const [qDeadline, setQDeadline] = useState('');
  const [qDescription, setQDescription] = useState('');
  const [qFileName, setQFileName] = useState<string | undefined>(undefined);
  const [qSubmitted, setQSubmitted] = useState(false);
  const [qSubmitting, setQSubmitting] = useState(false);

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!qName || !qEmail || !qDescription) return;
    setQSubmitting(true);
    await new Promise(r => setTimeout(r, 600));

    await addQuoteRequest({
      name: qName,
      email: qEmail,
      company: qCompany || undefined,
      sourceLanguage: qSourceLang,
      targetLanguage: qTargetLang,
      service: qService,
      industry: qIndustry,
      wordCount: Number(qWordCount) || 0,
      deadline: qDeadline || undefined,
      projectDescription: qDescription,
      fileName: qFileName,
      currency: calcCurrency
    });

    setQSubmitting(false);
    setQSubmitted(true);
  };

  // --- 3. Word & Deadline Calculator State ---
  const [dWords, setDWords] = useState<number>(12000);
  const [dCapacity, setDCapacity] = useState<number>(2000);
  const [dStartDate, setDStartDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [dIncludeWeekends, setDIncludeWeekends] = useState(false);

  // Compute working days & finish date
  const workingDaysNeeded = Math.ceil(dWords / Math.max(100, dCapacity));

  const calculateTargetDate = () => {
    let currentDate = new Date(dStartDate || Date.now());
    let addedDays = 0;

    while (addedDays < workingDaysNeeded) {
      currentDate.setDate(currentDate.getDate() + 1);
      const dayOfWeek = currentDate.getDay(); // 0 is Sunday, 6 is Saturday
      if (dIncludeWeekends || (dayOfWeek !== 0 && dayOfWeek !== 6)) {
        addedDays++;
      }
    }
    return currentDate.toLocaleDateString('en-GB', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-mono-tag uppercase tracking-wider text-[#0F766E] font-semibold">
          Translation Engineering
        </span>
        <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
          Precision Language Tools
        </h1>
        <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
          Interactive calculators and project planning tools built to model translation throughput, budget estimates, and production timelines with complete transparency.
        </p>
      </div>

      {/* Tool Navigation Switcher */}
      <div className="flex border-b border-[#E2E8F0] space-x-6 text-sm font-mono-tag">
        <button
          onClick={() => setActiveTool('rate')}
          className={`pb-3 font-semibold transition-colors flex items-center gap-2 relative ${
            activeTool === 'rate'
              ? 'text-[#0F766E] border-b-2 border-[#0F766E]'
              : 'text-[#64748B] hover:text-[#0F172A]'
          }`}
        >
          <Calculator className="w-4 h-4" />
          <span>Rate Calculator</span>
        </button>

        <button
          onClick={() => setActiveTool('quote')}
          className={`pb-3 font-semibold transition-colors flex items-center gap-2 relative ${
            activeTool === 'quote'
              ? 'text-[#0F766E] border-b-2 border-[#0F766E]'
              : 'text-[#64748B] hover:text-[#0F172A]'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Project Quote Generator</span>
        </button>

        <button
          onClick={() => setActiveTool('deadline')}
          className={`pb-3 font-semibold transition-colors flex items-center gap-2 relative ${
            activeTool === 'deadline'
              ? 'text-[#0F766E] border-b-2 border-[#0F766E]'
              : 'text-[#64748B] hover:text-[#0F172A]'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>Word & Deadline Estimator</span>
        </button>
      </div>

      {/* TOOL 1: RATE CALCULATOR */}
      {activeTool === 'rate' && (
        <div className="p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-8 animate-fadeIn">
          <div>
            <span className="text-xs font-mono-tag uppercase text-[#0F766E] font-semibold">
              Interactive Estimator
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0F172A] mt-1">
              Translation & Localization Fee Calculator
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1">
              Select your service, target language pair, and word volume to benchmark professional translation fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Form Controls */}
            <div className="md:col-span-7 space-y-4">
              
              {/* Service */}
              <div>
                <label className="block text-xs font-semibold text-[#334155] mb-1">
                  Service Type
                </label>
                <select
                  value={calcService}
                  onChange={(e) => handleServiceChange(e.target.value)}
                  className="w-full p-2.5 text-sm border border-[#CBD5E1] rounded-md bg-white outline-none focus:border-[#0F766E]"
                >
                  {SERVICES.map(s => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>

              {/* Language pair */}
              <div>
                <label className="block text-xs font-semibold text-[#334155] mb-1">
                  Language Pair
                </label>
                <select
                  value={calcPair}
                  onChange={(e) => setCalcPair(e.target.value)}
                  className="w-full p-2.5 text-sm border border-[#CBD5E1] rounded-md bg-white outline-none focus:border-[#0F766E]"
                >
                  <option value="English → Norwegian">English → Norwegian (Bokmål)</option>
                  <option value="Norwegian → English">Norwegian → English</option>
                  <option value="English → Swedish">English → Swedish</option>
                  <option value="Swedish → English">Swedish → English</option>
                </select>
              </div>

              {/* Word count & Currency */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#334155] mb-1">
                    Word Count
                  </label>
                  <input
                    type="number"
                    min="100"
                    step="100"
                    value={calcWords}
                    onChange={(e) => setCalcWords(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full p-2.5 text-sm border border-[#CBD5E1] rounded-md outline-none focus:border-[#0F766E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#334155] mb-1">
                    Currency
                  </label>
                  <select
                    value={calcCurrency}
                    onChange={(e) => setCalcCurrency(e.target.value as any)}
                    className="w-full p-2.5 text-sm border border-[#CBD5E1] rounded-md bg-white outline-none focus:border-[#0F766E]"
                  >
                    <option value="EUR">EUR (€)</option>
                    <option value="USD">USD ($)</option>
                    <option value="NOK">NOK (kr)</option>
                    <option value="SEK">SEK (kr)</option>
                    <option value="GBP">GBP (£)</option>
                  </select>
                </div>
              </div>

              {/* Rate per word slider / input */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-semibold text-[#334155]">
                    Rate per Word ({calcCurrency})
                  </label>
                  <span className="text-xs font-mono-tag text-[#0F766E] font-bold">
                    {calcCurrency} {calcRate.toFixed(2)}
                  </span>
                </div>
                <input
                  type="number"
                  step="0.01"
                  min="0.02"
                  max="10"
                  value={calcRate}
                  onChange={(e) => setCalcRate(parseFloat(e.target.value) || 0)}
                  className="w-full p-2.5 text-sm border border-[#CBD5E1] rounded-md outline-none focus:border-[#0F766E]"
                />
              </div>

            </div>

            {/* Results Card */}
            <div className="md:col-span-5 flex flex-col justify-between p-6 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-mono-tag uppercase text-[#64748B] block">
                  ESTIMATED PROJECT FEE
                </span>
                
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-bold font-mono-tag text-[#0F172A]">
                    {calcCurrency} {estimatedTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <p className="text-xs text-[#64748B] font-mono-tag">
                    Based on {calcWords.toLocaleString()} words × {calcCurrency} {calcRate.toFixed(2)}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] text-xs space-y-1.5 font-mono-tag text-[#475569]">
                  <div className="flex justify-between">
                    <span>Service:</span>
                    <strong className="text-[#0F172A]">{calcService}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Language Pair:</span>
                    <strong className="text-[#0F172A]">{calcPair}</strong>
                  </div>
                </div>
              </div>

              {/* Mandatory Prompt Disclaimer */}
              <div className="p-3 bg-white border border-[#E2E8F0] rounded-lg text-[11px] text-[#64748B] leading-relaxed">
                <strong>Disclaimer:</strong> "Estimates are for planning purposes only. Final pricing may vary depending on project complexity, formatting, deadline, repetitions, terminology requirements and other project conditions."
              </div>

              <button
                onClick={() => openQuoteWithService(calcService)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#0F766E] hover:bg-[#115E59] rounded-md transition-colors"
              >
                <span>Request Formal Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TOOL 2: PROJECT QUOTE GENERATOR */}
      {activeTool === 'quote' && (
        <div className="p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-8 animate-fadeIn">
          <div>
            <span className="text-xs font-mono-tag uppercase text-[#0F766E] font-semibold">
              Specification Intake
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0F172A] mt-1">
              Project Quote Generator
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1">
              Submit your document details directly to Favour Dudubo's active workspace queue.
            </p>
          </div>

          {qSubmitted ? (
            <div className="p-8 text-center space-y-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#0F766E]/10 flex items-center justify-center text-[#0F766E]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#0F172A]">
                Quote Request Registered in Workspace
              </h3>
              <p className="text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
                Your request has been securely stored in the <code className="px-1 py-0.5 rounded bg-white font-mono-tag text-xs border">quote_requests</code> table. Favour Dudubo will analyze your word count and target delivery schedule, then email an itemized proposal to <strong>{qEmail}</strong>.
              </p>
              <button
                onClick={() => {
                  setQSubmitted(false);
                  setQDescription('');
                }}
                className="mt-3 px-5 py-2 text-xs font-semibold text-[#0F766E] bg-white border border-[#CBD5E1] rounded hover:bg-[#F1F5F9]"
              >
                Submit Another Specification
              </button>
            </div>
          ) : (
            <form onSubmit={handleQuoteSubmit} className="space-y-6">
              
              <div className="p-4 bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg text-xs text-[#166534] flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-[#0F766E]" />
                <p className="leading-relaxed">
                  <strong>Notice:</strong> Submitting this form initiates an authentic project review. We do not generate automatic bot quotes; Favour reviews source formatting and terminology density personally.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#334155] mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={qName}
                    onChange={e => setQName(e.target.value)}
                    placeholder="e.g. Ingrid Solberg"
                    className="w-full p-2.5 text-sm border border-[#CBD5E1] rounded-md outline-none focus:border-[#0F766E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#334155] mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={qEmail}
                    onChange={e => setQEmail(e.target.value)}
                    placeholder="e.g. ingrid@company.no"
                    className="w-full p-2.5 text-sm border border-[#CBD5E1] rounded-md outline-none focus:border-[#0F766E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#334155] mb-1">
                    Company / Organization (Optional)
                  </label>
                  <input
                    type="text"
                    value={qCompany}
                    onChange={e => setQCompany(e.target.value)}
                    placeholder="e.g. Nordic MedTech AS"
                    className="w-full p-2.5 text-sm border border-[#CBD5E1] rounded-md outline-none focus:border-[#0F766E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#334155] mb-1">
                    Subject Domain / Industry
                  </label>
                  <select
                    value={qIndustry}
                    onChange={e => setQIndustry(e.target.value)}
                    className="w-full p-2.5 text-sm border border-[#CBD5E1] rounded-md bg-white outline-none focus:border-[#0F766E]"
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

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#334155] mb-1">
                    Service
                  </label>
                  <select
                    value={qService}
                    onChange={e => setQService(e.target.value)}
                    className="w-full p-2.5 text-sm border border-[#CBD5E1] rounded-md bg-white outline-none focus:border-[#0F766E]"
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
                    value={qSourceLang}
                    onChange={e => setQSourceLang(e.target.value)}
                    className="w-full p-2.5 text-sm border border-[#CBD5E1] rounded-md bg-white outline-none focus:border-[#0F766E]"
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
                    value={qTargetLang}
                    onChange={e => setQTargetLang(e.target.value)}
                    className="w-full p-2.5 text-sm border border-[#CBD5E1] rounded-md bg-white outline-none focus:border-[#0F766E]"
                  >
                    <option value="Norwegian">Norwegian (Bokmål)</option>
                    <option value="Swedish">Swedish</option>
                    <option value="English">English</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#334155] mb-1">
                    Word Count (Approximate)
                  </label>
                  <input
                    type="number"
                    min="50"
                    step="50"
                    value={qWordCount}
                    onChange={e => setQWordCount(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full p-2.5 text-sm border border-[#CBD5E1] rounded-md outline-none focus:border-[#0F766E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#334155] mb-1">
                    Target Deadline
                  </label>
                  <input
                    type="date"
                    value={qDeadline}
                    onChange={e => setQDeadline(e.target.value)}
                    className="w-full p-2.5 text-sm border border-[#CBD5E1] rounded-md bg-white outline-none focus:border-[#0F766E]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#334155] mb-1">
                  Project Description & Requirements <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={qDescription}
                  onChange={e => setQDescription(e.target.value)}
                  placeholder="Detail the target audience, formatting requirements, CAT tool package specifications, or glossaries..."
                  className="w-full p-2.5 text-sm border border-[#CBD5E1] rounded-md outline-none focus:border-[#0F766E] resize-none"
                />
              </div>

              {/* File upload simulator */}
              <div>
                <label className="block text-xs font-semibold text-[#334155] mb-1">
                  Source File Upload
                </label>
                <div className="border border-dashed border-[#CBD5E1] p-4 rounded-lg text-center bg-[#F8FAFC]">
                  <input
                    type="file"
                    id="tools-file-upload"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setQFileName(e.target.files[0].name);
                      }
                    }}
                    className="hidden"
                  />
                  <label htmlFor="tools-file-upload" className="cursor-pointer flex flex-col items-center gap-1">
                    <UploadCloud className="w-5 h-5 text-[#64748B]" />
                    <span className="text-xs text-[#334155] font-medium">
                      {qFileName ? `Attached: ${qFileName}` : 'Select file (.docx, .pdf, .sdlxliff, .json, .xlsx)'}
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={qSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0F766E] hover:bg-[#115E59] rounded-md shadow-sm transition-colors disabled:opacity-50"
                >
                  {qSubmitting ? 'Logging to Workspace...' : 'Submit Quote Request'}
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}
        </div>
      )}

      {/* TOOL 3: WORD & DEADLINE CALCULATOR */}
      {activeTool === 'deadline' && (
        <div className="p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-8 animate-fadeIn">
          <div>
            <span className="text-xs font-mono-tag uppercase text-[#0F766E] font-semibold">
              Capacity Planning
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0F172A] mt-1">
              Word & Deadline Calculator
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1">
              Calculate turnaround schedules based on professional daily output capacity and multi-pass quality control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Input Controls */}
            <div className="md:col-span-7 space-y-4">
              
              <div>
                <label className="block text-xs font-semibold text-[#334155] mb-1">
                  Total Project Word Count
                </label>
                <input
                  type="number"
                  min="500"
                  step="500"
                  value={dWords}
                  onChange={e => setDWords(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full p-2.5 text-sm border border-[#CBD5E1] rounded-md outline-none focus:border-[#0F766E]"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-semibold text-[#334155]">
                    Daily Capacity (Words / Day)
                  </label>
                  <span className="text-xs font-mono-tag text-[#0F766E]">
                    {dCapacity.toLocaleString()} words/day
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="4500"
                  step="250"
                  value={dCapacity}
                  onChange={e => setDCapacity(parseInt(e.target.value))}
                  className="w-full accent-[#0F766E]"
                />
                <div className="flex justify-between text-[11px] text-[#64748B] font-mono-tag pt-1">
                  <span>1,000 (Complex Medical)</span>
                  <span>2,000 (Standard Human)</span>
                  <span>4,500 (Full MTPE)</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#334155] mb-1">
                  Project Kick-Off Date
                </label>
                <input
                  type="date"
                  value={dStartDate}
                  onChange={e => setDStartDate(e.target.value)}
                  className="w-full p-2.5 text-sm border border-[#CBD5E1] rounded-md bg-white outline-none focus:border-[#0F766E]"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-[#334155]">
                  <input
                    type="checkbox"
                    checked={dIncludeWeekends}
                    onChange={e => setDIncludeWeekends(e.target.checked)}
                    className="rounded border-[#CBD5E1] text-[#0F766E] focus:ring-[#0F766E]"
                  />
                  <span>Include weekend working days (Expedited emergency delivery)</span>
                </label>
              </div>

            </div>

            {/* Results Output */}
            <div className="md:col-span-5 flex flex-col justify-between p-6 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-mono-tag uppercase text-[#64748B] block">
                  SCHEDULE PROJECTION
                </span>

                <div className="space-y-1">
                  <span className="text-xs text-[#64748B] font-mono-tag">Estimated Completion Date:</span>
                  <div className="text-2xl sm:text-3xl font-bold font-editorial text-[#0F172A]">
                    {calculateTargetDate()}
                  </div>
                </div>

                <div className="p-4 bg-white rounded-lg border border-[#E2E8F0] space-y-2 text-xs font-mono-tag text-[#475569]">
                  <div className="flex justify-between">
                    <span>Working Days Needed:</span>
                    <strong className="text-[#0F172A]">{workingDaysNeeded} days</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Daily Pace:</span>
                    <strong className="text-[#0F172A]">{dCapacity.toLocaleString()} w/day</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Multi-pass QA Gate:</span>
                    <strong className="text-[#0F766E]">Included</strong>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-white border border-[#E2E8F0] rounded-lg text-[11px] text-[#64748B] leading-relaxed">
                <strong>Realistic Scheduling:</strong> Professional translation requires cognitive focus and post-drafting incubation time. Rushing large technical files without review gates risks terminology discrepancies.
              </div>

              <button
                onClick={() => openQuoteWithService('Translation')}
                className="w-full inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#0F766E] hover:bg-[#115E59] rounded-md transition-colors"
              >
                <span>Reserve Delivery Window</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
