<?php session_start(); 

if (isset($_POST["deco"])) {
    session_unset();
    session_destroy();
    header('Location:index.php');
}

?>

<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Javascript</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>
    <main>
    <?php

            if(isset($_SESSION['prenom'])){
              echo 'BONJOUR @ '.$_SESSION['prenom'];
              echo "<p>Vous êtes connecté.</p>
                    <form action='index.php' method='post'>
                      <input class='reg'  name='deco' value='Déconnexion' type='submit'/>
                    </form>";
            }
            else{ 
              echo "<p id='text-index'>Vous n'avez pas encore de compte créez-en un ! </p>
                    <a href='inscription.php'><h2 id='link-form'>S'inscrire !</h2></a>
                    <a href='connexion.php' id='link2-co'>Se connecter</a>";
            }
          ?>
        </main>
<script src="script.js"></script>
</body>