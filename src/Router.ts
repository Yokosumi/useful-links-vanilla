import { PageComponents } from "./pages/PageComponents";
import { PageIcons } from "./pages/PageIcons";
import { PageGenerators } from "./pages/PageGenerators";
import * as tools from "./tools";
import { PageConverter } from "./pages/PageConverter";

const pageNames = ["Components", "Icons", "Generators", "Converter"];

const currentPageIdCode = getSmartCurrentPageId();

export const getCurrentPage = () => {
  switch (currentPageIdCode) {
    case "":
    case "components":
      return PageComponents();
    case "icons":
      return PageIcons();
    case "generators":
      return PageGenerators();
    case "converter":
      return PageConverter();
    default:
      return "404 Error";
  }
};

export const getMenu = () => {
  const getMenuClass = (pageName: string) => {
    const pageIdCode = pageName.toLowerCase();
    if (pageIdCode === currentPageIdCode) {
      return ` class="active"`;
    } else {
      return "";
    }
  };

  return /*html*/ `
	<ul class="flex gap-2">
		${pageNames
      .map(
        (pageName) =>
          `<li><a href="${pageName.toLowerCase()}"${getMenuClass(
            pageName
          )}>${pageName}</a></li>`
      )
      .join("")}
	</ul>
`;
};

function getSmartCurrentPageId() {
  let currentPageIdCode = tools.getCurrentPageIdCode();
  currentPageIdCode =
    currentPageIdCode === "" ? pageNames[0].toLowerCase() : currentPageIdCode;
  return currentPageIdCode;
}
