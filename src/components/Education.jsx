import React from "react";

function Education(){

return(

<section id="education" >

<div class="hero bg-base-200 ">
  
<div class="hero-content">
<div class="overflow-x-auto bg-base-200 max-w-full">
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<h1 class="text-5xl font-bold text-center">Education</h1>
<br/><br/>


<ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-primary"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-start md:text-end mb-10">
      <time class="font-mono italic">2024</time>
      <div class="text-lg font-black">B.Tech Computer Science and System Engineering</div>
      Kalinga Institute of Industrial Technology(KIIT), Bhubaneshwar, Odisha, India
      <p class="text-success">CGPA: 8.36</p>
    </div>
    <hr class="bg-primary"/>
  </li>
  <li>
    <hr />
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-secondary"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-end mb-10">
      <time class="font-mono italic">2019</time>
      <div class="text-lg font-black">Class XII- Higher Secondary Education(CBSE)</div>
      Kendriya Vidyalaya No.1, Mumbai, Maharashtra, India
      <p class="text-success">Percentage: 85%</p>
    </div>
    <hr class="bg-neutral"/>
  </li>

</ul>
</div>
</div>
</div>

</section>


) ;

}

export default Education ;