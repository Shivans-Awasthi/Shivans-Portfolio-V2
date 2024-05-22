import React from "react";





function Navigation(){

return(


<div class="navbar bg-base-200 w-full navbar-float">
  <div class="navbar-start w-full">
  <div data-aos="fade-down" data-aos-duration="500"   data-aos-delay="0">

    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabindex="0" class="menu bg-gray-600 text-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="#intro">Intro</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certificates">Certifications</a></li>
        <li><a href="#contact">Contact Me</a></li>

      </ul>
    </div>
    </div>

    <div data-aos="fade-down" data-aos-duration="500"   data-aos-delay="00">
    <p class="px-5 text-md text-white">Shivans Awasthi</p>
    </div>
  </div>

  <div data-aos="fade-down" data-aos-duration="500"   data-aos-delay="00">

  <div class="navbar-center hidden lg:flex text-white ">
    <ul class="menu menu-horizontal px-1">
    <li><a href="#intro">Intro</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certificates">Certifications</a></li>
    </ul>
  </div>
</div>


  <div class="navbar-end">
  <div data-aos="fade-down" data-aos-duration="500"   data-aos-delay="00">

  {/* <div class="dropdown mb-0">
  <div tabindex="0" role="button" class="btn btn-ghost m-1">
    Theme
    <svg width="12px" height="12px" class="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
  </div>
  <ul tabindex="0" class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
    <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="default"/></li>
    <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro"/></li>
    <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk" value="cyberpunk"/></li>
    <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine"/></li>
    <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" value="aqua"/></li>
  </ul>
</div> */}



    <a class="btn bg-blue-800 text-white" href="#contact" >Contact Me</a>
  </div>
  </div>
</div>

) ;

}

export default Navigation ;