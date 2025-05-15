import "@/src/styles/globals.css";
import { ToastProvider } from "@design/react-components-toast";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <Component {...pageProps} />;
    </ToastProvider>
  );
}
