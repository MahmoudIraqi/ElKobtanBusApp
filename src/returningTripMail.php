<?php
  $postdata = file_get_contents("php://input");
  $request = json_decode($postdata);

  @$busType = $request->busType;
  @$customerName = $request->customerName;
  @$customerPhoneNumber = $request->customerPhoneNumber;
  @$time = $request->time;
  @$returnTime = $request->returnTime;
  @$date = $request->date;
  @$returnDate = $request->returnDate;
  @$ridingPoint = $request->ridingPoint;
  @$arrivingPoint = $request->arrivingPoint;
  @$passenger = $request->passenger;

  $to = "mahmoud.elsayed@simon-kucher.com";
  $from = "thefastman1991@gmail.com";
  $subject = "Returning trip mail";
  $headers = "From: $from";
  $headers = "From: " . $from . "\r\n";
  $headers .= "Reply-To: ". $from . "\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=utf-8\r\n";

  $body = "<!DOCTYPE html><html><head><meta http-equiv='Content-Language' content='en-us'><meta http-equiv='Content-Type' content='text/html; charset=utf-8'><title>Express Mail</title></head><body>";
  $body .= "<table style='width: 100%;'>";
  $body .= "<tbody>";
  $body .= "<tr><td style='border:none;'><strong>Transportation:</strong> {$busType}</td></tr>";
  $body .= "<tr><td style='border:none;'><strong>Name:</strong> {$customerName}</td></tr>";
  $body .= "<tr><td style='border:none;'><strong>Phone number:</strong> {$customerPhoneNumber}</td></tr>";
  $body .= "<tr><td style='border:none;'><strong>Departure Time:</strong> {$time}</td></tr>";
  $body .= "<tr><td style='border:none;'><strong>Returning Time:</strong> {$returnTime}</td></tr>";
  $body .= "<tr><td style='border:none;'><strong>Departure Date:</strong> {$date}</td></tr>";
  $body .= "<tr><td style='border:none;'><strong>Returning Date:</strong> {$returnDate}</td></tr>";
  $body .= "<tr><td style='border:none;'><strong>Departure Point:</strong> {$ridingPoint}</td></tr>";
  $body .= "<tr><td style='border:none;'><strong>Arriving Point:</strong> {$arrivingPoint}</td></tr>";
  $body .= "<tr><td style='border:none;'><strong>Passenger:</strong> {$passenger} </td></tr>";
  $body .= "</tbody></table>";
  $body .= "</body></html>";

  if(mail($to, $subject, $body, $headers)){
    echo "Email sent successfully to $to";
  }else{
    echo "Sorry, failed while sending mail!";
  }
?>
