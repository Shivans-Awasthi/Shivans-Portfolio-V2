import React from "react";

function Intro(){



return(

<section id="intro">
  

<div class="hero gradbgblue min-h-screen w-full">
{/* <div class="glowing-sphere"></div> */}



  <div class="hero-content mt-10 min-w-full z-10 flex-col lg:flex-row md: mt-10">
  <div class="avatar">
        <div class="max-w-sm rounded-lg border-8 border-white">
          <img src="https://github.com/Shivans-Awasthi/Shivans-Portfolio-Website/blob/main/images/profilepic.jpeg?raw=true" />
        </div>
      </div>
    <div class="text-left">
      <h1 class="text-xl text-black font-bold">Hello there, I am</h1> 
      <h1 className="text-5xl font-extrabold text-black ">Shivans Awasthi</h1>
<br/>


      
      <div class="mockup-code py-8  bg-transparent rounded-lg text-left text-black text-sm w-full">
      <div data-aos="fade-right" data-aos-duration="1300"  data-aos-delay="1300">
        <pre data-prefix="$" ><code>Full Stack Software Engineer</code></pre> 
      </div>
      <div data-aos="fade-right" data-aos-duration="1400"  data-aos-delay="1400">
        <pre data-prefix=">" ><code>MERN Stack Developer</code></pre> 
      </div>  
      <div data-aos="fade-right" data-aos-duration="1400"  data-aos-delay="1400">
        <pre data-prefix=">" ><code>.NET Developer</code></pre> 
      </div>  
      <div data-aos="fade-right" data-aos-duration="1500"  data-aos-delay="1500">
        <pre data-prefix=">" ><code>Data Scientist</code></pre>
      </div>

    <br/>
    </div>
    <div data-aos="zoom-in" data-aos-duration="500"  data-aos-delay="2000">
      <a href="#contact"><button class="btn bg-blue-800 text-white hover:bg-white hover:text-black rounded-lg">Contact Me</button></a> <a href="https://drive.google.com/file/d/145bDbNfh3jkwZS-Ha_IvZjPXOgW356HD/view?usp=sharing"><button class="btn bg-black text-white hover:bg-white hover:text-black rounded-lg">Resume</button></a>
    
    
    </div>
    
    </div>
    
  </div>
  
</div>

</section>


) ;

}

export default Intro ;