<?php

namespace Api;

use Exception;
class Api{
    public static function routing($current_link, $urls){
        try{
            foreach($urls as $index => $url){
                if($index != $current_link){
                    continue;
                }

                $route_element = explode('@', $url[0]);
                $className = $route_element[0];
                $methodName = $route_element[1]; 

                if(!file_exists('controllers/'.$className.'.php')){
                    throw new Exception('Controller not found');
                }

                $class = "Api\Controllers\\".$className;
                $object = new $class();
                $object -> $methodName();

            }
        }catch(Exception $e){
            echo($e->getMessage());
        }
    }
}