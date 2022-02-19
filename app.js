//------------Deposit Money-----------
document.getElementById("depositBtn").addEventListener("click", function(){
    const deposit = parseFloat(document.getElementById("depositAmt").value);
    // console.log(deposit)
    let depositMoney=document.getElementById('depositTotal');
   depositMoney.innerText = parseFloat(depositMoney.innerText) + deposit;
   document.getElementById("balance");
   balance.innerText=depositMoney.innerText;
   depositAmt.value ="";
});
//-------------Withdraw Moneu---------------
document.getElementById("withdraw-button").addEventListener("click", function(){
    const withdraw = parseFloat(document.getElementById("withdrawInput").value);
   let withdrawMoney= document.getElementById("withdrawTotal")
    withdrawMoney.innerText = parseFloat(withdrawTotal.innerText) + withdraw;
    document.getElementById("balance");
    balance.innerText = parseFloat(balance.innerText) - withdrawMoney.innerText;
    withdrawInput.value="";
});

