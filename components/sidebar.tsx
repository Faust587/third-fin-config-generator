"use client";

import { useEffect, useRef } from "react";
import { SectionDef } from "@/lib/types";

interface SidebarProps {
  sections: SectionDef[];
  activeSection: string;
  onSectionClick: (id: string) => void;
}

export function Sidebar({
  sections,
  activeSection,
  onSectionClick,
}: SidebarProps) {
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: "nearest" });
  }, [activeSection]);

  return (
    <aside className="w-60 shrink-0 bg-slate-900 h-screen sticky top-0 overflow-y-auto flex flex-col">
      <div className="px-5 py-4">
        <div className="flex items-center gap-2.5">
          <div className="h-7 w-7 rounded-lg bg-indigo-500 flex items-center justify-center">
            <svg
              className="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
          <span className="text-sm font-semibold text-white tracking-tight">
            Config Generator
          </span>
        </div>
      </div>
      <nav className="flex-1 px-3 pb-4 space-y-0.5">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              ref={isActive ? activeRef : null}
              onClick={() => onSectionClick(section.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-[13px] transition-all duration-150 ${
                isActive
                  ? "bg-indigo-500/15 text-indigo-300 font-medium"
                  : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
              }`}
            >
              {section.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
