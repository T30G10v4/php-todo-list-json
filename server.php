<?php

// $tasks = [[
//     "name" => "Alzarmi dal letto",
//     "isDone" => false
// ],

// [
//     "name"=> "Fare colazione",
//     "isDone"=> false
// ],

// [
//     "name"=> "Accendere il computer",
//     "isDone"=> false
// ],

// [
//     "name"=> "Collegarmi a Zoom",
//     "isDone"=> false
// ],

// [
//     "name"=> "Ascoltare la lezione",
//     "isDone"=> false
// ],

// [
//     "name"=> "Pranzare",
//     "isDone"=> false
// ],

// [
//     "name"=> "Fare l'esercizio",
//     "isDone"=> false
// ],

// [
//     "name"=> "Pushare la repo",
//     "isDone"=> false
// ],

// [
//     "name"=> "FINITO!!!",
//     "isDone"=> false
// ]
// ];

$string = file_get_contents("toDoList.json");
$tasks = json_decode($string, true);

header("Content-Type: application/json");
echo json_encode($tasks);

?>