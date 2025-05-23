import { useMemo } from "react";
import { MetadataSlice } from "../components/Features/Views/slices/Metadata";
import { TextSlice } from "../components/Features/Views/slices/Text";
import { ImageSlice } from "../components/Features/Views/slices/Image";
import { SpacingSlice } from "../components/Features/Views/slices/Spacing";
import { ImageSliderSectionSlice } from "../components/Features/Views/slices/ImageSliderSection";
import { AccordionSlice } from "../components/Features/Views/slices/Accordion";
import { ViewSchemaProps } from "../utils/validation/schema/types";

export const useViewSchemaSlices = (viewSchema: ViewSchemaProps) => {
  const slices = useMemo(() => {
    const sliceList = [] as React.ReactNode[];

    if (viewSchema.metadata) {
      sliceList.push(<MetadataSlice {...viewSchema.metadata} />);
    }

    viewSchema.slices.forEach(({ sliceName, data }) => {
      switch (sliceName) {
        case "TextSlice": {
          sliceList.push(<TextSlice {...data} />);
          break;
        }
        case "ImageSlice": {
          sliceList.push(<ImageSlice {...data} />);
          break;
        }
        case "SpacingSlice": {
          sliceList.push(<SpacingSlice {...data} />);
          break;
        }
        case "ImageSliderSectionSlice": {
          sliceList.push(<ImageSliderSectionSlice {...data} />);
          break;
        }

        case "AccordionSlice": {
          sliceList.push(<AccordionSlice {...data} />);
          break;
        }
      }
    });

    return sliceList;
  }, [viewSchema]);

  return slices;
};
