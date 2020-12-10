<?php
 
$ip = $_SERVER["REMOTE_ADDR"];
 
$file = fopen("ips.txt","w");
 
fwrite($file,$ip);
 
echo "This Forum has been closed by an Administrator.";
?>
