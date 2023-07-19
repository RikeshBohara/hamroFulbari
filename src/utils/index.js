export const addToCart = (data, calledFrom = "add") => {
    const allData = JSON.parse(window.localStorage.getItem("purchaseDb"));
    const activeUser = JSON.parse(window.localStorage.getItem("activeUser"));

    if (
        Object.keys(allData).length === 0 ||
        !Object.keys(allData).includes(activeUser.firstName.toLocaleLowerCase())
    ) {
        allData[activeUser.firstName.toLocaleLowerCase()] = [
            {
                ...data,
                quantity: 1
            }
        ]
    } else {
        for (let key in allData) {
            if (key === activeUser.firstName.toLocaleLowerCase()) {
                let isNewData = true;
                for (let item of allData[key]) {
                    if (item.id === data.id) {
                        if (calledFrom === "add") {
                            item.quantity += 1;
                        } else {
                            item.quantity -= 1;
                        }
                        isNewData = false;
                        break;
                    } else {
                        isNewData = true;
                    }
                }
                if (isNewData) {
                    allData[key].push({
                        ...data,
                        quantity: 1,
                    });
                }
            }
        }
    }

    window.localStorage.setItem("purchaseDb", JSON.stringify(allData));
    updateCartAmount();
}

export const updateCartAmount = () => {
    const activeUser = JSON.parse(window.localStorage.getItem("activeUser"));
    const allData = JSON.parse(window.localStorage.getItem("purchaseDb"));
    let cartTotalContents = 0;
    try {
        for (let item of allData[activeUser.firstName.toLocaleLowerCase()]) {
            cartTotalContents += item.quantity;
        }
    } catch (error) {
        console.log(error);
    }
    const styleTag = document.querySelector("#cart-update-style");
    if (styleTag) {
        if (cartTotalContents === 0) {
            styleTag.innerHTML = "";
        } else {
            styleTag.innerHTML =
                "#cart-content::after{" + "content:'" + cartTotalContents + "'}";
        }
    }
}

export const addDefaultDbDatas = () => {
    if (!JSON.parse(window.localStorage.getItem("userCredentials"))) {
        window.localStorage.setItem("userCredentials", JSON.stringify([]));
    }
    if (!JSON.parse(window.localStorage.getItem("activeUser"))) {
        window.localStorage.setItem("activeUser", JSON.stringify({}));
    }
    if (!JSON.parse(window.localStorage.getItem("purchaseDb"))) {
        window.localStorage.setItem("purchaseDb", JSON.stringify({}));
    }
    if (!JSON.parse(window.localStorage.getItem("isLoggedIn"))) {
        window.localStorage.setItem("isLoggedIn", JSON.stringify(false));
    }
    updateCartAmount();
}

export const checkLoggedIn = () => {
    return JSON.parse(window.localStorage.getItem("isLoggedIn"));
}

export const handleAdd = (data) => {
    addToCart(data);
    alert("Successfully Added Element.");
}

export const getCartData = () => {
    const allData = JSON.parse(window.localStorage.getItem("purchaseDb"));
    const activeUser = JSON.parse(window.localStorage.getItem("activeUser"));
    return allData[activeUser.firstName.toLocaleLowerCase()];
}

export const getTotalAmount = () => {
    const allData = JSON.parse(window.localStorage.getItem("purchaseDb"));
    const activeUser = JSON.parse(window.localStorage.getItem("activeUser"));
    let total = 0;
    try {
        for (let data of allData[activeUser.firstName.toLocaleLowerCase()]) {
            total += data.quantity * data.price;
        }
    } catch (error) {
        console.log(error);
    }
    return total;
}

export const removeCartItem = (item) => {
    let allData = JSON.parse(window.localStorage.getItem("purchaseDb"));
    const activeUser = JSON.parse(window.localStorage.getItem("activeUser"));
    const updatedData = allData[activeUser.firstName.toLocaleLowerCase()].filter(
        (data) => {
            return data.id !== item.id;
        }
    );
    allData = {
        ...allData,
        [activeUser.firstName.toLocaleLowerCase()]: updatedData,
    };
    window.localStorage.setItem("purchaseDb", JSON.stringify(allData));
    updateCartAmount();
}