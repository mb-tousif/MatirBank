// function section
function getInput(fieldId){
    const inputField = document.getElementById(fieldId);
    if(inputField != 'number' && inputField <1){
        alert('Please enter valid Number!!!')
    }else{
      let inputValue = inputField.value;
      let value = parseFloat(inputValue);
      inputField.value = "";
      return value;
    }
    
}
function updateMoney(fieldId, amount) {
   const updateTag = document.getElementById(fieldId);
   const balanceTag = parseFloat(updateTag.innerText);
   const currentBalance = balanceTag + amount;
   updateTag.innerText = currentBalance;
}
function updateBalance(amount,saving){
    const totalBalance = document.getElementById('balance');
    const balanceTag = parseFloat(totalBalance.innerText);
    let currentBalance;
    if(saving == true){
      currentBalance = balanceTag + amount;
    }else{
      currentBalance = balanceTag - amount;
    }
     
    totalBalance.innerText = currentBalance;
}
// function updateBalance2(amount){
//     const totalBalance = document.getElementById('balance');
//     const balanceTag = parseFloat(totalBalance.innerText);
//     const currentBalance = balanceTag - amount;
//     totalBalance.innerText = currentBalance;
// }
// Event handler
document.getElementById("depositBtn").addEventListener('click', function(){
  let transaction = getInput("depositAmt");
  updateMoney("depositTotal", transaction);
  updateBalance(transaction, true);
  // updateBalance(transaction);
  //  console.log(transaction);
});
document.getElementById("withdraw-button").addEventListener('click', function(){
  let transaction = getInput("withdrawInput");
  updateMoney("withdrawTotal", transaction);
  updateBalance(transaction, false);
  // updateBalance2(transaction);
  //  console.log(transaction);
});