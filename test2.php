<?php
/*
this library use big amount of memomy on big files like "google2.js" (about 171MB !)
if possible,use next_token() instead (but be careful)
*/

ini_set('max_execution_time', 200);
ini_set('memory_limit','256M');
header('Content-Type: text/plain');
require 'javascript-tokenizer.php';

$contents = file_get_contents('google2.js');
$tokenizer=new JavaScript_Tokenizer($contents);
$tokenizer->get_tokens();
print_r($tokenizer->get_tokens());
unset($tokenizer);

/* End of file test.php */
