import React from "react";

function Footer(){

return(

<section id="footer">
 
<div class="hero bg-base-300">
<div class="hero-content bg-base-300 w-full">
<div class="overflow-x-auto bg-base-300 w-full">

<footer class="footer p-10 bg-base-300 w-full text-base-content text-white">


  <nav>
    <h6 class="footer-title">Services</h6> 
    <a class="link link-hover">Web Design</a>
    <a class="link link-hover">Front End Development</a>
    <a class="link link-hover">Back End Develpoment</a>
    <a class="link link-hover">Full Stack Develpoment</a>
            

  </nav> 

  <nav>
    <h6 class="footer-title">Social</h6> 
    <div class="grid grid-flow-col gap-4">
    
    <a href="https://www.instagram.com/shivans_awasthi/">
    <button class="btn bg-pink-600 text-white btn-square">
    <ion-icon name="logo-instagram" class="h-6 w-6"></ion-icon>
    </button>
    </a>

    <a href="https://twitter.com/ShivansAwasthi">
    <button class="btn bg-black text-white btn-square">
    {/* <ion-icon name="logo-twitter" class="h-6 w-6"></ion-icon> */}
    <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 512 512" id="twitter"><g clip-path="url(#clip0_84_15697)"><path fill="#fff" d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"></path></g><defs><clipPath id="clip0_84_15697"><rect width="512" height="512" fill="#fff"></rect></clipPath></defs></svg>

    </button>
    </a>

    <a href="https://www.linkedin.com/in/shivans-awasthi-485025220/" >
    <button class="btn btn-square bg-blue-800 text-white text-white">
    <ion-icon name="logo-linkedin" class="h-6 w-6"></ion-icon>
    </button>
    </a>

    <a href="https://github.com/Shivans-Awasthi" >
    <button class="btn bg-gray-700 text-white btn-square">
    <ion-icon name="logo-github" class="h-6 w-6"></ion-icon>
    </button>
    </a>

    

    </div>
  </nav>
</footer>

</div>
</div>
</div>
 
</section>



) ;

}

export default Footer ;