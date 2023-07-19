import {checkLoggedIn, handleAdd} from "../utils/index.js";

let isLoggedIn = false;

fetch("/public/data.json")
    .then((res) => res.json())
    .then((data) => {
        isLoggedIn = checkLoggedIn();
        getActiveDetail(data)
    })

const getActiveDetail = (plants) => {
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id');
    const detail = plants.filter((plant) => plant.id === Number(id));
    renderDetail(detail[0])
}

const renderDetail = (detail) => {
    const detailContainer = document.querySelector("#detail-container");

    const image = document.createElement("img");
    image.className = "border border-primary aspect-square w-full";
    image.src = `/public${detail.imgUrl}`;
    image.alt = detail.name;
    detailContainer.appendChild(image);

    const details = document.createElement("div");
    details.className = "w-full";

    const name = document.createElement("h2");
    name.className = "text-3xl text-primary";
    name.innerText = detail.name;
    details.appendChild(name);

    const price = document.createElement("h3");
    price.className = "text-2xl text-primary mt-4";
    price.innerText = `Rs. ${detail.price}`;
    details.appendChild(price);

    const action = detailsAction(detail);
    details.appendChild(action);

    const description = document.createElement("h3");
    description.className = "text-2xl text-primary mt-8 pb-4";
    description.innerText = "DESCRIPTION";
    details.appendChild(description);

    const descriptionContent = document.createElement("div");
    descriptionContent.className = "space-y-6";
    descriptionContent.innerHTML = `<p class="text-xl">
                    Foxtail asparagus ferns are uncommon, beautiful, evergreen
                    flowering plants that can be used in a variety of ways both
                    inside and outside the home. Asparagus ferns with a foxtail
                    have an odd, symmetrical appearance. These fern-like plants
                    feature arching plumes of delicate-looking, closely packed
                    leaves that resemble needles.
                </p>
                <p class="text-xl">
                    Sunlight: Indoor indirect bright light
                </p>
                <p class="text-xl">
                    Potting Mix: Cocopeat, Soil, Compost manure
                </p>
                <p class="text-xl">
                    Watering: Water when the top 2 inches of soil feels dry to
                    touch
                </p>
                <p class="text-xl">
                    Fertilizer: During the main growing season feeds the plant
                    with organic fertilizer once a month.
                </p>
                <p class="text-xl">
                    Re-potting: When a plant outgrows in the current pot, re-pot
                    in 2 inches greater than the existing pot with fresh potting
                    soil and some fertilizer.
                </p>`;
    details.appendChild(descriptionContent);

    detailContainer.appendChild(details);
}

const detailsAction = (detail) => {
    if (isLoggedIn) {
        const button = document.createElement("button");
        button.className = "btn btn-primary w-40 bg-primary border-primary hover:bg-primary/80 hover:border-primary/80";
        button.innerText = "Add to Cart"
        button.addEventListener("click", () => handleAdd(detail))
        return button;
    } else {
        const label = document.createElement("label");
        label.setAttribute("for", "my-modal-4");
        label.className = "btn w-40 bg-primary border-primary hover:bg-primary/80 hover:border-primary/80"
        label.innerText = "Add to Cart";
        return label;
    }
}