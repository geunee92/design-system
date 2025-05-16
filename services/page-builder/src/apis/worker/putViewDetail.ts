import { workerInstance } from ".";
import { getViewDetailPath } from "./getViewDetail";
import { ViewMetadata } from "./type";

type ViewDetailRequestData = {
  value: string;
  metadata: ViewMetadata;
};

type Params = {
  viewId: string;
  data: ViewDetailRequestData;
};

export const putViewDetail = async ({ viewId, data }: Params) => {
  const response = await workerInstance.put(getViewDetailPath(viewId), data);
};
