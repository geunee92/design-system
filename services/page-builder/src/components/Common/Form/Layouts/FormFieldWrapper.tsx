import { Text, Flex } from "@design/react-components-layout";
import { vars } from "@design/themes";

export type FormFieldWrapperProps = {
  label: string;
  isRequired?: boolean;
} & React.HTMLAttributes<HTMLLabelElement>;

// 단순 인풋만이 아닌 다양한 컴포넌트가 들어올 수 있음
export const FormFieldWrapper = (props: FormFieldWrapperProps) => {
  const { label, isRequired, children, ...rest } = props;

  return (
    <label {...rest}>
      <Flex padding={2} gap={8} className="w-full">
        <Text className="w-[200px] break-all flex items-center" fontSize="sm">
          {label}

          {isRequired && (
            <span style={{ color: vars.colors.$static.light.red[500] }}>*</span>
          )}
        </Text>

        {children}
      </Flex>
    </label>
  );
};
