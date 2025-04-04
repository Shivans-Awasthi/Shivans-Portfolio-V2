import React from "react";

function Footer(){

return(

<section id="footer">
 


<footer class="footer p-10 bg-zinc-800 w-full  text-white">
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
    
    <a href="https://www.instagram.com/thenameis.shivans/">
    <button class="btn  bg-pink-500 text-white rounded-full btn-square">
    <ion-icon name="logo-instagram" class="h-6 w-6"></ion-icon>
    </button>
    </a>

    <a href="https://twitter.com/ShivansAwasthi">
    <button class="btn  bg-info text-white rounded-full btn-square">
    <ion-icon name="logo-twitter" class="h-6 w-6"></ion-icon>
    </button>
    </a>

    <a href="https://www.linkedin.com/in/shivans-awasthi-485025220/" >
    <button class=" btn-square btn bg-blue-500 text-white rounded-full">
    <ion-icon name="logo-linkedin" class="h-6 w-6"></ion-icon>
    </button>
    </a>

    <a href="https://github.com/Shivans-Awasthi" >
    <button class="btn  bg-neutral text-white rounded-full btn-square">
    <ion-icon name="logo-github" class="h-6 w-6"></ion-icon>
    </button>
    </a>

    

    </div>
  </nav>
</footer>

 
</section>



) ;

}

export default Footer ;