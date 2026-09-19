import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  FileText, 
  Download, 
  Search, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';

export const ResourcesView: React.FC = () => {
  const { resources, setSelectedResource } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Career', 'Freelancing', 'CAT Tools', 'Business', 'Templates', 'Productivity'];

  const filteredResources = resources.filter(r => {
    const matchesCategory = selectedCategory === 'All' || r.category === selectedCategory;
    const matchesSearch = 
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-mono-tag uppercase tracking-wider text-[#0F766E] font-semibold">
          Knowledge Base & Artifacts
        </span>
        <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
          Resources for Professional Translators
        </h1>
        <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
          Practical templates, vendor outreach frameworks, compliant invoice samples, and NDA-safe portfolio checklists engineered to elevate independent language careers.
        </p>
      </div>

      {/* Filter and Search */}
      <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search templates, guides, checklists, or document formats..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm border border-[#CBD5E1] rounded-lg focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-[#F1F5F9]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono-tag transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#0F766E] text-white font-semibold'
                  : 'bg-[#F8FAFC] text-[#475569] border border-[#CBD5E1] hover:border-[#94A3B8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Resource Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((res) => (
          <div
            key={res.id}
            id={`resource-card-${res.id}`}
            className="p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#0F766E]/50 hover:shadow-md transition-all flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono-tag bg-[#0F766E]/10 text-[#0F766E] font-semibold border border-[#0F766E]/20">
                  {res.category}
                </span>
                <span className="text-[11px] font-mono-tag text-[#64748B]">
                  {res.format}
                </span>
              </div>

              <h3 className="font-editorial text-xl font-bold text-[#0F172A] leading-snug">
                {res.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-3">
                {res.description}
              </p>

              {/* Preview bullets */}
              <div className="space-y-1 pt-2 border-t border-[#F1F5F9]">
                <span className="text-[10px] font-mono-tag uppercase text-[#64748B] block">Highlights</span>
                {res.previewPoints.slice(0, 2).map((pt, i) => (
                  <div key={i} className="text-xs text-[#334155] flex items-center gap-1.5 line-clamp-1">
                    <CheckCircle2 className="w-3 h-3 text-[#0F766E] shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
              <span className="text-xs font-mono-tag font-semibold text-[#0F766E]">
                {res.freeStatus}
              </span>

              <button
                id={`preview-resource-${res.id}`}
                onClick={() => setSelectedResource(res)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#0F172A] hover:text-[#0F766E] transition-colors"
              >
                <span>View & Download</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
