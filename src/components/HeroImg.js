import React from "react";
import IntroImg from "../img/pika.png";

function HeroImg() {
  return (
    <div class="hero min-h-screen">
      <div className="mask">
        <img
          className="into-img w-screen h-screen object-cover"
          src={IntroImg}
          alt="IntroImg"
        />
      </div>
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content max-w-1/2 text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
          <p class="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <a href="/pokemon">
            <button class="btn btn-primary">Get Started</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
