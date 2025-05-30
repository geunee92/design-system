import {
  UseSuspenseQueryResult,
  useSuspenseQuery,
} from "@tanstack/react-query";
import {
  GetVideosDetailRequestParams,
  GetVideosDetailResponse,
  getVideosDetail,
} from "@/src/shared/api/youtube/client/videoDetail/getVideosDetail";

type Params = GetVideosDetailRequestParams;

export const useGetVideosDetail = (
  params: Params,
): UseSuspenseQueryResult<GetVideosDetailResponse> => {
  return useSuspenseQuery({
    queryKey: ["videoDetail", params.videoId],
    queryFn: async () => await getVideosDetail(params),
  });
};
