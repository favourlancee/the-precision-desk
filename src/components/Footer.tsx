import React from 'react';
import { useApp } from '../context/AppContext';
import { NavigationTab } from '../types';
import { 
  ArrowUpRight, 
  Mail, 
  Globe, 
  FileText, 
  Shield, 
  CheckCircle2 
} from 'lucide-react';
import { FAVOUR_PROFILE } from '../data/initialData';

export const Footer: React.FC = () => {
  const { setActiveTab, setIsQuoteModalOpen } = useApp();

  const handleNav = (tab: NavigationTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0C131F] text-[#E2E8F0] border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-14">
          
          {/* Brand & Identity Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0D9488]" />
              <span className="font-editorial text-2xl font-bold tracking-tight text-white">
                THE PRECISION DESK
              </span>
            </div>
            
            <p className="text-sm text-[#94A3B8] font-sans-ui max-w-md leading-relaxed">
              Translation, localization and language resources for a multilingual world.
            </p>

            <div className="p-4 rounded-lg bg-[#141E30] border border-[#1E293B] max-w-md space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono-tag text-[#2DD4BF]">
                <Shield className="w-3.5 h-3.5" />
                <span>INDEPENDENT TRANSLATION PRACTICE</span>
              </div>
              <p className="text-xs text-[#CBD5E1] leading-relaxed">
                The Precision Desk is created and managed by <strong className="text-white">Favour Dudubo</strong>, a freelance translator and localization specialist. It is <span className="underline decoration-[#0D9488]">not</span> a translation agency.
              </p>
            </div>

            <div className="pt-1 flex items-center gap-2 text-xs text-[#64748B] font-mono-tag">
              <span>Primary pairs:</span>
              <span className="text-[#94A3B8]">EN ↔ NO</span>
              <span>·</span>
              <span className="text-[#94A3B8]">EN ↔ SV</span>
            </div>
          </div>

          {/* Practice Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono-tag uppercase tracking-wider text-[#94A3B8]">
              Practice & Work
            </h4>
            <ul className="space-y-2 text-sm text-[#CBD5E1]">
              <li>
                <button 
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors"
                >
                  About Favour Dudubo
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors"
                >
                  Translation Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('portfolio')}
                  className="hover:text-white transition-colors"
                >
                  Portfolio & Samples
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="text-[#2DD4BF] hover:underline flex items-center gap-1"
                >
                  Request a Quote <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Platform & Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono-tag uppercase tracking-wider text-[#94A3B8]">
              Tools & Directory
            </h4>
            <ul className="space-y-2 text-sm text-[#CBD5E1]">
              <li>
                <button 
                  onClick={() => handleNav('tools')}
                  className="hover:text-white transition-colors"
                >
                  Rate Calculator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('tools')}
                  className="hover:text-white transition-colors"
                >
                  Word & Deadline Estimator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('resources')}
                  className="hover:text-white transition-colors"
                >
                  Translator Resources
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('directory')}
                  className="hover:text-white transition-colors"
                >
                  Independent Directory
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Meta */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono-tag uppercase tracking-wider text-[#94A3B8]">
              Direct Inquiries
            </h4>
            <div className="space-y-2 text-sm text-[#CBD5E1]">
              <a 
                href={`mailto:${FAVOUR_PROFILE.email}`}
                className="flex items-center gap-2 text-xs text-[#2DD4BF] hover:underline font-mono-tag"
              >
                <Mail className="w-3.5 h-3.5" />
                {FAVOUR_PROFILE.email}
              </a>
              <p className="text-xs text-[#94A3B8]">
                Domain: <span className="text-white font-mono-tag">{FAVOUR_PROFILE.domain}</span>
              </p>
              <div className="pt-2">
                <button 
                  onClick={() => handleNav('admin')}
                  className="text-xs font-mono-tag text-[#64748B] hover:text-[#94A3B8] transition-colors flex items-center gap-1.5"
                >
                  <span>Admin Foundation (Supabase)</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom divider & credits */}
        <div className="pt-8 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© 2026 The Precision Desk. All rights reserved.</p>
          <p className="font-mono-tag">
            Created and managed by <span className="text-[#CBD5E1]">Favour Dudubo</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};
