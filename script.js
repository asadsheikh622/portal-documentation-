let totalClients = 0;
let totalIncome = 0;

document.getElementById("clientForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let documentType = document.getElementById("document").value;
    let charges = parseFloat(document.getElementById("charges").value);

    totalClients++;
    totalIncome += charges;

    document.getElementById("totalClients").innerText = totalClients;
    document.getElementById("totalIncome").innerText = totalIncome;

    let table = document.getElementById("recordTable");
    let row = table.insertRow();

    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = phone;
    row.insertCell(2).innerText = documentType;
    row.insertCell(3).innerText = charges;

    document.getElementById("clientForm").reset();
});
