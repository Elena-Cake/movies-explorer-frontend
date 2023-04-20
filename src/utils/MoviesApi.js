import { MOVIES_BASE_URL } from "../constans/apiConstans";
const headers = {
    'Content-Type': 'application/json',
};

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

// запрос карточек с сервера
export const getMoviesAll = () => {
    return fetch(`${MOVIES_BASE_URL}`, {
        method: 'GET',
        headers: headers
    })
        .then((res) => {
            return checkResponse(res)
        })

}