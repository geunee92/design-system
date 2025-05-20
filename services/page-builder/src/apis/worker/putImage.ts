// api/putImage.ts
import { workerInstance } from ".";

type Params = {
  file: File;
  fileName: string;
};

export const putImage = async ({ file, fileName }: Params): Promise<string> => {
  const uploadUrl = `/images/${fileName}`;

  try {
    // axios 인스턴스가 JSON 전송 기본일 수 있으므로 content-type 주의
    const response = await workerInstance.put(uploadUrl, file, {
      headers: {
        "Content-Type": file.type,
      },
    });

    // 업로드 후 바로 접근 가능한 URL을 반환
    return `${workerInstance.defaults.baseURL}${uploadUrl}`;
  } catch (error) {
    console.error("이미지 업로드 실패:", error);
    throw error;
  }
};
