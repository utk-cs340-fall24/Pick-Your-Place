<?php

// Allow all origins (for testing purposes)
header("Access-Control-Allow-Origin: *");

// Ensure the response is JSON
header("Content-Type: application/json");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


// location of your Composer autoload.php file.
require '../vendor/autoload.php';

// NOTE: WE WILL NOT BE USING THE ACTUAL EMAIL SINCE WE DO NOT HAVE PURCHASED DOMAIN

// Replace sender@example.com with your "From" address.
$sender = 'pickurplacedomainidentitity@gmail.com';
$senderName = 'Pick Your Place Team';

// Replace recipient@example.com with a "To" address. If your account
// is still in the sandbox, this address must be verified.
$recipient = 'PickUrPlace904@gmail.com';

// Replace smtp_username with your Amazon SES SMTP user name.
$usernameSmtp = 'AKIAU5LH5V5QZPX7Z7IG';
$passwordSmtp = 'BM1CSFmMkzlRqyK+oX74XIGneD3Hg1BLrZ7Oej6vjw+X';

$host = 'email-smtp.us-east-2.amazonaws.com';
$port = 587;

// Read the raw POST data (JSON) (added this to work w bucket list data)
$input = file_get_contents("php://input");
error_log("Raw POST data: " . $input);

$data = json_decode($input, true);  // Decode JSON data to PHP associative array

// The subject line of the email
$subject = 'Amazon SES test (SMTP interface accessed using PHP)';

// Check if the bucket list data exists
if ($data && is_array($data)) { //not passing this condition.
    // Prepare the body of the email with the bucket list data
    $bodyText = "Here is the user's bucket list:\n\n";
    $bodyHtml = "<h1>User's Bucket List</h1><ul>";

    foreach ($data as $cityObject) {
        $bodyText .= "- {$cityObject['name']}, {$cityObject['country']}\n";
        $bodyHtml .= "<li>{$cityObject['name']}, {$cityObject['country']}</li>";
    }

    $bodyHtml .= "</ul>";

    $mail = new PHPMailer(true);

    try {
        // Specify the SMTP settings.
        $mail->isSMTP();
        $mail->setFrom($sender, $senderName);
        $mail->Username   = $usernameSmtp;
        $mail->Password   = $passwordSmtp;
        $mail->Host       = $host;
        $mail->Port       = $port;
        $mail->SMTPAuth   = true;
        $mail->SMTPSecure = 'tls';

        // Specify the message recipients.
        $mail->addAddress($recipient);

        // Specify the content of the message.
        $mail->isHTML(true);
        $mail->Subject    = "User's Bucket List";
        $mail->Body       = $bodyHtml;
        $mail->AltBody    = $bodyText;

        // Send the email
        $mail->Send();

        echo json_encode(['success' => true, 'message' => 'Email sent successfully!']);
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'message' => "Email not sent. Error: {$mail->ErrorInfo}"]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'No valid bucket list data received']);
}

//would have gone right under subject but trying something new.
// The plain-text body of the email
/*$bodyText =  "Email Test\r\nThis email was sent through the
    Amazon SES SMTP interface using the PHPMailer class.";

// The HTML-formatted body of the email
$bodyHtml = '<h1>Email Test</h1>
    <p>This email was sent through the
    <a href="https://aws.amazon.com/ses">Amazon SES</a> SMTP
    interface using the <a href="https://github.com/PHPMailer/PHPMailer">
    PHPMailer</a> class.</p>';

$mail = new PHPMailer(true);

try {
    // Specify the SMTP settings.
    $mail->isSMTP();
    $mail->setFrom($sender, $senderName);
    $mail->Username   = $usernameSmtp;
    $mail->Password   = $passwordSmtp;
    $mail->Host       = $host;
    $mail->Port       = $port;
    $mail->SMTPAuth   = true;
    $mail->SMTPSecure = 'tls';
    $mail->addCustomHeader('X-SES-CONFIGURATION-SET', $configurationSet);

    // Specify the message recipients.
    $mail->addAddress($recipient);
    // You can also add CC, BCC, and additional To recipients here.

    // Specify the content of the message.
    $mail->isHTML(true);
    $mail->Subject    = $subject;
    $mail->Body       = $bodyHtml;
    $mail->AltBody    = $bodyText;
    $mail->Send();
    
    echo json_encode(['success' => true, 'message' => 'Email sent successfully!']);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => "Email not sent. Error: {$mail->ErrorInfo}"]);
}*/
?>