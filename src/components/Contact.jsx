import React, { useState } from "react";

function Contact(){




const [Name , setName] = useState("") ;


 
function handleChange(event){


setName(event.target.value) ;

 
}


return(

<section id="contact">
 
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Contact Me!</h1>
      <p class="py-6 text-3xl">Hello <br/> { Name } <br/> </p>
    </div>
    <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form class="card-body" id="contact-form" name="contact-form">
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
          <textarea class="textarea textarea-bordered" name="message" id="message" placeholder="// Let me know your thoughts" required></textarea>

        </div>

        <div class="form-control mt-6">
          <button class="btn btn-primary" type="submit">Send Email</button>
        </div>
      </form>
    </div>
  </div>
</div>


</section>



) } ;



export default Contact ;