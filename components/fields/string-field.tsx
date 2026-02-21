"use client";

interface StringFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
}

const inputClassName =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-800 shadow-sm placeholder:text-slate-350 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-shadow";

export function StringField({
  label,
  value,
  onChange,
  multiline,
}: StringFieldProps) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-slate-600 mb-1.5">
        {label}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          className={`${inputClassName} resize-y`}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputClassName}
        />
      )}
    </div>
  );
}
