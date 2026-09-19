import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Database, 
  Inbox, 
  Layers, 
  FileText, 
  Users, 
  Trash2, 
  CheckCircle, 
  Clock, 
  Copy, 
  Check, 
  Plus, 
  Sparkles,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';
import { SUPABASE_SCHEMA_SQL } from '../data/initialData';
import { QuoteRequest, PortfolioProject, ResourceItem, TranslatorProfile } from '../types';

export const AdminView: React.FC = () => {
  const { 
    quoteRequests, 
    updateQuoteStatus, 
    deleteQuoteRequest,
    portfolioProjects,
    addPortfolioProject,
    resources,
    addResource,
    translatorProfiles,
    showToast
  } = useApp();

  const [activeAdminTab, setActiveAdminTab] = useState<'quotes' | 'portfolio' | 'resources' | 'directory' | 'database'>('quotes');
  const [copiedSql, setCopiedSql] = useState(false);

  // New Project Form State
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [newProjectTitle, setNewProjectTitle] = useState('');
  const [newProjectPair, setNewProjectPair] = useState('English → Norwegian');
  const [newProjectIndustry, setNewProjectIndustry] = useState('Medical / Life Sciences');
  const [newProjectService, setNewProjectService] = useState('Translation');
  const [newProjectDesc, setNewProjectDesc] = useState('');
  const [newProjectIsDemo, setNewProjectIsDemo] = useState(true);

  const copySql = () => {
    navigator.clipboard.writeText(SUPABASE_SCHEMA_SQL);
    setCopiedSql(true);
    showToast('Supabase SQL schema copied to clipboard');
    setTimeout(() => setCopiedSql(false), 2000);
  };

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectTitle) return;

    addPortfolioProject({
      title: newProjectTitle,
      slug: newProjectTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      languagePair: newProjectPair,
      sourceLanguage: newProjectPair.split('→')[0].trim(),
      targetLanguage: newProjectPair.split('→')[1].trim(),
      service: newProjectService,
      industry: newProjectIndustry,
      description: newProjectDesc || 'Case study overview of localized assets and translation workflow.',
      challenge: 'High terminology variance and strict regulatory turnaround constraints.',
      approach: 'Bilingual concordance extraction followed by verified human translation and automated QA.',
      outcome: '100% terminological accuracy delivered within SLA with zero concordance errors.',
      tools: ['memoQ', 'Xbench'],
      sampleContent: {
        sourceExcerpt: 'Clinical trial dosage guidelines for automated infusion systems.',
        targetExcerpt: 'Retningslinjer for dosering ved kliniske utprøvinger av automatiske infusjonssystemer.'
      },
      published: true,
      featured: false,
      isDemonstrationSample: newProjectIsDemo
    });

    setIsAddingProject(false);
    setNewProjectTitle('');
    setNewProjectDesc('');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono-tag bg-[#0F766E]/10 text-[#0F766E] font-semibold mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E]" />
            WORKSPACE ADMINISTRATION
          </div>
          <h1 className="font-editorial text-3xl font-bold text-[#0F172A]">
            The Precision Desk Admin Console
          </h1>
          <p className="text-xs text-[#64748B] mt-1 font-mono-tag">
            Manage quote requests, portfolio case studies, directory profiles, and view database architecture.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded bg-[#F1F5F9] text-[#334155] text-xs font-mono-tag border border-[#CBD5E1]">
            Active Quotes: {quoteRequests.length}
          </span>
          <span className="px-2.5 py-1 rounded bg-[#F1F5F9] text-[#334155] text-xs font-mono-tag border border-[#CBD5E1]">
            Directory Profiles: {translatorProfiles.length}
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[#E2E8F0] space-x-6 text-xs font-mono-tag overflow-x-auto">
        <button
          onClick={() => setActiveAdminTab('quotes')}
          className={`pb-3 font-semibold transition-colors flex items-center gap-1.5 shrink-0 ${
            activeAdminTab === 'quotes'
              ? 'text-[#0F766E] border-b-2 border-[#0F766E]'
              : 'text-[#64748B] hover:text-[#0F172A]'
          }`}
        >
          <Inbox className="w-4 h-4" />
          <span>Quote Requests ({quoteRequests.length})</span>
        </button>

        <button
          onClick={() => setActiveAdminTab('portfolio')}
          className={`pb-3 font-semibold transition-colors flex items-center gap-1.5 shrink-0 ${
            activeAdminTab === 'portfolio'
              ? 'text-[#0F766E] border-b-2 border-[#0F766E]'
              : 'text-[#64748B] hover:text-[#0F172A]'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Portfolio CMS ({portfolioProjects.length})</span>
        </button>

        <button
          onClick={() => setActiveAdminTab('resources')}
          className={`pb-3 font-semibold transition-colors flex items-center gap-1.5 shrink-0 ${
            activeAdminTab === 'resources'
              ? 'text-[#0F766E] border-b-2 border-[#0F766E]'
              : 'text-[#64748B] hover:text-[#0F172A]'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Resources ({resources.length})</span>
        </button>

        <button
          onClick={() => setActiveAdminTab('directory')}
          className={`pb-3 font-semibold transition-colors flex items-center gap-1.5 shrink-0 ${
            activeAdminTab === 'directory'
              ? 'text-[#0F766E] border-b-2 border-[#0F766E]'
              : 'text-[#64748B] hover:text-[#0F172A]'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Directory Profiles ({translatorProfiles.length})</span>
        </button>

        <button
          onClick={() => setActiveAdminTab('database')}
          className={`pb-3 font-semibold transition-colors flex items-center gap-1.5 shrink-0 ${
            activeAdminTab === 'database'
              ? 'text-[#0F766E] border-b-2 border-[#0F766E]'
              : 'text-[#64748B] hover:text-[#0F172A]'
          }`}
        >
          <Database className="w-4 h-4" />
          <span>Supabase DDL / Schema</span>
        </button>
      </div>

      {/* 1. QUOTE REQUESTS TAB */}
      {activeAdminTab === 'quotes' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-editorial text-xl font-bold text-[#0F172A]">
              Incoming Project Inquiries & Quote Requests
            </h3>
            <span className="text-xs text-[#64748B] font-mono-tag">
              Table: <code>quote_requests</code>
            </span>
          </div>

          {quoteRequests.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-xl border border-[#E2E8F0]">
              <Inbox className="w-8 h-8 text-[#94A3B8] mx-auto mb-2" />
              <p className="text-sm font-semibold text-[#0F172A]">No inquiries logged yet.</p>
              <p className="text-xs text-[#64748B]">Quotes submitted from the site or tools will appear here immediately.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {quoteRequests.map((q) => (
                <div
                  key={q.id}
                  className="p-6 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#F1F5F9]">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-editorial text-lg font-bold text-[#0F172A]">
                          {q.name}
                        </span>
                        {q.company && (
                          <span className="text-xs text-[#64748B]">({q.company})</span>
                        )}
                        <span className="text-xs font-mono-tag text-[#0F766E]">
                          {q.email}
                        </span>
                      </div>
                      <div className="text-xs font-mono-tag text-[#64748B]">
                        Submitted {new Date(q.created_at).toLocaleDateString()} at {new Date(q.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>

                    {/* Status badge & selector */}
                    <div className="flex items-center gap-2">
                      <select
                        value={q.status}
                        onChange={(e) => updateQuoteStatus(q.id, e.target.value as any)}
                        className={`text-xs font-mono-tag px-2.5 py-1 rounded border outline-none font-semibold ${
                          q.status === 'new'
                            ? 'bg-[#FEF3C7] text-[#92400E] border-[#FDE68A]'
                            : q.status === 'reviewed'
                            ? 'bg-[#E0F2FE] text-[#0369A1] border-[#BAE6FD]'
                            : q.status === 'quoted'
                            ? 'bg-[#EDE9FE] text-[#6D28D9] border-[#DDD6FE]'
                            : 'bg-[#DCFCE7] text-[#166534] border-[#BBF7D0]'
                        }`}
                      >
                        <option value="new">Status: New</option>
                        <option value="reviewed">Status: Reviewed</option>
                        <option value="quoted">Status: Quoted</option>
                        <option value="archived">Status: Archived</option>
                      </select>

                      <button
                        onClick={() => deleteQuoteRequest(q.id)}
                        className="p-1.5 text-[#94A3B8] hover:text-red-600 rounded transition-colors"
                        title="Delete Quote Request"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono-tag bg-[#F8FAFC] p-3 rounded-lg border border-[#E2E8F0]">
                    <div>
                      <span className="text-[#64748B] block">Service:</span>
                      <strong className="text-[#0F172A]">{q.service}</strong>
                    </div>
                    <div>
                      <span className="text-[#64748B] block">Language Pair:</span>
                      <strong className="text-[#0F172A]">{q.sourceLanguage} → {q.targetLanguage}</strong>
                    </div>
                    <div>
                      <span className="text-[#64748B] block">Words & Deadline:</span>
                      <strong className="text-[#0F172A]">
                        {q.wordCount ? `${q.wordCount.toLocaleString()} w` : 'Unspecified'} {q.deadline ? `· Due ${q.deadline}` : ''}
                      </strong>
                    </div>
                    <div>
                      <span className="text-[#64748B] block">Attachment:</span>
                      <strong className="text-[#0F172A] truncate block">
                        {q.fileName || 'No file'}
                      </strong>
                    </div>
                  </div>

                  {/* Project description */}
                  <div className="text-xs text-[#334155] leading-relaxed">
                    <strong className="text-[#0F172A] block mb-0.5">Project Scope:</strong>
                    <p className="bg-[#F8FAFC] p-3 rounded border border-[#E2E8F0]">
                      {q.projectDescription}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 2. PORTFOLIO CMS TAB */}
      {activeAdminTab === 'portfolio' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-editorial text-xl font-bold text-[#0F172A]">
                Portfolio CMS Management
              </h3>
              <p className="text-xs text-[#64748B]">
                Publish and configure case studies. Explicitly tag demo samples versus client projects.
              </p>
            </div>

            <button
              onClick={() => setIsAddingProject(!isAddingProject)}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#0F766E] hover:bg-[#115E59] rounded-md transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>{isAddingProject ? 'Close Form' : 'Add Case Study'}</span>
            </button>
          </div>

          {/* New Project Form */}
          {isAddingProject && (
            <form onSubmit={handleCreateProject} className="p-6 rounded-xl bg-white border border-[#CBD5E1] space-y-4">
              <h4 className="font-editorial text-lg font-bold text-[#0F172A]">
                Add Case Study or Demonstration Sample
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="font-semibold text-[#334155] block mb-1">Project Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Clinical Trial Patient Information Sheet"
                    value={newProjectTitle}
                    onChange={e => setNewProjectTitle(e.target.value)}
                    className="w-full p-2 border border-[#CBD5E1] rounded outline-none focus:border-[#0F766E]"
                  />
                </div>

                <div>
                  <label className="font-semibold text-[#334155] block mb-1">Language Pair</label>
                  <input
                    type="text"
                    value={newProjectPair}
                    onChange={e => setNewProjectPair(e.target.value)}
                    className="w-full p-2 border border-[#CBD5E1] rounded outline-none focus:border-[#0F766E]"
                  />
                </div>

                <div>
                  <label className="font-semibold text-[#334155] block mb-1">Industry</label>
                  <input
                    type="text"
                    value={newProjectIndustry}
                    onChange={e => setNewProjectIndustry(e.target.value)}
                    className="w-full p-2 border border-[#CBD5E1] rounded outline-none focus:border-[#0F766E]"
                  />
                </div>

                <div>
                  <label className="font-semibold text-[#334155] block mb-1">Service</label>
                  <input
                    type="text"
                    value={newProjectService}
                    onChange={e => setNewProjectService(e.target.value)}
                    className="w-full p-2 border border-[#CBD5E1] rounded outline-none focus:border-[#0F766E]"
                  />
                </div>
              </div>

              <div className="text-xs">
                <label className="font-semibold text-[#334155] block mb-1">Description</label>
                <textarea
                  rows={2}
                  value={newProjectDesc}
                  onChange={e => setNewProjectDesc(e.target.value)}
                  placeholder="Summary of project requirements and objectives..."
                  className="w-full p-2 border border-[#CBD5E1] rounded outline-none focus:border-[#0F766E] resize-none"
                />
              </div>

              <div className="flex items-center gap-4 text-xs">
                <label className="flex items-center gap-2 cursor-pointer text-[#334155]">
                  <input
                    type="checkbox"
                    checked={newProjectIsDemo}
                    onChange={e => setNewProjectIsDemo(e.target.checked)}
                    className="rounded text-[#0F766E]"
                  />
                  <span>Mark as Demonstration Sample (Uncheck if Anonymized Client Project)</span>
                </label>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-[#E2E8F0]">
                <button
                  type="button"
                  onClick={() => setIsAddingProject(false)}
                  className="px-3 py-1.5 text-xs text-[#64748B]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 text-xs font-semibold text-white bg-[#0F766E] rounded"
                >
                  Save to Portfolio
                </button>
              </div>
            </form>
          )}

          {/* List */}
          <div className="space-y-3">
            {portfolioProjects.map((p) => (
              <div
                key={p.id}
                className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-editorial text-base font-bold text-[#0F172A]">
                      {p.title}
                    </span>
                    {p.isDemonstrationSample ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono-tag bg-[#F1F5F9] text-[#475569]">
                        DEMO SAMPLE
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono-tag bg-[#ECFDF5] text-[#065F46]">
                        CLIENT WORK
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-mono-tag text-[#64748B]">
                    {p.industry} · {p.languagePair} · {p.service}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono-tag">
                  <span className="px-2 py-0.5 rounded bg-[#F0FDF4] text-[#166534] border border-[#BBF7D0]">
                    Published
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. RESOURCES TAB */}
      {activeAdminTab === 'resources' && (
        <div className="space-y-4">
          <h3 className="font-editorial text-xl font-bold text-[#0F172A]">
            Resource Library Items ({resources.length})
          </h3>
          <div className="space-y-3">
            {resources.map((r) => (
              <div
                key={r.id}
                className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-between gap-4"
              >
                <div>
                  <div className="font-editorial text-base font-bold text-[#0F172A]">
                    {r.title}
                  </div>
                  <div className="text-xs font-mono-tag text-[#64748B]">
                    Category: {r.category} · Format: {r.format} · Status: {r.freeStatus}
                  </div>
                </div>
                <span className="px-2 py-0.5 text-xs font-mono-tag rounded bg-[#F0FDF4] text-[#166534] border border-[#BBF7D0]">
                  Published
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. DIRECTORY TAB */}
      {activeAdminTab === 'directory' && (
        <div className="space-y-4">
          <h3 className="font-editorial text-xl font-bold text-[#0F172A]">
            Translator Directory Registrations ({translatorProfiles.length})
          </h3>
          <div className="space-y-3">
            {translatorProfiles.map((tp) => (
              <div
                key={tp.id}
                className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <img src={tp.profileImage} alt={tp.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-editorial text-base font-bold text-[#0F172A]">
                        {tp.name}
                      </span>
                      {tp.isFavourDudubo && (
                        <span className="px-2 py-0.5 text-[10px] font-mono-tag bg-[#0F766E] text-white rounded">
                          LEAD
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-[#64748B]">
                      {tp.headline} · {tp.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 text-xs font-mono-tag rounded bg-[#F0FDF4] text-[#166534] border border-[#BBF7D0]">
                    {tp.profileStatus}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. DATABASE DDL / SUPABASE TAB */}
      {activeAdminTab === 'database' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-editorial text-xl font-bold text-[#0F172A]">
                PostgreSQL / Supabase Schema Architecture
              </h3>
              <p className="text-xs text-[#64748B]">
                Full DDL schema defining all tables: <code>profiles</code>, <code>services</code>, <code>language_pairs</code>, <code>portfolio_projects</code>, <code>quote_requests</code>, <code>resources</code>, <code>translator_directory</code>, and <code>admin_users</code>.
              </p>
            </div>

            <button
              onClick={copySql}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0F766E] hover:bg-[#115E59] rounded-md transition-colors shrink-0 cursor-pointer"
            >
              {copiedSql ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedSql ? 'Copied SQL!' : 'Copy Supabase SQL'}</span>
            </button>
          </div>

          <div className="p-4 rounded-xl bg-[#0F172A] text-[#E2E8F0] font-mono-tag text-xs overflow-x-auto max-h-[500px] border border-[#334155]">
            <pre>{SUPABASE_SCHEMA_SQL}</pre>
          </div>

          <div className="p-5 bg-white rounded-xl border border-[#E2E8F0] space-y-2 text-xs text-[#475569]">
            <span className="font-semibold text-[#0F172A] block">
              How to Connect to Live Supabase:
            </span>
            <ol className="list-decimal pl-5 space-y-1 leading-relaxed">
              <li>Open your Supabase project dashboard at <code>supabase.com</code>.</li>
              <li>Go to the <strong>SQL Editor</strong> tab and paste the complete schema above. Click <strong>Run</strong> to create all tables, indexes, and Row-Level Security (RLS) policies.</li>
              <li>Supply your <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code> in your environment settings when deploying to production.</li>
            </ol>
          </div>
        </div>
      )}

    </div>
  );
};
