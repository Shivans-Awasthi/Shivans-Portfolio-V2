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
  
  <div class="hero-content flex-col lg:flex-row-reverse w-full">
    
    <div class="text-center lg:text-left w-fit">
      
    <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">

      <h1 class="text-3xl font-extrabold text-left text-white">Contact Me!</h1>

      <h1 class="text-md rainbow-text text-left text-white p-4 rounded">Lets get connected, and start our next project with enthusiasm and a positive mindset.<br/> Contact me here, or reach out to me on my socials below!</h1>
      
      <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=contact@shivansawasthi.info" target="_blank" rel="nofollow noopener"><h1 class="text-md text-white m-2 text-left text-sm">contact@shivansawasthi.info</h1></a>

      <br/><br/>
      
      <div data-aos="fade-down" data-aos-duration="500" data-aos-delay="1000">
      <div class="chat chat-start text-left">
      <div class="chat-header text-white">Shivans Awasthi</div>
      <div class="chat-image avatar">
    <div class="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://github.com/Shivans-Awasthi/Shivans-Portfolio-Website/blob/main/images/profilepic.jpeg?raw=true" />
    </div>
  </div>
        <div class="chat-bubble chat-start rounded-full chat-bubble-success  px-2 py-2 text-white text-left w-fit">
          <p class="text-1xl" >Hello { Name } </p>
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
        <div class="chat-bubble chat-bubble-success rounded-full text-white px-2 py-2 text-left w-fit">
      <p class="text-1xl text-bold">Thanks for connecting!</p>
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
      <div class="chat chat-bubble chat-bubble-success rounded-full px-2 py-2 text-white text-left w-fit">
      <p class="text-1xl text-bold">I Recieved Your message, will reach out to you soon.</p>
      </div>
      </div>
      </div>

      <br/><br/>
    </div>
    </div>

    
    <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
    <br/><br/><br/><br/>
    <div class="card bg-neutral-800 rounded-xl w-80 min-w-sm shadow-xl ">
      <form class="card-body " id="contact-form" name="contact-form" onSubmit={sendmail}>

        <div class="form-control ">
          <label for="from_name " class="label">
            <span class="label-text text-white">--Name</span>
          </label>
          <input onChange={handleChange} type="text" name="from_name" id="from_name" placeholder="// What should I call you" class=" input input-bordered text-white bg-neutral-900 rounded-xl h-10 w-full text-sm" required />
        </div>

        <div class="form-control">
          <label for="reply_to" class="label">
            <span class="label-text text-white">--Email</span>
          </label>
          <input type="email" name="reply_to" id="reply_to" placeholder="// Enter your Email" class="input rounded-xl text-white input-bordered bg-neutral-900 h-10 w-full text-sm" required />

        </div>

        <div class="form-control">
          <label for="message" class="label">
            <span class="label-text text-white">--Message</span>
          </label>          
          <textarea class="textarea rounded-xl textarea-bordered min-h-40 w-full bg-neutral-900 text-white text-sm" name="message" id="message" placeholder="// Let me know your thoughts" required></textarea>

        </div>

        <div class="form-control mt-6">
          <button class="btn rounded-full border-2 bg-blue-700 text-white" type="submit">Send Email</button>
        </div>
      </form>
    </div>
    </div>



  </div>
</div>


</section>



) } ;



export default Contact ;