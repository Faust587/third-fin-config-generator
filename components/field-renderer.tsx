"use client";

import { FieldDef } from "@/lib/types";
import { BooleanField } from "./fields/boolean-field";
import { StringField } from "./fields/string-field";
import { NumberField } from "./fields/number-field";
import { ColorField } from "./fields/color-field";
import { ColorArrayField } from "./fields/color-array-field";
import { StringArrayField } from "./fields/string-array-field";
import { ObjectArrayField } from "./fields/object-array-field";

interface FieldRendererProps {
  field: FieldDef;
  value: unknown;
  onChange: (value: unknown) => void;
}

export function FieldRenderer({ field, value, onChange }: FieldRendererProps) {
  switch (field.type) {
    case "boolean":
      return (
        <BooleanField
          label={field.key}
          value={(value as string) || "No"}
          onChange={onChange}
        />
      );
    case "string":
      return (
        <StringField
          label={field.key}
          value={(value as string) ?? ""}
          onChange={onChange}
        />
      );
    case "text":
      return (
        <StringField
          label={field.key}
          value={(value as string) ?? ""}
          onChange={onChange}
          multiline
        />
      );
    case "number":
      return (
        <NumberField
          label={field.key}
          value={(value as number) ?? 0}
          onChange={onChange}
        />
      );
    case "color":
      return (
        <ColorField
          label={field.key}
          value={(value as string) ?? ""}
          onChange={onChange}
        />
      );
    case "color-array":
      return (
        <ColorArrayField
          label={field.key}
          value={(value as string[]) ?? []}
          onChange={onChange}
        />
      );
    case "string-array":
      return (
        <StringArrayField
          label={field.key}
          value={(value as string[]) ?? []}
          onChange={onChange}
        />
      );
    case "object-array":
      return (
        <ObjectArrayField
          label={field.key}
          value={(value as Record<string, unknown>[]) ?? []}
          onChange={onChange}
          schema={field.objectSchema!}
        />
      );
    default:
      return null;
  }
}
