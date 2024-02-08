"use client";

import { queryClient } from "@/components/api/query-client";
import { ComposeChildren } from "@/components/lib/react";
import { AppSessionProvider } from "@/entities/session/app-session-provider";
import { ThemeProvider } from "@/features/theme/theme-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ComposeChildren>
      <ThemeProvider />
      <AppSessionProvider />
      <QueryClientProvider client={queryClient} />
      {children}
    </ComposeChildren>
  );
}
