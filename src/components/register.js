import {addDefaultDbDatas} from "../utils.js";

const registerForm = document.querySelector("#register-form");
const firstName = document.querySelector("#register-firstName");
const lastName = document.querySelector("#register-lastName");
const email = document.querySelector("#register-email");
const password = document.querySelector("#register-password");
const submitForm = (e) => {
    e.preventDefault();
    addDefaultDbDatas();
    const formData = {
        email:email.value,
        firstName:firstName.value,
        lastName:lastName.value,
        password:password.value
    }
    if (JSON.parse(window.localStorage.getItem("userCredentials"))) {
        window.localStorage.setItem("userCredentials", JSON.stringify([
            ...JSON.parse(window.localStorage.getItem("userCredentials")),
            formData,
        ]));
    } else {
        window.localStorage.setItem("userCredentials", JSON.stringify([formData]));
    }
    window.localStorage.setItem("activeUser",JSON.stringify( formData));
    window.localStorage.setItem("isLoggedIn", "true");
    alert("Registered Successfully");
}
registerForm.addEventListener("submit", submitForm);
