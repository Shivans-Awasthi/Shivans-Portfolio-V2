import React from "react";

function Footer(){

return(

<section id="footer">
 
<div class="hero bg-base-300 ">
<div class="hero-content w-full bg-base-300">
<div class="overflow-x-auto bg-base-300 w-full">

<footer class="footer p-10 bg-base-300 text-base-content">




  <nav>
    <h6 class="footer-title">Services</h6> 
    <a class="link link-hover">Branding</a>
    <a class="link link-hover">Design</a>
    <a class="link link-hover">Marketing</a>
    <a class="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 class="footer-title">Company</h6> 
    <a class="link link-hover">About us</a>
    <a class="link link-hover">Contact</a>
    <a class="link link-hover">Jobs</a>
    <a class="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 class="footer-title">Social</h6> 
    <div class="grid grid-flow-col gap-4">
    
    <a href="https://www.instagram.com/shivans_awasthi/">
    <button class="btn btn-dark btn-square">
    <ion-icon name="logo-instagram" class="h-6 w-6"></ion-icon>
    </button>
    </a>

    <a href="https://twitter.com/ShivansAwasthi">
    <button class="btn btn-dark btn-square">
    <ion-icon name="logo-twitter" class="h-6 w-6"></ion-icon>
    </button>
    </a>

    <a href="https://www.linkedin.com/in/shivans-awasthi-485025220/" >
    <button class="btn btn-dark btn-square">
    <ion-icon name="logo-linkedin" class="h-6 w-6"></ion-icon>
    </button>
    </a>

    <a href="https://github.com/Shivans-Awasthi">
    <button class="btn btn-dark btn-square">
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