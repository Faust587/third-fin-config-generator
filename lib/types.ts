export type FieldType =
  | "boolean"
  | "string"
  | "text"
  | "number"
  | "color"
  | "color-array"
  | "string-array"
  | "object-array";

export interface ObjectFieldDef {
  key: string;
  label: string;
  type: "string" | "string-array";
}

export interface FieldDef {
  key: string;
  type: FieldType;
  objectSchema?: ObjectFieldDef[];
}

export interface SectionDef {
  id: string;
  label: string;
  separatorKey: string;
  separatorValue: string;
  fields: FieldDef[];
}

export type ConfigValues = Record<string, unknown>;
