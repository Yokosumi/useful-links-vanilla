export const ItemCard = () => {
  return /*html*/ `
          <div class="card w-96 bg-base-100 shadow-xl mt-3">
    <figure class="bg-white">
      <a href="jasonData[0].url"><img src="jasonData[0].image" alt="preview" /> </a>
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        <div class="badge badge-secondary"></div>
        <div class="badge badge-primary"></div>
      </h2>
      <p>
      </p>
      <div class="card-actions justify-end"></div>
    </div>
  </div>
    `;
};
