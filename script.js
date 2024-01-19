// reference the tbody
let tbody = document.getElementById("shopcart");
    
// create  element variables
let tableRow = document.createElement("tr");
let cell1 = document.createElement("td");
let cell2 = document.createElement("td");
let cell3 = document.createElement("td");
let cell4 = document.createElement("td");
let cell5 = document.createElement("td");
let cell6 = document.createElement("td");

let link = document.createElement("a");
let icon = document.createElement("i");
let image = document.createElement("img");
let heading = document.createElement("h5");
let input = document.createElement("input");
let priceHeading = document.createElement("h5");
let deleteButton = document.createElement("button");

let itemname = "";
let itemdis = "";
let itemprice = 0;

// image sources
let imghoodie1 = "Picture/hoodies/hoodies 1.webp";
let itemval = 1;


// adding item to cart function
function itemtocart(itemval) {

    switch (item) {
        case 1:
            itemdis = "SUNDRIED HOODIE<br>-VIOLET";
            itemname = "";
            itemprice = 2999.00;
            break;
        case 2:
            itemdis = "SUNDRIED HOODIE<br>-VIOLET";
            itemname = "";
            itemprice = 2999.00;
            break;
        case 3:
            itemdis = "SUNDRIED HOODIE<br>-VIOLET";
            itemname = "";
            itemprice = 2999.00;
            break;
        case 4:
            itemdis = "SUNDRIED HOODIE<br>-VIOLET";
            itemname = "";
            itemprice = 2999.00;
            break;
        case 5:
            itemdis = "SUNDRIED HOODIE<br>-VIOLET";
            itemname = "";
            itemprice = 2999.00;
            break;
        case 6:
            itemdis = "SUNDRIED HOODIE<br>-VIOLET";
            itemname = "";
            itemprice = 2999.00;
            break;
    }

    // create the first cell with a delete button
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";

    // Add an event listener to the delete button to remove the table row
    deleteButton.addEventListener("click", function() {
    // Get the reference to the parent row and remove it
    let rowToRemove = deleteButton.closest("tr");
    rowToRemove.remove();
    });

    cell1.appendChild(deleteButton);
    tableRow.appendChild(cell1);

    // create the second cell with an image
    image.src = imghoodie1; //sets image
    cell2.appendChild(image);
    tableRow.appendChild(cell2);

    // create the third cell with a heading
    heading.innerHTML = itemdis; //sets text
    cell3.appendChild(heading);
    tableRow.appendChild(cell3);

    // create the fourth cell with a price
    cell4.innerHTML = "₱" +  itemprice; //sets price
    tableRow.appendChild(cell4);

    // create the fifth cell with a number input
    input.className = "quantity";
    input.value = "1";
    input.min = "1";  // set the minimum value
    input.max = "50"; // set the maximum value
    input.type = "number";
    cell5.appendChild(input);
    tableRow.appendChild(cell5);

    // add an event listener to update the total when the input changes
    input.addEventListener("input", function() {
        updateTotal();
    });
  
    cell5.appendChild(input);
    tableRow.appendChild(cell5);
  
    // create the sixth cell with a price
    priceHeading.innerHTML = "₱" + itemprice;
    cell6.appendChild(priceHeading);
    tableRow.appendChild(cell6);

    // append the table row to the tbody
    tbody.appendChild(tableRow);
}

// function to update the total based on the quantity input
function updateTotal() {
    let quantity = parseInt(input.value); // convert the input value to an integer
    let unitPrice = 2999.00; // replace with the actual unit price

    // calculate the total and update the content of cell 6
    let total = quantity * unitPrice;
    priceHeading.innerHTML = "₱" + total.toFixed(2); // display the total with 2 decimal places
}

// Sample data
var item = {
    name: "itemA",
    price: 1234,
    quantity: 2
};
/*
// Convert the JavaScript object to JSON
//var jsonData = JSON.stringify(item);

// Send a POST request to a PHP script
fetch('ecomweb.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: item,
})
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
})
.catch((error) => {
    console.error('Error:', error);
});
*/
// show hide function to combine the pages together in one html
function show(shown, hidden) {
    document.getElementById(shown).style.display = "block";
    document.getElementById(hidden).style.display = "none";
    return false;
}