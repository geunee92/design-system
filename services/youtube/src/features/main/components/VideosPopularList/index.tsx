"use client";

import { useGetVideosPopularList } from "../../hooks/useGetVideosPopularList";
import * as s from "./style.css";
import { VideosPopularListItem } from "./ListItem";

export const VideosPopularList = () => {
  const { data } = useGetVideosPopularList({});

  const flatData = data.pages.map((page) => page?.lists ?? []).flat();

  return (
    <section className={s.wrapper}>
      {flatData.map((item) => (
        <VideosPopularListItem key={item.videoId} video={item} />
      ))}
    </section>
  );
};
