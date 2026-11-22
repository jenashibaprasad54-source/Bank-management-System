let balance = 5000;

function deposit() {
    let amount = Number(
        document.getElementById("amount").value
    );

    if (amount > 0) {
        balance += amount;
        update("Deposited: ₹" + amount);
    } else {
        alert("Enter valid amount");
    }
}

function withdraw() {
    let amount = Number(
        document.getElementById("amount").value
    );

    if (amount > 0 && amount <= balance) {
        balance -= amount;
        update("Withdrawn: ₹" + amount);
    } else {
        alert("Insufficient balance or invalid amount");
    }
}

function update(message) {
    document.getElementById("balance").innerText = balance;

    let li = document.createElement("li");
    li.innerText = message;

    document.getElementById("history").appendChild(li);

    document.getElementById("amount").value = "";
}