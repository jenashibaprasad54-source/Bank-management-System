let balance = 10000;

function depositMoney() {
    let amount = Number(document.getElementById("amount").value);

    if (amount <= 0 || isNaN(amount)) {
        alert("Please enter a valid amount!");
        return;
    }

    balance = balance + amount;

    document.getElementById("balance").innerText = balance;

    let history = document.getElementById("history");

    let item = document.createElement("li");
    item.innerText = "Deposited: ₹" + amount;

    history.appendChild(item);

    document.getElementById("amount").value = "";
}

function withdrawMoney() {
    let amount = Number(document.getElementById("amount").value);

    if (amount <= 0 || isNaN(amount)) {
        alert("Please enter a valid amount!");
        return;
    }

    if (amount > balance) {
        alert("Insufficient Balance!");
        return;
    }

    balance = balance - amount;

    document.getElementById("balance").innerText = balance;

    let history = document.getElementById("history");

    let item = document.createElement("li");
    item.innerText = "Withdrawn: ₹" + amount;

    history.appendChild(item);

    document.getElementById("amount").value = "";
}
