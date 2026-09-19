import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Search, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  Filter, 
  UserCheck, 
  Sparkles, 
  UserPlus, 
  CheckCircle2 
} from 'lucide-react';
import { TranslatorProfile } from '../types';

export const DirectoryView: React.FC = () => {
  const { translatorProfiles, setSelectedTranslator, addTranslatorProfile, openQuoteWithService, showToast } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPair, setSelectedPair] = useState('All');
  const [selectedSpec, setSelectedSpec] = useState('All');
  const [selectedService, setSelectedService] = useState('All');
  const [selectedTool, setSelectedTool] = useState('All');

  // Application Modal state for independent translators to submit their profile
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantHeadline, setApplicantHeadline] = useState('');
  const [applicantBio, setApplicantBio] = useState('');
  const [applicantPairs, setApplicantPairs] = useState('English → Norwegian');
  const [applicantTools, setApplicantTools] = useState('SDL Trados Studio, memoQ');
  const [applicantLocation, setApplicantLocation] = useState('Oslo, Norway');

  const pairsList = ['All', 'English → Norwegian', 'Norwegian → English', 'English → Swedish', 'Swedish → English'];
  const specList = ['All', 'Medical & Life Sciences', 'Technical & Engineering', 'SaaS & Software', 'Business & Corporate', 'Legal'];
  const serviceList = ['All', 'Translation', 'MTPE', 'Proofreading', 'Editing', 'Localization', 'Subtitling'];
  const toolList = ['All', 'SDL Trados Studio', 'memoQ', 'Phrase', 'Subtitle Edit'];

  const filteredProfiles = translatorProfiles.filter((prof) => {
    const matchesSearch = 
      prof.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prof.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prof.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prof.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPair = selectedPair === 'All' || prof.languagePairs.some(p => p.toLowerCase().includes(selectedPair.toLowerCase()));
    const matchesSpec = selectedSpec === 'All' || prof.specializations.some(s => s.toLowerCase().includes(selectedSpec.toLowerCase()));
    const matchesService = selectedService === 'All' || prof.services.some(s => s.toLowerCase().includes(selectedService.toLowerCase()));
    const matchesTool = selectedTool === 'All' || prof.catTools.some(t => t.toLowerCase().includes(selectedTool.toLowerCase()));

    return matchesSearch && matchesPair && matchesSpec && matchesService && matchesTool;
  });

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail) return;

    addTranslatorProfile({
      name: applicantName,
      slug: applicantName.toLowerCase().replace(/\s+/g, '-'),
      profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
      headline: applicantHeadline || 'Independent Freelance Translator',
      bio: applicantBio || 'Independent language professional with dedicated domain expertise.',
      location: applicantLocation,
      generalAvailability: 'Open for assignments',
      languages: ['English', 'Norwegian'],
      languagePairs: applicantPairs.split(',').map(s => s.trim()),
      specializations: ['General', 'Technical'],
      services: ['Translation', 'Editing'],
      catTools: applicantTools.split(',').map(s => s.trim()),
      contactEmail: applicantEmail,
      profileStatus: 'Active',
      featured: false,
      isFavourDudubo: false
    });

    setIsApplyModalOpen(false);
    setApplicantName('');
    setApplicantEmail('');
    setApplicantHeadline('');
    setApplicantBio('');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-mono-tag uppercase tracking-wider text-[#0F766E] font-semibold">
          Independent Translator Network
        </span>
        <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
          Find a Language Professional
        </h1>
        <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
          The Precision Desk is building a curated index of <strong className="text-[#0F172A]">independent language professionals</strong>. We connect companies, agencies, and institutions directly with freelance translation talent.
        </p>
      </div>

      {/* Mandatory Clarity Callout: Independent Professionals, Not Agency Staff */}
      <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-[#0F766E] mt-0.5 shrink-0" />
        <div className="space-y-1 text-xs text-[#475569] leading-relaxed">
          <p className="font-semibold text-[#0F172A]">
            Independent Practitioner Model
          </p>
          <p>
            Translators listed here are independent freelance practitioners. They are not employees, staff, or sub-contracted agents of The Precision Desk. You contract with each professional directly, ensuring transparent communication, zero agency markups, and unmediated terminology alignment.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search by translator name, specialty, location, or CAT tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-[#CBD5E1] rounded-lg focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none"
            />
          </div>

          <button
            onClick={() => setIsApplyModalOpen(true)}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-mono-tag uppercase tracking-wider font-semibold text-[#0F766E] hover:text-[#115E59] bg-[#0F766E]/10 rounded-lg border border-[#0F766E]/30 shrink-0"
          >
            <UserPlus className="w-4 h-4" />
            <span>Join Directory</span>
          </button>
        </div>

        {/* 4 Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3 border-t border-[#F1F5F9] text-xs">
          <div>
            <label className="text-[11px] font-mono-tag text-[#64748B] block mb-1">Language Pair</label>
            <select
              value={selectedPair}
              onChange={e => setSelectedPair(e.target.value)}
              className="w-full p-2 border border-[#CBD5E1] rounded bg-white text-[#334155] outline-none"
            >
              {pairsList.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>

          <div>
            <label className="text-[11px] font-mono-tag text-[#64748B] block mb-1">Specialization</label>
            <select
              value={selectedSpec}
              onChange={e => setSelectedSpec(e.target.value)}
              className="w-full p-2 border border-[#CBD5E1] rounded bg-white text-[#334155] outline-none"
            >
              {specList.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div>
            <label className="text-[11px] font-mono-tag text-[#64748B] block mb-1">Service</label>
            <select
              value={selectedService}
              onChange={e => setSelectedService(e.target.value)}
              className="w-full p-2 border border-[#CBD5E1] rounded bg-white text-[#334155] outline-none"
            >
              {serviceList.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div>
            <label className="text-[11px] font-mono-tag text-[#64748B] block mb-1">CAT Tool</label>
            <select
              value={selectedTool}
              onChange={e => setSelectedTool(e.target.value)}
              className="w-full p-2 border border-[#CBD5E1] rounded bg-white text-[#334155] outline-none"
            >
              {toolList.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Profile Cards */}
      <div className="space-y-6">
        {filteredProfiles.map((prof) => (
          <div
            key={prof.id}
            id={`directory-profile-${prof.id}`}
            className={`p-6 sm:p-8 rounded-2xl bg-white border transition-all ${
              prof.isFavourDudubo
                ? 'border-2 border-[#0F766E]/40 shadow-sm'
                : 'border-[#E2E8F0] hover:border-[#CBD5E1]'
            }`}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              
              {/* Profile Bio info */}
              <div className="flex items-start gap-4">
                <img
                  src={prof.profileImage}
                  alt={prof.name}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-[#0F766E] shadow-xs shrink-0"
                />

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-editorial text-2xl font-bold text-[#0F172A]">
                      {prof.name}
                    </h3>
                    {prof.isFavourDudubo && (
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono-tag bg-[#0F766E] text-white font-bold">
                        FOUNDER & LEAD
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono-tag bg-[#F1F5F9] text-[#475569] border border-[#CBD5E1]">
                      Independent Freelancer
                    </span>
                  </div>

                  <p className="text-sm font-medium text-[#0F766E]">
                    {prof.headline}
                  </p>

                  <p className="text-xs text-[#475569] leading-relaxed max-w-2xl line-clamp-2">
                    {prof.bio}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {prof.languagePairs.map((p, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[11px] font-mono-tag bg-[#F0FDF4] text-[#166534] border border-[#BBF7D0]">
                        {p}
                      </span>
                    ))}
                    {prof.specializations.slice(0, 2).map((s, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[11px] font-mono-tag bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0]">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-xs text-[#64748B] font-mono-tag pt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#94A3B8]" />
                      {prof.location}
                    </span>
                    <span className="flex items-center gap-1 text-[#166534]">
                      <Calendar className="w-3.5 h-3.5" />
                      {prof.generalAvailability}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-2 w-full md:w-44 shrink-0">
                <button
                  id={`view-profile-btn-${prof.id}`}
                  onClick={() => setSelectedTranslator(prof)}
                  className="w-full px-4 py-2.5 text-xs font-semibold text-[#0F172A] bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#CBD5E1] rounded-md transition-colors text-center"
                >
                  View Full Profile
                </button>

                {prof.isFavourDudubo ? (
                  <button
                    onClick={() => openQuoteWithService()}
                    className="w-full px-4 py-2.5 text-xs font-semibold text-white bg-[#0F766E] hover:bg-[#115E59] rounded-md transition-colors text-center shadow-xs"
                  >
                    Request Project Quote
                  </button>
                ) : (
                  <button
                    onClick={() => setSelectedTranslator(prof)}
                    className="w-full px-4 py-2.5 text-xs font-semibold text-[#0F766E] bg-[#0F766E]/5 hover:bg-[#0F766E]/10 border border-[#0F766E]/30 rounded-md transition-colors text-center"
                  >
                    Direct Inquiry
                  </button>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Directory Application Modal */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-[#E2E8F0] p-6 space-y-4">
            <h3 className="font-editorial text-xl font-bold text-[#0F172A]">
              Join the Independent Translator Directory
            </h3>
            <p className="text-xs text-[#64748B]">
              Submit your professional credentials. Profiles are verified before publication to ensure domain competence.
            </p>

            <form onSubmit={handleApplySubmit} className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-[#334155] block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jonas Haugland"
                  value={applicantName}
                  onChange={e => setApplicantName(e.target.value)}
                  className="w-full p-2 border border-[#CBD5E1] rounded outline-none focus:border-[#0F766E]"
                />
              </div>
              <div>
                <label className="font-semibold text-[#334155] block mb-1">Professional Email</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. jonas@hauglandtrans.no"
                  value={applicantEmail}
                  onChange={e => setApplicantEmail(e.target.value)}
                  className="w-full p-2 border border-[#CBD5E1] rounded outline-none focus:border-[#0F766E]"
                />
              </div>
              <div>
                <label className="font-semibold text-[#334155] block mb-1">Headline / Role</label>
                <input
                  type="text"
                  placeholder="e.g. Freelance Medical Translator (NO ↔ EN)"
                  value={applicantHeadline}
                  onChange={e => setApplicantHeadline(e.target.value)}
                  className="w-full p-2 border border-[#CBD5E1] rounded outline-none focus:border-[#0F766E]"
                />
              </div>
              <div>
                <label className="font-semibold text-[#334155] block mb-1">Language Pairs (comma separated)</label>
                <input
                  type="text"
                  value={applicantPairs}
                  onChange={e => setApplicantPairs(e.target.value)}
                  className="w-full p-2 border border-[#CBD5E1] rounded outline-none focus:border-[#0F766E]"
                />
              </div>
              <div>
                <label className="font-semibold text-[#334155] block mb-1">CAT Tools</label>
                <input
                  type="text"
                  value={applicantTools}
                  onChange={e => setApplicantTools(e.target.value)}
                  className="w-full p-2 border border-[#CBD5E1] rounded outline-none focus:border-[#0F766E]"
                />
              </div>
              <div>
                <label className="font-semibold text-[#334155] block mb-1">Location & Timezone</label>
                <input
                  type="text"
                  value={applicantLocation}
                  onChange={e => setApplicantLocation(e.target.value)}
                  className="w-full p-2 border border-[#CBD5E1] rounded outline-none focus:border-[#0F766E]"
                />
              </div>
              <div>
                <label className="font-semibold text-[#334155] block mb-1">Professional Bio</label>
                <textarea
                  rows={2}
                  value={applicantBio}
                  onChange={e => setApplicantBio(e.target.value)}
                  placeholder="Summary of experience, specializations, and daily capacity..."
                  className="w-full p-2 border border-[#CBD5E1] rounded outline-none focus:border-[#0F766E] resize-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-[#E2E8F0]">
                <button
                  type="button"
                  onClick={() => setIsApplyModalOpen(false)}
                  className="px-3 py-1.5 text-xs text-[#64748B]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 text-xs font-semibold text-white bg-[#0F766E] rounded"
                >
                  Submit Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
