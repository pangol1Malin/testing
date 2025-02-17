'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ScrollArea } from './scroll-area';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function Sidebar() {
  const pathname = usePathname();
  const sections = [{"title":"Introduction","content":"","subsections":[{"title":"Pré-requis","content":"# Tzeaze"}]},{"title":"évasion","content":"","subsections":[{"title":"aeaze","content":"azeazeazeazeazeaze\n# Titre\n> citation"}]},{"title":"Nouvelle Section","content":"","subsections":[{"title":"Nouvelle Sous-section","content":"# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation"}]},{"title":"PANouvelleSection","content":"","subsections":[{"title":"Nouvelle Sous-section","content":"# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation\n\n# Contenu Rédigié\n\n> Citation"}]}];
  const [expandedSections, setExpandedSections] = useState<number[]>([]);
  
  return (
    <aside className="sidebar-bg border-r border-slate-200 dark:border-slate-800 p-6 overflow-y-auto w-fit h-[calc(100vh-4rem)] sticky top-24">
      <nav className="min-w-[250px]">
        {sections.map((section, index) => {
          const sectionSlug = encodeURIComponent(section.title.toLowerCase());
          const isExpanded = expandedSections.includes(index);
          
          return (
            <div key={index} className="mb-6">
              <h2 className="text-lg font-semibold mb-3 px-4 py-2 rounded-lg bg-gradient-to-r from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-sm text-slate-800 dark:text-slate-100 transition-all duration-200 group">
                <span className="text-slate-600 dark:text-slate-400 mr-2 font-mono group-hover:text-slate-700 dark:group-hover:text-slate-300">
                  {index + 1}.
                </span>
                {section.title}
              </h2>
              <ul className="space-y-1 ml-2">
                <li>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <Link
                        href={`/docs/${sectionSlug}`}
                        className={`
                          flex-grow flex items-center py-1.5 px-4 rounded-lg
                          transition-colors duration-200
                          ${pathname === `/docs/${sectionSlug}`
                            ? 'text-slate-900 dark:text-slate-100 font-medium'
                            : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100'
                          }
                        `}
                      >
                        <span className="text-slate-600 dark:text-slate-400 mr-2 w-12 inline-block font-mono">
                          {index + 1}.0
                        </span>
                        <span className="flex-grow">{section.title}</span>
                      </Link>
                      {section.subsections.length > 0 && (
                        <button
                          onClick={() => {
                            setExpandedSections(prev =>
                              prev.includes(index)
                                ? prev.filter(i => i !== index)
                                : [...prev, index]
                            );
                          }}
                          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg"
                        >
                          {isExpanded 
                            ? <ChevronDown size={16} className="text-slate-600 dark:text-slate-400" />
                            : <ChevronRight size={16} className="text-slate-600 dark:text-slate-400" />
                          }
                        </button>
                      )}
                    </div>
                    
                    {section.subsections.length > 0 && isExpanded && (
                      <ul className="ml-6 space-y-1">
                        {section.subsections.map((subsection, subIndex) => {
                          const subsectionSlug = encodeURIComponent(subsection.title.toLowerCase());
                          const isSubActive = pathname.includes(`/docs/${sectionSlug}`) && 
                            pathname.includes(`#${subsectionSlug}`);
                          
                          return (
                            <li key={subIndex}>
                              <Link
                                href={`/docs/${sectionSlug}#${subsectionSlug}`}
                                className={`
                                  block py-1.5 px-4 rounded-lg
                                  transition-colors duration-200
                                  ${isSubActive
                                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-medium'
                                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-100'
                                  }
                                `}
                              >
                                <span className="text-slate-500 dark:text-slate-400 mr-2 w-12 inline-block font-mono">
                                  {index + 1}.{subIndex + 1}
                                </span>
                                {subsection.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </nav>
      <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500 dark:text-slate-400">
        Made by <a href="https://docify.ink" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Docify.ink</a>
      </div>
    </aside>
  );
}