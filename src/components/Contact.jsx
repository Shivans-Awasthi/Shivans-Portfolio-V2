import React, { useState } from "react";
import { sendmail } from "../contact";



function Contact(){

const [Name , setName] = useState("") ;


function handleChange(event){


setName(event.target.value) ;

 
}


return(

<section id="contact">
 
<div class="hero min-h-screen bg-base-200 ">
  <div class="hero-content flex-col lg:flex-row-reverse w-full">
    <div class="text-center lg:text-left w-80">
    <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">

      <h1 class="text-5xl font-bold">Contact Me!</h1>
      <br/><br/>

      <div class="chat chat-start">
        <div class="chat-bubble chat-bubble-success">
          <p class="text-3xl" >Hello { Name } </p>
        </div>
        </div>
        <div class="chat chat-start hidden" id="success">
        <div class="chat-bubble chat-bubble-success">
      <p class="py-6 text-3xl">Thanks, I recieved you message !<br/> Will reach out to you soon..<br/> </p>
      </div>
      </div>
    </div>
    </div>

    
    <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">

    <div class="card shrink-0 w-80 min-w-sm shadow-2xl bg-base-100">
      <form class="card-body" id="contact-form" name="contact-form" onSubmit={sendmail}>

        <div class="form-control">
          <label for="from_name" class="label">
            <span class="label-text">--Name</span>
          </label>
          <input onChange={handleChange} type="text" name="from_name" id="from_name" placeholder="// What should I call you" class="input input-bordered" required />
        </div>

        <div class="form-control">
          <label for="reply_to" class="label">
            <span class="label-text">--Email</span>
          </label>
          <input type="email" name="reply_to" id="reply_to" placeholder="// Enter your Email" class="input input-bordered" required />

        </div>

        <div class="form-control">
          <label for="message" class="label">
            <span class="label-text">--Message</span>
          </label>          
          <textarea class="textarea textarea-bordered min-h-40" name="message" id="message" placeholder="// Let me know your thoughts" required></textarea>

        </div>

        <div class="form-control mt-6">
          <button class="btn btn-primary" type="submit">Send Email</button>
        </div>
      </form>
    </div>
    </div>



  </div>
</div>


</section>



) } ;



export default Contact ;