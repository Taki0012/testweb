<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Process Form Data</title>
</head>
<body>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the submitted data
    $names = $_POST["name"];
    $prices = $_POST["price"];
    $quantities = $_POST["quantity"];
    $totals = $_POST["total"];

    // Display the received data
    echo "<h2>Submitted Data:</h2>";

    // Loop through the received data and display each row independently
    for ($i = 0; $i < count($names); $i++) {
        echo "<div>";
        echo "<p><strong>Name:</strong> {$names[$i]}</p>";
        echo "<p><strong>Price:</strong> {$prices[$i]}</p>";
        echo "<p><strong>Quantity:</strong> {$quantities[$i]}</p>";
        echo "<p><strong>Total:</strong> {$totals[$i]}</p>";
        echo "</div>";
        echo "<hr>";
    }
} else {
    echo "<p>No data submitted.</p>";
}
?>

</body>
</html>