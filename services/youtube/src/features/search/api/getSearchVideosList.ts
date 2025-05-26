import {
  ListPageApiInfo,
  VideoListItem,
} from "@/src/shared/api/youtube/types/list";
import { youtube_v3 } from "googleapis";
import queryString from "query-string";

export type SearchOrder = "relevance" | "date" | "viewCount";

export type GetSearchVideosListRequestParams = Pick<
  youtube_v3.Params$Resource$Search$List,
  "q" | "pageToken"
> & {
  order?: SearchOrder;
};

export type SearchVideosListItem = VideoListItem;

export type GetSearchVideosListResponse = {
  lists: SearchVideosListItem[];
} & ListPageApiInfo;

export function getSearchVideosListUrl() {
  const base = process.env.NEXT_PUBLIC_BASE_URL;
  if (!base) {
    if (typeof window === "undefined") {
      console.warn("BASE_URL is undefined during SSR");
    }
    return "/api/videos/search"; // fallback
  }
  return `${base}/api/videos/search`;
}

export const getSearchVideosList = async (
  params: GetSearchVideosListRequestParams,
): Promise<GetSearchVideosListResponse> => {
  const queryParams = queryString.stringify(params);

  const url = `${getSearchVideosListUrl()}?${queryParams}`;

  const response = await fetch(url);

  return await response.json();
};
