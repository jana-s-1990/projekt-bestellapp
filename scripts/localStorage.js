function saveOrder() {
  localStorage.setItem("restaurants", JSON.stringify(restaurants));
  localStorage.setItem("basket", JSON.stringify(basket));
}

function loadOrder() {
  let restaurantsFromStorage = JSON.parse(localStorage.getItem("restaurants"));
  let basketFromStorage = JSON.parse(localStorage.getItem("basket"));
  if (restaurantsFromStorage !== null ) {
    restaurants = restaurantsFromStorage;
  }
  if (basketFromStorage !== null ) {
    basket = basketFromStorage;
  }

}