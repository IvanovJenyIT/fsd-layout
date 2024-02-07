"use client";

import { ComposeChildren } from "@/components/lib/react";
import { ThemeProvider } from "@/features/theme/theme-provider";
import React from "react";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ComposeChildren>
      <ThemeProvider />
      {children}
    </ComposeChildren>
  );
}
