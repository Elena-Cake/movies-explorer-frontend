
const BASE_URL = 'http://localhost:3000/';
const headers = {
    'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json'
}

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

// запрос регистрации
export const register = (dataUser) => {
    return fetch(`${BASE_URL}signup`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(dataUser)
    })
        .then((res) => {
            return checkResponse(res)
        })
};

// запрос авторизации
export const login = (dataUser) => {
    return fetch(`${BASE_URL}signin`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(dataUser)
    })
        .then((res) => {
            return checkResponse(res)
        })
};

// проверка токена при загрузке страницы
export const checkToken = (token) => {
    return fetch(`${BASE_URL}users/me`, {
        method: 'GET',
        headers: headers,
    })
        .then((res) => {
            return checkResponse(res)
        })
}

// загрузка данных пользователя
export const startPageProfile = () => {
    return fetch(`${this._startRequest}users/me`, {
        headers: this._headers,
    })
        .then((res) => {
            return checkResponse(res)
        })
}

// изменение профайла
export const editUserInfo = (dataUser) => {
    return fetch(`${this._startRequest}users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify(dataUser)
    })
        .then((res) => {
            return checkResponse(res)
        })
}

// поставить лайк
export const sendLike = (idCard) => {
    return fetch(`${this._startRequest}cards/${idCard}/likes`, {
        method: 'PUT',
        headers: this._headers
    })
        .then((res) => {
            return checkResponse(res)
        })
}

// удалить лайк
export const deleteLike = (idCard) => {
    return fetch(`${this._startRequest}cards/${idCard}/likes`, {
        method: 'DELETE',
        headers: this._headers
    })
        .then((res) => {
            return checkResponse(res)
        })
}