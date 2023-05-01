export const PATTERN_EMAIL = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}';

export const textsRegister = {
    title: "Добро пожаловать!",
    button: "Зарегистрироваться",
    question: "Уже зарегистрированы?",
    navlink: "Войти"
}

export const dataRowsRegister = [
    {
        title: 'Имя',
        name: 'name',
        error: '',
        validation:
        {
            required: true
        }
    },
    {
        title: 'E-mail',
        name: 'email',
        error: '',
        validation:
        {
            required: true,
            type: "email"
        }
    },
    {
        title: 'Пароль',
        name: 'password',
        error: 'Что-то пошло не так...',
        value: '1111',
        validation:
        {
            required: true,
            type: "password"
        }
    }
];

export const textsLogin = {
    title: "Рады видеть!",
    button: "Войти",
    question: "Ещё не зарегистрированы?",
    navlink: "Регистрация"
}

export const dataRowsLogin = [
    {
        title: 'E-mail',
        name: 'email',
        error: '',
        validation:
        {
            required: true,
            type: "email"
        }
    },
    {
        title: 'Пароль',
        name: 'password',
        error: 'Что-то пошло не так...',
        value: '1111',
        validation:
        {
            required: true,
            type: "password"
        }
    }
];


