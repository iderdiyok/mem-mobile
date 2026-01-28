<?php

// Sicherheit: Nur POST-Anfragen erlauben
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    die('Method Not Allowed');
}

// CSRF-Schutz und Spam-Prävention
session_start();

// Konfiguration
// $empfaenger = 'mem3@mem-mobile.de';
$empfaenger = 'idsmail@mailinator.com';
$betreff = 'Neue Kontaktanfrage von MEM-Mobile Website';
$erfolg_url = '/pages/contact.html?success=1';
$fehler_url = '/pages/contact.html?error=1';

// Eingaben bereinigen und validieren
function bereinigen($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Honeypot Spam-Check (unsichtbares Feld)
if (!empty($_POST['website'])) {
    // Bot erkannt
    http_response_code(400);
    die('Spam detected');
}

// Pflichtfelder prüfen
$erforderlich = ['name', 'email', 'message', 'datenschutz'];
foreach ($erforderlich as $feld) {
    if (empty($_POST[$feld])) {
        header("Location: $fehler_url");
        exit;
    }
}

// Daten extrahieren und bereinigen
$name = bereinigen($_POST['name']);
$email = bereinigen($_POST['email']);
$telefon = !empty($_POST['phone']) ? bereinigen($_POST['phone']) : 'Nicht angegeben';
$nachricht = bereinigen($_POST['message']);
$datenschutz = $_POST['datenschutz'];

// E-Mail validieren
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: $fehler_url");
    exit;
}

// Datenschutz-Zustimmung prüfen
if ($datenschutz !== 'akzeptiert') {
    header("Location: $fehler_url");
    exit;
}

// E-Mail-Text erstellen
$email_text = "Neue Kontaktanfrage über die MEM-Mobile Website\n\n";
$email_text .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
$email_text .= "Name:      $name\n";
$email_text .= "E-Mail:    $email\n";
$email_text .= "Telefon:   $telefon\n\n";
$email_text .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
$email_text .= "Nachricht:\n\n$nachricht\n\n";
$email_text .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
$email_text .= "Zeitstempel: " . date('d.m.Y H:i:s') . "\n";
$email_text .= "IP-Adresse: " . $_SERVER['REMOTE_ADDR'] . "\n";
$email_text .= "User Agent: " . $_SERVER['HTTP_USER_AGENT'] . "\n";

// E-Mail-Header
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// E-Mail senden
$versendet = mail($empfaenger, $betreff, $email_text, $headers);

// Weiterleitung basierend auf Erfolg
if ($versendet) {
    header("Location: $erfolg_url");
} else {
    header("Location: $fehler_url");
}
exit;
?>
