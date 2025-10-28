"use client";

import { useEffect, useState } from "react";
import { SearchContext, SearchProviderProps } from "./search-context";
import { Advocate, Order, SortKey } from "@/shared/lib/types";

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [sortKey, setSortKey] = useState<SortKey>("lastName");
  const [order, setOrder] = useState<Order>("asc");
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalCount, setTotalCount] = useState<number>(0);

  const handleSearch = () => {
    const ctrl = new AbortController();
    const timer = setTimeout(async () => {
      try {
        const params = new URLSearchParams();

        if (searchQuery) params.set("q", searchQuery);
        params.set("sort", String(sortKey));
        params.set("dir", order);
        params.set("page", String(page + 1));
        params.set("pageSize", String(pageSize));

        const url = `/api/advocates${params.toString() ? `?${params}` : ""}`;
        const res = await fetch(url, { signal: ctrl.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const { data, total } = await res.json();
        setAdvocates(data ?? []);
        setTotalCount(total ?? 0);
      } catch (err) {
        if (!(err instanceof DOMException && err.name === "AbortError")) {
          console.error("Failed to fetch advocates:", err);
        }
      }
    }, 300); // debounce

    return () => {
      clearTimeout(timer);
      ctrl.abort();
    };
  };

  useEffect(() => {
    const cleanup = handleSearch();
    return () => {
      cleanup();
    };
  }, [searchQuery, sortKey, order, page, pageSize]);

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        advocates,
        setAdvocates,
        sortKey,
        setSortKey,
        order,
        setOrder,
        page,
        setPage,
        pageSize,
        setPageSize,
        totalCount,
        setTotalCount,
        loading,
        setLoading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
