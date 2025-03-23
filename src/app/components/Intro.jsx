import React from "react";

function Intro(){



return(

<section id="intro">
  

<div class="hero bg-base-100 py-10 min-h-screen w-full">
{/* <div class="glowing-sphere"></div> */}



  <div class="hero-content mt-10 w-full z-10 flex-col lg:flex-row md: mt-10">
  <div class="avatar">
        <div class="max-w-sm ring-primary ring-offset-base-100 rounded-full ring ring-offset-2 ">
          <img src="https://github.com/Shivans-Awasthi/Shivans-Portfolio-V2/blob/main/public/DSC_0724355.jpg?raw=true" />
        </div>
  </div>

    <div class="rounded-xl p-5 lg:p-10 bg-base-100">
    
      <h1 class="text-4xl text-white font-bold"><q>Hello there,I am<br/>Shivans Awasthi.</q></h1> 



      <div class="mockup-code my-6 rounded-lg bg-base-100 text-white text-left w-full">
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

      <a href="#contact"><button class="btn btn-primary text-white">Contact Me</button></a> <a href="https://drive.google.com/file/d/145bDbNfh3jkwZS-Ha_IvZjPXOgW356HD/view?usp=sharing"><button class="btn btn-secondary text-white">Resume</button></a>
    
  
    
    </div>
    
  </div>
  
</div>

</section>


) ;

}

export default Intro ;