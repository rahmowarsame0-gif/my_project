
//registration 
    //kaydinta emelada
let registeredEmails = [];

document.getElementById("registerForm").addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let repeatPassword = document.getElementById("repeatPassword").value;
    let message = document.getElementById("message");

   // email maran
    if(email === ""){
        message.style.color = "red";
        message.innerText = "❌ Email is required!";
        return;
    }

    // Check if email is already registered
    if(registeredEmails.includes(email)){
        message.style.color = "red";
        message.innerText = " This email is already registered!";
        return;
    }

    // Password length validation
    if(password.length < 6){
        message.style.color = "red";
        message.innerText = " Password must be at least 6 characters!";
        return;
    }

    // Password match validation
    if(password !== repeatPassword){
        message.style.color = "red";
        message.innerText = " Passwords do not match!";
        return;
    }

    // SUCCESS: register the email
    registeredEmails.push(email);

    alert("✅ Account created successfully!");
    message.style.color = "green";
    message.innerText = "Account created successfully!";

    // Reset form for new registration
    document.getElementById("registerForm").reset();

    console.log("Registered Emails:", registeredEmails); 
});


