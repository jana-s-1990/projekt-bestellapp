function headerRestaurantTemplate(restaurant){
    return /*html*/`
        <header>
            <figure class="header-restaurant-img">
                <img src="${restaurant.headerImg}" alt="${restaurant.name}">
            </figure>
            <figure class="header-restaurant-logo">
                <img src="${restaurant.logoImg}" alt="${restaurant.name} Logo">
            </figure>
        </header>
        <div class="content content-header-restaurant">
            <div class="content-header-name-rating display-flex flex-center flex-mobile-column flex-desktop-row-reserve">
                <p class="header-rating"><i class="fa-solid fa-star"></i><strong>${restaurant.rating.toFixed(1).replace(".", ",")}</strong> (${restaurant.ratingCount}) </p>
                <h1>${restaurant.name}</h1>
            </div>
            <p class="content-header-restaurant-description">${restaurant.description}</p>
        </div>
    `
}

function categorieListTemplate(category){
    return /*html*/`
        <p><a href="#${category.name}" title="${category.name}">${category.name}</a></p>
    `
}

function categorySectionTemplate(category){
    let dishesHTML = "";

    for (let i = 0; i < category.dishes.length; i++) {
        const dish = category.dishes[i];
        dishesHTML += dishesTemplate(dish);
        console.log(dish);
        console.log(dish.img);
    }

    return /*html*/`
        <section class="category">
            <div class="category-wrapper display-flex flex-mobile-column">
                <figure class="caregory-icon">
                    <img src="${category.img}" alt="${category.name}">
                </figure>
                <div class="category-name-bg">
                    <h2 id="${category.name}">${category.name}</h2>
                </div>
            </div>
            <div class="category-dishes content display-flex">
                ${dishesHTML}
            </div>
        </section>
    `
}

function dishesTemplate(dish){
    return /*html*/`
        <div class="category-dish display-flex flex-mobile-column">
            <figure>
                <img src="${dish.img}" alt="${dish.name}">
            </figure>
            <h3>${dish.name}</h3>
            <p>${dish.description}</p>
            <div class="category-price-addBasket-wrapper display-flex">
                <p>${dish.price.toFixed(2).replace(".", ",")}€</p>
                <button onclick="addToBasket(${dish.id})"><i class="fa-solid fa-plus"></i></button>
            </div>
        </div>
    `
}

function basketEmptyTempate(){
    return /*html*/`
        <i class="fa-solid fa-basket-shopping"></i>
        <h3>Fülle deinen Warenkorb</h3>
        <p>Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</p>
    `
}

function basketTemplate(basketDish){
    return /*html*/`
        <div class="cart-item">
            <p>
                <span>${basketDish.amount}x</span>
                <span>${basketDish.name}</span>
                <span>${(basketDish.price * basketDish.amount).toFixed(2).replace(".", ",")} €</span>
                <button onclick="subDish(${basketDish.id})"><i class="fa-solid fa-minus"></i></button>
                <button onclick="plusDish(${basketDish.id})"><i class="fa-solid fa-plus"></i></button>
            </p>
    </div>
    `
}