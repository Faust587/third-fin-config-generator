"use client";

import { useState, useEffect } from "react";

interface NumberFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export function NumberField({ label, value, onChange }: NumberFieldProps) {
  const [raw, setRaw] = useState(value === 0 ? "" : String(value));

  useEffect(() => {
    const parsed = raw === "" ? 0 : Number(raw);
    if (parsed !== value) {
      setRaw(value === 0 ? "" : String(value));
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setRaw(text);
    onChange(text === "" ? 0 : Number(text) || 0);
  };

  return (
    <div>
      <label className="block text-[13px] font-medium text-slate-600 mb-1.5">
        {label}
      </label>
      <input
        type="number"
        value={raw}
        onChange={handleChange}
        placeholder="0"
        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-800 shadow-sm placeholder:text-slate-300 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-shadow"
      />
    </div>
  );
}
