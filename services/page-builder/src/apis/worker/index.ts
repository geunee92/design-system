import { initFetchInstance } from "../instance";

export const WORKER_BASE_PATH = "/api/views";
export const WORKER_BASE_URL = "https://design-front.geunee92.workers.dev";

export const workerInstance = initFetchInstance({
  baseURL: WORKER_BASE_URL,
});
