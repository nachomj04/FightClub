<?php
$correo = $_POST['correo'];
$password = $_POST['password'];


$host = "localhost";
$dbname = "FightClub";
$user = "user1";
$password_db = "123456";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $user, $password_db);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "INSERT INTO clientes (correo, password) VALUES (?, ?)";
    $stmt= $conn->prepare($sql);
    $stmt->execute([$correo, $password]);

    echo "Datos introducidos con éxito.";
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}

$conn = null;
?>