<?php
include_once 'header.php';
include_once 'main.php';

require('Api/services/DB.php');
require('Api/controllers/MenuController.php');

echo "Bump";
(new MenuController)->getMenu();
echo "Bump";
var_dump(new DB);
?>

