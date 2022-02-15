<?php
// Файлы phpmailer
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

// Переменные, которые отправляет пользователь
$material = $_POST['material'];
$wishes = $_POST['wishes'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$width = $_POST['width'];
$bottom = $_POST['bottom-size'];
$right = $_POST['right'];
$left = $_POST['left-size'];

// Формирование самого письма
$title = "Заявка с калькулятора сайта";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Выбранный материал:</b> $material<br><br>
<b>Размер (в см) верхней части:</b> $width<br><br>
<b>Размер (в см) нижней части (может быть не указан):</b> $bottom<br><br>
<b>Размер (в см) левой части (может быть не указан):</b> $left<br><br>
<b>Размер (в см) левой части (может быть не указан):</b> $right<br><br>
<b>Пожелания:</b><br>$wishes
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.timeweb.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'server@kuhni-house.ru'; // Логин на почте
    $mail->Password   = 'h29MNrgS'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('server@kuhni-house.ru', 'Сервер'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('denis9684845577@yandex.ru');  

    
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);