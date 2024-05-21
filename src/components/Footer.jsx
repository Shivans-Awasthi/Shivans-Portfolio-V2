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
    <button class="btn bg-blue-600 text-white btn-square">
    <ion-icon name="logo-twitter" class="h-6 w-6"></ion-icon>
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