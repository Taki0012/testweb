function addItem(itemName, itemPrice) {
    var table = document.getElementById("cart-list").getElementsByTagName('tbody')[0];

    // Check if the item is already in the table
    var existingRow = findRowByName(itemName);
    if (existingRow) {
        // If item exists, increase the quantity
        var quantityInput = existingRow.querySelector('input[name="quantity[]"]');
        quantityInput.value = parseInt(quantityInput.value) + 1;
    } else {
        // If item does not exist, add a new row
        var newRow = table.insertRow(table.rows.length);
        var cells = [];
        for (var i = 0; i < 6; i++) {
            cells.push(newRow.insertCell(i));
        }
        switch (itemName) {
            case 'BE FREE - T-SHIRTS':
                var imgsauce = "product/prod1.png";
                break;
            case 'BE FREE - WALLET':
                var imgsauce = "product/prod5.png";
                break;
            case 'BE FREE - SWEATER':
                var imgsauce = "product/prod3.png";
                break;
            case 'BE FREE - MUG':
                var imgsauce = "product/prod4.png";
                break;
            case 'BE FREE - HOODIE':
                var imgsauce = "product/prod6.png";
                break;
            case 'BE FREE - PHONE CASE':
                var imgsauce = "product/prod2.png";
                break;
        }
        cells[0].innerHTML = '<button type="button" class="remove-btn" onclick="removeRow(this)">Remove</button>';
        cells[1].innerHTML = '<img src="' + imgsauce + '" alt="Placeholder">';
        cells[2].innerHTML = '<input type="text" class="infofield" name="name[]" value="' + itemName + '" readonly>';
        cells[3].innerHTML = '<input type="number" class="infofield" name="price[]" value="' + itemPrice + '" min="0" step="0.01" readonly>';
        cells[4].innerHTML = '<input type="number" name="quantity[]" value="1" min="1" max="50">';
        cells[4].addEventListener("input", function() {
            updateTotals();
        });
        cells[5].innerHTML = '<input type="text" class="infofield" name="total[]" readonly>';
        
    }

    // Update totals for all rows
    updateTotals();
}

function findRowByName(itemName) {
    var table = document.getElementById("cart-list").getElementsByTagName('tbody')[0];
    var rows = table.getElementsByTagName('tr');

    for (var i = 0; i < rows.length; i++) {
        var nameInput = rows[i].querySelector('input[name="name[]"]');
        if (nameInput && nameInput.value === itemName) {
            return rows[i];
        }
    }

    return null;
}

function removeRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);

    // Update totals for all rows after removal
    updateTotals();
}

function updateTotals() {
    var table = document.getElementById("cart-list").getElementsByTagName('tbody')[0];
    var rows = table.getElementsByTagName('tr');

    for (var i = 0; i < rows.length; i++) {
        var quantityInput = rows[i].querySelector('input[name="quantity[]"]');
        var priceInput = rows[i].querySelector('input[name="price[]"]');
        var totalInput = rows[i].querySelector('input[name="total[]"]');

        if (quantityInput && priceInput && totalInput) {
            var quantity = parseInt(quantityInput.value);
            var price = parseFloat(priceInput.value);
            var total = quantity * price;

            totalInput.value = total.toFixed(2);
        }
    }
}

// show hide function to combine the pages together in one html
function show(shown, hidden) {
    document.getElementById(shown).style.display = "block";
    document.getElementById(hidden).style.display = "none";
    return false;
}
