import { Spacing } from "@/src/components/Common/Spacing";
import { Heading } from "@design/react-components-layout";
import { vars } from "@design/themes";
import { ViewSchemaFormSliceSpacingFields } from "./SpacingFields";
import { useViewSchemaFormSliceFieldArray } from "@/src/hooks/useViewSchemaFormSliceFieldArray";

export const ViewSchemaFormSliceFields = () => {
  const { fields } = useViewSchemaFormSliceFieldArray();

  return (
    <>
      <Heading
        fontSize="lg"
        style={{ fontWeight: vars.typography.fontWeight[600] }}
      >
        Slice
      </Heading>

      <Spacing />
      {fields.map((field, index) => {
        switch (field.sliceName) {
          case "SpacingSlice": {
            return <ViewSchemaFormSliceSpacingFields fieldIndex={index} />;
          }
          default:
            <></>;
        }
      })}
    </>
  );
};
