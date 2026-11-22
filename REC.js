let balance = 10000;

function updateBalance() {
    document.getElementById("balance").innerText = balance;
}

function getAmount() {
    let amount = Number(document.getElementById("amount").value);

    if (amount <= 0 || isNaN(amount)) {
        alert("Please enter a valid amount!");
        return null;
    }

    return amount;
}

function addHistory(message) {
    let history = document.getElementById("history");

    let item = document.createElement("li");
    item.innerText = message;

    history.appendChild(item);
}

function DepositMoney() {
    let amount = getAmount();

    if (amount === null) {
        return;
    }

    balance = balance + amount;

    updateBalance();

    addHistory("Deposited: ₹" + amount +
        " | Balance: ₹" + balance);

    document.getElementById("amount").value = "";

    alert("Deposit Successful!");
}

function WithdrawMoney() {
    let amount = getAmount();

    if (amount === null) {
        return;
    }

    if (amount > balance) {
        alert("Insufficient Balance!");
        return;
    }

    balance = balance - amount;

    updateBalance();

    addHistory("Withdrawn: ₹" + amount +
        " | Balance: ₹" + balance);

    document.getElementById("amount").value = "";

    alert("Withdraw Successful!");
}
