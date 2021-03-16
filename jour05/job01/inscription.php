<?php
session_start();

if (isset($_POST['submit'])) {
    $nom = htmlentities(trim($_POST['nom']));
    $prenom = htmlentities(trim($_POST['prenom']));
    $email = htmlentities(trim($_POST['email']));
    $password = htmlentities(trim($_POST['password']));
    $repeatpassword = htmlentities(trim($_POST['repeatpassword']));

    if ($nom && $prenom && $email && $password && $repeatpassword) {
        if ($password == $repeatpassword) {
            $password = password_hash($password, PASSWORD_BCRYPT, array('cost' => 15));

            $db = mysqli_connect('localhost', 'root', '') or die('Erreur');
            mysqli_select_db($db, 'utilisateurs');

            $request = " SELECT email FROM utilisateurs WHERE email = '" . $_POST['email'] . "' ";
            $query = mysqli_query($db, $request);
            $test_login = mysqli_fetch_array($query);

            if (!empty($test_login))
            {
            echo "Cette email existe déjà ! Veuillez en saisir un autre.";
            }else{
                $query = mysqli_query($db, "INSERT INTO utilisateurs (nom, prenom, email, password) VALUES('$nom', '$prenom', '$email','$password');");

                die("Inscription terminée. <a href='connexion.php'>Connectez-vous</a>.");
            }

        } else {
            echo "Les mots de passes doivent être identiques";
        }
    } else {
        echo "Veuillez saisir tous les champs";
    }
}
?>


<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Inscription</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>
<main>
    <h1>Inscription</h1><br/>
    <form method="post" action="inscription.php" id="form">
        <p>Nom</p>
        <input class="input" type="text" name="nom">
        <p>Prénom</p>
        <input class="input" type="text" name="prenom">
        <p>email</p>
        <input class="input" type="text" name="email">
        <p>Mot de passe</p>
        <input class="input" type="password" name="password">
        <p>Répétez votre mot de passe</p>
        <input class="input" type="password" name="repeatpassword">

        <input class="input" type="submit" name="submit" value="Valider">
    </form>
</main>
<script src="script.js"></script>
</body>
</html>