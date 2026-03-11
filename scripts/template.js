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

function caregoryDishesHeaderTemplate(category){
    return /*html*/`
        <figure>
            <img src="${category.img}" alt="${category.name}">
        </figure>
        <h2 id="${category.name}">${category.name}</h2>
    `
}

function dishesTemplate(dish){
    return /*html*/`
        <p>${dish.name}</p>
        <p>${dish.price}</p>
        <p>${dish.description}</p>
    `
}