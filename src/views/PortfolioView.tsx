import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Search, 
  Filter, 
  ArrowRight, 
  Sparkles, 
  FileCheck, 
  Layers, 
  Wrench, 
  SlidersHorizontal 
} from 'lucide-react';
import { PortfolioProject } from '../types';

export const PortfolioView: React.FC = () => {
  const { portfolioProjects, setSelectedProject } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedService, setSelectedService] = useState('All');
  const [typeFilter, setTypeFilter] = useState<'all' | 'samples' | 'client'>('all');

  const industries = ['All', 'Medical / Life Sciences', 'Technical / Engineering', 'SaaS / Software', 'Legal', 'Media'];
  const services = ['All', 'Translation', 'MTPE', 'Localization', 'Subtitling', 'Technical Editing'];

  const filteredProjects = portfolioProjects.filter((p) => {
    // Search matching
    const matchesSearch = 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.languagePair.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    // Industry matching
    const matchesIndustry = selectedIndustry === 'All' || p.industry.toLowerCase().includes(selectedIndustry.toLowerCase().split('/')[0].trim());

    // Service matching
    const matchesService = selectedService === 'All' || p.service.toLowerCase().includes(selectedService.toLowerCase());

    // Type matching (Demo sample vs Client work)
    const matchesType = 
      typeFilter === 'all' || 
      (typeFilter === 'samples' && p.isDemonstrationSample) ||
      (typeFilter === 'client' && !p.isDemonstrationSample);

    return matchesSearch && matchesIndustry && matchesService && matchesType;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-mono-tag uppercase tracking-wider text-[#0F766E] font-semibold">
          The Precision Portfolio
        </span>
        <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
          Translation & Localization Case Studies
        </h1>
        <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
          An authentic showcase of technical, medical, SaaS, and legal translation work. For ethical transparency and strict NDA compliance, samples are explicitly marked as either verified Demonstration Samples or Anonymized Client Work.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-4">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search projects by keyword, terminology, CAT tool, or language pair..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm border border-[#CBD5E1] rounded-lg focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none"
          />
        </div>

        {/* Filter Rows */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-[#F1F5F9] text-xs">
          
          {/* Industry Filter */}
          <div>
            <label className="text-[11px] font-mono-tag text-[#64748B] block mb-1">
              Industry
            </label>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full p-2 border border-[#CBD5E1] rounded bg-white text-[#334155] outline-none"
            >
              {industries.map(ind => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>

          {/* Service Filter */}
          <div>
            <label className="text-[11px] font-mono-tag text-[#64748B] block mb-1">
              Service
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full p-2 border border-[#CBD5E1] rounded bg-white text-[#334155] outline-none"
            >
              {services.map(srv => (
                <option key={srv} value={srv}>{srv}</option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div>
            <label className="text-[11px] font-mono-tag text-[#64748B] block mb-1">
              Project Classification
            </label>
            <div className="flex rounded border border-[#CBD5E1] overflow-hidden bg-[#F8FAFC]">
              <button
                type="button"
                onClick={() => setTypeFilter('all')}
                className={`flex-1 py-2 text-[11px] font-mono-tag ${
                  typeFilter === 'all' ? 'bg-[#0F766E] text-white font-semibold' : 'text-[#475569]'
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setTypeFilter('samples')}
                className={`flex-1 py-2 text-[11px] font-mono-tag border-l border-r border-[#CBD5E1] ${
                  typeFilter === 'samples' ? 'bg-[#0F766E] text-white font-semibold' : 'text-[#475569]'
                }`}
              >
                Demo Samples
              </button>
              <button
                type="button"
                onClick={() => setTypeFilter('client')}
                className={`flex-1 py-2 text-[11px] font-mono-tag ${
                  typeFilter === 'client' ? 'bg-[#0F766E] text-white font-semibold' : 'text-[#475569]'
                }`}
              >
                Client Work
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-2xl border border-[#E2E8F0] space-y-2">
          <p className="text-base text-[#334155] font-semibold">No portfolio projects match your filters.</p>
          <p className="text-xs text-[#64748B]">Try adjusting your search terms or resetting the filter criteria.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedIndustry('All');
              setSelectedService('All');
              setTypeFilter('all');
            }}
            className="mt-2 text-xs font-mono-tag text-[#0F766E] underline"
          >
            Reset all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="p-7 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#0F766E]/40 hover:shadow-md transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                
                {/* Header tags */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono-tag uppercase text-[#0F766E] font-bold">
                    {proj.industry}
                  </span>

                  {proj.isDemonstrationSample ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-mono-tag bg-[#F1F5F9] text-[#475569] border border-[#CBD5E1]">
                      <Sparkles className="w-3 h-3 text-[#0F766E]" />
                      DEMONSTRATION SAMPLE
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-mono-tag bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]">
                      <FileCheck className="w-3 h-3 text-[#059669]" />
                      CLIENT WORK (ANONYMIZED)
                    </span>
                  )}
                </div>

                <h3 className="font-editorial text-2xl font-bold text-[#0F172A] leading-snug">
                  {proj.title}
                </h3>

                <div className="flex items-center gap-2 text-xs font-mono-tag text-[#475569] pb-2 border-b border-[#F1F5F9]">
                  <span className="font-semibold text-[#0F172A]">{proj.languagePair}</span>
                  <span>·</span>
                  <span>{proj.service}</span>
                  {proj.wordCountApprox && (
                    <>
                      <span>·</span>
                      <span>~{proj.wordCountApprox.toLocaleString()} words</span>
                    </>
                  )}
                </div>

                <p className="text-sm text-[#475569] leading-relaxed">
                  {proj.description}
                </p>

                {/* Excerpt preview pill */}
                <div className="p-3 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0] space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-mono-tag text-[#64748B]">
                    <span>Source Excerpt ({proj.sourceLanguage})</span>
                    <span>Target: {proj.targetLanguage}</span>
                  </div>
                  <p className="text-xs text-[#334155] italic line-clamp-2">
                    "{proj.sampleContent.sourceExcerpt}"
                  </p>
                </div>

              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tools.slice(0, 2).map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 text-[10px] font-mono-tag bg-[#F1F5F9] text-[#64748B] rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  id={`view-case-study-${proj.id}`}
                  onClick={() => setSelectedProject(proj)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F766E] hover:text-[#115E59] cursor-pointer"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
};
