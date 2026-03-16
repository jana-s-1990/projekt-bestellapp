let basket = [];

let restaurants = [
  {
    "name": "Burger House",
    "description": "The best of Burgers, Pizza, and Greens, all in one great place.",
    "rating": 4.1,
    "ratingCount": 317,
    "headerImg": "../assets/img/header-img-restaurant.jpg",
    "logoImg": "../assets/img/logo/logo-restaurant.png",

    "categories": [
      {
        "id": 1,
        "name": "Burger",
        "img": "../assets/img/icons/ico-burger.png",
        "dishes": [
          {
            "id": 1,
            "name": "Veggie mushroom black burger",
            "price": 16.90,
            "img": "../assets/img/dish-1.jpg",
            "description": "Chicken, Mozzarella, Gorgonzola, Fontina,  Parmigiano Reggiano",
          },
          {
            "id": 2,
            "name": "Gemischter Salat",
            "price": 6.5,
            "img": "../assets/img/dish-2.jpg",
            "description": "Frischer Salat mit Tomaten, Gurken und einer Sauce nach Wahl.",
          },
          {
            "id": 3,
            "name": "Wan Tan Suppe",
            "price": 5.9,
            "img": "../assets/img/dish-3.jpg",
            "description": "Klare Brühe mit gefüllten Wan Tan und Frühlingszwiebeln.",
          },
        ],
      },

      {
        "id": 2,
        "name": "Pizza",
        "img": "../assets/img/icons/ico-pizza.png",
        "dishes": [
          {
            "id": 4,
            "name": "Gebratene Nudeln mit Hähnchen",
            "price": 10.9,
            "img": "../assets/img/dish-4.jpg",
            "description": "Gebratene Eiernudeln mit Gemüse und saftigem Hähnchen.",
          },
          {
            "id": 5,
            "name": "Knusprige Ente süß-sauer",
            "price": 14.9,
            "img": "../assets/img/dish-5.jpg",
            "description": "Knusprige Ente mit süß-saurer Sauce, Gemüse und Reis.",
          },
          {
            "id": 6,
            "name": "Rind mit Brokkoli",
            "price": 13.5,
            "img": "../assets/img/dish-6.jpg",
            "description": "Zartes Rindfleisch mit Brokkoli in würziger Sojasauce.",
          },
        ],
      },

      {
        "id": 3,
        "name": "Salad",
        "img": "../assets/img/icons/ico-salat.png",
        "dishes": [
          {
            "id": 7,
            "name": "Gebackene Banane",
            "price": 4.9,
            "img": "../assets/img/dish-7.jpg",
            "description": "Knusprig gebackene Banane mit Honig und Sesam.",
          },
          {
            "id": 8,
            "name": "Lychee",
            "price": 3.9,
            "img": "../assets/img/dish-8.jpg",
            "description": "Süße Lychee-Früchte, gekühlt serviert.",
          },
        ],
      },

      {
        "id": 4,
        "name": "Getränke",
        "img": "https://placehold.co/2000x600",
        "dishes": [
          {
            "id": 9,
            "name": "Cola",
            "price": 2.5,
            "img": "../assets/img/dish-9.jpg",
            "description": "0,33l gekühlt serviert.",
          },
          {
            "id": 10,
            "name": "Mineralwasser",
            "price": 2.2,
            "img": "../assets/img/dish-10.jpg",
            "description": "0,33l sprudelnd oder still.",
          },
          {
            "id": 11,
            "name": "Jasmintee",
            "price": 2.8,
            "img": "../assets/img/dish-11.jpg",
            "description": "Traditioneller chinesischer Jasmintee.",
          },
        ],
      },
    ],
  },
];
