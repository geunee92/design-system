import { f } from "@/src/shared/styles/functions";
import { style } from "@vanilla-extract/css";
import { vars } from "@design/themes";

export const container = style([f.wFull, f.flex, f.justifyCenter]);

export const wrapper = style([
  f.flex,
  {
    width: "fit-content",
    overflow: "hidden",
    borderRadius: "12px",
  },
]);

export const videoWrapper = style([f.flex, f.pRelative]);

export const commentWrapper = style({
  width: "453px",
  height: "810px",
  padding: "16px",
  backgroundColor: vars.colors.$scale.gray[100],
  overflowY: "auto",

  selectors: {
    "&::-webkit-scrollbar": {
      width: "4px",
      height: "4px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: vars.colors.$scale.gray[300],
      borderRadius: "4px",
    },
  },
});

export const buttonWrapper = style([
  f.pAbsolute,
  {
    bottom: "48px",
    right: "16px",
    zIndex: 2,
  },
]);
