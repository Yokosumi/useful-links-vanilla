import { IItemCard } from "../interfaces";

export const ItemCard = (icon: IItemCard) => {
  return /*html*/ `
 <div class="card w-96 bg-neutral shadow-xl mt-3">
    <figure class="bg-white">
      <a href="${icon.url}"><img src="${icon.image}" alt="preview" /> </a>
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        ${icon.name}
        <div class="badge badge-primary">${icon.badge}</div>
      </h2>
      <p>
        ${icon.description}
      </p>
      <div class="card-actions justify-end"></div>
    </div>
  </div>
    `;
};
