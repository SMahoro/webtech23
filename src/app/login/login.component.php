<html>
<head>
  <style> </style>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<div class="outer">
  <h1 id="titel"> Mein Kalendar</h1>
  <div class="inner">
    <form method="POST" action="/">
      <div class="form-group">
        <input id="username" class="button" type="text" placeholder="Benutzername" name="username" required>
        <input id="password" class="button" type="password" placeholder="Passwort" name="password" required>
        <button id="loginbutton" class="button" type="submit" name="submitUser">Anmelden</button>
        <span id="errorMessage" class="button"></span>
      </div>
    </form>
  </div>

</div>

</body>


</html>

<!--if password is incorrect-->
<?php
if (isset($_POST['error'])&& $_POST['error']=="loginFailed"):
?>
<?php endif;
