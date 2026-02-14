import { describe, expect, test } from "vitest";
import { cn } from "./utils";

describe("cn utility", () => {
  test("merges class names correctly", () => {
    expect(cn("c1", "c2")).toBe("c1 c2");
  });

  test("handles conditional classes", () => {
    expect(cn("c1", true && "c2", false && "c3")).toBe("c1 c2");
  });

  test("handles arrays", () => {
    expect(cn(["c1", "c2"])).toBe("c1 c2");
  });

  test("handles objects", () => {
    expect(cn({ c1: true, c2: false, c3: true })).toBe("c1 c3");
  });

  test("merges tailwind classes correctly", () => {
    expect(cn("px-2 py-1", "p-4")).toBe("p-4");
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
  });

  test("handles mixed inputs", () => {
    expect(cn("c1", ["c2", { c3: true }])).toBe("c1 c2 c3");
  });

  test("handles undefined and null", () => {
    expect(cn("c1", undefined, null)).toBe("c1");
  });

  test("handles extra whitespace", () => {
    expect(cn("  c1  ", "c2")).toBe("c1 c2");
  });
});
