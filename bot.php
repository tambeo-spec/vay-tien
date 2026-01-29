<?php

$token = "TOKEN_BOT_CỦA_BẠN";

$data = json_decode(file_get_contents("php://input"), true);

file_put_contents("log.txt", json_encode($data).PHP_EOL, FILE_APPEND);

$chat_id = $data["message"]["chat"]["id"];
$text = $data["message"]["text"];

file_get_contents("https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=Đã nhận: $text");

?>
