import React from "react";


function Navigation(){

return(

<div class="navbar border-b border-gray-500 bg-white fixed z-20 h-1 shadow-xl">
  <div class="navbar-start lg:ps-20 md: ps-0">

    <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <label for="my-drawer" class="btn btn-ghost drawer-button lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black"><path stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      </div>
      <div class="drawer-side">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-white menu-lg text-black rounded-non h-full p-10">
        <li><a href="#intro">Intro</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certificates">Certifications</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
      </div>
    </div>

    <p class="text-xl text-black font-bold ">Shivans</p>
    <p class="text-xl px-1 text-black font-bold ">Awasthi</p>



    
    <div class="navbar-center hidden lg:flex text-black text-center ">
      
    <ul class="menu menu-horizontal ms-5">
    <li><a href="#intro">Intro</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certificates">Certifications</a></li>
        <li><a href="#blogs">Blogs</a></li>

    </ul>
    
  </div>

  </div>

  <div data-aos="fade-down" data-aos-duration="500"   data-aos-delay="100">

  
</div>
<div class="navbar-end lg:pe-20 md: pe-0">
<div data-aos="fade-down" data-aos-duration="500"   data-aos-delay="100">
<a href="#contact"><button class="btn bg-blue-800 text-white hover:bg-white hover:text-black rounded">Contact Me</button></a>
</div>
</div>

</div>

) ;

}

export default Navigation ;