function init(){
    renderRestaurantHeader();
    renderRestaurantCategories();
};

function renderRestaurantHeader(){
    let contentHeaderContainerRef = document.getElementById("content-header");
    contentHeaderContainerRef.innerHTML = "";

    for (let index = 0; index < restaurants.length; index++) {
        const restaurant = restaurants[index];
        contentHeaderContainerRef.innerHTML += headerRestaurantTemplate(restaurant);
    }
}

function renderRestaurantCategories(){
    let contentCategoriesContainerRef = document.getElementById("content-categories");
    contentCategoriesContainerRef.innerHTML = "";

    let categorieDishesContainerRef = document.getElementById("categorie-dishes");
    categorieDishesContainerRef.innerHTML = "";

    for (let restaurantIndex = 0; restaurantIndex < restaurants.length; restaurantIndex++) {
        const categories = restaurants[restaurantIndex].categories;

        for (let categoriesIndex = 0; categoriesIndex < categories.length; categoriesIndex++) {
            const caregory = categories[categoriesIndex];

            contentCategoriesContainerRef.innerHTML += categorieListTemplate(caregory);
            categorieDishesContainerRef.innerHTML += categorySectionTemplate(caregory);
        }
    }
}

function renderBasket(){
    let basketContainerRef = document.getElementById("cart-items");
    basketContainerRef.innerHTML = "";

    for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
        const basketDish = basket[indexBasket];
        basketContainerRef.innerHTML += basketTemplate(basketDish);
        
    }

    basket.forEach(item => {
        basketRef.innerHTML += `
            <div class="cart-item">
                <span>${item.amount}x</span>
                <span>${item.name}</span>
                <span>${(item.price * item.amount).toFixed(2).replace(".", ",")} €</span>
            </div>
        `;
    });

}

function addToBasket(dishId) {
    let dish = findDishById(dishId);
    let basketItem = basket.find(item => item.id === dishId);

    if (basketItem) {
        basketItem.amount++;
    } else {
        basket.push({
            id: dish.id,
            name: dish.name,
            price: dish.price,
            amount: 1
        });
    }

    renderBasket();
}

function findDishById(dishId){
    for (let i = 0; i < restaurants.length; i++) {
        const restaurant = restaurants[i];

        for (let j = 0; j < restaurant.categories.length; j++) {
            const caregory = restaurant.categories[j];
            let dish = caregory.dishes.find(d => d.id === dishId);

            if(dish){
                return dish;
            }
        }
    }
}