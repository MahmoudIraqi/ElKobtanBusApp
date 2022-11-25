<?php
  $postdata = file_get_contents("php://input");
  $request = json_decode($postdata);

  @$customerName = $request->customerName;
  @$customerPhoneNumber = $request->customerPhoneNumber;
  @$time = $request->time;
  @$returnTime = $request->time;
  @$date = $request->date;
  @$ridingPoint = $request->ridingPoint;
  @$arrivingPoint = $request->arrivingPoint;
  @$passenger = $request->passenger;

  $to = "mahmoud.elsayed@simon-kucher.com";
  $from = "thefastman1991@gmail.com";
  $subject = "One way trip";
  $headers = "From: $from";
  $headers = "From: " . $from . "\r\n";
  $headers .= "Reply-To: ". $from . "\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

  $body = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Express Mail</title></head><body>";
  $body .= "<table style='width: 100%;'>";
  $body .= "<tbody><tr>";
  $body .= "<td style='border:none;'><strong>Transportation:</strong> {$busType}</td></tr>";
  $body .= "<tr><td style='border:none;'><strong>Name:</strong> {$customerName}</td></tr>";
  $body .= "<tr><td style='border:none;'><strong>Phone number:</strong> {$customerPhoneNumber}</td></tr>";
  $body .= "<tr><td style='border:none;'><strong>Departure Time:</strong> {$time}</td></tr>";
  $body .= "<tr><td style='border:none;'><strong>Departure Date:</strong> {$date}</td></tr>";
  $body .= "<tr><td style='border:none;'><strong>Departure Point:</strong> {$ridingPoint}</td></tr>";
  $body .= "<tr><td style='border:none;'><strong>Arriving Point:</strong> {$arrivingPoint}</td></tr>";
  $body .= "<tr><td style='border:none;'><strong>Passenger:</strong> {$passenger}</td>";
  $body .= "</tr>";
  $body .= "</tbody></table>";
  $body .= "</body></html>";

  if(mail($to, $subject, $body, $headers)){
    echo "Email sent successfully to $to";
  }else{
    echo "Sorry, failed while sending mail!";
  }
?>
