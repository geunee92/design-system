import { JsonEditor } from "@/src/components/Common/Editor/Json";
import { DesktopFirstLayout } from "@/src/components/Common/Layouts/DesktopFirstLayout";
import { DesktopFirstBody } from "@/src/components/Common/Layouts/DesktopFirstLayout/Body";
import { DesktopFirstNav } from "@/src/components/Common/Layouts/DesktopFirstLayout/Nav";
import { Button } from "@design/react-components-button";
import { formatObjectToJson } from "@/src/utils/jsonEditor";
import { ViewSliceSchemaSnippet } from "@/src/utils/jsonEditor/ViewSliceSchemaSnippet";
import { useState } from "react";
import ShortUniqueId from "short-unique-id";
import { previewStorage } from "@/src/utils/storage";
import { useToast } from "@design/react-components-toast";
import { useViewSchemaValidation } from "@/src/hooks/useViewSchemaValidation";
import { DesktopFirstSideNav } from "@/src/components/Common/Layouts/DesktopFirstLayout/SideNav";
import { JsonPresetList } from "@/src/components/Features/EditorNewJsonPage/JsonPresetList";
import { putViewDetail } from "@/src/apis/worker/putViewDetail";
import { Box } from "@design/react-components-layout";

const EditorNewJsonPage: React.FC = () => {
  const { randomUUID } = new ShortUniqueId({ length: 10 });

  const [viewId] = useState(randomUUID());

  const { toast } = useToast();

  const [schema, setSchema] = useState(
    formatObjectToJson(ViewSliceSchemaSnippet.init),
  );

  const { validateViewSchema, handleEditorValidation } =
    useViewSchemaValidation();

  const handleReset = () => {
    setSchema(formatObjectToJson(ViewSliceSchemaSnippet.init));
  };

  const handlePreview = () => {
    validateViewSchema({
      viewSchema: schema,
      onSuccess: () => {
        previewStorage.set(viewId, schema);

        window.open(`/preview/${viewId}`, "_blank");
      },

      onError: ({ message }) => {
        toast({
          payload: {
            message,
          },
        });
      },
    });
  };

  const handlePublish = () => {
    validateViewSchema({
      viewSchema: schema,
      onSuccess: async () => {
        const objectifiedSchema = JSON.parse(schema);
        const convertedSlug = objectifiedSchema.slug.split(" ").join("-");

        const slug = `${convertedSlug}-${viewId}`;

        try {
          await putViewDetail({
            viewId,
            data: {
              value: schema,
              metadata: {
                title: objectifiedSchema.slug,
                createAt: new Date().toISOString(),
              },
            },
          });

          window.open(`/view/${slug}`, "_blank");
        } catch (error) {
          toast({
            payload: {
              // @ts-ignore
              message: `[Fetch Error] ${error.message}`,
            },
          });
        }
      },
      onError: ({ message }) => {
        toast({
          payload: {
            message,
          },
        });
      },
    });
  };

  return (
    <DesktopFirstLayout>
      <DesktopFirstNav gap={8}>
        <Button variant="outline" size="md" color="red" onClick={handleReset}>
          초기화
        </Button>

        <Button
          variant="outline"
          size="md"
          color="gray"
          onClick={handlePreview}
        >
          미리보기
        </Button>

        <Button size="md" color="green" onClick={handlePublish}>
          배포하기
        </Button>
      </DesktopFirstNav>

      <DesktopFirstBody>
        <DesktopFirstSideNav>
          <JsonPresetList
            validateViewSchema={validateViewSchema}
            schema={schema}
            setSchema={setSchema}
          />
        </DesktopFirstSideNav>

        <Box className="w-full min-h-screen relative top-0 ml-[280px]">
          <JsonEditor
            value={schema}
            onChange={(value) => setSchema(value || "")}
            onValidate={handleEditorValidation}
          />
        </Box>
      </DesktopFirstBody>
    </DesktopFirstLayout>
  );
};

export default EditorNewJsonPage;
