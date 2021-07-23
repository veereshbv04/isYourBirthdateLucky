const date = document.querySelector("#datepicker");
const luckyNumber = document.querySelector("#luckynumber");

const outputDiv = document.querySelector(".output");

const checkButton = document.querySelector("#check");

const outputlucky = "<div><h2>Heeey You are a Lucky <h2><img width='100%' src='' /></div>"
const outputnotlucky = "<div><h1>Sorry ,Your Birthdate is not a lucky number </h1></div>"

checkButton.addEventListener("click",()=>{
    

    const dateString = ((date.value).split('-')).join("");
    var sum=0;
    // converting string to letter
    console.log("ss");
    for( ele in dateString){
        sum = sum + Number(ele);
    }

    const luckyno = Number(luckyNumber.value);

    // Checking if Date is divisible by Lucky Number
    
    if (sum%luckyno === 0){
        console.log("lucky");
        return outputDiv.innerHTML = outputlucky;
    }
    else{
            return outputDiv.innerHTML = outputlucky;
            console.log("NOt Lucky");
    }
    
})
