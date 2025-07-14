"use client";

import { useInitialRender } from "../hooks/useInitialRender";
import { QueryProvider } from "./QueryProviders";




export function Providers({ children }: { children: React.ReactNode }) {
  const isInitialRenderComplete = useInitialRender();

  if (!isInitialRenderComplete) return null;

  return (
     <QueryProvider>
        {children}
     </QueryProvider>
  );
}