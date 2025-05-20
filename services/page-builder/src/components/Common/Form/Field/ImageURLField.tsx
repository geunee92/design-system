import { Box } from "@design/react-components-layout";

import {
  FormFieldWrapper,
  FormFieldWrapperProps,
} from "../Layouts/FormFieldWrapper";
import { ImageURLInput, ImageURLInputProps } from "../Input/ImageURL";

type Props = ImageURLInputProps & Omit<FormFieldWrapperProps, "onChange">;

export const ImageURLField = (props: Props) => {
  const { label, isRequired, ...inputRest } = props;

  return (
    <FormFieldWrapper label={label} isRequired={isRequired}>
      <Box style={{ width: "100%" }}>
        <ImageURLInput {...inputRest} />
      </Box>
    </FormFieldWrapper>
  );
};
