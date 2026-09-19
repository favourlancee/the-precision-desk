import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { NavigationTab } from '../types';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  Database
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { activeTab, setActiveTab, setIsQuoteModalOpen, quoteRequests } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pendingQuotesCount = quoteRequests.filter(q => q.status === 'new').length;

  const navItems: { tab: NavigationTab; label: string }[] = [
    { tab: 'home', label: 'Home' },
    { tab: 'about', label: 'About' },
    { tab: 'services', label: 'Services' },
    { tab: 'portfolio', label: 'Portfolio' },
    { tab: 'tools', label: 'Tools' },
    { tab: 'resources', label: 'Resources' },
    { tab: 'directory', label: 'Directory' },
  ];

  const handleNavClick = (tab: NavigationTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBFBF9]/90 backdrop-blur-md border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button 
              id="brand-logo-btn"
              onClick={() => handleNavClick('home')}
              className="group flex flex-col text-left focus:outline-none"
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0F766E] transition-transform group-hover:scale-125" />
                <span className="font-editorial text-2xl font-bold tracking-tight text-[#0F172A]">
                  THE PRECISION DESK
                </span>
              </div>
              <span className="text-[11px] uppercase tracking-widest text-[#64748B] pl-4 font-mono-tag">
                Favour Dudubo · Translation & Localization
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.tab;
              return (
                <button
                  key={item.tab}
                  id={`nav-link-${item.tab}`}
                  onClick={() => handleNavClick(item.tab)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors relative ${
                    isActive 
                      ? 'text-[#0F766E] font-semibold bg-[#0F766E]/5' 
                      : 'text-[#334155] hover:text-[#0F172A] hover:bg-[#F1F5F9]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0F766E] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Admin foundation toggle */}
            <button
              id="nav-admin-toggle-btn"
              onClick={() => handleNavClick('admin')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded border transition-all ${
                activeTab === 'admin'
                  ? 'bg-[#0F172A] text-white border-[#0F172A]'
                  : 'bg-white text-[#475569] border-[#CBD5E1] hover:border-[#94A3B8] hover:text-[#0F172A]'
              }`}
              title="Admin CMS & Supabase Architecture"
            >
              <Database className="w-3.5 h-3.5 text-[#0F766E]" />
              <span className="font-mono-tag">Admin</span>
              {pendingQuotesCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 bg-[#0F766E] text-white text-[10px] font-bold rounded-full">
                  {pendingQuotesCount}
                </span>
              )}
            </button>

            {/* Primary Quote CTA */}
            <button
              id="nav-request-quote-cta"
              onClick={() => setIsQuoteModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#0F766E] hover:bg-[#115E59] rounded-md shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0F766E]/50 cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="mobile-quote-btn"
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#0F766E] rounded"
            >
              Quote
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9] rounded-md"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E2E8F0] bg-[#FBFBF9] px-4 pt-2 pb-6 space-y-1 shadow-lg">
          <div className="py-2 border-b border-[#E2E8F0] mb-2">
            <p className="text-xs font-mono-tag text-[#64748B]">
              Freelance Translator | Favour Dudubo
            </p>
            <p className="text-xs text-[#0F766E] font-medium mt-0.5">
              EN ↔ NO · EN ↔ SV
            </p>
          </div>
          {navItems.map((item) => (
            <button
              key={item.tab}
              onClick={() => handleNavClick(item.tab)}
              className={`w-full text-left px-3 py-2.5 rounded-md text-base font-medium flex items-center justify-between ${
                activeTab === item.tab
                  ? 'bg-[#0F766E]/10 text-[#0F766E] font-semibold'
                  : 'text-[#334155] hover:bg-[#F1F5F9]'
              }`}
            >
              <span>{item.label}</span>
              {activeTab === item.tab && <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E]" />}
            </button>
          ))}
          
          <div className="pt-3 border-t border-[#E2E8F0] flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('admin')}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm text-[#334155] bg-white border border-[#CBD5E1]"
            >
              <span className="flex items-center gap-2">
                <Database className="w-4 h-4 text-[#0F766E]" />
                Admin CMS & Database
              </span>
              {pendingQuotesCount > 0 && (
                <span className="px-2 py-0.5 bg-[#0F766E] text-white text-xs font-bold rounded-full">
                  {pendingQuotesCount} new
                </span>
              )}
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsQuoteModalOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#0F766E] hover:bg-[#115E59] rounded-md shadow-sm"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
