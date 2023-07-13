import { ItemCards } from "../components/ItemCards";
import icons from "../data/icons.json";

export const PageIcons = () => {
  return /*html*/ `
	${ItemCards(icons)}
`;
};
