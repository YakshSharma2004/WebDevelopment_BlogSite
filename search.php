<?php

$db = new PDO("mysql:host=localhost;dbname=assignment_02", "root", "");

$keyword = $_GET["keyword"] ?? '';
$author = $_GET["author"] ?? '';

$query = "SELECT * FROM blog_posts WHERE (title LIKE ? OR content LIKE ?) AND author LIKE ?";
$stmt = $db->prepare($query);
$stmt->execute(["%$keyword%", "%$keyword%", "%$author%"]);

$blogPosts = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach ($blogPosts as $post) {
    echo "<div class='blog-post'>";
    echo "<h2>{$post['title']}</h2>";
    echo "<p><strong>Author:</strong> {$post['author']}</p>";
    echo "<p>{$post['content']}</p>";
    echo "</div>";
}
?>
