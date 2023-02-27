<?php

header('Content-Type: application/json; charset=utf-8');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require '../vendor/autoload.php';

function initSengdrig() {
    $response = array(
        'statusCode' => 'error',
        'status' => 'error',
        'message' => 'An error occured while sending the form. '
    );

    if (!$_GET && !array_key_exists('msg', $_GET)) {
        echo json_encode($response);
        return false;
    }

    $dotenv = Dotenv\Dotenv::createImmutable('../');
    $dotenv->load();

    $email = new SendGrid\Mail\Mail();
    $sendgrid = new SendGrid($_ENV['SENDGRID_API_KEY']);
    $msg = $_GET['msg'];

    $email->addTo("kontakt@piotrkaluza.pl");
    $email->setFrom("website@piotrkaluza.pl");
    $email->setSubject("Contact form webdev.piotrkaluza.pl");
    $email->addContent("text/html", $msg);

    try {
        $sendgridResponse = $sendgrid->send($email);
        $response = array(
            'statusCode' => $sendgridResponse->statusCode(),
            'status' => 'success',
            'message' => 'Your form has been sent.'
        );
    } catch (Exception $e) {
        $response = array(
            'statusCode'=> 400,
            'status' => 'error',
            'message' => 'An error occured while sending the form. '
        );
    }

    echo json_encode($response);
    
}

function initPhpMailer() {
    $response = array(
        'statusCode' => 'error',
        'status' => 'error',
        'message' => 'An error occured while sending the form. '
    );

    if (!$_GET && !array_key_exists('msg', $_GET)) {
        echo json_encode($response);
        return false;
    }

    $msg = $_GET['msg'];

    $to      = 'kontakt@piotrkaluza.pl';
    $subject = 'Contact form webdev.piotrkaluza.pl';
    $message = 'hello';
    $headers = 'From: website@piotrkaluza.pl'       . "\r\n" .
                 'Reply-To: webmaster@example.com' . "\r\n" .
                 'X-Mailer: PHP/' . phpversion();

    $to = 'kontakt@piotrkaluza.pl'; 
    $from = 'website@piotrkaluza.pl'; 
    $fromName = 'webdev piotrkaluza'; 
    $subject = "Contact form webdev.piotrkaluza.pl"; 
    $htmlContent = $msg;
     
    // Set content-type header for sending HTML email 
    $headers = "MIME-Version: 1.0" . "\r\n"; 
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 
     
    // Additional headers 
    $headers .= 'From: '.$fromName.'<'.$from.'>' . "\r\n"; 

    try {
        mail($to, $subject, $htmlContent, $headers);
        
        $response = array(
            'statusCode' => 202,
            'status' => 'success',
            'message' => 'Your form has been sent.'
        );
    } catch (Exception $e) {
        $response = array(
            'statusCode'=> 400,
            'status' => 'error',
            'message' => 'An error occured while sending the form. '
        );
    }

    echo json_encode($response);
    
}


// initSendgrid();
initPhpMailer();

?>