import { ComponentPropsWithoutRef } from "react";

export type UseInputProps = {
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
  value?: string;
  onChange?: string;
  // unControlled 방식도 사용하기 위해 범용적인 타입을 같이 사용
} & Omit<ComponentPropsWithoutRef<"input">, "disabled" | "readOnly">;

export type UseInputResult = {
  inputProps: ComponentPropsWithoutRef<"input"> & {
    "data-disabled": boolean;
    "data-invalid": boolean;
    "aria-invalid": boolean;
    "aria-required": boolean;
  };
  valueCount: number;
};
