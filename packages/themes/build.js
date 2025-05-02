import run from "@design/esbuild-config";
import pkg from "./package.json" with { type: "json" };

run({
  pkg,
});
