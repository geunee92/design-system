import * as React from "react";
import { ListProps } from "./types";
import { OrderedList } from "./OrderedList";
import { UnorderedList } from "./UnorderedList";

const List = (props: ListProps, ref: React.Ref<HTMLOListElement>) => {
  const { variant = "unordered", ...rest } = props;

  if (variant === "unordered") {
    return <UnorderedList {...rest} ref={ref} />;
  }

  return <OrderedList {...rest} ref={ref} />;
};

const _List = React.forwardRef(List);
export { _List as List };
