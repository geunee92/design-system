import {
  ListPageApiInfo,
  VideoListItem,
} from "@/src/shared/api/youtube/types/list";
import { youtube_v3 } from "googleapis";
import queryString from "query-string";

export type GetVideosPopularListRequestParams = Pick<
  youtube_v3.Params$Resource$Videos$List,
  "maxResults" | "pageToken"
>;

export type PopularListItem = {
  viewCount: number;
  viewCountDisplayText: string; // 23만
} & VideoListItem;

export type GetVideosPopularListResponse = {
  lists: PopularListItem[];
} & ListPageApiInfo;

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
