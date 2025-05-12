import { toastStyle } from "./style.css";
import { ToastPayload } from "./types";

export const Toast = (props: ToastPayload) => {
  const { message } = props;

  return (
    <div id="toast-container" className={toastStyle}>
      {message}
    </div>
  );
};
