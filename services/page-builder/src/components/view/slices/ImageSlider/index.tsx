import { Box } from "@design/react-components-layout";

import "swiper/css";
import { Autoplay } from "swiper/modules";

import { convertSpacingRemToPx } from "@/src/utils/size";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliceSchemaProps } from "@/src/utils/validation/schema/types";
import { ImageSliderSliceSchema } from "@/src/utils/validation/schema/slices";

type Props = SliceSchemaProps<typeof ImageSliderSliceSchema>;

export const ImageSliderSlice: React.FC<Props> = ({
  images,
  sliceStyle,
}: Props) => {
  const {
    backgroundColor = "transparent",
    imageItemWidth = 280,
    spaceBetween = 16,
    paddingX = 8,
  } = sliceStyle ?? {};

  const offset = convertSpacingRemToPx(paddingX);

  // Swiper를 타입스크립트가 JSX로 인식하지 못한다는 에러가 나옴
  // build에는 문제가 없어 우회해서 사용
  const SafeSwiper = Swiper as unknown as React.FC<any>;
  const SafeSwiperSlide = SwiperSlide as unknown as React.FC<any>;

  return (
    <Box style={{ backgroundColor }}>
      <SafeSwiper
        slidesPerView={"auto"}
        slidesOffsetBefore={offset}
        spaceBetween={spaceBetween}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {images.map(({ imageUrl, alt }, index) => (
          <SafeSwiperSlide
            key={`${imageUrl}-${index}`}
            style={{ width: imageItemWidth }}
          >
            <img src={imageUrl} alt={alt} style={{ width: imageItemWidth }} />
          </SafeSwiperSlide>
        ))}
      </SafeSwiper>
    </Box>
  );
};
