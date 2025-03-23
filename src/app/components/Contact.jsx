import React, { useState } from "react";
import { sendmail } from "../../../public/contact";


function Contact(){

const [Name , setName] = useState("") ;


function handleChange(event){


setName(event.target.value) ;

 
}


return(

<section id="contact">
 
<div class="hero bg-base-100 min-h-screen ">

  <div class="hero-content py-10 flex-col lg:flex-row-reverse w-full">
    
    <div class="text-center lg:text-left w-fit">
      
    <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">

      <h1 class="text-5xl font-bold text-left text-white">Contact Me!</h1>

      <p class="text-left test-sm text-white py-6">Lets get connected, and start our next project with enthusiasm and a positive mindset.<br/> Contact me here, or reach out to me on my socials below!</p>
      
      <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=contact@shivansawasthi.info" target="_blank" rel="nofollow noopener"><h1 class="text-md text-white m-2 text-left text-sm">contact@shivansawasthi.info</h1></a>

      <br/>
      
      <div data-aos="fade-down" data-aos-duration="500" data-aos-delay="1000">
      <div class="chat chat-start text-left">
      <div class="chat-header text-white">Shivans Awasthi</div>
      <div class="chat-image avatar">
    <div class="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://github.com/Shivans-Awasthi/Shivans-Portfolio-Website/blob/main/images/profilepic.jpeg?raw=true" />
    </div>
  </div>
        <div class="chat-bubble chat-start rounded-xl chat-bubble-success px-1 pt-2 text-white text-left w-fit">
          <p class="text-1xl px-2" >Hello { Name } </p>
        </div>
        </div>
      </div>
      <div data-aos="fade-down" data-aos-duration="500" data-aos-delay="100">

        <div class="chat chat-start hidden fade-in" id="success1">
        <div class="chat-header text-white">Shivans Awasthi</div>
        <div class="chat-image avatar">
    <div class="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://github.com/Shivans-Awasthi/Shivans-Portfolio-Website/blob/main/images/profilepic.jpeg?raw=true" />
    </div>
  </div>
        <div class="chat-bubble chat-bubble-success rounded-xl text-white px-1 pt-2 text-left w-fit">
      <p class="text-1xl px-2">Thanks for connecting!</p>
      </div>
      </div>
      </div>

      <div data-aos="fade-down" data-aos-duration="500" data-aos-delay="100">
      <div class="chat chat-start hidden fade-in " id="success2">
      <div class="chat-header text-white">Shivans Awasthi</div>
      <div class="chat-image avatar">
    <div class="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://github.com/Shivans-Awasthi/Shivans-Portfolio-Website/blob/main/images/profilepic.jpeg?raw=true" />
    </div>
  </div>
      <div class="chat chat-bubble chat-bubble-success rounded-xl px-1 pt-2 text-white text-left w-fit">
      <p class="text-1xl px-2">I Recieved Your message, will reach out to you soon.</p>
      </div>
      </div>
      </div>

      <br/><br/>
    </div>
    </div>

    
    <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
    <br/>
    <div class="card shadow bg-neutral rounded-lg w-80 min-w-sm ">
      <form class="card-body" id="contact-form" name="contact-form" onSubmit={sendmail}>

        <div class="form-control ">
          <label for="from_name " class="label">
            <span class="label-text  text-white">Name</span>
          </label>
          <input onChange={handleChange} type="text" name="from_name" id="from_name" placeholder="What should I call you" class=" input input-bordered bg-neutral text-white rounded-lg h-10 w-full " required />
        </div>

        <div class="form-control">
          <label for="reply_to" class="label">
            <span class="label-text  text-white">Email</span>
          </label>
          <input type="email" name="reply_to" id="reply_to" placeholder="Enter your Email" class="input rounded-lg text-white input-bordered bg-neutral h-10 w-full " required />

        </div>

        <div class="form-control">
          <label for="message" class="label">
            <span class="label-text  text-white">Message</span>
          </label>          
          <textarea class="textarea textarea-bordered rounded-lg min-h-40 w-full bg-neutral text-white " name="message" id="message" placeholder="Let me know your thoughts" required></textarea>
        </div>

        <div class="form-control mt-6">
          <button class="btn btn-primary text-white" type="submit">Send Email</button>
        </div>
      </form>
    </div>
    </div>



  </div>
</div>


</section>



) } ;



export default Contact ;