import { VideoStatistics } from "@/src/shared/api/youtube/types/item";
import {
  ListResponse,
  VideoListItem,
} from "@/src/shared/api/youtube/types/list";
import { youtube_v3 } from "googleapis";
import queryString from "query-string";

export type GetVideosPopularListRequestParams = Pick<
  youtube_v3.Params$Resource$Videos$List,
  "maxResults" | "pageToken"
>;
export type PopularListItem = Pick<
  VideoStatistics,
  "viewCount" | "viewCountDisplayText"
> &
  VideoListItem;

export type GetVideosPopularListResponse = ListResponse<PopularListItem>;

export function getVideosPopularListUrl() {
  const base = process.env.NEXT_PUBLIC_BASE_URL;
  if (!base) {
    if (typeof window === "undefined") {
      console.warn("BASE_URL is undefined during SSR");
    }
    return "/api/videos/popular-list"; // fallback
  }
  return `${base}/api/videos/popular-list`;
}

export const getVideosPopularList = async (
  params: GetVideosPopularListRequestParams,
): Promise<GetVideosPopularListResponse> => {
  const queryParams = queryString.stringify(params);

  const url = `${getVideosPopularListUrl()}?${queryParams}`;

  const response = await fetch(url);

  return await response.json();
};
