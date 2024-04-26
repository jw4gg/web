document.addEventListener('DOMContentLoaded', function() {
    // Sample data for posts
    const postsData = [
        { title: 'First Post', content: 'This is my first post on this blog.' },
        { title: 'Second Post', content: 'This is my second post on this blog.' },
        { title: 'Third Post', content: 'This is my third post on this blog.' }
    ];

    const postsContainer = document.getElementById('posts');

    // Function to display posts
    function displayPosts() {
        postsData.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');

            const titleElement = document.createElement('h2');
            titleElement.textContent = post.title;

            const contentElement = document.createElement('p');
            contentElement.textContent = post.content;

            postElement.appendChild(titleElement);
            postElement.appendChild(contentElement);

            postsContainer.appendChild(postElement);
        });
    }

    // Display posts when the DOM is loaded
    displayPosts();
});
