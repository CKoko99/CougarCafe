<?php

namespace Api\Controllers;
use services\DB;
use Exception;

class ReservationController{

    public $conn = null;

    public function __construct()
    {
        $this->conn = (new DB()) ->database();
    }

    public function getReservations(){
        try{
            //allow headers
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Headers: *');

            $sql = "SELECT * FROM Reservations";
            $result = $this->conn->query($sql);
            $data = [];
            if($result->num_rows > 0){
                while($row = $result->fetch_assoc()){
                    $data[] = $row;
                }
            } 

            echo json_encode($data, JSON_PRETTY_PRINT);
        }catch(Exception $e){
            var_dump( $e->getMessage());
        }
    }
    public function getReservationsByDate(){
        try{
            //allow headers
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Headers: *');

            $data = json_decode(file_get_contents("php://input"), true);
            $date = $data['date'];

            $sql = "SELECT * FROM Reservations WHERE date = '$date'";
            $result = $this->conn->query($sql);
            $data = [];
            if($result->num_rows > 0){
                while($row = $result->fetch_assoc()){
                    $data[] = $row;
                }
            } 
            echo json_encode($data, JSON_PRETTY_PRINT);
        }catch(Exception $e){
            var_dump( $e->getMessage());
        }
    }

    public function addReservation(){
        try{
            //allow headers
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Headers: *');

            $data = json_decode(file_get_contents("php://input"), true);
            $name = $data['name'];
            $email = $data['email'];
            $phone = $data['phone'];
            $date = $data['date'];
            $time = $data['time'];
            $guests = $data['guests'];
            //validate data before inserting
            if(empty($name) || empty($email) || empty($phone) || empty($date) || empty($time) || empty($guests)){
                echo json_encode(['message' => 'All fields are required'], JSON_PRETTY_PRINT);
                return;
            }

            $sql = "INSERT INTO Reservations (name, email, phone, date, time, party_size) VALUES ('$name', '$email', '$phone', '$date', '$time', '$guests')";
            $result = $this->conn->query($sql);
            if($result){
                echo json_encode(['message' => 'Reservation Added Successfully'], JSON_PRETTY_PRINT);
            }else{
                echo json_encode(['message' => 'Reservation Failed'], JSON_PRETTY_PRINT);
            }
        }catch(Exception $e){
            var_dump( $e->getMessage());
        }
    }
}