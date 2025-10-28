import { advocateData } from "../data/advocates";
import { SORTABLE } from "@/shared/lib/constants";
import { Advocate, SortKey, Order, SearchParameters } from "@/shared/lib/types";

const PAGE_MIN_SIZE = 5;
const PAGE_MAX_SIZE = 15;

export class SearchService {
  private readonly collator: Intl.Collator;

  // Using in-memory data for simplicity;
  // If Solace is using TypeORM, I would be injecting a repository here;
  private readonly advocateData: Advocate[] = advocateData;

  constructor() {
    this.collator = new Intl.Collator(undefined, { sensitivity: "base" });
  }

  executeSearch(searchParams: SearchParameters): {
    data: Advocate[];
    total: number;
  } {
    const { query } = searchParams;

    const filtered = query
      ? this.advocateData.filter((advocate) => this.rowMatches(advocate, query))
      : this.advocateData;

    const sorted = filtered.sort((a, b) =>
      this.compare(a, b, searchParams.sortKey, searchParams.dir)
    );

    const total = filtered.length;

    const startIdx = (searchParams.page - 1) * searchParams.pageSize;
    const paged = sorted.slice(startIdx, startIdx + searchParams.pageSize);

    return { data: paged, total };
  }

  unpackQueryParams(url: URL): SearchParameters {
    const query = (url.searchParams.get("q") || "").trim().toLowerCase();

    const sort = (url.searchParams.get("sort") || "lastName") as SortKey;
    const sortKey: SortKey = SORTABLE.includes(sort) ? sort : "lastName";

    const dirParam = (url.searchParams.get("dir") || "asc").toLowerCase();
    const dir: Order = dirParam === "desc" ? "desc" : "asc";

    const pageParam = parseInt(url.searchParams.get("page") || "1", 10);
    const page = Number.isFinite(pageParam) && pageParam > 0 ? pageParam : 1;

    const sizeParam = parseInt(url.searchParams.get("pageSize") || "10", 10);
    const pageSize = Math.min(
      Math.max(sizeParam, PAGE_MIN_SIZE),
      PAGE_MAX_SIZE
    );

    return { query, sortKey, dir, page, pageSize };
  }

  /** Checks if an advocate matches the search query.
   * in a real-world scenario we would be doing SQL query with LIKE operator for this.
   */
  private rowMatches(advocate: Advocate, query: string): boolean {
    if (!query) return true;

    const hay = [
      advocate.firstName,
      advocate.lastName,
      advocate.city,
      advocate.degree,
      advocate.specialties.join(" "),
      advocate.yearsOfExperience.toString(),
      advocate.phoneNumber.toString(),
    ]
      .join(" ")
      .toLowerCase();

    return hay.includes(query);
  }

  private compare(a: Advocate, b: Advocate, key: SortKey, dir: Order): number {
    let cmp: number;
    if (key === "yearsOfExperience" || key === "phoneNumber") {
      cmp = Number(a[key]) - Number(b[key]);
    } else {
      cmp = this.collator.compare(String(a[key] ?? ""), String(b[key] ?? ""));
    }
    if (cmp === 0) {
      cmp =
        this.collator.compare(a.lastName ?? "", b.lastName ?? "") ||
        this.collator.compare(a.firstName ?? "", b.firstName ?? "");
    }
    return dir === "asc" ? cmp : -cmp;
  }
}
