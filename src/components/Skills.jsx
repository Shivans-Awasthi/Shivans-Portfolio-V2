import React from "react";

function Skills(){

return(


<section id="skills">




<div class="hero bg-base-200">
<div class="hero-content text-center">
<div class="overflow-x-auto text-center bg-base-200 max-w-full">
<h1 class="text-5xl font-bold">Skills</h1>
<br/><br/>
  <table class="table">
  
    <thead>
      <tr>
        <th>Technology</th>
        <th>Proficency</th>
      </tr>
    </thead>
    <tbody>

      <tr>
        <td>C/C++</td>
        <td><progress class="progress progress-secondary w-80" value="80" max="100"></progress></td>
      </tr>
   
      <tr>
        <td>Python</td>
        <td><progress class="progress progress-secondary w-80" value="60" max="100"></progress></td>
      </tr>

      <tr>
        <td>React JS</td>
        <td><progress class="progress progress-secondary w-80" value="70" max="100"></progress></td>
      </tr>

      <tr>
        <td>PostgreSQL, MySQL</td>
        <td><progress class="progress progress-secondary w-80" value="50" max="100"></progress></td>
      </tr>

      <tr>
        <td>Bootstrap, Tailwind CSS</td>
        <td><progress class="progress progress-secondary w-80" value="70" max="100"></progress></td>
      </tr>

      <tr>
        <td>ROS 2</td>
        <td><progress class="progress progress-secondary w-80" value="60" max="100"></progress></td>
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