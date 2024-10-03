# usePopcorn

**usePopcorn** is a user-friendly React application designed to help you search for movies, view detailed information, and manage a personal watchlist with seamless local storage support. Whether you're discovering new films or keeping track of your favorites, usePopcorn makes the process effortless and enjoyable.

## Features

- **Movie Search**: Easily search for movies using the OMDB API.
- **Detailed Movie Information**: View comprehensive details about each movie, including plot, actors, director, and ratings.
- **Watchlist Management**: Add movies to your personal watchlist and track your watched films.
- **Local Storage Persistence**: Your watchlist is saved in the browser's local storage, ensuring your data remains intact between sessions.
- **Responsive Design**: Optimized for a seamless experience across all devices.
- **Interactive UI**: Intuitive interface with dynamic components for an engaging user experience.

## Components

The project is organized into the following React components:

- **App**: The main component that manages state and renders the application layout.
- **NavBar**: Displays the logo, search bar, and the number of search results.
- **Search**: Input field for searching movies.
- **MovieList**: Displays a list of movies based on the search query.
- **Movie**: Represents an individual movie item with its poster, title, and release year.
- **MovieDetails**: Shows detailed information about a selected movie and allows adding it to the watchlist.
- **WatchedSummary**: Provides a summary of the watched movies, including average ratings and total runtime.
- **WatchedMoviesList**: Displays the list of watched movies with options to delete them.
- **Loader**: Indicates loading states during data fetching.
- **ErrorMessage**: Displays error messages when something goes wrong.
- **Box**: A reusable component that can toggle its visibility.
- **StarRating**: Allows users to rate movies with a star-based system.

## How It Works

1. **Search for Movies**:
   - Enter a movie title in the search bar.
   - The app fetches and displays a list of movies matching the query from the OMDB API.

2. **View Movie Details**:
   - Click on a movie from the search results to view detailed information.
   - The details include plot, runtime, genre, director, actors, and IMDb rating.

3. **Manage Watchlist**:
   - Rate the movie using the star rating system and add it to your watchlist.
   - View your watched movies in the watchlist, which displays average IMDb ratings, user ratings, and total runtime.
   - Remove movies from the watchlist as needed.

4. **Local Storage**:
   - All watched movies are saved in the browser's local storage, ensuring your data persists across sessions.

## Technologies Used

- **React**: For building the user interface and managing state.
- **JavaScript (ES6+)**: Core language for building the application logic.
- **CSS**: For styling components and ensuring responsive design.
- **OMDB API**: For fetching movie data.
- **Custom Hooks**: `useMovies`, `useLocalStorageState`, and `useKey` for managing specific functionalities.

## Screenshots

![image](https://github.com/user-attachments/assets/1f6136d9-c789-465a-bbc9-0f6188401bb9)
![image](https://github.com/user-attachments/assets/b446e210-82d8-4538-92c6-f21b1c557fca)


## Installation

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/UsePopcorn.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd usePopcorn
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   ```

4. **Start the application**:
   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.
