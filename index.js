// index.js

document.addEventListener('DOMContentLoaded', function () {
    // Select the input field after the DOM is ready
    const inputField = document.querySelector('#my-input');

    // Function to add a movie to the event
    function addMovie(event) {
        event.preventDefault();

        // Get the input field value
        const movieTitle = inputField.value;

        const movie = document.createElement('li');
        const movieTitleSpan = document.createElement('span');
        movieTitleSpan.textContent = movieTitle;

        movieTitleSpan.addEventListener('click', crossOffMovie);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.addEventListener('click', deleteMovie);

        movie.appendChild(movieTitleSpan);
        movie.appendChild(deleteBtn);

        const movieList = document.querySelector('ul');
        movieList.appendChild(movie);

        inputField.value = '';

        // Display a message
        message.textContent = 'Movie added!';
    }

    // Function to mark a movie as watched
    function crossOffMovie(event) {
        event.target.classList.toggle('checked');
        // Display a different message based on whether the movie was watched or added back
        if (event.target.classList.contains('checked')) {
            message.textContent = 'Movie watched!';
        } else {
            message.textContent = 'Movie added back!';
        }
    }

    // Function to delete a movie
    function deleteMovie(event) {
        event.target.parentNode.remove();
        // Display a message
        message.textContent = 'Movie deleted!';
    }

    // Example usage:
    const form = document.querySelector('form');
    form.addEventListener('submit', addMovie);
});
