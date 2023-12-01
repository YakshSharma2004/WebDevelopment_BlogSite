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
        { id: 1, title: "The best exercise is the one you enjoy and will keep doing.", author: "Dr. Daniel Lieberman", content: "Dr. Daniel Lieberman, a distinguished paleoanthropologist and renowned professor of human evolutionary biology at Harvard University, has significantly contributed to our understanding of physical activity in the context of human evolution. His insightful perspective on fitness emphasizes a fundamental principle: The best exercise is the one you enjoy and will keep doing.In his book, The Story of the Human Body: Evolution, Health, and Disease, Dr. Lieberman delves into the evolutionary roots of human physical activity, shedding light on how our bodies are adapted for movement. The crucial takeaway from his research is that finding joy in exercise plays a pivotal role in its long-term sustainability. While there may be various fitness regimens and trends, Dr. Lieberman's assertion underscores the importance of personal enjoyment in physical activity. When individuals engage in exercises they find pleasurable, they are more likely to maintain consistency, leading to improved overall health and well-being. This perspective challenges the notion of a one-size-fits-all approach to fitness, encouraging individuals to explore and embrace activities that resonate with their personal preferences, making the journey towards a healthier lifestyle not only effective but also enjoyable." },

        { id: 2, title: "The best diet is one that aligns with your preferences, cultural background, and individual needs", author: "Dr. Marion Nestle", content: "As a professor of nutrition, food studies, and public health at New York University, Dr. Nestle has dedicated her career to unraveling the intricacies of the human diet. Her perspective emphasizes the importance of finding a dietary approach that not only meets nutritional requirements but is also sustainable and enjoyable. In her book, What to Eat,she navigates through the bewildering array of food choices, advocating for mindful eating and a focus on whole, unprocessed foods.Dr. Nestle's philosophy challenges rigid dietary prescriptions, acknowledging that individual preferences and  cultural contexts shape our eating habits. By aligning a diet with personal tastes and values, individuals are more likely to adopt healthier eating patterns in the long term. This holistic approach to nutrition encourages a shift from restrictive diets to a more balanced and sustainable way of eating, fostering a positive relationship with food and promoting overall well-being." },

        { id: 3, title: "Sleep is the single most effective thing you can do to reset your brain and body for health.", author: "Dr. Matthew Walker ", content: "In his research, Dr. Walker explores the multifaceted benefits of sufficient, high-quality sleep, ranging from cognitive functions and memory consolidation to emotional regulation and physical health. His assertion underscores the profound impact that sleep has on various aspects of our lives, both mental and physical.Contrary to the prevalent notion that sacrificing sleep is a badge of honor, Dr. Walker emphasizes that adequate sleep is not a luxury but a biological necessity. It serves as a foundation for optimal health, influencing everything from immune function to cardiovascular well-being. By recognizing the unparalleled power of sleep, individuals can make informed choices to prioritize this fundamental aspect of self-care, fostering resilience, and enhancing overall quality of life. Dr. Walker's research advocates for a paradigm shift that places sleep at the forefront of health-conscious decisions, emphasizing its pivotal role in promoting a vibrant and resilient mind and body." },

        { id: 4, title: "Technology is nothing. What's important is that you have a faith in people, that they're basically good and smart, and if you give them tools, they'll do wonderful things with them.", author: "Steve Jobs", content: "This insight from Jobs encapsulates a profound truth about technology—it's not just about the hardware and software but about empowering individuals to innovate and create. In an era of rapid technological advancement, it's easy to be enamored by the latest gadgets and innovations. However, Jobs reminds us that the real magic lies in the hands of people and their ability to leverage technology for positive change.Beyond the sleek designs and powerful algorithms, technology serves as a catalyst for human potential. It has the capacity to connect, inspire, and transform lives. Jobs' philosophy encourages us to view technology not as an end in itself but as a means to amplify human ingenuity. By placing faith in people and providing them with the right tools, technology becomes a force for innovation, collaboration, and ultimately, the betterment of society." },

        { id: 5, title: "Fashion is not something that exists in dresses only. Fashion is in the sky, in the street; fashion has to do with ideas, the way we live, what is happening.", author: "Coco Chanel ", content: "Coco Chanel, a pioneering figure in the world of fashion, revolutionized women's clothing by introducing timeless elegance and breaking away from conventional norms. Her perspective on fashion extends beyond the mere fabric and stitches, emphasizing its profound connection to the broader context of life.In today's context, fashion serves as a visual language, a form of self-expression that goes beyond the aesthetic. It reflects societal values, challenges norms, and responds to cultural shifts. Chanel's insight encourages us to view fashion as a mirror that reflects the spirit of the times, capturing the collective imagination of a society.Fashion becomes a means of storytelling, weaving together threads of identity, creativity, and societal change. Whether through high-end couture or street style, it is a canvas through which individuals paint narratives about themselves and the world they inhabit. Coco Chanel's perspective on fashion invites us to appreciate its depth and cultural significance, recognizing it as a dynamic and ever-evolving art form intertwined with the very fabric of human existence." },

        { id: 6, title: "Your life does not get better by chance; it gets better by change.", author: "Jim Rohn", content: "Jim Rohn's insight challenges the notion of life as a series of random events, urging us to recognize the power we hold in shaping our destinies. Lifestyle, in essence, is a reflection of our daily decisions, encompassing everything from our daily routines and relationships to our health practices and leisure activities.Embracing a conscious and intentional approach to lifestyle involves recognizing the impact of our choices on our well-being and overall satisfaction. It encourages a mindset of continuous improvement and adaptability, as positive change often stems from a willingness to evolve and embrace new perspectives.Whether in the realms of health, relationships, work, or personal development, the quality of our lives is deeply intertwined with the patterns we establish. Jim Rohn's wisdom prompts us to be architects of our destinies, guiding us to proactively shape our lifestyles with purpose, mindfulness, and a commitment to growth. In this way, lifestyle becomes a canvas upon which we paint the masterpiece of our lives, one thoughtful choice at a time." },

        { id: 7, title: "Travel far enough, you meet yourself.", author: "Pico Iyer ", content: "Pico Iyer's insight underscores the idea that travel extends beyond the mere act of moving from one place to another. It is a voyage of self-discovery, a process that unveils different facets of our character and challenges preconceived notions. By immersing ourselves in unfamiliar cultures, landscapes, and experiences, we open doors to personal growth and a broader understanding of the world.Travel becomes a catalyst for expanding horizons, fostering adaptability, and cultivating a global perspective. It encourages us to step out of our comfort zones, embrace diversity, and appreciate the interconnectedness of humanity. Beyond the monuments and landmarks, the true essence of travel lies in the connections forged, the stories shared, and the profound moments of self-reflection that occur along the way.In the words of Pico Iyer, travel is not just a physical journey; it's a transformative odyssey that allows us to encounter the richness of the world and, in the process, discover the depths of our own being." },
        { id: 8, title: "People who love to eat are always the best people.", author: " Julia Child ", content: "Julia Child, a culinary trailblazer, not only revolutionized American cooking but also imparted a philosophy that transcends the kitchen. Her words convey the idea that the enjoyment of food goes beyond mere sustenance; it is a celebration of flavors, a communal experience that brings people together.Food and drink, in Julia Child's view, serve as conduits for building relationships, fostering connections, and creating lasting memories. The act of sharing a meal becomes a shared language, a universal experience that transcends cultural boundaries. Whether it's the comforting aroma of a home-cooked dish or the clinking of glasses in a toast, these moments of culinary delight are woven into the fabric of human connection.Julia Child's perspective invites us to savor not just the flavors on our plates but the camaraderie that arises from breaking bread together. It underscores the idea that, in the realm of food and drink, the simple act of enjoying a meal is a celebration of life and the shared human experience." },

        { id: 9, title: "I would rather entertain and hope that people learned something than educate people and hope they were entertained.", author: "Walt Disney", content: "Walt Disney, the creative force behind iconic characters and beloved animations, understood the delicate balance between amusement and enlightenment. His words highlight the idea that entertainment, at its best, is a medium for both joy and enlightenment. Whether through films, theme parks, or imaginative storytelling, Disney aimed not only to captivate but also to leave audiences with valuable insights and emotions.In the realm of entertainment, this philosophy encourages creators to weave narratives that resonate emotionally while offering subtle lessons or perspectives. It emphasizes the potential for entertainment to be a vehicle for empathy, cultural understanding, and personal growth.So, the next time you find yourself immersed in a captivating story or enraptured by a performance, remember Walt Disney's wisdom. Entertainment has the remarkable ability to stir emotions, spark imagination, and, in the process, impart meaningful messages that linger long after the curtains close or the credits roll." },
        
        { id: 10, title: "In the tapestry of life, our personal stories are the threads that weave together the intricate patterns of our existence.", author: "Maya Angelou", content: "Each individual carries a unique and evolving story, a narrative crafted through moments of triumph, resilience in adversity, and the myriad choices that shape our paths. In the words of author and poet Maya Angelou,There is no greater agony than bearing an untold story inside you. Our personal stories, like precious manuscripts, hold the power to connect us with others, fostering understanding and empathy.Our tales of joy, heartbreak, and growth serve as bridges, linking the past to the present and extending into the future. They are not isolated fragments but chapters in an ongoing saga, influencing not only our perceptions but also the collective narrative of humanity. So, as we navigate the chapters of our lives, let us recognize the significance of our personal stories. They are not just chronicles of individual experiences but threads contributing to the rich tapestry of human existence. In sharing our stories, we contribute to a collective narrative that transcends boundaries, fostering unity and celebrating the diverse hues of the human spirit." }
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
