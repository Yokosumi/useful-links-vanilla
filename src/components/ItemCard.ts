export const ItemCard = () => {
  return /*html*/ `
          <div class="card w-96 bg-base-100 shadow-xl mt-3">
    <figure class="bg-white">
      <a href="jasonData[0].url"><img src="jasonData[0].image" alt="preview" /> </a>
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ data }}
        {{ jasonData[0].name }}
        <div class="badge badge-secondary">{{ jasonData[0].firstBadge }}</div>
        <div class="badge badge-primary">{{ jasonData[0].secondBadge }}</div>
      </h2>
      <p>
        {{ jasonData[0].description }}
      </p>
      <div class="card-actions justify-end"></div>
    </div>
  </div>
    `;
};
