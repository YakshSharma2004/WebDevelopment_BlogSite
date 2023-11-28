document.addEventListener("DOMContentLoaded", function () {
    // Fetch blog posts and display them
    fetchBlogPosts();

    // Fetch comments and display them
    fetchComments();

    // Add click event listeners to blog posts
    const blogPosts = document.querySelectorAll('.blog-post');
    blogPosts.forEach(post => {
        post.addEventListener('click', function () {
            // Highlight the clicked post and store its ID
            blogPosts.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

function fetchBlogPosts() {
    // Dummy data for blog posts
    const blogPosts = [
        { id: 1, title: "First Post", author: "John Doe", content: "This is the content of the first post." },
        { id: 2, title: "Second Post", author: "Jane Smith", content: "This is the content of the second post." }
        // Add more posts as needed
    ];

    const blogPostsContainer = document.getElementById("blog-posts");

    blogPosts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("blog-post");
        postElement.dataset.postId = post.id; // Store post ID as a data attribute
        postElement.innerHTML = `<h2>${post.title}</h2><p><strong>Author:</strong> ${post.author}</p><p>${post.content}</p>`;
        blogPostsContainer.appendChild(postElement);
    });
}

function fetchComments() {
    // Dummy data for comments
    const comments = [
        { author: "Alice", content: "Great post!", postId: 1 },
        { author: "Bob", content: "I enjoyed reading this.", postId: 1 }
        // Add more comments as needed
    ];

    const commentsContainer = document.getElementById("comments");

    comments.forEach(comment => {
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");
        commentElement.innerHTML = `<p><strong>${comment.author}:</strong> ${comment.content}</p>`;
        commentsContainer.appendChild(commentElement);
    });
}

function submitComment() {
    const author = document.getElementById("comment-author").value;
    const content = document.getElementById("comment-content").value;

    // Get the post ID from the active blog post
    const activePost = document.querySelector('.blog-post.active');
    if (!activePost) {
        alert("Please select a blog post before submitting a comment.");
        return;
    }
    const postId = activePost.dataset.postId;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "save_comment.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            fetchComments(); // Refresh comments after submission
            document.getElementById("comment-author").value = "";
            document.getElementById("comment-content").value = "";
        }
    };
    xhr.send(`author=${encodeURIComponent(author)}&content=${encodeURIComponent(content)}&postId=${postId}`);
}
