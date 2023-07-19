const form = document.querySelector('#login-form');
const email = document.querySelector("#login-email");
const password = document.querySelector("#login-password");
const errorPopup = document.querySelector("#errorPopUp");
const submitFormData = (event) => {
    event.preventDefault();
    let loginStatus = false;
    if (JSON.parse(window.localStorage.getItem("userCredentials")) && JSON.parse(window.localStorage.getItem("userCredentials"))?.length === 0) {
        console.log("testing in register");
        loginStatus = false;
    } else {
        for (let data of JSON.parse(window.localStorage.getItem("userCredentials"))) {
            console.log('data', data, email.value, password.value)
            if (
                data.email === email.value &&
                data.password === password.value
            ) {
                window.localStorage.setItem("activeUser", JSON.stringify(data));
                window.localStorage.setItem("isLoggedIn", "true");
                loginStatus = true;
                alert("logged In Successfull");
                window.open("/src/pages/products.html", '_self');
                break;
            }
            loginStatus = false;
        }
    }
    sendErrorMessage(loginStatus);
}

const sendErrorMessage = (loginStatus) => {
    console.log("test inside sendError",loginStatus)
    if (!loginStatus) {
        console.log("test inside sendError inside condition")
        errorPopup?.classList.remove("-top-24");
        errorPopup?.classList.add("top-10");
        setTimeout(() => {
            errorPopup?.classList.add("-top-24");
            errorPopup?.classList.remove("top-10");
        }, 1500);
    }
}

form.addEventListener('submit', submitFormData)
