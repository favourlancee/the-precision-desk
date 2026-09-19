import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  Download, 
  Copy, 
  Check, 
  FileText, 
  CheckCircle2, 
  Share2 
} from 'lucide-react';

export const ResourcePreviewModal: React.FC = () => {
  const { selectedResource, setSelectedResource, showToast } = useApp();
  const [copied, setCopied] = useState(false);

  if (!selectedResource) return null;

  const handleCopy = () => {
    if (selectedResource.sampleContent) {
      navigator.clipboard.writeText(selectedResource.sampleContent);
      setCopied(true);
      showToast('Template copied to clipboard.');
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSimulatedDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([selectedResource.sampleContent || selectedResource.description], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = selectedResource.downloadFilename || `${selectedResource.slug}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    showToast(`Downloaded: ${selectedResource.downloadFilename}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div 
        id="resource-preview-modal"
        className="relative w-full max-w-2xl my-8 bg-white rounded-xl shadow-2xl border border-[#E2E8F0] overflow-hidden"
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#0F766E]/10 text-[#0F766E] text-xs font-mono-tag font-semibold">
                {selectedResource.category}
              </span>
              <span className="text-xs text-[#64748B] font-mono-tag">
                {selectedResource.format}
              </span>
            </div>
            <h3 className="font-editorial text-xl font-bold text-[#0F172A] mt-1">
              {selectedResource.title}
            </h3>
          </div>

          <button
            onClick={() => setSelectedResource(null)}
            className="p-1.5 text-[#64748B] hover:text-[#0F172A] hover:bg-[#E2E8F0] rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          <p className="text-sm text-[#475569] leading-relaxed">
            {selectedResource.description}
          </p>

          {/* Key highlights checklist */}
          <div className="p-4 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0] space-y-2">
            <h4 className="text-xs font-mono-tag uppercase tracking-wider text-[#334155] font-semibold">
              Included in this Resource
            </h4>
            <ul className="space-y-1.5 text-xs text-[#475569]">
              {selectedResource.previewPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E] mt-0.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Preview code or text block */}
          {selectedResource.sampleContent && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-tag text-[#64748B]">
                  Template Blueprint Preview ({selectedResource.downloadFilename})
                </span>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 text-xs text-[#0F766E] hover:underline font-mono-tag"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Plaintext'}</span>
                </button>
              </div>

              <pre className="p-4 rounded-lg bg-[#0F172A] text-[#F1F5F9] text-xs font-mono-tag overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-64 border border-[#334155]">
                {selectedResource.sampleContent}
              </pre>
            </div>
          )}

          <div className="p-3 bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg text-xs text-[#166534] flex items-center justify-between">
            <span>Free community asset curated for professional translators by Favour Dudubo.</span>
            <span className="font-mono-tag text-[11px] font-semibold">MIT / Open License</span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between">
          <button
            onClick={() => setSelectedResource(null)}
            className="text-xs text-[#64748B] hover:text-[#0F172A] font-mono-tag"
          >
            Close
          </button>

          <button
            onClick={handleSimulatedDownload}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#0F766E] hover:bg-[#115E59] rounded-md transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Download Template File</span>
          </button>
        </div>

      </div>
    </div>
  );
};
