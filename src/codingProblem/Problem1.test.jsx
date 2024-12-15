import { describe, it, expect } from "vitest";

const filterFruits = (data, query) => {
  return data.filter((fruit) =>
    fruit.toLowerCase().includes(query.toLowerCase())
  );
};

describe("filterFruits function", () => {
  it("returns matching fruits", () => {
    const data = ["apple", "banana", "orange"];
    expect(filterFruits(data, "ap")).toEqual(["apple"]);
  });

  it("returns an empty array when no matches are found", () => {
    const data = ["apple", "banana", "orange"];
    expect(filterFruits(data, "zzz")).toEqual([]);
  });

  it("returns all fruits when query is empty", () => {
    const data = ["apple", "banana", "orange"];
    expect(filterFruits(data, "")).toEqual(data);
  });
});
