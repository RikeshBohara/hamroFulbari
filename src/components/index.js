import {addToCart} from "../utils.js";

let isLoggedIn = false;
fetch("/public/data.json")
    .then((response) => response.json())
    .then((data) => {
        isLoggedIn = checkLoggedIn();
        renderPlants(data);
    })

const checkLoggedIn = () => {
    return window.localStorage.getItem("isLoggedIn")
}

const renderPlant = (plant) => {
    const plantItemContainer = document.createElement("div");
    plantItemContainer.setAttribute("key", plant.id);
    plantItemContainer.className = "card gap-6 w-60 py-4 px-8 items-start border border-primary bg-base-100 hover:shadow-xl rounded-none bg-transparent transition-all duration-300 cursor-pointer";

    const figure = document.createElement('figure');
    const image = document.createElement('img');
    image.className = "h-44 border-primary"
    image.src = `/public${plant.imgUrl}`;
    image.alt = "Shoes";

    figure.appendChild(image);
    plantItemContainer.appendChild(figure);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body p-0";
    plantItemContainer.appendChild(cardBody)

    const cardTitle = document.createElement("h2");
    cardTitle.className = "card-title";
    cardTitle.innerHTML = plant.name;
    cardBody.appendChild(cardTitle);

    const price = document.createElement("p");
    price.innerHTML = plant.price;
    cardBody.appendChild(price);

    const cardActions = renderActions(plant)
    cardBody.appendChild(cardActions);

    return plantItemContainer;
}

const renderPlants = (plantsData) => {
    const plantsContainer = document.querySelector("#plants-container");

    for (const plant of plantsData) {
        const plantItem = renderPlant(plant);
        plantsContainer.appendChild(plantItem);
    }
}

const renderActions = (plant) => {
    const cardActions = document.createElement("div");
    cardActions.className = "card-actions justify-start";

    if (isLoggedIn) {
        const button = document.createElement("button");
        button.addEventListener("click", handleAdd(plant))
        button.className = "btn btn-primary w-40 bg-primary border-primary hover:bg-primary/80 hover:border-primary/80";
        button.innerHTML = "Add to Cart";

        cardActions.appendChild(button);
    }

    const details = document.createElement('a');
    details.setAttribute("href", `/details?id=${plant.id}`);
    details.className = "btn w-40";
    details.innerText = "View Details";

    cardActions.appendChild(details);

    return cardActions;
}

const handleAdd = (data) => {
    addToCart(data);
    alert("Successfully Added Element.");
}