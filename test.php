<?php
header('Content-Type: text/plain');
require 'javascript-tokenizer.php';

$contents = file_get_contents('google.js');
$tokenizer=new JavaScript_Tokenizer($contents);
$tokenizer->get_tokens();
print_r($tokenizer->get_tokens());
unset($tokenizer);

/* End of file test.php */
