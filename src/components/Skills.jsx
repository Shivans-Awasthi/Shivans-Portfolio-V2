import React from "react";

function Skills(){

return(


<section id="skills">




<div class="hero min-h-screen  bg-base-200">
<div class="hero-content text-center">
<div class="overflow-x-auto text-center bg-base-200 max-w-full">
<div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
<h1 class="text-5xl font-bold">Skills</h1>
</div>
<br/><br/>
  <table class="table">
  <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
    <thead>
      <tr>
        <th>Technology</th>
        <th>Proficency</th>
      </tr>
    </thead>
    </div>
    <tbody>

      <tr> 
        <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="100">
        <td>C/C++</td></div>
        <td>
          <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="200">
          <progress class="progress progress-secondary md: w-56 lg:w-80" value="80" max="100"></progress>
          </div>
          </td>
          
      </tr>
   
      <tr>
      <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="300">
        <td>Python</td>
      </div>
        <td>
        <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="400">
          <progress class="progress progress-secondary md: w-56 lg:w-80" value="60" max="100"></progress></div></td>
      </tr>

      <tr>
      <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="500">
        <td>React JS</td>
      </div>
        <td>
        <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="600">
          <progress class="progress progress-secondary md: w-56 lg:w-80" value="70" max="100"></progress></div></td>
      </tr>

      <tr>
      <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="700">
        <td>PostgreSQL, MySQL</td>
        </div>
        <td>
        <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="800">
          <progress class="progress progress-secondary md: w-56 lg:w-80" value="50" max="100"></progress></div></td>
      </tr>

      <tr>
      <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="900">
        <td>Bootstrap, Tailwind CSS</td>
        </div>
        <td>
        <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="1000">
          <progress class="progress progress-secondary md: w-56 lg:w-80" value="70" max="100"></progress></div></td>
      </tr>

      <tr>
      <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="1500">
        <td>ROS 2</td>
        </div>
        <td>
        <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="2000">
          <progress class="progress progress-secondary md: w-56 lg:w-80" value="60" max="100"></progress></div></td>
      </tr>


    </tbody>
  </table>
</div>
</div>
</div>



</section>





) ;

}

export default Skills ;