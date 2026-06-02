# Namaste YouTube

A YouTube-inspired video streaming application built with React and Redux Toolkit. This project replicates core YouTube functionality including video browsing, search suggestions, watch page, nested comments, and responsive navigation.

## 🚀 Features

* 📺 Browse popular videos using the YouTube Data API
* 🔍 Real-time search suggestions
* ⚡ Debounced search for improved performance
* 🎬 Watch page for video playback
* 💬 Nested comments section
* 📂 Collapsible sidebar navigation
* 🗄️ Redux Toolkit for state management
* ⚛️ Built with React functional components and Hooks
* 🎨 Responsive user interface

## 🛠️ Tech Stack

* React
* Redux Toolkit
* React Router
* Tailwind CSS
* YouTube Data API v3
* JavaScript (ES6+)

## 📦 Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project directory

```bash
cd youtube-clone-react
```

3. Install dependencies

```bash
npm install
```

4. Create a `.env` file in the root directory

```env
REACT_APP_GOOGLE_API_KEY=YOUR_API_KEY
REACT_APP_YOUTUBE_VIDEOS_API=https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=
REACT_APP_YOUTUBE_SEARCH_API=https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=
```

5. Start the development server

```bash
npm start
```

## 📚 What I Learned

Through this project, I gained hands-on experience with:

* React Hooks
* Component-based architecture
* Redux Toolkit state management
* API integration
* Debouncing techniques
* React Router
* Performance optimization
* Environment variables
* Responsive UI development

## 🎯 Future Improvements

* Video search results page
* Channel pages
* Dark mode
* User authentication
* Search history
* Related videos section
* Infinite scrolling

## 👨‍💻 Author

Built as part of my React learning journey through Namaste React and expanded with additional features and improvements.
