import { SearchService } from "@/server/search/search.service";

const SORT_WHITELIST = [
  "firstName",
  "lastName",
  "city",
  "degree",
  "yearsOfExperience",
];
const DEFAULT_SORT_BY = "lastName";

export async function GET(request: Request): Promise<Response> {
  const searchService = new SearchService();
  const url = new URL(request.url);

  const { query, sortKey, dir, page, pageSize } =
    searchService.unpackQueryParams(url);

  const { data, total } = searchService.executeSearch({
    query,
    sortKey: SORT_WHITELIST.includes(sortKey) ? sortKey : DEFAULT_SORT_BY,
    dir,
    page,
    pageSize,
  });

  return Response.json({ data, total });
}
