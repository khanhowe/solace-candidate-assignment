"use client";

import { createContext } from "react";
import { Advocate, Order, SortKey } from "@/shared/lib/types";

export interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  advocates: Advocate[];
  setAdvocates: (advocates: Advocate[]) => void;

  sortKey: SortKey;
  setSortKey: (sortKey: SortKey) => void;

  order: Order;
  setOrder: (order: Order) => void;

  page: number;
  setPage: (page: number) => void;

  pageSize: number;
  setPageSize: (pageSize: number) => void;

  totalCount: number;
  setTotalCount: (total: number) => void;

  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export interface SearchProviderProps {
  children: React.ReactNode;
}

export const SearchContext = createContext<SearchContextType | null>(null);
