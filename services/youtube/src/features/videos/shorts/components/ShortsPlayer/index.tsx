import { useEffect, useRef, useState } from "react";
import { useGetVideosDetail } from "../../../detail/hooks/useGetVideosDetail";
import { VideoDetailPageParams } from "../../../detail/types";
import * as s from "./style.css";
import YouTube, { YouTubePlayer } from "react-youtube";

export type ShortsPlayerConfig = {
  autoPlay?: boolean;
};

type Props = VideoDetailPageParams["params"] & ShortsPlayerConfig;

export const ShortsPlayer = ({ videoId: initVideoId, autoPlay }: Props) => {
  const youtubePlayerRef = useRef<YouTubePlayer | null>(null);

  const {
    data: { detail: videoDetail },
  } = useGetVideosDetail({ videoId: initVideoId });

  const { videoId, title, channelInfo, channelTitle } = videoDetail;

  const config = {
    width: "453px",
    height: "810px",
    playerVars: {
      autoplay: autoPlay ? 1 : 0,
      mute: 1,
      rel: 0,
      controls: 0,
      loop: 1,
      fs: 0,
      playlist: videoId,
    },
  };

  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const togglePlay = () => {
    if (!youtubePlayerRef.current) return;

    if (isPlaying) {
      youtubePlayerRef.current?.pauseVideo();
      setIsPlaying(false);
    } else {
      youtubePlayerRef.current?.playVideo();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (!youtubePlayerRef.current) return;

    if (autoPlay) {
      youtubePlayerRef.current?.playVideo();
    } else {
      youtubePlayerRef.current?.pauseVideo();
    }
  }, [autoPlay]);

  return (
    <div className={s.wrapper}>
      <div className={s.infoWrapper}>
        <div className={s.channelWrapper}>
          <img
            className={s.channelThumbnail}
            src={channelInfo.thumbnail.url}
            width="36"
            height="36"
            alt={channelTitle}
          />
          <p className={s.channelName}>{channelTitle}</p>
        </div>
        <p className={s.title}>{title}</p>
      </div>
      <div className={s.videoWrapper} onClick={togglePlay}>
        <YouTube
          videoId={videoId}
          loading="eager"
          className={s.video}
          opts={config}
          onReady={(event) => {
            youtubePlayerRef.current = event.target;
          }}
        />
      </div>
    </div>
  );
};
