import { vars } from "@design/themes";
import { CDN_BASE_URL } from "../constants";
import { MobileFirstLayout } from "../components/view/MobileFirstLayout";

const PlaygroundPage = () => {
  return (
    <MobileFirstLayout>
      <h1>{vars.colors.$static.light.blue[500]}</h1>

      <img src={`${CDN_BASE_URL}/test/hero_mobile.webp`} alt="" />
    </MobileFirstLayout>
  );
};

export default PlaygroundPage;
