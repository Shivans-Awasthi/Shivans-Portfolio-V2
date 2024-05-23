import React from "react";
import Aos from "aos";


Aos.init() ;


function Intro(){

return(

<section id="intro" >

<div class="hero h-screen gloom"  >
  <div class="hero-content h-screen text-center">
    <div class="w-full text-center">
    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
      <h1 class="text-5xl text-white text-center">Hello there, I am</h1> <span class="text-center text-5xl font-extrabold text-white"><h1 className="rainbow-text">Shivans Awasthi</h1></span>
      <br/>
      <h1 class="text-xl rainbow-text text-center">"Combining technical expertise with artistic<br/> vision to create memorable digital journeys"</h1><br/>

      </div>
      <div data-aos="fade-up" data-aos-duration="1000"   data-aos-delay="1000">
      <div class="avatar">
        <div class="w-24 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
          <img src="https://media.licdn.com/dms/image/C5603AQG8bkmKRzc_Yw/profile-displayphoto-shrink_800_800/0/1661271807889?e=2147483647&v=beta&t=4coKl50b-4kyWn41Gt8kaGh9htlBH7f0k4j-HXsNGus" />
        </div>
      </div>
      </div>
<br/><br/>
<div data-aos="fade-up" data-aos-duration="500"  data-aos-delay="1300">

      
      <div class="mockup-code glass text-left text-white">
      <div data-aos="fade-right" data-aos-duration="500"  data-aos-delay="1400">
        <pre data-prefix="1" ><code>Software Engineer</code></pre> 
      </div>
      <div data-aos="fade-right" data-aos-duration="1000"  data-aos-delay="1500">
        <pre data-prefix="2" class="bg-warning text-warning-content"><code>MERN Stack Web Developer</code></pre> 
      </div>  
      <div data-aos="fade-right" data-aos-duration="1500"  data-aos-delay="1600">
        <pre data-prefix="3" ><code>Robotics Enthusiast</code></pre>
      </div>
    </div>

    <br/><br/>
    </div>

    <div data-aos="fade-down" data-aos-duration="500"  data-aos-delay="2000">
      <a href="#contact"><button class="btn bg-blue-800 text-white ">Contact Me</button></a> <a href="https://drive.google.com/file/d/1tCVPjbSV5H8FLimUI0ldMcmWPtX6elEu/view?usp=drive_link"><button class="btn bg-gray-600 text-white">Resume</button></a>
    </div>
    </div>
  </div>
</div>

</section>


) ;

}

export default Intro ;