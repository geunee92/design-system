import Link from "next/link";
import { SearchVideosListItem } from "@/src/features/search/api/getSearchVideosList";
import * as s from "./style.css";
import { getVideoDetailPageLink } from "@/src/shared/utils/link/page";

type Props = {
  video: SearchVideosListItem;
};

export const SearchResultListItem = ({ video }: Props) => {
  const {
    videoId,
    thumbnail,
    title,
    channelTitle,
    publishedAtDisplayText,
    description,
  } = video;

  return (
    <Link href={getVideoDetailPageLink({ videoId })} className={s.link}>
      <div className={s.wrapper}>
        <div className={s.thumbnailWrapper}>
          <img
            className={s.image}
            src={thumbnail.url}
            width={thumbnail?.width}
            height={thumbnail?.height}
            alt={title}
          />
        </div>

        <div className={s.contentsWrapper}>
          <h3 className={s.title}>{title}</h3>

          <p className={s.metadata}>
            {channelTitle} • {publishedAtDisplayText}
          </p>

          <p className={s.description}>{description}</p>
        </div>
      </div>
    </Link>
  );
};
