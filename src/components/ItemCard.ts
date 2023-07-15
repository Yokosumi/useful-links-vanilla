import { IItemCard } from "../interfaces";

export const ItemCard = (item: IItemCard) => {
  return /*html*/ `
 <div class="card w-96 bg-neutral shadow-xl mt-3">
    <figure class="bg-white">
      <a href="${item.url}"><img src="../../public/img/${item.name}.png" alt="preview" /> </a>
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        ${item.name}
        <div class="badge badge-primary">${item.badge}</div>
      </h2>
      <p>
        ${item.description}
      </p>
      <div class="card-actions justify-end"></div>
    </div>
  </div>
    `;
};
