import React from "react";

function Intro(){

return(


<section id="intro">


<div class="hero bg-zinc-950 py-10 h-fill w-full">

<div class="hero-content mt-10 w-full z-10 flex-col lg:flex-row md: mt-10">
<div data-aos="fade-top" data-aos-duration="1000"  data-aos-delay="500">
  <div class="avatar">
        <div class="max-w-xs rounded-full">
          <img src="https://github.com/Shivans-Awasthi/Shivans-Portfolio-V2/blob/main/public/DSC_0724355.jpg?raw=true" />
        </div>
  </div>
</div>
<div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="1000">
    <div class="rounded-xl p-5 lg:p-10">
    <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="1100">
      <h1 class="text-4xl text-white font-bold">👋<q>Hello there,I am<br/>Shivans Awasthi.</q></h1> 
</div>

<div className="badge bg-green-500 badge-xs"></div><span class="text-white ms-1">Available to work</span> 

      <div class="mockup-code my-6 bg-zinc-800 text-white text-left w-full">
      <div data-aos="fade-right" data-aos-duration="1300"  data-aos-delay="1300">
        <pre data-prefix="$" class="text-accent"><code>Full Stack Software Engineer</code></pre> 
      </div>
      <div data-aos="fade-right" data-aos-duration="1400"  data-aos-delay="1400">
        <pre data-prefix=">" ><code>MERN Stack Developer</code></pre> 
      </div>  
      <div data-aos="fade-right" data-aos-duration="1500"  data-aos-delay="1400">
        <pre data-prefix=">" ><code>.NET Developer</code></pre> 
      </div>  
      <div data-aos="fade-right" data-aos-duration="1600"  data-aos-delay="1500">
        <pre data-prefix=">" ><code>Data Scientist</code></pre>
      </div>

    <br/>
    </div>
    <div data-aos="fade-up" data-aos-duration="1300"  data-aos-delay="1300">
      <a href="#contact"><button class="btn bg-zinc-200 text-black hover:bg-gray-300 text-black"><ion-icon name="mail"></ion-icon>Contact Me</button></a> 
      <a href="https://drive.google.com/file/d/145bDbNfh3jkwZS-Ha_IvZjPXOgW356HD/view?usp=sharing"><button class="btn ms-3 btn-outline text-white hover:bg-zinc-700 hover:text-white"><ion-icon name="link"></ion-icon>Resume</button></a>
    </div>
  

    </div>
    </div>
  </div>  
</div>

</section>

) ;

}

export default Intro ;