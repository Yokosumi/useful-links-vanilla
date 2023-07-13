import "./main.css";
import { getMenu, getCurrentPage } from "./Router";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /* html */ `
<header class="bg-primary p-2">
	<nav>
		${getMenu()}
	</nav>
</header>
<main>
	${getCurrentPage()}
</main>
`;
