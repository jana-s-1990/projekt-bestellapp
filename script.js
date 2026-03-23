let orderFeedbackTimeout;

function init() {
  setTitlePage();
  loadOrder();
  renderRestaurantHeader();
  renderRestaurantCategories();
  renderBasket();
}

function setTitlePage(){
    document.title = "Bestell App -" + " " + restaurants[0].name;
}

function renderRestaurantHeader() {
  let contentHeaderContainerRef = document.getElementById("content-header");
  contentHeaderContainerRef.innerHTML = "";

  for (let index = 0; index < restaurants.length; index++) {
    const restaurant = restaurants[index];
    contentHeaderContainerRef.innerHTML += headerRestaurantTemplate(restaurant);
  }
}

function renderRestaurantCategories() {
  let categorieDishesContainerRef = document.getElementById("categorie-dishes");
  categorieDishesContainerRef.innerHTML = "";

  for (let restaurantIndex = 0; restaurantIndex < restaurants.length; restaurantIndex++) {
    const categories = restaurants[restaurantIndex].categories;

    for (let categoriesIndex = 0; categoriesIndex < categories.length; categoriesIndex++) {
      const caregory = categories[categoriesIndex];

      categorieDishesContainerRef.innerHTML += categorySectionTemplate(caregory);
    }
  }
}

function renderBasket() {
  renderBasketContent("basket-items", "total-amount");
  renderBasketContent("mobile-basket-items", "mobile-total-amount");
  updateMobileBasketTotal();
}

function renderBasketContent(itemsContainerId, totalContainerId) {
  let basketContainerRef = document.getElementById(itemsContainerId);
  let basketTotalAmountContainerRef = document.getElementById(totalContainerId);
  let totalamount = calculateTotalAmount();
  let deliveryPrice = 4.99;

  basketContainerRef.innerHTML = "";
  basketTotalAmountContainerRef.innerHTML = "";

  if (basket.length === 0) {
    basketContainerRef.innerHTML = basketEmptyTempate();
    return;
  }

  for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
    const basketDish = basket[indexBasket];
    basketContainerRef.innerHTML += basketTemplate(basketDish);
  }

  basketTotalAmountContainerRef.innerHTML = basketTotalAmountTemplate(totalamount, deliveryPrice);
}

function updateMobileBasketTotal() {
  const totalRef = document.getElementById("mobile-basket-total");
  const totalamount = calculateTotalAmount();
  const deliveryPrice = 4.99;
  const finalPrice = totalamount + deliveryPrice;

  totalRef.textContent = finalPrice.toFixed(2).replace(".", ",") + " €";
}

function calculateTotalAmount() {
  let totalamount = 0;

  for (let index = 0; index < basket.length; index++) {
    const bastektItem = basket[index];
    totalamount += bastektItem.price * bastektItem.amount;
  }

  return totalamount;
}

function addToBasket(dishId) {
  let dish = findDishById(dishId);
  let basketItem = basket.find((item) => item.id === dishId);

  if (basketItem) {
    basketItem.amount++;
  } else {
    basket.push({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      amount: 1,
    });
  }
  saveOrder();
  renderBasket();
  updateDishButtons();
}

function openMobileBasket(){
  showMobileBasket();
}

function showMobileBasket() {
  const dialog = document.getElementById('mobile-basket-container');

  if (!dialog.open) {
    dialog.showModal();
  }

  requestAnimationFrame(() => {
    dialog.classList.remove('closing');
    dialog.classList.add('show');
  });
}

function closeMobileBasket() {
  const dialog = document.getElementById('mobile-basket-container');

  dialog.classList.remove('show');
  dialog.classList.add('closing');

  setTimeout(() => {
    dialog.close();
    dialog.classList.remove('closing');
  }, 350);
}

function updateDishButtons() {
  for (let i = 0; i < restaurants.length; i++) {
    const restaurant = restaurants[i];

    for (let j = 0; j < restaurant.categories.length; j++) {
      const category = restaurant.categories[j];

      for (let k = 0; k < category.dishes.length; k++) {
        const dish = category.dishes[k];
        const dishBtnContainerRef = document.getElementById(`dish-btn-${dish.id}`);

        if (dishBtnContainerRef) {
          dishBtnContainerRef.innerHTML = updateDishButton(dish.id);
        }
      }
    }
  }
}

function updateDishButton(dishId){
    const basketItem = basket.find((item) => item.id ==dishId);
    if (basketItem){
      return /*html*/`
        <button class="dish-button dish-added-button" onclick="addToBasket(${dishId})">Added ${basketItem.amount}</button>
      `
    } else{
      return /*html*/`
        <button class="dish-button" onclick="addToBasket(${dishId})">Add to basket</button>
      `;
    }
}

function isDishInBasket(dishId) {
  return basket.some((item) => item.id === dishId);
}

function findDishById(dishId) {
  for (let i = 0; i < restaurants.length; i++) {
    const restaurant = restaurants[i];

    for (let j = 0; j < restaurant.categories.length; j++) {
      const caregory = restaurant.categories[j];
      let dish = caregory.dishes.find((d) => d.id === dishId);

      if (dish) {
        return dish;
      }
    }
  }
}

function subDish(basketDishID) {
  let index = basket.findIndex((d) => d.id === basketDishID);
  basket[index].amount--;

  if (basket[index].amount <= 0) {
    basket.splice(index, 1);
  }

  saveOrder();
  renderBasket();
  updateDishButtons();
}

function plusDish(basketDishID) {
  let baskekDish = basket.find((d) => d.id === basketDishID);
  baskekDish.amount++;

  saveOrder();
  renderBasket();
  updateDishButtons();
}

function buyNow() {
  const mobileDialog = document.getElementById("mobile-basket-container");

  if (basket.length === 0) return;

  basket = [];
  saveOrder();
  renderBasket();
  updateDishButtons();

  if (mobileDialog.open) {
    closeMobileBasket();
    
    setTimeout(() => {
      showOrderFeedback();
    }, 350);
  } else {
    showOrderFeedback();
  }
}

function showOrderFeedback() {
  const dialog = document.getElementById("order-feedback");

  if (!dialog.open) {
    dialog.showModal();
  }

  requestAnimationFrame(() => {
    dialog.classList.add("show");
  });

  clearTimeout(orderFeedbackTimeout);
  orderFeedbackTimeout = setTimeout(() => {
    closeOrderFeedback();
  }, 2500);
}

function closeOrderFeedback() {
  const dialog = document.getElementById("order-feedback");

  dialog.classList.remove("show");
  dialog.classList.add("closing");

  clearTimeout(orderFeedbackTimeout);

  setTimeout(() => {
    dialog.close();
    dialog.classList.remove("closing");
  }, 300);
}