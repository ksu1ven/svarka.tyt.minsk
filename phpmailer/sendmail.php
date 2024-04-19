<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Файлы phpmailer
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$description = $_POST['description'];

$mail = new PHPMailer(true);
try {
    $msg = "ok";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;
    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера GMAIL
    $mail->Username   = 'ksu1ven'; // Логин на почте
    $mail->Password   = 'Sosna1139200Dub'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('ksu1ven@mail.ru', 'Oksana'); // Адрес самой почты и имя отправителя
    // Получатель письма
    $mail->addAddress('ksu1ven@mail.ru');  
    // Прикрипление файлов к письму
if (!empty($_FILES['image']['name'][0])) {
    for ($ct = 0; $ct < count($_FILES['image']['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['image']['name'][$ct]));
        $filename = $_FILES['image']['name'][$ct];
        if (move_uploaded_file($_FILES['image']['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
        } else {
            $msg .= 'Неудалось прикрепить файл ' . $uploadfile;
        }
    }   
}
        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);
    
        $mail->Subject = 'Новый заказ';
        $mail->Body    = "<b>Имя:</b> $name <br>
        <b>Телефон:</b> $phone<br><br>
        <b>Комментарий:</b><br>$description";
// Проверяем отравленность сообщения
if ($mail->send()) {
    echo "$msg";
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}
} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}