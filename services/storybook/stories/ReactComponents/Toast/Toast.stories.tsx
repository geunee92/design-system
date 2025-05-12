import "@design/react-components-button/style.css";
import { Button } from "@design/react-components-button";
import React from "react";

import { ToastProvider, useToast } from "@design/react-components-toast";
import "@design/react-components-toast/style.css";

export default {
  title: "React Components/Toast",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

const Example = () => {
  const { toast } = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          payload: {
            message: "Hello, World!",
          },
        })
      }
    >
      Toast Button
    </Button>
  );
};

export const ButtonStory = {
  render: () => (
    <ToastProvider>
      <Example />
    </ToastProvider>
  ),
};
