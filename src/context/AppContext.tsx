import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  NavigationTab, 
  PortfolioProject, 
  QuoteRequest, 
  ResourceItem, 
  TranslatorProfile 
} from '../types';
import { 
  PORTFOLIO_PROJECTS, 
  RESOURCES, 
  TRANSLATOR_PROFILES, 
  INITIAL_QUOTE_REQUESTS 
} from '../data/initialData';

interface AppContextType {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  isQuoteModalOpen: boolean;
  setIsQuoteModalOpen: (open: boolean) => void;
  prefilledQuoteService?: string;
  openQuoteWithService: (serviceTitle?: string) => void;
  
  // Data entities
  quoteRequests: QuoteRequest[];
  addQuoteRequest: (req: Omit<QuoteRequest, 'id' | 'created_at' | 'status'>) => Promise<QuoteRequest>;
  updateQuoteStatus: (id: string, status: QuoteRequest['status'], notes?: string) => void;
  deleteQuoteRequest: (id: string) => void;

  portfolioProjects: PortfolioProject[];
  addPortfolioProject: (project: Omit<PortfolioProject, 'id' | 'created_at'>) => void;
  updatePortfolioProject: (id: string, updates: Partial<PortfolioProject>) => void;
  deletePortfolioProject: (id: string) => void;

  resources: ResourceItem[];
  addResource: (res: Omit<ResourceItem, 'id' | 'created_at'>) => void;
  deleteResource: (id: string) => void;

  translatorProfiles: TranslatorProfile[];
  addTranslatorProfile: (profile: Omit<TranslatorProfile, 'id' | 'created_at'>) => void;
  updateTranslatorStatus: (id: string, status: 'Active' | 'Under Review') => void;

  // Selected view items
  selectedProject: PortfolioProject | null;
  setSelectedProject: (p: PortfolioProject | null) => void;
  selectedResource: ResourceItem | null;
  setSelectedResource: (r: ResourceItem | null) => void;
  selectedTranslator: TranslatorProfile | null;
  setSelectedTranslator: (t: TranslatorProfile | null) => void;

