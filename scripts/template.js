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
            <h1>${restaurant.name}</h1>
            <p class="header-rating">Bewertung (${restaurant.rating} von 5 Sternen)</p>
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
    }

    return /*html*/`
        <section class="category">
            <figure>
                <img src="${category.img}" alt="${category.name}">
            </figure>

            <h2 id="${category.name}">${category.name}</h2>

            <div class="category-dishes">
                ${dishesHTML}
            </div>
        </section>
    `
}

function dishesTemplate(dish){
    return /*html*/`
        <div class="category-dish">
            <p>${dish.name}</p>
            <p>${dish.price.toFixed(2).replace(".", ",")}</p>
            <p>${dish.description}</p>
            <button onclick="addToBasket(${dish.id})"><i class="fa-solid fa-plus"></i></button>
        </div>
    `
}

function basketTemplate(basketDish){
    return /*html*/`
        <div class="cart-item">
            <p>
                <span>${basketDish.amount}x</span>
                <span>${basketDish.name}</span>
                <span>${(basketDish.price * basketDish.amount).toFixed(2).replace(".", ",")} €</span>
                <button onclick="subDish()"><i class="fa-solid fa-minus"></i></button>
                <button onclick="plusDish()"><i class="fa-solid fa-plus"></i></button>
            </p>
    </div>
    `
}