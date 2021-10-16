import GetData from "./getData.js";
import CreateElements from "./createElements.js";

const container = document.querySelector(".products");

let apiURL =
  "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1";

export default async function loadProducts(url, container) {
  const { products, nextPage } = await GetData(url);

  const cards = products.map((element) =>
    CreateElements(
      element.id,
      element.image,
      element.name,
      element.description,
      Number(element.oldPrice).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      }),
      Number(element.price).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      }),
      element.installments.count,
      Number(element.installments.value).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })
    )
  );

  cards.forEach((card) => {
    container.appendChild(card);
  });

  return (apiURL = `https://${nextPage}`);
}

loadProducts(apiURL, container);

const buttonShowMore = document.querySelector(".more-products");

buttonShowMore.addEventListener("click", async () => {
  await loadProducts(apiURL, container);
});
