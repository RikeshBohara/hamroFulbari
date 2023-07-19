import {
    addDefaultDbDatas,
    addToCart,
    checkLoggedIn,
    getCartData,
    getTotalAmount,
    removeCartItem
} from "../utils/index.js";

let cartData, cartTotal, isLoggedIn;

isLoggedIn = checkLoggedIn();
const useEffect = () => {
    if (isLoggedIn) {
        addDefaultDbDatas();
        cartData = getCartData();
        cartTotal = getTotalAmount();
        const subTotalContainer = document.querySelector("#sub-total-container");
        subTotalContainer.innerText = `Rs. ${cartTotal}`

        const totalContainer = document.querySelector("#total-container");
        totalContainer.innerText = `Rs. ${cartTotal}`

        const cartContainer = document.querySelector("#cart-container");
        for (let data of cartData) {
            cartContainer.appendChild(renderCart(data));
        }
    } else {
        window.open("/src/pages/login.html", "_self")
    }
}

const refreshEffect = () => {
    const cartContainer = document.querySelector("#cart-container");
    cartContainer.innerHTML = "";
}
const renderCart = (data) => {

    const mainContainer = document.createElement("div");
    mainContainer.className = "grid grid-cols-4 md:grid-cols-6 md:px-12 px-2 border-b border-primary py-6 items-center"

    const image = document.createElement("img");
    image.className = "aspect-square hidden md:flex border border-primary w-24";
    image.src = `/public${data.imgUrl}`;
    mainContainer.appendChild(image);

    const name = document.createElement("div");
    name.className = "";
    name.innerText = data.name;
    mainContainer.appendChild(name);

    const price = document.createElement("div");
    price.className = "";
    price.innerText = `Rs. ${data.price}`;
    mainContainer.appendChild(price);

    const actions = document.createElement("div");
    actions.className = "flex items-center";

    const decrease = decreaseAmount(data);
    actions.appendChild(decrease);

    const quantity = document.createElement("div");
    quantity.className = "w-10 aspect-square flex items-center justify-center font-bold select-none";
    quantity.innerText = data.quantity;
    actions.appendChild(quantity);

    const increase = increaseAmount(data);
    actions.append(increase);
    mainContainer.appendChild(actions);

    const subTotal = document.createElement("div");
    subTotal.className = "";
    subTotal.innerText = `Rs. ${data.price * data.quantity}`;
    mainContainer.appendChild(subTotal);

    const itemRemove = itemRemoveAction(data);
    console.log("itemRemove", itemRemove);
    mainContainer.appendChild(itemRemove);

    return mainContainer;
}

const decreaseAmount = (data) => {
    const container = document.createElement("div");
    container.addEventListener("click", () => handleRemove(data));
    container.innerHTML = `
    <svg
                      class="cursor-pointer"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="28" height="28" fill="white" />
                      <path
                        d="M9.33398 14H18.6673"
                        stroke="black"
                        stroke-width="2"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
    `
    return container;
}
const increaseAmount = (data) => {
    const container = document.createElement("div");
    container.addEventListener("click", () => handleAdd(data));
    container.innerHTML = `
    <svg
                      class="cursor-pointer"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="28" height="28" fill="white" />
                      <path
                        d="M14 9.33334V18.6667"
                        stroke="black"
                        stroke-width="2"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.33398 14H18.6673"
                        stroke="black"
                        stroke-width="2"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
    `
    return container;
}

const itemRemoveAction = (data) => {
    const remove = document.createElement("div");
    remove.addEventListener("click", () => handleItemRemove(data));
    remove.innerHTML = `
    <svg
                    class="cursor-pointer hidden md:flex"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 10H8.33333H35"
                      stroke="black"
                      stroke-width="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M31.6673 10V33.3333C31.6673 34.2174 31.3161 35.0652 30.691 35.6904C30.0659 36.3155 29.218 36.6667 28.334 36.6667H11.6673C10.7833 36.6667 9.93542 36.3155 9.31029 35.6904C8.68517 35.0652 8.33398 34.2174 8.33398 33.3333V10M13.334 10V6.66667C13.334 5.78261 13.6852 4.93477 14.3103 4.30965C14.9354 3.68453 15.7833 3.33334 16.6673 3.33334H23.334C24.218 3.33334 25.0659 3.68453 25.691 4.30965C26.3161 4.93477 26.6673 5.78261 26.6673 6.66667V10"
                      stroke="black"
                      stroke-width="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.666 18.3333V28.3333"
                      stroke="black"
                      stroke-width="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M23.334 18.3333V28.3333"
                      stroke="black"
                      stroke-width="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
    `
    return remove;
}

const handleRemove = (data) => {
    addToCart(data, "remove");
    refreshEffect();
    useEffect();
}

const handleAdd = (data) => {
    addToCart(data);
    refreshEffect();
    useEffect();
}

const handleItemRemove = (data) => {
    removeCartItem(data);
    refreshEffect();
    useEffect();
}

useEffect();

