<?php
 
$ip = $_SERVER["REMOTE_ADDR"];
 
$file = fopen("ips.txt","a+");
 
fwrite($file,$testing);

?>
