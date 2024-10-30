const videoData = [
    {
        id: 1,
        thumbnail: 'images/thumbnail.jpg',
        duration: '10:30',
        title: 'Amazing Video Title 1',
        channel: 'Channel Name 1',
        views: '1M',
        uploadTime: '3 months ago',
    },
    {
        id: 2,
        thumbnail: 'images/thumbnail2.jpg',
        duration: '5:20',
        title: 'Amazing Video Title 2',
        channel: 'Channel Name 2',
        views: '500K',
        uploadTime: '1 month ago',
    },
    {
        id: 3,
        thumbnail: 'images/thumbnail3.jpg',
        duration: '8:45',
        title: 'Amazing Video Title 3',
        channel: 'Channel Name 3',
        views: '200K',
        uploadTime: '2 weeks ago',
    },
    {
        id: 4,
        thumbnail: 'images/thumbnail4.jpg',
        duration: '12:00',
        title: 'Amazing Video Title 4',
        channel: 'Channel Name 4',
        views: '300K',
        uploadTime: '1 month ago',
    },
    {
        id: 5,
        thumbnail: 'images/thumbnail.jpg',
        duration: '7:15',
        title: 'Amazing Video Title 5',
        channel: 'Channel Name 5',
        views: '1.5M',
        uploadTime: '1 week ago',
    },
    {
        id: 6,
        thumbnail: 'images/thumbnail2.jpg',
        duration: '6:40',
        title: 'Amazing Video Title 6',
        channel: 'Channel Name 6',
        views: '750K',
        uploadTime: '5 days ago',
    },
    // Add more video objects as needed
];

// Generate video cards
const videosContainer = document.querySelector('.videos');
videoData.forEach((video) => {
    const videoCard = `
        <div class="video-card">
            <div class="thumbnail">
                <img src="${video.thumbnail}" alt="Video thumbnail">
                <div class="video-duration">${video.duration}</div>
            </div>
            <div class="video-info">
                <div class="channel-icon"></div>
                <div class="video-details">
                    <h3 class="video-title">${video.title}</h3>
                    <p class="channel-name">${video.channel}</p>
                    <p class="video-stats">${video.views} views • ${video.uploadTime}</p>
                </div>
            </div>
        </div>
    `;
    videosContainer.insertAdjacentHTML('beforeend', videoCard);
});

// Category selection with filter functionality
const categories = document.querySelectorAll('.category');
categories.forEach((category) => {
    category.addEventListener('click', () => {
        categories.forEach((c) => c.classList.remove('active'));
        category.classList.add('active');
        filterVideos(category.dataset.category); // Assume data-category attributes are set
    });
});

function filterVideos(category) {
    videoCards.forEach((card) => {
        const title = card.querySelector('.video-title').textContent.toLowerCase();
        // Assuming a category filter is based on title or similar logic
        card.style.display = title.includes(category) ? 'block' : 'none';
    });
}

// Toggle sidebar
const menuButton = document.querySelector('.header__menu');
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('.main');

menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    main.classList.toggle('expanded');
});

// Search functionality
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    videoCards.forEach((card) => {
        const title = card.querySelector('.video-title').textContent.toLowerCase();
        card.style.display = title.includes(searchTerm) ? 'block' : 'none';
    });
});
