<?php
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$user = $_POST['user']
$password = $_POST['password'];


$host = "localhost";
$dbname = "FightClub";
$user_db = "user1";
$password_db = "123456";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $user_db, $password_db);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "INSERT INTO clientes (nombre, correo, user, password) VALUES (?, ?, ?, ?)";
    $stmt= $conn->prepare($sql);
    $stmt->execute([$nombre, $correo, $user, $password]);

    echo "Datos introducidos con éxito.";
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}

$conn = null;
?>