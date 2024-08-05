import emailjs from '@emailjs/browser'


emailjs.init({
  publicKey: "WeIp44vGwwzstkfCg",
});

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


