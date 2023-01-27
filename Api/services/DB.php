<?php
namespace services;
use mysqli;

//log errors
/*
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
*/
class DB{
    public $serverName = "localhost";
    public $dbUsername = "root";
    public $dbPassword = "";
    public $dbName = "cougarcafee";

    public function database()
    {

        //making connection

        $conn = new mysqli($this->serverName, $this->dbUsername, $this->dbPassword, $this->dbName);
        //Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . mysqli_connect_error());
        }

        return $conn;
    }
}