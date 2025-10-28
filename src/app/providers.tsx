"use client";

import { SearchProvider } from "@/features/advocates/state/SearchProvider";

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <SearchProvider>{children}</SearchProvider>;
};
