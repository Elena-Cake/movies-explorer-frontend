import { MAIN_BASE_LOCAL, MAIN_BASE_URL } from "../constans/apiConstans";
// const URL_BASE = MAIN_BASE_URL;

// для локального тестирования
const URL_BASE = MAIN_BASE_LOCAL;

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

    return fetch(`${URL_BASE}signup`, {
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
    return fetch(`${URL_BASE}signin`, {
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
    return fetch(`${URL_BASE}users/me`, {
        method: 'GET',
        headers: headers,
    })
        .then((res) => {
            return checkResponse(res)
        })
}

// изменение профайла (name, email)
export const updateProfile = (dataUser) => {
    return fetch(`${URL_BASE}users/me`, {
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
    return fetch(`${URL_BASE}movies`, {
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
    return fetch(`${URL_BASE}movies`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(dataCard)
    })
        .then((res) => {
            return checkResponse(res)
        })
}

// удалить фильм (movieId)
export const deleteMovie = (movieId) => {
    return fetch(`${URL_BASE}movies/${movieId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json'
        }
    })
        .then((res) => {
            return checkResponse(res)
        })
}
