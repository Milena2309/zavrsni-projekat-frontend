<?php
$name = $email = $surname = "";
 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["ime"]);
  $surname = test_input($_POST["prezime"]);
  $email = test_input($_POST["email"]);
  echo $name."<br>";
  echo $surname."<br>";
  echo $email;
  $admin_email = "upisati email admina primaoca";  // testirano na webhostu
  $subject = $_REQUEST['ime'];
  $comment = $_REQUEST['prezime'];
  mail($admin_email, "$subject", $comment, "From:" . $email);
}
 
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>