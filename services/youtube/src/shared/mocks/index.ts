export const initMocking = async () => {
  if (typeof window === "undefined") {
    // node 환경이면 그냥 return (Next.js에서는 서버는 SSR에서 사용 안 하니)
    return;
  }

  const { worker } = await import("./browser");
  worker.start({ onUnhandledRequest: "bypass" });
};
