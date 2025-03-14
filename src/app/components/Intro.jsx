import React from "react";

function Intro(){



return(

<section id="intro">
  

<div class="hero gradbgorange py-10 min-h-screen w-full">
{/* <div class="glowing-sphere"></div> */}



  <div class="hero-content mt-10 w-full z-10 flex-col lg:flex-row md: mt-10">
  <div class="avatar">
        <div class="max-w-sm rounded-xl">
          <img src="https://github.com/Shivans-Awasthi/Shivans-Portfolio-V2/blob/main/public/DSC_0724355.jpg?raw=true" />
        </div>
  </div>

    <div class="rounded-xl p-3 lg:p-10 bg-white">
    
      <h1 class="text-4xl text-black font-bold"><q>Hello there,I am<br/>Shivans Awasthi.</q></h1> 



      <div class="mockup-code my-6 rounded-lg bg-white text-black text-left w-full">
      <div data-aos="fade-right" data-aos-duration="1300"  data-aos-delay="1300">
        <pre data-prefix="$" class="text-success"><code>Full Stack Software Engineer</code></pre> 
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

      <a href="#contact"><button class="btn bg-blue-800 text-white hover:bg-white hover:text-black rounded">Contact Me</button></a> <a href="https://drive.google.com/file/d/145bDbNfh3jkwZS-Ha_IvZjPXOgW356HD/view?usp=sharing"><button class="btn bg-black text-white hover:bg-white hover:text-black rounded">Resume</button></a>
    
  
    
    </div>
    
  </div>
  
</div>

</section>


) ;

}

export default Intro ;