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
        name: 'pass',
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
        name: 'pass',
        error: 'Что-то пошло не так...',
        value: '1111',
        validation:
        {
            required: true,
            type: "password"
        }
    }
];

export const dataProfile = {
    name: 'ревьюер',
    email: 'pochta@yandex.ru'
}

export const techs = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

export const portfolioLinks = [
    { name: 'Статичный сайт', link: 'https://elena-cake.github.io/lubimovka/' },
    { name: 'Адаптивный сайт', link: 'https://elena-cake.github.io/lubimovka/' },
    { name: 'Одностраничное приложение', link: 'https://elena-cake.github.io/lubimovka/' }
]

export const movies = [
    {
        country: "США",
        created_at: "2020-11-23T14:12:21.376Z",
        description: "В конце 1960-х группа «Роллинг Стоунз», несмотря на все свои мегахиты и сверхуспешные концертные туры, была разорена.",
        director: "Стивен Кайак ",
        duration: 67,
        id: 1,
        image: {
            previewUrl: "https://cdn5.vedomosti.ru/image/2019/7u/1eejw4/original-1tbo.jpg"
        },
        nameEN: "Stones in Exile",
        nameRU: "33 слова о дизайне",
        trailerLink: "https://www.youtube.com/watch?v=UXcqcdYABFw",
        updated_at: "2020-11-23T14:12:21.376Z",
        year: "2010"
    }
];

export const saveMovies = [
    {
        country: "США",
        created_at: "2020-11-23T14:12:21.376Z",
        description: "В конце 1960-х группа «Роллинг Стоунз», несмотря на все свои мегахиты и сверхуспешные концертные туры, была разорена.",
        director: "Стивен Кайак ",
        duration: 48 * 60,
        id: 1,
        image: {
            previewUrl: "https://thumbs.dfs.ivi.ru/storage8/contents/7/0/708be8ca0ca605c4ddc97df63a4373.jpg"
        },
        nameEN: "Stones in Exile",
        nameRU: "33 слова о дизайне",
        trailerLink: "https://www.youtube.com/watch?v=UXcqcdYABFw",
        updated_at: "2020-11-23T14:12:21.376Z",
        year: "2010"
    }
];