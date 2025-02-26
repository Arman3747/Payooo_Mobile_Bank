// alert(); // to check if it works;

// console.log("hello world!");

// step1 : get element by id.
document.getElementById("login-btn")
    .addEventListener("click",function(event){
        event.preventDefault();
        const accountNumber=document.getElementById("account-number").value;
        const pin=document.getElementById("pin").value;
        const convertedPin = parseInt(pin);

        if(accountNumber.length === 11)
        {
            console.log(typeof pin);
            if(convertedPin === 1234)
            {
                // console.log("OK. PIN is correct");
                window.location.href="./main.html";
            }else{
                alert("Incorrect Pin.")
            }
            
        }
        else{
            alert("Account Number is incorrect.");
        }

        console.log(accountNumber,pin);



})

