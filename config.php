<?php
// SMTP Configuration
define('SMTP_HOST', 'smtp.vantistax-digital.co.za'); // Your website's SMTP host (e.g., mail.yourwebsite.com) my email is Google Workspace so I use smtp.gmail.com
define('SMTP_PORT', 587); // 465 for SSL, 587 for TLS
define('SMTP_USERNAME', 'blackelephantholdingsza@gmail.com'); // Use an email from your domain
define('SMTP_PASSWORD', 'kvjc qjgr meso lywc'); // Email password

// Sender details (MUST be from the website's domain)
define('EMAIL_FROM', 'Boyandlovu@gmail.com'); 
define('EMAIL_FROM_NAME', 'Website enquires');

// Recipient details (Must be the website email as well)
define('EMAIL_TO', 'blackelephantholdingsza@gmail.com');
define('EMAIL_TO_NAME', 'Vantistax Team');

// Email settings
define('EMAIL_SUBJECT', 'New Contact Form Submission');
?>
