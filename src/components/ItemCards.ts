// @ts-nocheck
import { ItemCard } from "./ItemCard";

export const ItemCards = (cardItems) => {
  return /*html*/ `
    ${cardItems
      .map((item) => {
        return ItemCard(item);
      })
      .join("")}
    `;
};
