import { getAPIKey } from "../api/auth.js";
import { describe, expect, test } from "vitest";

const person = {
  isActive: true,
  age: 32,
};

const headers = {
  authorization: "ApiKey ABC123",
};

describe("person", () => {
  test("person is defined", () => {
    expect(person).toBeDefined();
  });

  test("is active", () => {
    expect(person.isActive).toBeTruthy();
  });
});

describe("auth", () => {
  test("return ABC123", () => {
    expect(getAPIKey(headers)).toBe("ABC123");
  });
});
