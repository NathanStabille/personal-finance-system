import { Category } from "../types/Category";

export const categories: Category = {
  food: { title: "Food", color: "#243FBB", expense: true },
  rent: { title: "Rent", color: "#6D41B0", expense: true },
  health: { title: "Health", color: "#BB2424", expense: true },
  entertainment: { title: "Entertaiment", color: "#B44FAA", expense: true },
  work: { title: "Work", color: "#4DAD58", expense: false },
  other: { title: "Others", color: "#747474", expense: true },
};
