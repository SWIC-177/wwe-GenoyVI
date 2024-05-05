import { describe, expect, test } from "vitest";
import {
  getLastName,
  merge2arraysIntoAnArrayOfObjects,
  sortedChampionsByLastName,
} from "./lib";

describe("getLastName", () => {
  test("returns the last name from a full name", () => {
    // Arrange
    const fullName = "John Doe";
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

test("merge2arraysIntoAnArrayOfObjects", () => {
  // Arrange
  const array1 = ["a", "b", "c"];
  const array2 = ["1", "2", "3"];
  const key1 = "title";
  const key2 = "champion";

  const expected = [
    { title: "title1", champion: "champion1" },
    { title: "title2", champion: "champion2" },
    { title: "title3", champion: "champion3" },
  ];

  // Act
  const result = merge2arraysIntoAnArrayOfObjects(array1, array2, key1, key2);

  // Assert
  expect(result).toEqual(expected);
});
