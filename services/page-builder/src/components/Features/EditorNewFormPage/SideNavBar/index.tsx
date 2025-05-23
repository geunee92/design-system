import { DesktopFirstSideNav } from "@/src/components/Common/Layouts/DesktopFirstLayout/SideNav";
import { useViewSchemaFormSliceFieldArray } from "@/src/hooks/useViewSchemaFormSliceFieldArray";
import { Button } from "@design/react-components-button";
import { Divider } from "@design/react-components-layout";
import { Fragment } from "react";

type Preset = {
  name: string;
  onClick: () => void;
};

export const EditorNewFormSideNavBar = () => {
  const { append } = useViewSchemaFormSliceFieldArray();

  const presets: Preset[] = [
    {
      name: "SpacingSlice",
      onClick: () => {
        append({
          sliceName: "SpacingSlice",
          data: {},
        });
      },
    },
    {
      name: "TextSlice",
      onClick: () => {
        append({
          sliceName: "TextSlice",
          data: {
            text: "",
          },
        });
      },
    },
    {
      name: "ImageSlice",
      onClick: () => {
        append({
          sliceName: "ImageSlice",
          data: {
            imageUrl: "",
            alt: "",
          },
        });
      },
    },
    {
      name: "ImageSliderSlice",
      onClick: () => {
        append({
          sliceName: "ImageSliderSlice",
          data: {
            images: [],
          },
        });
      },
    },
    {
      name: "AccordionSlice",
      onClick: () => {
        append({
          sliceName: "AccordionSlice",
          data: {
            accordionContents: [],
          },
        });
      },
    },
  ];

  return (
    <DesktopFirstSideNav>
      {presets.map(({ name, onClick }) => (
        <Fragment key={name}>
          <Button
            className="w-full"
            style={{ width: "100%", borderRadius: 0 }}
            variant="ghost"
            onClick={onClick}
          >
            {name}
          </Button>

          <Divider />
        </Fragment>
      ))}
    </DesktopFirstSideNav>
  );
};