  // Notification / toast feedback
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  QUOTES: 'precision_desk_quotes_v1',
  PORTFOLIO: 'precision_desk_portfolio_v1',
  RESOURCES: 'precision_desk_resources_v1',
  TRANSLATORS: 'precision_desk_translators_v1'
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<NavigationTab>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [prefilledQuoteService, setPrefilledQuoteService] = useState<string | undefined>(undefined);
  
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);
  const [selectedTranslator, setSelectedTranslator] = useState<TranslatorProfile | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Initialize state with localStorage fallback
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequest[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.QUOTES);
      return saved ? JSON.parse(saved) : INITIAL_QUOTE_REQUESTS;
    } catch {
      return INITIAL_QUOTE_REQUESTS;
    }
  });

  const [portfolioProjects, setPortfolioProjects] = useState<PortfolioProject[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PORTFOLIO);
      return saved ? JSON.parse(saved) : PORTFOLIO_PROJECTS;
    } catch {
      return PORTFOLIO_PROJECTS;
    }
  });

  const [resources, setResources] = useState<ResourceItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.RESOURCES);
      return saved ? JSON.parse(saved) : RESOURCES;
    } catch {
      return RESOURCES;
    }
  });

  const [translatorProfiles, setTranslatorProfiles] = useState<TranslatorProfile[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.TRANSLATORS);
      return saved ? JSON.parse(saved) : TRANSLATOR_PROFILES;
    } catch {
      return TRANSLATOR_PROFILES;
    }
  });

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.QUOTES, JSON.stringify(quoteRequests));
    } catch (e) {
      console.error('Storage error for quotes:', e);
    }
  }, [quoteRequests]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PORTFOLIO, JSON.stringify(portfolioProjects));
    } catch (e) {
      console.error('Storage error for portfolio:', e);
    }
  }, [portfolioProjects]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.RESOURCES, JSON.stringify(resources));
    } catch (e) {
      console.error('Storage error for resources:', e);
    }
  }, [resources]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.TRANSLATORS, JSON.stringify(translatorProfiles));
    } catch (e) {
      console.error('Storage error for translators:', e);
    }
  }, [translatorProfiles]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const openQuoteWithService = (serviceTitle?: string) => {
    setPrefilledQuoteService(serviceTitle);
    setIsQuoteModalOpen(true);
  };

  const addQuoteRequest = async (req: Omit<QuoteRequest, 'id' | 'created_at' | 'status'>): Promise<QuoteRequest> => {
    const newQuote: QuoteRequest = {
      ...req,
      id: `qr-${Date.now()}`,
      created_at: new Date().toISOString().split('T')[0],
      status: 'new'
    };
    setQuoteRequests(prev => [newQuote, ...prev]);
    showToast('Quote request submitted successfully. Favour Dudubo will review your specifications.');
    return newQuote;
  };

  const updateQuoteStatus = (id: string, status: QuoteRequest['status'], notes?: string) => {
    setQuoteRequests(prev => prev.map(q => q.id === id ? { ...q, status, ...(notes !== undefined ? { notes } : {}) } : q));
    showToast(`Quote request ${id} updated to ${status}.`);
  };

  const deleteQuoteRequest = (id: string) => {
    setQuoteRequests(prev => prev.filter(q => q.id !== id));
    showToast('Quote request removed.');
  };

  const addPortfolioProject = (proj: Omit<PortfolioProject, 'id' | 'created_at'>) => {
    const newProj: PortfolioProject = {
      ...proj,
      id: `proj-${Date.now()}`,
      created_at: new Date().toISOString().split('T')[0]
    };
    setPortfolioProjects(prev => [newProj, ...prev]);
    showToast('Portfolio project published.');
  };

  const updatePortfolioProject = (id: string, updates: Partial<PortfolioProject>) => {
    setPortfolioProjects(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
    showToast('Portfolio item updated.');
  };

  const deletePortfolioProject = (id: string) => {
    setPortfolioProjects(prev => prev.filter(p => p.id !== id));
    showToast('Portfolio item deleted.');
  };

  const addResource = (res: Omit<ResourceItem, 'id' | 'created_at'>) => {
    const newRes: ResourceItem = {
      ...res,
      id: `res-${Date.now()}`,
      created_at: new Date().toISOString().split('T')[0]
    };
    setResources(prev => [newRes, ...prev]);
    showToast('Resource added to library.');
  };

  const deleteResource = (id: string) => {
    setResources(prev => prev.filter(r => r.id !== id));
    showToast('Resource removed.');
  };

  const addTranslatorProfile = (prof: Omit<TranslatorProfile, 'id' | 'created_at'>) => {
    const newProf: TranslatorProfile = {
      ...prof,
      id: `ind-${Date.now()}`,
      created_at: new Date().toISOString().split('T')[0]
    };
    setTranslatorProfiles(prev => [...prev, newProf]);
    showToast('Translator profile registered in directory.');
  };

  const updateTranslatorStatus = (id: string, status: 'Active' | 'Under Review') => {
    setTranslatorProfiles(prev => prev.map(p => p.id === id ? { ...p, profileStatus: status } : p));
    showToast('Profile status updated.');
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        isQuoteModalOpen,
        setIsQuoteModalOpen,
        prefilledQuoteService,
        openQuoteWithService,
        quoteRequests,
        addQuoteRequest,
        updateQuoteStatus,
        deleteQuoteRequest,
        portfolioProjects,
        addPortfolioProject,
        updatePortfolioProject,
        deletePortfolioProject,
        resources,
        addResource,
        deleteResource,
        translatorProfiles,
        addTranslatorProfile,
        updateTranslatorStatus,
        selectedProject,
        setSelectedProject,
        selectedResource,
        setSelectedResource,
        selectedTranslator,
        setSelectedTranslator,
        toastMessage,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
