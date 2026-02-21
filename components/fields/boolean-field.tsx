"use client";

interface BooleanFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function BooleanField({ label, value, onChange }: BooleanFieldProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <label className="text-[13px] font-medium text-slate-600">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[13px] text-slate-800 shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-shadow"
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
  );
}
