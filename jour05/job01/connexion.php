<?php
session_start();
if (isset($_POST['submit'])) {
    $prenom = isset($_POST['prenom']) ? $_POST['prenom'] : NULL ;
    $password = htmlspecialchars($_POST['password']);
    if ($prenom && $password) {
        $connect = new PDO('mysql:host=localhost;dbname=utilisateurs;charset=utf8', 'root', '');

        $log = $connect->prepare("SELECT * FROM utilisateurs WHERE prenom = ?");
        $log->execute(array($prenom));

        $verify = $log->fetch(PDO::FETCH_ASSOC);

        if (!empty($verify)) {
                $_SESSION['prenom'] = $prenom;
                header('Location:index.php');
                exit();
            } else {
                echo "Impossible de vous authentifier correctement.";
            }
        }
    }else {
        echo "Veuillez saisir tous les champs.";
    }
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Connexion</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>
<main>
    <h1>Connexion</h1>
    <form method="post" action="connexion.php">
        <p>Prénom</p>
        <input class="input" type="text" name="prenom">
        <p>Mot de passe</p>
        <input class="input" type="password" name="password"><br/><br/>
        <input class="input" type="submit" name="submit" value="Valider"><br/>
    </form>
</main>
</body>
</html>