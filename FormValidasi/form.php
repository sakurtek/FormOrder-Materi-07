<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/tampilan.css">
        <script src="js/app.js"></script>
    </head>
    <body>

    <div class="kotak">
        <!--- TAMPIL ERROR -->
        <p id="error" style="display:none;"></p>

        <!-- FORM -->
        <form action="#" name="form1" method="post" onSubmit="return getValidasi();">
            <label for="email">Email: </label><br />
            <input type="email" name="email" id="email" placeholder="Enter Email">
            <div id="errmail"></div>
            <br />
            <label for="user">Password: </label><br />
            <input type="password" name="password" id="pwd" placeholder="Enter Password">
            <div id="errpwd"></div>
            <br />
            <input type="submit" name="submit" value="Sign In">
        </form>
    </div>
    </body>
</html>