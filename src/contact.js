
// function sendmail() {


// var form = document.getElementById("contact-form") ;


// form.addEventListener('submit',(e) => {

//   console.log(e) ;
//   form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     emailjs.sendForm('service_cp8im5f', 'template_6q0084i', this)
//       .then(function(response) {
//         console.log('Email sent!', response.status, response.text);
//         alert("Email Sent") ;
//         document.getElementById('success').removeAttribute('hidden') ;
       
//       }, function(error) {
//         console.error('Error sending email:', error);
//         alert('Oops! Something went wrong.');
//       });
//   });

// }) ;


// }


// export default sendmail


// sendmail.js
// import emailjs from 'emailjs-com';


emailjs.init({
  publicKey: "WeIp44vGwwzstkfCg",
});


// export function sendmail(event) {
//   event.preventDefault();

//   const form = event.target;

//   emailjs.sendForm('service_cp8im5f', 'template_6q0084i', form)
//     .then(function(response) {
//       console.log('Email sent!', response.status, response.text);
//       // alert("Email Sent");
//       document.getElementById('success').removeAttribute('hidden');
//     }, function(error) {
//       console.error('Error sending email:', error);
//       alert('Oops! Something went wrong.');
//     });
// }



export function sendmail(event) {
  event.preventDefault();  // Prevent the default form submission

  const form = event.target;

  try {
    emailjs.sendForm('service_cp8im5f', 'template_6q0084i', form)
      .then(function(response) {
        console.log('Email sent successfully:', response.status, response.text);
        setTimeout(() => { document.getElementById('success1').classList.remove('hidden') ;  }, 2000);
        
        setTimeout(() => {  document.getElementById('success2').classList.remove('hidden') ; }, 5000);
        


      })
      .catch(function(error) {
        console.error('Failed to send email:', error);
        alert('Oops! Something went wrong.');
      });
  } catch (error) {
    console.error('An unexpected error occurred:', error);
    alert('An unexpected error occurred. Please try again.');
  }
}

