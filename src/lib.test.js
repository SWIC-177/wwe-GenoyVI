import { describe, expect, test } from "vitest";
import { getLastName, sortedChampionsByLastName } from "./lib.js";

describe("getLastName", () => {
  test("returns the last name from a full name", () => {
    // Arrange
    const fullName = "John Cena";
    const expected = "Doe";

    // Act
    const result = getLastName(fullName);

    // Assert
    expect(result).toBe(expected);
  });
});

test("sortedChampionsByLastName", () => {
  // Arrange
  const expected = [
    "Awesome Truth",
    "Cody Rhodes",
    "The Kabuki Warriors",
    "Damien Priest",
    "Nathan Frazer",
    "Roxanne Perez",
    "A-Town Down Under",
  ];

  // Act
  const result = sortedChampionsByLastName;

  // Assert
  expect(result).toEqual(expected);
});
