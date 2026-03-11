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
    let headerCategoriesHeaderContainerRef = document.getElementById("categorie-dishes-header");
    headerCategoriesHeaderContainerRef.innerHTML = "";
    let categorieDishesContainerRef = document.getElementById("categorie-dishes");
    categorieDishesContainerRef.innerHTML = "";

    for (let restaurantIndex = 0; restaurantIndex < restaurants.length; restaurantIndex++) {
        const categories = restaurants[restaurantIndex].categories;

        for (let categoriesIndex = 0; categoriesIndex < categories.length; categoriesIndex++) {
            const caregory = categories[categoriesIndex];
            contentCategoriesContainerRef.innerHTML += categorieListTemplate(caregory);
            headerCategoriesHeaderContainerRef.innerHTML += caregoryDishesHeaderTemplate(caregory);

            for (let indexDishes = 0; indexDishes < caregory.dishes.length; indexDishes++) {
                const dish = caregory.dishes[indexDishes];
                categorieDishesContainerRef.innerHTML += dishesTemplate(dish);
            }
        }
    }
}