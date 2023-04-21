import { MAIN_BASE_URL } from "../constans/apiConstans";
const headers = {
    'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json'
}

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res.status);
}

// запрос регистрации (name, email, password)
export const createUser = (dataUser) => {

    return fetch(`${MAIN_BASE_URL}signup`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(dataUser)
    })
        .then((res) => {
            return checkResponse(res)
        })
};

// запрос авторизации (email, password)
export const login = (dataUser) => {
    return fetch(`${MAIN_BASE_URL}signin`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(dataUser)
    })
        .then((res) => {
            return checkResponse(res)
        })
};

// получение данных пользователя 
export const getProfile = () => {
    return fetch(`${MAIN_BASE_URL}users/me`, {
        method: 'GET',
        headers: headers,
    })
        .then((res) => {
            return checkResponse(res)
        })
}

// изменение профайла (name, email)
export const updateProfile = (dataUser) => {
    return fetch(`${MAIN_BASE_URL}users/me`, {
        method: 'PATCH',
        headers: headers,
        body: JSON.stringify(dataUser)
    })
        .then((res) => {
            return checkResponse(res)
        })
}

// получение сохраненных фильмов
export const getMovies = () => {
    return fetch(`${MAIN_BASE_URL}movies`, {
        method: 'GET',
        headers: headers,
    })
        .then((res) => {
            return checkResponse(res)
        })
}

// сохранить фильм 
// (country, director, duration, year, description, image, 
//  trailerLink, thumbnail, coumovieId, movieId, nameRU, nameEN)
export const createMovie = (dataCard) => {
    return fetch(`${MAIN_BASE_URL}movies`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataCard)
    })
        .then(this._checkRes)
}

// удалить фильм (movieId)
export const deleteMovie = (movieId) => {
    return fetch(`${MAIN_BASE_URL}movies/${movieId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json'
        }
    })
        .then(this._checkRes)
}
