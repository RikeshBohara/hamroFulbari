//generic navbar
function navbar() {

    //logging out
    const handleLogout = () => {
        console.log('handleLogout')
        window.localStorage.setItem("activeUser", JSON.stringify({}));
        window.localStorage.setItem("isLoggedIn", 'false');
        activeUser = {};
    }

    let activeUser = JSON.parse(window.localStorage.getItem("activeUser"));

    const navbar = document.querySelector("#navbar");
    navbar.innerHTML = `
    <section class="bg-primary pt-3 px-6 md:px-0">
        <nav class="max-w-screen-2xl mx-auto">
          <div class="justify-between text-sm border-b pb-4 border-b-white/80 textColor hidden md:flex">
            <div class="flex gap-4">
              <span class="text-sm">Follow us:</span>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  class="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  class="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  class="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
            <div class="">
              <label class="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  class="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
                <span>+977 98181319099</span>, <span>+977 9860985750</span>
              </label>
            </div>
          </div>
          <main class="flex justify-between items-center">
            <a href="/" class="flex items-center">
              <label
                htmlFor="my-drawer-3"
                class="btn flex md:hidden btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
              <div class="capitalize py-2 text-black font-bold">
                Hamro <br />
                Fulbari
              </div>
            </a>
            <div class="form-control hidden md:flex">
              <div class="input-group">
                <input
                  style="background:white"
                  type="text"
                  placeholder="Search…"
                  class="input input-bordered lg:w-[450px]"
                />
                <button class="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="flex items-center gap-10 textColor">
              <div class="dropdown text-black cursor-pointer dropdown-end md:dropdown-bottom">
                
                <div id="navbar-profile-container">
                </div>
              </div>

              <a
                id="cart-content"
                href="/src/pages/cart.html"
                class="after:absolute relative after:bg-red-500 after:rounded-full after:px-1 after:-top-2 after:-right-2"
              >
                <svg
                  width="36"
                  height="34"
                  viewBox="0 0 36 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 33C14.3284 33 15 32.3284 15 31.5C15 30.6716 14.3284 30 13.5 30C12.6716 30 12 30.6716 12 31.5C12 32.3284 12.6716 33 13.5 33Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M30 33C30.8284 33 31.5 32.3284 31.5 31.5C31.5 30.6716 30.8284 30 30 30C29.1716 30 28.5 30.6716 28.5 31.5C28.5 32.3284 29.1716 33 30 33Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.5 1.5H7.5L11.52 21.585C11.6572 22.2756 12.0329 22.8959 12.5813 23.3374C13.1298 23.779 13.816 24.0135 14.52 24H29.1C29.804 24.0135 30.4902 23.779 31.0387 23.3374C31.5871 22.8959 31.9628 22.2756 32.1 21.585L34.5 9H9"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </main>
        </nav>
      </section>
      <section class="bg-accent hidden md:flex">
        <nav class="max-w-screen-2xl mx-auto my-4">
          <ul class="flex justify-center items-center gap-6 py-2 text-2xl text-black/90 font-medium">
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
        </nav>
        <style id="cart-update-style"></style>
        
      </section>
    `

    const profileContainer = document.querySelector("#navbar-profile-container")

    if (activeUser && Object.keys(activeUser)?.length > 0) {
        console.log("testing inside active user");
        profileContainer.innerHTML = `
                
                    <div id="navbar-logout">
                      <a class="text-red-500 active:bg-red-500 active:text-white">
                        Log Out
                      </a>
                      </div>
        `

        const logout = document.querySelector("#navbar-logout")
        logout.onclick = handleLogout;
    } else {
        profileContainer.innerHTML = `<a
                        href="/src/pages/login.html"
                  // tabIndex={0}
                  class="flex items-center cursor-pointer"
                >
                  <svg
                    width="26"
                    height="30"
                    viewBox="0 0 26 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25 28.5V25.5C25 23.9087 24.3679 22.3826 23.2426 21.2574C22.1174 20.1321 20.5913 19.5 19 19.5H7C5.4087 19.5 3.88258 20.1321 2.75736 21.2574C1.63214 22.3826 1 23.9087 1 25.5V28.5"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13 13.5C16.3137 13.5 19 10.8137 19 7.5C19 4.18629 16.3137 1.5 13 1.5C9.68629 1.5 7 4.18629 7 7.5C7 10.8137 9.68629 13.5 13 13.5Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>`
    }
}

export default navbar;