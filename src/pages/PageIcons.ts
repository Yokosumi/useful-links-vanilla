import { ItemCards } from "../components/ItemCards";
import icons from "../data/icons.json";

export const PageIcons = () => {
  return /*html*/ `
  <section class="flex gap-5 p-3">
	${ItemCards(icons)}
  </section>
`;
};
