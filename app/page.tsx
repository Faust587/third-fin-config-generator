"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { configSchema, getDefaultValues } from "@/lib/config-schema";
import { ConfigValues } from "@/lib/types";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Section } from "@/components/section";

export default function Home() {
  const [values, setValues] = useState<ConfigValues>(getDefaultValues);
  const [activeSection, setActiveSection] = useState(configSchema[0].id);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const visibleSections = new Map<string, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            visibleSections.set(id, entry);
          } else {
            visibleSections.delete(id);
          }
        }

        if (visibleSections.size === 0) return;

        let topmost: string | null = null;
        let topY = Infinity;
        for (const [id, entry] of visibleSections) {
          if (entry.boundingClientRect.top < topY) {
            topY = entry.boundingClientRect.top;
            topmost = id;
          }
        }
        if (topmost) {
          setActiveSection(topmost);
        }
      },
      { root, rootMargin: "0px 0px -60% 0px", threshold: 0 },
    );

    const refs = sectionRefs.current;
    for (const el of Object.values(refs)) {
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = useCallback((key: string, value: unknown) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    sectionRefs.current[sectionId]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleExport = () => {
    const result: Record<string, unknown> = {};
    for (const section of configSchema) {
      result[section.separatorKey] = section.separatorValue;
      for (const field of section.fields) {
        result[field.key] = values[field.key];
      }
    }
    const json = JSON.stringify(result, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "config.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImport = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target?.result as string);
        const newValues: ConfigValues = { ...getDefaultValues() };
        for (const [key, val] of Object.entries(parsed)) {
          if (!key.startsWith("__")) {
            newValues[key] = val ?? "";
          }
        }
        setValues(newValues);
      } catch {
        alert("Invalid JSON file");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="flex h-screen bg-[#f4f5f7]">
      <Sidebar
        sections={configSchema}
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <Header onExport={handleExport} onImport={handleImport} />
        <main ref={mainRef} className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto py-8 px-8 space-y-6">
            {configSchema.map((section) => (
              <Section
                key={section.id}
                ref={(el) => {
                  sectionRefs.current[section.id] = el;
                }}
                section={section}
                values={values}
                onChange={handleChange}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
