<!DOCTYPE html>
<html lang="en">
    <head>
        <!--All the meta tags-->
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header id="headerindex">
            <div>
            <div id="ty">
                <div id="upperbarindex" class="flexed">
                <div id="Home">
                        <button id="homeindex" class="upperbarbuttons"><strong>Home</strong></button>
                        <button id="searchindex" class="upperbarbuttons"><strong>Search</strong></button>
                        <button id="signinindex" class="upperbarbuttons"><strong>Sign in</strong></button>
                    </div>
                    <div id="nameofthepage">
                        Bloggers
                    </div>
                </div>
            </div>
            </div>
        </header>
        <div id="blogbody">
            <?php
            require_once('abstractDAO.php');
            class userDAO extends abstractDAO {
                function __construct() {
                    try{
                        parent::__construct();
                    } catch(mysqli_sql_exception $e){
                        throw $e;
                    }
                }
            }
            $user = new userDAO();
            $user = $user->__construct();
            ?>
            <div class="blog"></div>
            <div class="blog"></div>
            <div class="blog"></div>
            <div class="blog"></div>
            <div class="blog"></div>
        </div>
    </body>
</html>