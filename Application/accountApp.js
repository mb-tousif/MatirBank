//---------Transaction Section-------------

//----DepositBtn Event---------
// document.getElementById("depositBtn").addEventListener("click", function () {
// //   alert("Deposit BTN Clicked");
//     let depositField = document.getElementById("depositAmt");
//     let deposit = depositField.value;
//     // console.log("-------");
//     let depositStatus = document.getElementById("depositTotal");
//     // console.log(depositStatus.innerText);
//     let currentDepositAmt = depositStatus.innerText;
//     let updateDepositAmt =
//       parseFloat(currentDepositAmt) + parseFloat(deposit);
//       console.log(updateDepositAmt);
//     // depositStatus.innerText = "$"+updateDepositAmt;
//     //------clear deposit amt----
//     depositAmt.value = "";
// });

//------Withdraw section--------
// document.getElementById("withdrawBtn").addEventListener('click', function(){
//   let currentWithdraw = document.getElementById("withdrawAmt");
//   let withdrawText = currentWithdraw.value;
//   // console.log(withdrawText);
//   let newWithdraw = parseFloat(withdrawText);
//   //   console.log(newWithdraw);
//   //----------withdraw total-------
//   let withdrawAmt = document.getElementById("withdraw");
//   let withdrawText = withdrawAmt.innerText;
//   let widrawBalance = parseFloat(withdrawText);
//   let withdrawAmount = newWithdraw + widrawBalance;
//     withdrawAmt.innerText = withdrawAmount;
// });

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);
    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    // clear withdraw Input
    withdrawInput.value = "";
});