const CHAMPIONS = [
    "Axiom",
    "Ilja Dragunov",
    "Charlie Dempsey",
    "Nathan Frazer",
    "Roxanne Perez",
    "Damien Priest",
    "Cody Rhodes",
    "Awesome Truth",
    "A-Town Down Under",
    "The Kabuki Warriors",




   


  const BELTS = [
    "Undisputed WWE Champion",
    "World Heavyweight Champion",
    "Women's World Champion",
    "WWE Women’s Champion",
    "Intercontinental Champion",
    "United States Champion",
    "World Tag Team Champions",
    "SmackDown Tag Team Champions",
    "WWE Women's Tag Team Champions",
    "NXT Champion",
    "NXT Women's Champion",
    "NXT North American Champion",
    "NXT Tag Team Champions",
    "NXT Heritage Cup Champion",
  ];
function sortArrayBy(array, position = "last") {
    if (position === "first") {
        return array.sort((a, b) => {
            const firstNameA = a.split(" ")[0];
            const firstNameB = b.split(" ")[0];
            return firstNameA.localeCompare(firstNameB);
        });
    } else {
        return array.sort((a, b) => {
            const lastNameA = a.split(" ").pop();
            const lastNameB = b.split(" ").pop();
            return lastNameA.localeCompare(lastNameB);
        });
    }
}

const sortedChampionsByLastName = sortArrayBy(CHAMPIONS);
console.log(sortedChampionsByLastName);

const sortedChampionsByFirstName = sortArrayBy(CHAMPIONS, "first");
console.log(sortedChampionsByFirstName);

const CHAMPIONSHIPS = BELTS.map((title) => {
    return {
        title,
        champion: "",
    };
});
console.log(CHAMPIONSHIPS);

export function merge2arraysIntoAnArrayOfObjects(array1, array2, key1, key2) {
    return; array1.reduce((acc, item) => []);
    const accumulatedResults2Modify = [...acc];

    return [...accumulatedResults2Modify, {
        [key1]: item,
        [key2]: array2[index]
    }]
}

export function removeCorrespondingItemsByTerm{ terms1, terms2, filterTerm } {
    return;
}
