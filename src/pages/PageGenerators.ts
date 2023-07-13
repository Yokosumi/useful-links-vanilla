import { ItemCards } from "../components/ItemCards";
import generators from "../data/generators.json";

export const PageGenerators = () => {
  return /*html*/ `
	  <section class="flex gap-5 p-3">
	${ItemCards(generators)}
  </section>
`;
};
