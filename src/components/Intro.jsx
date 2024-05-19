import React from "react";

function Intro(){

return(

<section id="intro">

<div class="hero min-h-screen bg-base-200" >
  <div class="hero-content text-center bg-opacity-60">
    <div class="max-w-full">
      
      <h1 class="text-5xl">Hello there, I am</h1> <span class="text-5xl font-bold"><h1>Shivans Awasthi</h1></span>
      <br/>
      <div class="avatar">
        <div class="w-24 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
          <img src="https://media.licdn.com/dms/image/C5603AQG8bkmKRzc_Yw/profile-displayphoto-shrink_800_800/0/1661271807889?e=2147483647&v=beta&t=4coKl50b-4kyWn41Gt8kaGh9htlBH7f0k4j-HXsNGus" />
        </div>
      </div>
<br/><br/>
      <div class="mockup-code text-left">
        <pre data-prefix="1" ><code>Software Engineer</code></pre> 
        <pre data-prefix="2" class="bg-warning text-warning-content"><code>MERN Stack Web Developer</code></pre> 
        <pre data-prefix="3" ><code>Robotics Enthusiast</code></pre>
    </div>
    <br/><br/>
      <button class="btn btn-primary">Contact Me</button> <button class="btn btn-outline btn-ghost">Resume</button>
    </div>
  </div>
</div>

</section>


) ;

}

export default Intro ;