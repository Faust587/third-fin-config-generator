"use client";

import { ObjectFieldDef } from "@/lib/types";

interface ObjectArrayFieldProps {
  label: string;
  value: Record<string, unknown>[];
  onChange: (value: Record<string, unknown>[]) => void;
  schema: ObjectFieldDef[];
}

export function ObjectArrayField({
  label,
  value,
  onChange,
  schema,
}: ObjectArrayFieldProps) {
  const updateItem = (index: number, key: string, fieldValue: unknown) => {
    const next = value.map((item, i) =>
      i === index ? { ...item, [key]: fieldValue } : item,
    );
    onChange(next);
  };

  const addItem = () => {
    const newItem: Record<string, unknown> = {};
    for (const field of schema) {
      newItem[field.key] = field.type === "string-array" ? [] : "";
    }
    onChange([...value, newItem]);
  };

  const removeItem = (index: number) => {
    onChange(value.filter((_, i) => i !== index));
  };

  return (
    <div>
      <label className="block text-[13px] font-medium text-slate-600 mb-2">
        {label}
      </label>
      <div className="space-y-3">
        {value.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-slate-200 bg-slate-50/60 p-4"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Item {i + 1}
              </span>
              <button
                type="button"
                onClick={() => removeItem(i)}
                className="text-[12px] text-slate-400 hover:text-red-500 transition-colors"
              >
                Remove
              </button>
            </div>
            <div className="space-y-3">
              {schema.map((fieldDef) => (
                <div key={fieldDef.key}>
                  <label className="block text-[12px] font-medium text-slate-500 mb-1">
                    {fieldDef.label}
                  </label>
                  {fieldDef.type === "string" ? (
                    <input
                      type="text"
                      value={(item[fieldDef.key] as string) || ""}
                      onChange={(e) =>
                        updateItem(i, fieldDef.key, e.target.value)
                      }
                      className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-800 shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-shadow"
                    />
                  ) : (
                    <InlineStringArray
                      value={(item[fieldDef.key] as string[]) || []}
                      onChange={(val) => updateItem(i, fieldDef.key, val)}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={addItem}
        className="mt-2.5 flex items-center gap-1 text-[13px] font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
      >
        <svg
          className="h-3.5 w-3.5"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        Add Item
      </button>
    </div>
  );
}

function InlineStringArray({
  value,
  onChange,
}: {
  value: string[];
  onChange: (value: string[]) => void;
}) {
  const update = (index: number, text: string) => {
    const next = [...value];
    next[index] = text;
    onChange(next);
  };

  const add = () => onChange([...value, ""]);

  const remove = (index: number) =>
    onChange(value.filter((_, i) => i !== index));

  return (
    <div>
      <div className="space-y-1.5">
        {value.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              type="text"
              value={item}
              onChange={(e) => update(i, e.target.value)}
              className="flex-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[13px] text-slate-800 shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-shadow"
            />
            <button
              type="button"
              onClick={() => remove(i)}
              className="h-7 w-7 shrink-0 flex items-center justify-center rounded-md text-slate-300 hover:bg-red-50 hover:text-red-400 transition-colors"
              aria-label="Remove"
            >
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={add}
        className="mt-1.5 flex items-center gap-1 text-[12px] font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
      >
        <svg
          className="h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        Add
      </button>
    </div>
  );
}
