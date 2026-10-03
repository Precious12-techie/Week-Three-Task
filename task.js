// task two
// simple ATM PROGRAM

let balance = 50000;
let withdrawalAmount = 10000;
const pin = 1234;
const enterPin = 1234;
if (enterPin === pin) {
  console.log("pin is correct");

  console.log(`Your withdrawal Amount is :${withdrawalAmount}`);
} else {
  console.log("incorrect pin");
}
if (withdrawalAmount >= balance) {
  console.log("insufficient fund");
} else {
  withdrawalAmount <= balance;
  console.log("proceed with transaction");
}

balance = balance - withdrawalAmount;

console.log(`The new balance is : ${balance}`);

// bonus switch cases

// let checkBalance = 1000;
let money = "deposite";
let amount = 400;

switch (money) {
  case "checkBalance":
    console.log(`Your balance is: ${balance}`);

    break;

  case "deposite":
    balance = balance + amount;
    console.log(
      `You have succesully deposited :${amount} . New balance ${balance}`,
    );

    break;

  case "withdraw":
    withdrawalAmount <= balance;
    console.log("You can successfully withdraw");

    break;

  default:
    console.log("You can exit now!");
}
