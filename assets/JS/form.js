  
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "icdect2022@gmail.com",
        Password : "Icdect@2022_aec",
        To : "icdect2022@gmail.com",
          
          From : document.getElementById("email").value,
          Subject : "New Contact from",
          Body : "Name: " + document.getElementById("name").value
              + "<br> Email: " + document.getElementById("email").value
              + "<br> Subject: " + document.getElementById("subject").value
              + "<br> Message: " + document.getElementById("message").value


    }).then(
        message => alert("Message sent succesfully!")
    );
}

//  To encrpty the credentials from "view page source"
// SecureToken: "c337a73d-9a68-45bf-b7a7-55fa7fc02093",