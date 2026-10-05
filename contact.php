<?php
header('Content-Type: application/json; charset=utf-8');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['ok'=>false,'message'=>'Invalid request.']); exit; }
// Honeypot field: quiet bot protection
if (!empty($_POST['website'] ?? '')) { echo json_encode(['ok'=>true,'message'=>'Thank you.']); exit; }
function clean($value){ return trim(strip_tags((string)$value)); }
$name=clean($_POST['name']??'');
$phone=clean($_POST['phone']??'');
$email=filter_var(trim($_POST['email']??''),FILTER_VALIDATE_EMAIL);
$course=clean($_POST['course']??'');
$message=clean($_POST['message']??'');
if(!$name || !$phone || !$email || !$course){ http_response_code(422); echo json_encode(['ok'=>false,'message'=>'Please complete all required fields.']); exit; }
$to='peqontechnology@gmail.com';
$subject='New PEQON Technology Course Enquiry - '.$course;
$body="New enquiry from PEQON Technology website\n\nName: $name\nPhone: $phone\nEmail: $email\nCourse: $course\nMessage: $message\n\nSent from the PEQON Technology website.";
$headers="From: PEQON Technology Website <peqontechnology@gmail.com>\r\n";
$headers.="Reply-To: ".$email."\r\n";
$headers.="Content-Type: text/plain; charset=UTF-8\r\n";
$sent=@mail($to,$subject,$body,$headers);
if($sent){echo json_encode(['ok'=>true,'message'=>'Thank you! Your enquiry has been sent to PEQON Technology.']);}
else{http_response_code(500);echo json_encode(['ok'=>false,'message'=>'Email could not be sent from this server. Please call or WhatsApp PEQON Technology.']);}
?>
