<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPmailer/Exception.php';
require 'PHPmailer/PHPMailer.php';
require 'PHPmailer/SMTP.php';

$dest = '14parajuegos14@gmail.com';
global $pass;
$pass = '14parajuegos';

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$cuit = $_POST['cuit'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];


$contenido = "<h1>Contenido del cliente</h1>
                <p><b>Nombre: ".$nombre."</b></p>
                <p><b>Asunto: ".$asunto."</b></p>
                <p><b>Email: ".$email."</b></p>
                <p><b>Cuit: ".$cuit."</b></p>
                <p><b>Mensaje: ".$mensaje ."</b></p>";

$mail = new PHPMailer(true);

try {
    $mail->SMTPDebug = 0;
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $dest;
    $mail->Password = $pass;
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom($dest, 'Martin');
    $mail->addAddress($dest);
    
    $mail->isHTML(true);
    $mail->Subject = $asunto;
    $mail->Body = $contenido;

    $mail->send();
    echo "<script>alert('correo enviado exitosamente')</script>";
    echo "<script>location.href='index.php'</script>";
} catch (Exception $e) {
    echo "Hubo un error al enviar el mensaje: {$mail->ErrorInfo}";
}

?>