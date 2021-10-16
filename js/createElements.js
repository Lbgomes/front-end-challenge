export default function createCards(
    id,
    image,
    name,
    description,
    oldPrice,
    price,
    installmentsCounts,
    installmentsValue
  ) {
    const card = document.createElement("div");
    card.setAttribute("class", "product");
    card.setAttribute("id", `${id}`);
  
    card.innerHTML = `
        <img class="product-image" src="http:${image}" alt="Product image">
            <div class="product-items">
                <h1 class="product-title">${name}</h1>
                <p class="product-description">${description}</p>
                <p class="product-oldPrice">De: ${oldPrice}</p>
                <p class="product-price">Por: ${price}</p>
                <p class="product-installments">ou ${installmentsCounts}x de R$${installmentsValue}</p>
                <button class="form-submit product-button" type="submit">Comprar</button>
            </div>
      `;
  
    return card;
  }
  