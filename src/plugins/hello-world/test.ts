import { helloWorld } from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.114.0/testing/asserts.ts";

Deno.test("Test Hello World", () => {
  const input = "Hello World";
  const output = helloWorld(input);
  assertEquals(input, output);
});
