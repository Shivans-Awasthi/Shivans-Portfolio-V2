import React, { useState } from "react";
import { sendmail } from "../../../public/contact";


function Contact(){

const [Name , setName] = useState("") ;


function handleChange(event){


setName(event.target.value) ;

 
}


return(

<section id="contact">
 
<div class="hero min-h-screen ">

  <div class="hero-content font-bold flex-col lg:flex-row-reverse w-full">
    
    <div class="text-center lg:text-left w-fit">
      
    <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">

      <h1 class="text-4xl font-bold myname text-left text-black">Contact Me!</h1>

      <h1 class="text-xl border-b-4 shadow-xl border-white text-left text-black p-4">Lets get connected, and start our next project with enthusiasm and a positive mindset.<br/> Contact me here, or reach out to me on my socials below!</h1>
      
      <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=contact@shivansawasthi.info" target="_blank" rel="nofollow noopener"><h1 class="text-md text-black m-2 text-left text-sm">contact@shivansawasthi.info</h1></a>

      <br/><br/>
      
      <div data-aos="fade-down" data-aos-duration="500" data-aos-delay="1000">
      <div class="chat chat-start text-left">
      <div class="chat-header text-black">Shivans Awasthi</div>
      <div class="chat-image avatar">
    <div class="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://github.com/Shivans-Awasthi/Shivans-Portfolio-Website/blob/main/images/profilepic.jpeg?raw=true" />
    </div>
  </div>
        <div class="chat-bubble chat-start rounded-xl chat-bubble-success px-1 pt-2 text-white text-left w-fit">
          <p class="text-1xl" >Hello { Name } </p>
        </div>
        </div>
      </div>
      <div data-aos="fade-down" data-aos-duration="500" data-aos-delay="100">

        <div class="chat chat-start hidden fade-in" id="success1">
        <div class="chat-header text-black">Shivans Awasthi</div>
        <div class="chat-image avatar">
    <div class="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://github.com/Shivans-Awasthi/Shivans-Portfolio-Website/blob/main/images/profilepic.jpeg?raw=true" />
    </div>
  </div>
        <div class="chat-bubble chat-bubble-success rounded-xl text-white px-1 pt-2 text-left w-fit">
      <p class="text-1xl text-bold">Thanks for connecting!</p>
      </div>
      </div>
      </div>

      <div data-aos="fade-down" data-aos-duration="500" data-aos-delay="100">
      <div class="chat chat-start hidden fade-in " id="success2">
      <div class="chat-header text-black">Shivans Awasthi</div>
      <div class="chat-image avatar">
    <div class="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://github.com/Shivans-Awasthi/Shivans-Portfolio-Website/blob/main/images/profilepic.jpeg?raw=true" />
    </div>
  </div>
      <div class="chat chat-bubble chat-bubble-success rounded-xl px-1 pt-2 text-white text-left w-fit">
      <p class="text-1xl text-bold">I Recieved Your message, will reach out to you soon.</p>
      </div>
      </div>
      </div>

      <br/><br/>
    </div>
    </div>

    
    <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
    <br/><br/><br/><br/>
    <div class="card glass1 rounded-none w-80 min-w-sm shadow-xl ">
      <form class="card-body" id="contact-form" name="contact-form" onSubmit={sendmail}>

        <div class="form-control ">
          <label for="from_name " class="label">
            <span class="label-text text-lg text-black">Name</span>
          </label>
          <input onChange={handleChange} type="text" name="from_name" id="from_name" placeholder="What should I call you" class=" input input-bordered bg-transparent glass text-black rounded-none h-10 w-full text-lg" required />
        </div>

        <div class="form-control">
          <label for="reply_to" class="label">
            <span class="label-text text-lg text-black">Email</span>
          </label>
          <input type="email" name="reply_to" id="reply_to" placeholder="Enter your Email" class="input rounded-none text-black input-bordered bg-transparent glass h-10 w-full text-lg" required />

        </div>

        <div class="form-control">
          <label for="message" class="label">
            <span class="label-text text-lg text-black">Message</span>
          </label>          
          <textarea class="textarea rounded-none min-h-40 w-full border-b-4 border-black bg-transparent glass text-black text-lg" name="message" id="message" placeholder="Let me know your thoughts" required></textarea>

        </div>

        <div class="form-control mt-6">
          <button class="btn btn-black text-white text-lg hover:bg-white hover:text-black rounded-none" type="submit">Send Email</button>
        </div>
      </form>
    </div>
    </div>



  </div>
</div>


</section>



) } ;



export default Contact ;