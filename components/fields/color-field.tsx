"use client";

function colorToHex(color: string): string {
  if (!color) return "#000000";
  if (color.startsWith("#")) {
    if (color.length === 4) {
      return `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`;
    }
    return color.slice(0, 7);
  }
  const match = color.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
  if (match) {
    const r = Number(match[1]).toString(16).padStart(2, "0");
    const g = Number(match[2]).toString(16).padStart(2, "0");
    const b = Number(match[3]).toString(16).padStart(2, "0");
    return `#${r}${g}${b}`;
  }
  return "#000000";
}

interface ColorFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function ColorField({ label, value, onChange }: ColorFieldProps) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-slate-600 mb-1.5">
        {label}
      </label>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="#000000 or rgb(0, 0, 0)"
          className="flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-800 shadow-sm placeholder:text-slate-350 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-shadow"
        />
        <div
          className="relative h-9 w-9 shrink-0 rounded-lg border-2 border-slate-200 overflow-hidden shadow-sm"
          style={{ backgroundColor: value || "#000000" }}
        >
          <input
            type="color"
            value={colorToHex(value)}
            onChange={(e) => onChange(e.target.value)}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          />
        </div>
      </div>
    </div>
  );
}
