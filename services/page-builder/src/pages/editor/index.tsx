import { DesktopFirstLayout } from "@/src/components/Common/Layouts/DesktopFirstLayout";
import { DesktopFirstBody } from "@/src/components/Common/Layouts/DesktopFirstLayout/Body";
import { DesktopFirstNav } from "@/src/components/Common/Layouts/DesktopFirstLayout/Nav";
import { Button } from "@design/react-components-button";
import Link from "next/link";
import {
  ViewListResponseData,
  getViewList,
} from "@/src/apis/worker/getViewList";
import { ViewList } from "@/src/components/Features/EditorPage/ViewList";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

const EditorPage = ({
  keys,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <DesktopFirstLayout>
      <DesktopFirstNav>
        <Link href="/editor/new">
          <Button size="md" color="green">
            페이지 만들기
          </Button>
        </Link>
      </DesktopFirstNav>

      <DesktopFirstBody justify="center" background="gray">
        <ViewList viewList={keys} />
      </DesktopFirstBody>
    </DesktopFirstLayout>
  );
};

export const getServerSideProps: GetServerSideProps<
  ViewListResponseData
> = async () => {
  const response = await getViewList();

  return { props: response };
};

export default EditorPage;
