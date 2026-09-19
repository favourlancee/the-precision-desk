import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResourcePreviewModal } from './components/ResourcePreviewModal';
import { TranslatorProfileModal } from './components/TranslatorProfileModal';

import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { PortfolioView } from './views/PortfolioView';
import { ToolsView } from './views/ToolsView';
import { ResourcesView } from './views/ResourcesView';
import { DirectoryView } from './views/DirectoryView';
import { AdminView } from './views/AdminView';
import { CheckCircle2 } from 'lucide-react';

const MainContent: React.FC = () => {
  const { activeTab, toastMessage } = useApp();

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView />;
      case 'about':
        return <AboutView />;
      case 'services':
        return <ServicesView />;
      case 'portfolio':
        return <PortfolioView />;
      case 'tools':
        return <ToolsView />;
      case 'resources':
        return <ResourcesView />;
      case 'directory':
        return <DirectoryView />;
      case 'admin':
        return <AdminView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#0F172A] font-sans-ui selection:bg-[#0F766E]/20 selection:text-[#0F766E]">
      
      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-[#0F172A] text-white text-xs font-mono-tag shadow-xl border border-[#334155]">
            <CheckCircle2 className="w-4 h-4 text-[#2DD4BF]" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Global Navigation Header */}
      <Navbar />

      {/* Main Page Body */}
      <main className="flex-1">
        {renderActiveView()}
      </main>

      {/* Global Editorial Footer */}
      <Footer />

      {/* Global Modals */}
      <QuoteModal />
      <CaseStudyModal />
      <ResourcePreviewModal />
      <TranslatorProfileModal />

    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
