import React from "react";

function Intro(){



return(

<section id="intro">
  

<div class="hero min-h-screen w-full">
{/* <div class="glowing-sphere"></div> */}



  <div class="hero-content text-center min-w-full z-10">

    <div class="text-center w-fit">
    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
      <h1 class="text-2xl mt-16 text-black text-center font-bold">Hello there, I am</h1> <span class="text-center text-5xl myname font-extrabold text-black "><h1 className="p-2">Shivans Awasthi<span className="text-warning rounded-md">.</span></h1></span>
      <br/>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000"   data-aos-delay="1000">
      <div class="avatar">
        <div class="w-36 rounded-full shadow-lg ring-4 ring-white ring-offset-base-100 ring-offset-0">
          <img src="https://github.com/Shivans-Awasthi/Shivans-Portfolio-Website/blob/main/images/profilepic.jpeg?raw=true" />
        </div>
      </div>
      </div>
<br/>

<div data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="1200">

      
      <div class="mockup-code bg-transparent glass1 border-none border-black rounded shadow-xl text-left text-black text-sm w-full">
      <div data-aos="fade-right" data-aos-duration="1300"  data-aos-delay="1300">
        <pre data-prefix="$" ><code>Software Engineer</code></pre> 
      </div>
      <div data-aos="fade-right" data-aos-duration="1400"  data-aos-delay="1400">
        <pre data-prefix=">" ><code>MERN Stack Web Developer</code></pre> 
      </div>  
      <div data-aos="fade-right" data-aos-duration="1500"  data-aos-delay="1500">
        <pre data-prefix=">" ><code>AI Developer</code></pre>
      </div>
      <div data-aos="fade-right" data-aos-duration="1600"  data-aos-delay="1600">
        <pre data-prefix=">"  ><code>Robotics Engineer</code></pre>
      </div>
    </div>

    <br/>
    </div>
    <div data-aos="zoom-in" data-aos-duration="500"  data-aos-delay="2000">
      <a href="#contact"><button class="btn btn-black text-white text-xl hover:bg-white hover:text-black rounded-none">Contact Me</button></a> <a href=" https://drive.google.com/file/d/19u352hdkuBJnx4zdossXcBFa7aPxkumS/view?usp=drivesdk "><button class="btn btn-outline bg-gray-200 text-black text-xl hover:bg-black hover:text-white rounded-none">Resume</button></a>
    
    
    </div>
    
    </div>
    
  </div>
  
</div>

</section>


) ;

}

export default Intro ;