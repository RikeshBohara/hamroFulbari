function sidebar() {
    const side = document.querySelector("#sidebar");
    side.className = "fixed top-0 left-0 h-full hidden w-full md:hidden";
    const sideContent = document.createElement('div');

    sideContent.className = "h-full w-60 bg-white text-black transform translate-x-0 transition-transform ease-in-out duration-300";
    sideContent.innerHTML = `
    <ul class="menu p-4">
        <li class="hover:text-primary transition-all duration-300">
            <a href="/">Home</a>
        </li>
        <li class="hover:text-primary transition-all duration-300">
            <a href="/src/pages/products.html">Products</a>
        </li>
        <li class="hover:text-primary transition-all duration-300">
            <a href="/#about-us">About Us</a>
        </li>
        <li class="hover:text-primary transition-all duration-300">
            <a href="/#contact-us">Contact Us</a>
        </li>
    </ul>
    `

    side.addEventListener('click', () => {
        console.log("testing ")
        side.classList.add('hidden')
        side.classList.add('translate-x-0')
    })

    side.appendChild(sideContent);
}

export default sidebar;