document.getElementById('logIn').addEventListener('click', function(){
    // console.log('btn click');
    // get user email address.
    // const emailField = document.getElementById('userEmail');
    const email = document.getElementById('userEmail').value;
    // console.log(email);
    // get user password.
    // const passwordField = document.getElementById("userPassword");
    const password = document.getElementById("userPassword").value;
    // console.log(password);
    // log-In validation....
    if(email =="decoder.2021@outlook.com" && password == 'tousif09'){
        window.location.href = "banking.html";
    }else{
        alert("Please enter valid Email or Password.");
    }
    //------if we press enter button in keyboard then happen submit click
}) 

