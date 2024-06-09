import React, { useState } from "react";
import { sendmail } from "../contact";
import Aos from "aos";


Aos.init({
  once: true
}) ;


function Contact(){

const [Name , setName] = useState("") ;


function handleChange(event){


setName(event.target.value) ;

 
}


return(

<section id="contact">
 
<div class="hero min-h-screen gloomedu ">
  
  <div class="hero-content flex-col lg:flex-row-reverse w-full">
    
    <div class="text-center lg:text-left w-fit">
      
    <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">

      <h1 class="text-3xl font-extrabold text-left text-white">Contact Me!</h1>

      <h1 class="text-md rainbow-text text-left">Lets get connected, and start our next project with enthusiasm and a positive mindset..</h1>
      <h1 class="text-md rainbow-text text-left">Contact me here, or reach out to me on my socials below!</h1>


      <br/><br/>
      
      <div data-aos="fade-down" data-aos-duration="500" data-aos-delay="1000">
      <div class="chat chat-start text-left">
      <div class="chat-header">Shivans Awasthi</div>
      <div class="chat-image avatar">
    <div class="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://media.licdn.com/dms/image/C5603AQG8bkmKRzc_Yw/profile-displayphoto-shrink_800_800/0/1661271807889?e=2147483647&v=beta&t=4coKl50b-4kyWn41Gt8kaGh9htlBH7f0k4j-HXsNGus" />
    </div>
  </div>
        <div class="chat-bubble chat-start chat-bubble-success text-white text-left max-w-full">
          <p class="text-1xl" >Hello { Name } </p>
        </div>
        </div>
      </div>
      <div data-aos="fade-down" data-aos-duration="500" data-aos-delay="100">

        <div class="chat chat-start hidden fade-in" id="success1">
        <div class="chat-header">Shivans Awasthi</div>
        <div class="chat-image avatar">
    <div class="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://media.licdn.com/dms/image/C5603AQG8bkmKRzc_Yw/profile-displayphoto-shrink_800_800/0/1661271807889?e=2147483647&v=beta&t=4coKl50b-4kyWn41Gt8kaGh9htlBH7f0k4j-HXsNGus" />
    </div>
  </div>
        <div class="chat-bubble chat-bubble-success text-white text-left max-w-full">
      <p class="text-1xl text-bold">Thanks for connecting!</p>
      </div>
      </div>
      </div>

      <div data-aos="fade-down" data-aos-duration="500" data-aos-delay="100">
      <div class="chat chat-start hidden fade-in " id="success2">
      <div class="chat-header">Shivans Awasthi</div>
      <div class="chat-image avatar">
    <div class="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://media.licdn.com/dms/image/C5603AQG8bkmKRzc_Yw/profile-displayphoto-shrink_800_800/0/1661271807889?e=2147483647&v=beta&t=4coKl50b-4kyWn41Gt8kaGh9htlBH7f0k4j-HXsNGus" />
    </div>
  </div>
      <div class="chat chat-bubble chat-bubble-success text-white text-left max-w-full">
      <p class="text-1xl text-bold">I Recieved Your message, will reach out to you soon.</p>
      </div>
      </div>
      </div>

      <br/><br/>
    </div>
    </div>

    
    <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
    <br/><br/><br/><br/>
    <div class="card bg-gray-900 glass shrink-0 w-80 min-w-sm shadow-2xl ">
      <form class="card-body " id="contact-form" name="contact-form" onSubmit={sendmail}>

        <div class="form-control ">
          <label for="from_name " class="label">
            <span class="label-text text-white">--Name</span>
          </label>
          <input onChange={handleChange} type="text" name="from_name" id="from_name" placeholder="// What should I call you" class=" input input-bordered" required />
        </div>

        <div class="form-control">
          <label for="reply_to" class="label">
            <span class="label-text text-white">--Email</span>
          </label>
          <input type="email" name="reply_to" id="reply_to" placeholder="// Enter your Email" class="input input-bordered" required />

        </div>

        <div class="form-control">
          <label for="message" class="label">
            <span class="label-text text-white">--Message</span>
          </label>          
          <textarea class="textarea textarea-bordered min-h-40" name="message" id="message" placeholder="// Let me know your thoughts" required></textarea>

        </div>

        <div class="form-control mt-6">
          <button class="btn bg-blue-700 text-white" type="submit">Send Email</button>
        </div>
      </form>
    </div>
    </div>



  </div>
</div>


</section>



) } ;



export default Contact ;