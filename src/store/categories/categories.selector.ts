import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CategoryMap } from "./categories.slice";

export const selectCategories = createSelector(
    (state: RootState) => state.categories.categories,
    (categories): CategoryMap => categories.reduce((acc, category) => {
        acc[category.title.toLowerCase()] = category.items;
        return acc;
    }, {} as CategoryMap)

);
