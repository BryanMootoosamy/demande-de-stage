<?php
    require "./functions.php";
    $mailRaw = attribution('email');
    $messageRaw = attribution('message');
    $mail = sanitize($mailRaw, FILTER_SANITIZE_EMAIL);
    $mail = sanitize($mail, FILTER_VALIDATE_EMAIL);
    $message = sanitize($messageRaw, FILTER_SANITIZE_STRING);
    $content = "Nous avons bien reçu votre demande de contact avec le message suivant:
        $message
        ";
    if (isset($mail) && isset($message) && isset($content) && !empty($mail) && !empty($message) && !empty($content)) {
        mail("$mail, mootoosamy.bryan@gmail.com", "Demande de contact au sujet d'un stage.", $content);
    }