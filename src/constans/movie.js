export const getHours = (duration) => Math.floor(duration / 60);
export const getMinuts = (duration) => duration % 60;

export const DEFAULT_VISIBLE_MOVIES = {
    LARGE_SIZE: {
        COUNT_MOVIES_VISIBLE: 12,
        STEP_MOVIES_MORE: 3
    },
    LOWER_1279PX: {
        COUNT_MOVIES_VISIBLE: 8,
        STEP_MOVIES_MORE: 2
    },
    LOWER_768PX: {
        COUNT_MOVIES_VISIBLE: 5,
        STEP_MOVIES_MORE: 2
    }
}

export const createMovieDTO = (movie, idsSavedMovies) => {
    return {
        country: movie.country || 'unknow',
        director: movie.director || 'unknow',
        duration: movie.duration,
        year: movie.year,
        description: movie.description || 'unknow',
        image: 'https://api.nomoreparties.co' + movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: 'https://api.nomoreparties.co' + movie.image.url,
        movieId: movie.id,
        nameRU: movie.nameRU || 'unknow',
        nameEN: movie.nameEN || 'unknow',
        isSaved: idsSavedMovies.includes(movie.id)
    }
}