"use client";

import { useGetVideosPopularList } from "../../hooks/useGetVideosPopularList";
import * as s from "./style.css";
import { VideosPopularListItem } from "./ListItem";
import { VisibilityLoader } from "@/src/shared/components/VisibilityLoader";

export const VideosPopularList = () => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetVideosPopularList({});

  const flatData = data.pages.map((page) => page?.lists ?? []).flat();

  return (
    <>
      <section className={s.wrapper}>
        {flatData.map((item) => (
          <VideosPopularListItem key={item.videoId} video={item} />
        ))}
      </section>

      {hasNextPage && (
        <VisibilityLoader
          callback={() => {
            !isFetchingNextPage && fetchNextPage();
          }}
        />
      )}
    </>
  );
};
