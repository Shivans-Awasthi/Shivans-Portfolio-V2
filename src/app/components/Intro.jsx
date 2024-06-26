import React from "react";


function Intro(){



return(

<section id="intro">

<div class="hero min-h-screen gloom min-w-full"  >
  <div class="hero-content text-center min-w-full">

    <div class="text-center w-fit">
    <br/><br/><br/><br/>
    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
      <h1 class="text-xl text-white text-center">Hello there, I am</h1> <span class="text-center text-3xl font-extrabold text-white"><h1 className="rainbow-text">Shivans Awasthi.</h1></span>
      <br/>

      </div>
      <div data-aos="fade-up" data-aos-duration="1000"   data-aos-delay="1000">
      <div class="avatar">
        <div class="w-24 rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
          <img src="https://github.com/Shivans-Awasthi/Shivans-Portfolio-Website/blob/main/images/profilepic.jpeg?raw=true" />
        </div>
      </div>
      </div>
<br/>

<div data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="1200">

      
      <div class="mockup-code bg-neutral text-left text-white text-sm w-full">
      <div data-aos="fade-right" data-aos-duration="1300"  data-aos-delay="1300">
        <pre data-prefix="$" class="text-primary" ><code>Software Engineer</code></pre> 
      </div>
      <div data-aos="fade-right" data-aos-duration="1400"  data-aos-delay="1400">
        <pre data-prefix=">" class="text-secondary"><code>MERN Stack Web Developer</code></pre> 
      </div>  
      <div data-aos="fade-right" data-aos-duration="1500"  data-aos-delay="1500">
        <pre data-prefix=">" class="text-accent" ><code>AI Developer</code></pre>
      </div>
      <div data-aos="fade-right" data-aos-duration="1600"  data-aos-delay="1600">
        <pre data-prefix=">" class="text-neutral-content"  ><code>Robotics Engineer</code></pre>
      </div>
    </div>

    <br/>
    </div>
    <div data-aos="zoom-in" data-aos-duration="500"  data-aos-delay="2000">
      <a href="#contact"><button class="btn bg-blue-700 text-white ">Contact Me</button></a> <a href="https://drive.google.com/file/d/1Ea5RInl8XkD6odlKjAKGS1Xmj88mrkf2/view?usp=drive_link"><button class="btn bg-gray-600 text-white">Resume</button></a>
    
    
    </div>
    
    </div>
    
  </div>
  
</div>
<div class="hero" style={{backgroundColor:"#111014"}}>
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
</svg>

</div>
</section>


) ;

}

export default Intro ;