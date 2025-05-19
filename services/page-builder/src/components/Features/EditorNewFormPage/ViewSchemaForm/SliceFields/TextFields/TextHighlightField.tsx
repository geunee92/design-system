import { FormFieldWrapper } from "@/src/components/Common/Form/Layouts/FormFieldWrapper";
import { Spacing } from "@/src/components/Common/Spacing";
import {
  useViewSchemaFormContext,
  useViewSchemaFormFieldArray,
  ViewSchemaFieldArrayPath,
} from "@/src/hooks/useViewSchemaForm";
import { ViewSchemaProps } from "@/src/utils/validation/schema/types";
import { Button } from "@design/react-components-button";
import { Input } from "@design/react-components-input";
import { Box, Flex } from "@design/react-components-layout";

type Props = {
  label: string;
  register: ReturnType<typeof useViewSchemaFormContext>["register"];
  fieldIndex: number;
};

export const ViewSchemaFormSliceTextHighlightFields = ({
  label,
  register,
  fieldIndex,
}: Props) => {
  const { fields, append } = useViewSchemaFormFieldArray(
    // @ts-ignore 타입이 설정되어있는데 인식하지 못하는 상태
    `slices.${fieldIndex}.data.highlightTexts`,
  );

  console.log(fields);

  const handleAdd = () => {
    // @ts-ignore
    append("");
  };

  return (
    <FormFieldWrapper label={label}>
      <Flex className="w-full" direction="column" gap={4}>
        <Box>
          <Button size="xs" variant="outline" onClick={handleAdd}>
            ➕ 추가하기
          </Button>
        </Box>

        <Spacing height={8} />

        {fields.map((field, index) => (
          <Input
            key={field.id}
            variant="filled"
            // @ts-ignore
            size="sm"
            {...register(`slices.${fieldIndex}.data.highlightTexts.${index}`)}
          />
        ))}
      </Flex>
    </FormFieldWrapper>
  );
};
