const OK = {
    CODE: 200,
    MESSAGE: 'Успешно',
};
const CREATED = {
    CODE: 201,
    USER_MESSAGE: 'Пользователь зарегестрирован',
    FILM_MESSAGE: 'Фильм добавлен',
};
const NO_VALIDATE = {
    CODE: 400,
    MESSAGE: 'Переданы некорректные данные',
    MAIL_MESSAGE: 'Неправильный формат почты',
};
const UNAUTHORIZED = {
    CODE: 401,
    MESSAGE: 'Необходима авторизация',
    MESSAGE_AUTH: 'Вы ввели неправильный логин или пароль.',
};
const FORBIDDEN = {
    CODE: 403,
    MESSAGE: 'Недостаточно прав',
};
const UNDERFINED = {
    CODE: 404,
    USER_MESSAGE: 'Пользователь не найден',
    FILM_MESSAGE: 'Фильм не найден',
    PATH_MESSAGE: 'Страница по указанному маршруту не найдена.',
    TEAPOT_MESSAGE: 'я - чайник!',
};
const CONFLICT = {
    CODE: 409,
    MESSAGE: 'Пользователь с таким email уже существует.',
};
const INTERNAL = {
    CODE: 500,
    MESSAGE: 'На сервере произошла ошибка.',
};

module.exports = { OK, CREATED, NO_VALIDATE, UNAUTHORIZED, FORBIDDEN, UNDERFINED, CONFLICT, INTERNAL };