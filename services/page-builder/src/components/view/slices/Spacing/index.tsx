import { Box } from "@design/react-components-layout";
import { vars } from "@design/themes";
import { SpacingSliceSchema } from "@/src/utils/validation/schema/slices";
import { SliceSchemaProps } from "@/src/utils/validation/schema/types";

type Props = SliceSchemaProps<typeof SpacingSliceSchema>;

export const SpacingSlice: React.FC<Props> = ({ sliceStyle }: Props) => {
  const {
    height = 16,
    backgroundColor = vars.colors.$static.light.color.white,
  } = sliceStyle ?? {};

  return <Box style={{ width: "100%", height: height, backgroundColor }} />;
};
