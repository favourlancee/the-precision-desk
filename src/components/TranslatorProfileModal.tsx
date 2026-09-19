import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  Mail, 
  Globe, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  ExternalLink, 
  Send, 
  ShieldCheck, 
  Award 
} from 'lucide-react';

export const TranslatorProfileModal: React.FC = () => {
  const { selectedTranslator, setSelectedTranslator, openQuoteWithService, showToast } = useApp();
  const [inquirySubject, setInquirySubject] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySent, setInquirySent] = useState(false);

  if (!selectedTranslator) return null;

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryMessage.trim()) return;
    setInquirySent(true);
    showToast(`Inquiry forwarded to ${selectedTranslator.name}.`);
    setTimeout(() => {
      setInquirySent(false);
      setInquiryMessage('');
      setInquirySubject('');
      setSelectedTranslator(null);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div 
        id="translator-profile-modal"
        className="relative w-full max-w-2xl my-8 bg-white rounded-xl shadow-2xl border border-[#E2E8F0] overflow-hidden"
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
            <span className="text-xs font-mono-tag uppercase tracking-wider text-[#64748B]">
              Independent Language Professional Profile
            </span>
          </div>
          <button
            onClick={() => setSelectedTranslator(null)}
            className="p-1.5 text-[#64748B] hover:text-[#0F172A] hover:bg-[#E2E8F0] rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6 max-h-[78vh] overflow-y-auto">
          
          {/* Profile header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <img
              src={selectedTranslator.profileImage}
              alt={selectedTranslator.name}
              referrerPolicy="no-referrer"
              className="w-20 h-20 rounded-full object-cover border-2 border-[#0F766E] shadow-sm"
            />
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h2 className="font-editorial text-2xl font-bold text-[#0F172A]">
                  {selectedTranslator.name}
                </h2>
                {selectedTranslator.isFavourDudubo && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono-tag bg-[#0F766E] text-white font-semibold">
                    FOUNDER & LEAD
                  </span>
                )}
                <span className="px-2 py-0.5 rounded text-[10px] font-mono-tag bg-[#F1F5F9] text-[#475569] border border-[#CBD5E1]">
                  Independent Freelancer
                </span>
              </div>
              <p className="text-sm font-medium text-[#0F766E]">
                {selectedTranslator.headline}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-[#64748B] font-mono-tag pt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {selectedTranslator.location}
                </span>
                <span className="flex items-center gap-1 text-[#166534]">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedTranslator.generalAvailability}
                </span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="text-sm text-[#475569] leading-relaxed border-t border-[#E2E8F0] pt-4">
            {selectedTranslator.bio}
          </div>

          {/* Language pairs & languages */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono-tag uppercase tracking-wider text-[#334155] font-semibold">
              Primary Language Pairs
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedTranslator.languagePairs.map((pair, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1.5 rounded bg-[#F0FDF4] text-[#166534] border border-[#BBF7D0] text-xs font-mono-tag font-medium"
                >
                  {pair}
                </span>
              ))}
            </div>
          </div>

          {/* Services & Specializations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="text-xs font-mono-tag uppercase tracking-wider text-[#334155] font-semibold">
                Services Offered
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedTranslator.services.map((srv, idx) => (
                  <span 
                    key={idx} 
                    className="px-2.5 py-1 rounded bg-[#F8FAFC] text-[#334155] border border-[#E2E8F0] text-xs"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono-tag uppercase tracking-wider text-[#334155] font-semibold">
                Domain Specializations
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedTranslator.specializations.map((spec, idx) => (
                  <span 
                    key={idx} 
                    className="px-2.5 py-1 rounded bg-[#F8FAFC] text-[#334155] border border-[#E2E8F0] text-xs"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CAT Tools */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono-tag uppercase tracking-wider text-[#334155] font-semibold">
              CAT Tools & QA Systems
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {selectedTranslator.catTools.map((tool, idx) => (
                <span 
                  key={idx} 
                  className="px-2.5 py-1 rounded bg-[#F1F5F9] text-[#475569] text-xs font-mono-tag"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Direct message or quote form */}
          <div className="p-4 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
            <h4 className="text-xs font-mono-tag uppercase tracking-wider text-[#0F172A] font-bold">
              Direct Project Inquiry
            </h4>
            
            {inquirySent ? (
              <div className="p-3 bg-[#F0FDF4] border border-[#BBF7D0] rounded text-xs text-[#166534] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
                <span>Message routed to {selectedTranslator.name}.</span>
              </div>
            ) : (
              <form onSubmit={handleSendInquiry} className="space-y-2.5">
                <input
                  type="text"
                  placeholder="Subject (e.g. Translation project enquiry - 3,500 words)"
                  value={inquirySubject}
                  onChange={e => setInquirySubject(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs border border-[#CBD5E1] rounded bg-white outline-none focus:border-[#0F766E]"
                />
                <textarea
                  rows={2}
                  required
                  placeholder="Briefly state your requirements, file type, and target deadline..."
                  value={inquiryMessage}
                  onChange={e => setInquiryMessage(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs border border-[#CBD5E1] rounded bg-white outline-none focus:border-[#0F766E] resize-none"
                />
                <div className="flex justify-between items-center pt-1">
                  <span className="text-[11px] text-[#64748B]">
                    Strict confidentiality guaranteed.
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-[#0F766E] hover:bg-[#115E59] rounded transition-colors"
                  >
                    <span>Send Message</span>
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Disclaimer */}
          <div className="p-3 bg-white border border-[#E2E8F0] rounded text-[11px] text-[#64748B] leading-relaxed">
            <strong>Independent Professional Notice:</strong> Translators featured in this directory operate their own independent freelance practices. The Precision Desk provides this directory as a language-industry platform and does not act as an intermediary broker or agency employer.
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between">
          <button
            onClick={() => setSelectedTranslator(null)}
            className="text-xs text-[#64748B] hover:text-[#0F172A] font-mono-tag"
          >
            Close
          </button>

          {selectedTranslator.isFavourDudubo && (
            <button
              onClick={() => {
                setSelectedTranslator(null);
                openQuoteWithService();
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#0F766E] hover:bg-[#115E59] rounded"
            >
              Request Quote from Favour Dudubo
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
