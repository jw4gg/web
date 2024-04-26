document.addEventListener('DOMContentLoaded', function() {
    // Sample data for blog posts
    const postsData = [
        { title: 'First Post', content: 'This is my first post on this blog.' },
        { title: 'Second Post', content: 'This is my second post on this blog.' },
        { title: 'Third Post', content: 'This is my third post on this blog.' }
    ];

    const blogPostsContainer = document.querySelector('.blog-posts');

    // Function to display blog posts
    function displayBlogPosts() {
        postsData.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('blog-post');

            const titleElement = document.createElement('h2');
            titleElement.textContent = post.title;

            const contentElement = document.createElement('p');
            contentElement.textContent = post.content;

            postElement.appendChild(titleElement);
            postElement.appendChild(contentElement);

            blogPostsContainer.appendChild(postElement);
        });
    }

    // Display blog posts when the DOM is loaded
    displayBlogPosts();
});
