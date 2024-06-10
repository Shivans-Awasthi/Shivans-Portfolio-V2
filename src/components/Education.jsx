import React from "react";
import Aos from "aos";


Aos.init({
  once: true
}) ;




function Education(){

return(

<section id="education" >

<div class="hero min-h-screen gloomedu ">  
<div class="hero-content">
<div class="text-left w-fit">
<br/><br/><br/><br/>

<div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
<h1 class="text-3xl font-extrabold text-left text-white">Education</h1>
<h1 class="text-md text-left rainbow-text">Cultivating a lifelong love of learning through academic excellence and intellectual curiosity.</h1>

</div>
<br/><br/>


<ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-white">
  <li>
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-primary"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-start text-end mb-10">
    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="200"><time class="font-mono italic">2024</time></div>
    <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="200"><div class="text-md font-black rainbow-text">B.Tech Computer Science and System Engineering</div>
      Kalinga Institute of Industrial Technology(KIIT),<br/> Bhubaneshwar, Odisha, India
      <p class="text-accent text-sm">CGPA: 8.36</p>
    </div>
    </div>
    <hr class="bg-primary"/>
  </li>
  <li>
    <hr />
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-secondary"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-end mb-10">
    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300"><time class="font-mono italic">2019</time></div>
    <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="300"><div class="text-md font-black rainbow-text">Class XII- Higher Secondary Education(CBSE)</div>
      Kendriya Vidyalaya No.1,<br/> Mumbai, Maharashtra, India
      <p class="text-accent text-sm">Percentage: 85%</p>
    </div>
    </div>
    
    <hr class="bg-neutral"/>
  </li>

</ul>
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

export default Education ;