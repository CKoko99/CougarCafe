<?php

namespace Api\Controllers;
use services\DB;
use Exception;
class MenuController{

    public $conn = null;

    public function __construct()
    {
        $this->conn = (new DB()) ->database();
    }

    public function getMenu(){
        try{
            //Getting Post Data
            //Json PLaceholder Url
            $url = "https://jsonplaceholder.typicode.com/posts";
            $ch = curl_init();

            curl_setopt($ch, CURLOPT_AUTOREFERER, TRUE);
            curl_setopt($ch, CURLOPT_HEADER, 0);
            curl_setopt($ch, CURLOPT_ENCODING, 0);
            curl_setopt($ch, CURLOPT_MAXREDIRS, 10);
            curl_setopt($ch, CURLOPT_TIMEOUT, 30);
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                "Accept: application/json",
                "Content-Type: application/json",));

            $response_data = json_decode(curl_exec($ch), true);

            var_dump( $response_data);
        }catch(Exception $e){
            var_dump( $e->getMessage());
        }
    }
    public function getFavorites(){
        try{
            //allow headers
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Headers: *');

            $sql = "SELECT * FROM Products WHERE StaffPick = 1";
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
    public function getAppetizers(){
        try{
            //allow headers
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Headers: *');

            $sql = "SELECT * FROM Products WHERE category_id = '1'";
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
    public function getSalads(){
        try{
            //allow headers
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Headers: *');

            $sql = "SELECT * FROM Products WHERE category_id = '2'";
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
    public function getEntrees(){
        try{
            //allow headers
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Headers: *');

            $sql = "SELECT * FROM Products WHERE category_id = '3'";
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
    public function getDesserts(){
        try{
            //allow headers
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Headers: *');

            $sql = "SELECT * FROM Products WHERE category_id = '4'";
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
    public function getDrinks(){
        try{
            //allow headers
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Headers: *');

            $sql = "SELECT * FROM Products WHERE category_id = '5'";
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
    //get menu by id
    public function getMenuById($id){
        try{
            //allow headers
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Headers: *');

            $sql = "SELECT * FROM Products WHERE id = '$id'";
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
}
