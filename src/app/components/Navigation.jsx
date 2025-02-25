import React from "react";


function Navigation(){

return(

<div class="navbar navbar-sm border-b border-gray-500 bg-neutral fixed z-20 h-1">
  <div class="navbar-start">

    {/* <div class="dropdown z-100">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabindex="0" class="menu z-100 rounded-xl bg-neutral border-white text-white menu-3xl dropdown-content mt-3 p-2 shadow-3xl rounded-box w-52">
        <li><a href="#intro">Intro</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certificates">Certifications</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#contact">Contact Me</a></li>

      </ul>
    </div> */}

    <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <label for="my-drawer" class="btn btn-ghost drawer-button lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      </div>
      <div class="drawer-side">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu glass1 bg-neutral menu-lg text-white w-80 p-10">
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


    <p class="text-lg ps-5 text-white ">Shivans</p>
    <p class="text-lg px-1 text-white ">Awasthi</p>


    
    <div class="navbar-center px-5 hidden lg:flex text-white text-center">
      
    <ul class="menu menu-horizontal ms-5 px-1">
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
<div class="navbar-end">
<div data-aos="fade-down" data-aos-duration="500"   data-aos-delay="100">
<a href="#contact"><button class="btn btn-primary text-white rounded">Contact Me</button></a>
</div>
</div>

</div>

) ;

}

export default Navigation ;