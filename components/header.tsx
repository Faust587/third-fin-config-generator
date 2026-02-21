"use client";

import { useRef } from "react";

interface HeaderProps {
  onExport: () => void;
  onImport: (file: File) => void;
}

export function Header({ onExport, onImport }: HeaderProps) {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImport(file);
      e.target.value = "";
    }
  };

  return (
    <header className="flex items-center justify-between border-b border-slate-200/80 bg-white/80 backdrop-blur-sm px-8 py-3.5 sticky top-0 z-10">
      <h2 className="text-sm font-medium text-slate-500">Configuration</h2>
      <div className="flex items-center gap-2.5">
        <button
          onClick={() => fileRef.current?.click()}
          className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-[13px] font-medium text-slate-600 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer"
        >
          Import JSON
        </button>
        <input
          ref={fileRef}
          type="file"
          accept=".json"
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          onClick={onExport}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-[13px] font-medium text-white shadow-sm hover:bg-indigo-700 transition-all cursor-pointer"
        >
          Export JSON
        </button>
      </div>
    </header>
  );
}
