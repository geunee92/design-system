import "@testing-library/jest-dom";

import { cleanup } from "@testing-library/react";
import { beforeAll, beforeEach, afterEach, afterAll, vi } from "vitest";

import {
  setupIntersectionMocking,
  resetIntersectionMocking,
} from "react-intersection-observer/test-utils";
import { server } from "./src/shared/mocks/server";
import { MockNextNavigation } from "./src/shared/utils/test/mockNextNavigation";

vi.mock("next/navigation", () => MockNextNavigation);

beforeAll(() => {
  server.listen();
});

beforeEach(() => {
  setupIntersectionMocking(vi.fn);
});

afterEach(() => {
  cleanup();
  resetIntersectionMocking();
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
