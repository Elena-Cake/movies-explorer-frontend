const BASE_URL = 'http://localhost:3000/';

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

// запрос карточек с сервера
export const getMovies = () => {
    return fetch(`${BASE_URL}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then((res) => {
            return checkResponse(res)
        })

}