<?php

require('services/DB.php');
use services\DB;
use Api\Api;
require('controllers/MenuController.php');
require('Api.php');

header('Access-Control-Allow-Origin: *');

$current_link = $_SERVER['REQUEST_URI'];



$urls = [
    '/CougarCafe/Api/MenuFavs' => ['MenuController@getFavorites'],
    '/reservations' => 'ReservationsController',
    '/about' => 'AboutController',
    '/home' => 'HomeController',
];

//check if routes are available

$availableRoute = array_keys($urls);

if(!in_array($current_link, $availableRoute)){
    header('HTTP/1.0 404 Not Found');
    exit;
}

Api::routing($current_link, $urls);

exit;