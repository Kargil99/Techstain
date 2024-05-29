
document.querySelector("#cbx-contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let fname = document.querySelector("#cbxfname").value;
  let lname = document.querySelector("#cbxlname").value;
  let email = document.querySelector("#cbxemail").value;
  let phone = document.querySelector("#cbxphone").value;
  let message = document.querySelector("#cbxmessage").value;
  
   var body = 'Name: '+fname+ 'Name: '+lname+ '<br>Email: '+email+ '<br>Phone: '+phone+ '<br>Message: '+message;
   Email.send({
    Host : "smtp.gmail.com",
    Username : "mosahay.mail@gmail.com",
    Password : "qmgxhsgfgubliqav",
    To : ['techstain.adm@gmail.com','jtahir21@gmail.com'],
    // To : ['jtahir21@gmail.com'],
    From : "mosahay.mail@gmail.com",
    Subject : `${fname} Sent you a message (TechStain Contact form)`,
    Body : body
  }).then(
  // message => alert(message)
  // );
  message => {console.log(`${message}`);
  alert(`Status: Message sent successfully`)
  }).catch( function (error){
    alert(error.message);
  });

}

