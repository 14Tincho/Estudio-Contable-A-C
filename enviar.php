<?php

$dest = 'cristianmartinc24@gmail.com';

$nombre = $_POST['nombre'];
$email = $_POST['email'];
// $email = $_POST['emailDos'];
$cuit = $_POST['cuit'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];


$contenido = $nombre.'<br>'.$asunto.'<br>'.$email.'<br>'.$cuit.'<br>'.$mensaje.'<br>';

$headers = "From: $nombre <$email>\r\n";
$headers .= "X-Mailer: PHP8\n";
$headers .= 'MIME-Version: 1.0' . "\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";


if(mail($dest,$asunto,$mensaje,$headers)){ 
    $result = '<div>Email enviado correctamente</div>';
    $_POST['nombre'] = '';
    $_POST['email'] = '';
    $_POST['asunto'] = '';
    $_POST['mensaje'] = '';
    echo "<script>alert('correo enviado exitosamente')</script>";
    echo "<script>setTimeout(\"location.href='index.php'\",10000)</script>";
}else{
    $result = '<div>Hubo un error al enviar el mensaje</div>';
}
echo $result;
// die;
?>