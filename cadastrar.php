<?php
// Configuração da conexão com o banco de dados
$servername = "fdb1032.awardspace.net"; // Seu servidor MySQL
$username = "4050708_baseapp01"; // Seu usuário do banco de dados
$password = "AnjosDaGuarda2024#"; // Sua senha do banco de dados
$dbname = "cadastro"; // Nome do banco de dados

// Criação da conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificação de erro na conexão
if ($conn->connect_error) {
  die("Conexão falhou: " . $conn->connect_error);
}

// Recebendo os dados do React Native
$data = json_decode(file_get_contents("php://input"), true);
$name = $data['name'];
$email = $data['email'];
$password = password_hash($data['password'], PASSWORD_DEFAULT); // Criptografando a senha

// Inserindo dados no banco
$sql = "INSERT INTO usuarios (nome, email, senha) VALUES ('$name', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => $conn->error]);
}

// Fechando a conexão
$conn->close();
?>
