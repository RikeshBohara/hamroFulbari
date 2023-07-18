const footer = () => {
    const footer = document.querySelector("#footer");
    footer.innerHTML=`
    <section class="bg-primary">
      <footer class="footer py-10 px-5 md:px-0 textColor max-w-screen-2xl mx-auto">
        <div>
          <a href="/">
            <span class="footer-title opacity-80 text-2xl">
              Hamro <br />
              Fulbari
            </span>
          </a>
          <label class="link link-hover">
            <div>Adress:</div>
            <span>Kathmandu, Gongabu, Nepal</span>
          </label>
          <label class="link link-hover">
            <div>Need Help?</div>
            <span>Call: +977 9818319099, +977 9860985750</span>
          </label>
          <label class="link link-hover">
            <div>Gmail:</div>
            <span>hamrofulbari7@gmail.com</span>
          </label>
        </div>
        <div>
          <span class="footer-title">Home</span>
          <a class="link link-hover">Products</a>
          <a class="link link-hover">Gallery</a>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact us</a>
        </div>
        <div>
          <span class="footer-title">Disclamer</span>
          <a class="link link-hover">Return policy</a>
          <a class="link link-hover">Shipping policy</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Terms & Condition</a>
        </div>
        <div>
          <span class="footer-title">Newsletter</span>
          <div class="form-control w-80">
            <label class="label">
              <span class="label-text textColor">
                Sign up for our e-mail and be the first who know <br /> our
                special offers!
              </span>
            </label>
            <div class="relative text-black">
              <input
                type="text"
                placeholder="username@site.com"
                class="input input-bordered w-full pr-16"
              />
              <button class="btn btn-primary bg-black hover:bg-primary/80 border-primary hover:border-primary/80 absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </section>
`
}

export default footer;