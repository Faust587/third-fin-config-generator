"use client";

import { forwardRef } from "react";
import { SectionDef, ConfigValues } from "@/lib/types";
import { FieldRenderer } from "./field-renderer";

interface SectionProps {
  section: SectionDef;
  values: ConfigValues;
  onChange: (key: string, value: unknown) => void;
}

export const Section = forwardRef<HTMLDivElement, SectionProps>(
  function Section({ section, values, onChange }, ref) {
    return (
      <div ref={ref} id={section.id} className="scroll-mt-20">
        <div className="rounded-xl border border-slate-200/80 bg-white shadow-sm">
          <div className="px-6 py-4 border-b border-slate-100">
            <h2 className="text-[15px] font-semibold text-slate-800">
              {section.label}
            </h2>
          </div>
          <div className="px-6 py-5 space-y-5">
            {section.fields.map((field) => (
              <FieldRenderer
                key={field.key}
                field={field}
                value={values[field.key]}
                onChange={(val) => onChange(field.key, val)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  },
);
