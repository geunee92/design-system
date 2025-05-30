import { useEffect } from "react";
import { useGetVideosDetail } from "../../detail/hooks/useGetVideosDetail";
import { VideoDetailPageParams } from "../../detail/types";
import { useRouter } from "next/navigation";

type Params = VideoDetailPageParams["params"];

export const useHandleInvalidShortsVideoType = ({ videoId }: Params) => {
  const {
    data: { detail: videoDetail },
    isLoading,
  } = useGetVideosDetail({ videoId });

  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    console.log(videoDetail.videoType);

    const isShortVideo = videoDetail.videoType === "short";

    console.log(isShortVideo);

    if (!isShortVideo) {
      router.replace(`/videos/detail/${videoId}`);
    }
  }, [isLoading]);
};
