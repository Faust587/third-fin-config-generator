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

interface ColorArrayFieldProps {
  label: string;
  value: string[];
  onChange: (value: string[]) => void;
}

export function ColorArrayField({
  label,
  value,
  onChange,
}: ColorArrayFieldProps) {
  const update = (index: number, color: string) => {
    const next = [...value];
    next[index] = color;
    onChange(next);
  };

  const add = () => onChange([...value, "#000000"]);

  const remove = (index: number) =>
    onChange(value.filter((_, i) => i !== index));

  return (
    <div>
      <label className="block text-[13px] font-medium text-slate-600 mb-2">
        {label}
      </label>
      <div className="space-y-2">
        {value.map((color, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              type="text"
              value={color}
              onChange={(e) => update(i, e.target.value)}
              className="flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-800 shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-shadow"
            />
            <div
              className="relative h-9 w-9 shrink-0 rounded-lg border-2 border-slate-200 overflow-hidden shadow-sm"
              style={{ backgroundColor: color || "#000000" }}
            >
              <input
                type="color"
                value={colorToHex(color)}
                onChange={(e) => update(i, e.target.value)}
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
              />
            </div>
            <button
              type="button"
              onClick={() => remove(i)}
              className="h-9 w-9 shrink-0 flex items-center justify-center rounded-lg text-slate-300 hover:bg-red-50 hover:text-red-400 transition-colors"
              aria-label="Remove"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={add}
        className="mt-2.5 flex items-center gap-1 text-[13px] font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
      >
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        Add Color
      </button>
    </div>
  );
}
