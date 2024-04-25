import { BELTS } from "./data.js";

const beltsWithNXT = BELTS.filter(
    (belt) => belt !== "NXT Champion",
);

console.log(beltsWithNXT);