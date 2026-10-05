PEQON TECHNOLOGY WEBSITE
========================

Files:
- index.html
- style.css
- script.js
- contact.php
- assets/logo.png

DEPLOYMENT
1. Upload all files/folders to your hosting public_html (or equivalent).
2. Keep the assets folder next to index.html.
3. The contact form posts to contact.php.
4. The WhatsApp button uses +91 93466 03625.

EMAIL FORM
The included contact.php uses PHP mail() and sends enquiries to:
peqontechnology@gmail.com

Important: PHP mail() depends on your hosting mail configuration. If your hosting blocks or does not configure PHP mail(), use PHPMailer SMTP instead. Do not put a Gmail password directly into public HTML/JavaScript.

For production, SMTP is recommended. PHPMailer supports authenticated SMTP and is available through Composer.
