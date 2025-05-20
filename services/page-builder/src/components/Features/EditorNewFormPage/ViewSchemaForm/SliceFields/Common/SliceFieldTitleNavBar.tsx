import { useViewSchemaFormSliceFieldArray } from "@/src/hooks/useViewSchemaFormSliceFieldArray";
import { Button } from "@design/react-components-button";
import { Box, Flex } from "@design/react-components-layout";
import { ReactNode } from "react";

type Props = {
  title: ReactNode;
  fieldIndex: number;
  appendRight?: ReactNode;
};

export const SliceFieldTitleNavBar = ({
  title,
  fieldIndex,
  appendRight,
}: Props) => {
  const { remove } = useViewSchemaFormSliceFieldArray();

  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    remove(fieldIndex);
  };

  return (
    <Flex className="w-full" justify="space-between">
      <Box>{title}</Box>
      {appendRight ? (
        <Box>{appendRight}</Box>
      ) : (
        <Box>
          <Button
            size="xs"
            variant="outline"
            color="red"
            onClick={handleRemove}
          >
            삭제
          </Button>
        </Box>
      )}
    </Flex>
  );
};
