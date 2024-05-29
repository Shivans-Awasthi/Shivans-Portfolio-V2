import React from "react";





function Navigation(){

return(


<div class="navbar bg-base-200 w-full">
  <div class="navbar-start md:w-full lg:w-96 lg:mx-48">
  <div data-aos="fade-down" data-aos-duration="500"   data-aos-delay="0">

    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabindex="0" class="menu bg-gray-800 text-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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

    <div data-aos="fade-down" data-aos-duration="500"   data-aos-delay="100">
    <p class="px-5 text-md text-white w-full">Shivans Awasthi</p>
    </div>
  </div>

  <div data-aos="fade-down" data-aos-duration="500"   data-aos-delay="100">

  <div class="navbar-center hidden lg:flex text-white ">
    <ul class="menu menu-horizontal px-1">
    <li><a href="#intro">Intro</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certificates">Certifications</a></li>
        <li><a href="#blogs">Blogs</a></li>

    </ul>
  </div>
</div>
<div class="navbar-end">


</div>

</div>

) ;

}

export default Navigation ;