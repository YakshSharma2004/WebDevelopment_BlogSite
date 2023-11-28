<?php
$db = new PDO("mysql:host=localhost;dbname=simple_blog", "root", "");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $author = $_POST["author"];
    $content = $_POST["content"];
    $postId = $_POST["postId"];

    $stmt = $db->prepare("INSERT INTO comments (post_id, author, content) VALUES (?, ?, ?)");
    $stmt->execute([$postId, $author, $content]);
}
?>
