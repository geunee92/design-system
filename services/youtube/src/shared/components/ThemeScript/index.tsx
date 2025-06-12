"use client";

import { useEffect } from "react";

export function ThemeScript() {
  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (isDark) {
      document.body.classList.add("theme-dark");
    } else {
      document.body.classList.remove("theme-dark");
    }

    const listener = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add("theme-dark");
      } else {
        document.body.classList.remove("theme-dark");
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", listener);

    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, []);

  return null;
}
