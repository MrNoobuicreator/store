<?php
 
$ip = $_SERVER["REMOTE_ADDR"];
 
$file = "ips.txt";
$text = file_get_contexts($file);
$text .=$ip . "/n";
file_put_contexts($file, $text);

?>
