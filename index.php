
<?php require_once('header.php');?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <!--All the meta tags-->
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <div id="blogbody">
            <?php
            require_once('abstractDAO.php');
            $user = new abstractDAO();
            $mysqli=$user->getMysqli();
            $query='SELECT blog_title,blog_data FROM blog;';
            $blogtitle = mysqli_query($mysqli,$query);
            if (![$blogtitle]) {
                die("Query failed: " . mysqli_error($mysqli));
            }
            echo "<div class='blogtitlecontainerbig'>";
            while ($blog = mysqli_fetch_assoc($blogtitle)){
                echo "<div class='blogtitlecontainersmall'>";
                echo "<h1 class='blogtitle'>{$blog['blog_title']}</h1>";
                echo "<button class='blogviewbutton'>view</button>";
                echo "</div>";
            }echo "</div>";
            mysqli_free_result($blogtitle);
            ?>
            
        </div>
    </body>
</html>