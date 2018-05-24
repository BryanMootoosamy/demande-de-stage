<?php
    $mailRaw = attribution('recruteurmail');
    $messageRaw = attribution('recruteurmessage');
    $mail = sanitize($mailRaw, FILTER_SANITIZE_EMAIL);
    $mail = sanitize($mail, FILTER_VALIDATE_EMAIL);
    $message = sanitize($messageRaw, FILTER_SANITIZE_STRING);