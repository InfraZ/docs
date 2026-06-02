import type { PrismTheme } from "prism-react-renderer";
import { themes } from "prism-react-renderer";

const { nightOwl, nightOwlLight } = themes;

/** InfraZ brand-aligned syntax themes (based on Night Owl palettes). */
export const prismInfrazDark: PrismTheme = {
  plain: {
    color: "#dce8f5",
    backgroundColor: "#0c1521",
  },
  styles: nightOwl.styles.map((rule) => {
    const { types, style } = rule;
    if (types.includes("keyword") || types.includes("tag")) {
      return { types, style: { ...style, color: "#9ce4ff" } };
    }
    if (
      types.includes("function") ||
      types.includes("builtin") ||
      types.includes("class-name")
    ) {
      return { types, style: { ...style, color: "#c6eaff" } };
    }
    if (types.includes("comment")) {
      return { types, style: { ...style, color: "#627d94" } };
    }
    if (types.includes("property") || types.includes("operator")) {
      return { types, style: { ...style, color: "#7ec8e3" } };
    }
    if (types.includes("string") || types.includes("attr-name")) {
      return { types, style: { ...style, color: "#b8e986" } };
    }
    return rule;
  }),
};

export const prismInfrazLight: PrismTheme = {
  plain: {
    color: "#1e2a3a",
    backgroundColor: "#f4f9fc",
  },
  styles: nightOwlLight.styles.map((rule) => {
    const { types, style } = rule;
    if (types.includes("keyword") || types.includes("operator")) {
      return { types, style: { ...style, color: "#1a7fa8" } };
    }
    if (types.includes("function") || types.includes("tag")) {
      return { types, style: { ...style, color: "#156b8a" } };
    }
    if (types.includes("string") || types.includes("builtin")) {
      return { types, style: { ...style, color: "#0d5f7a" } };
    }
    if (types.includes("comment")) {
      return { types, style: { ...style, color: "#5a6b7d" } };
    }
    if (types.includes("property") || types.includes("namespace")) {
      return { types, style: { ...style, color: "#2a8eb5" } };
    }
    return rule;
  }),
};
