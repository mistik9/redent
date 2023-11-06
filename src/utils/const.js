const photo = new URL("../image/2.jpg", import.meta.url);
const photo3 = new URL("../image/3.jpg", import.meta.url);
const photo4 = new URL("../image/4.jpg", import.meta.url);
const photo5 = new URL("../image/5.jpg", import.meta.url);
const photo6 = new URL("../image/6.jpg", import.meta.url);
const photo7 = new URL("../image/7.jpg", import.meta.url);
const photo8 = new URL("../image/8.jpg", import.meta.url);
const photo10 = new URL("../image/12.jpg", import.meta.url);

export const photos = [
    {
        link: photo,
        name: "фото стоматологии"
    },
    {
        link: photo3,
        name: "фото стоматологии"
    },
    {
        link: photo4,
        name: "фото стоматологии"
    },
    {
        link: photo5,
        name: "фото стоматологии"
    },
    {
        link: photo6,
        name: "фото стоматологии"
    },
    {
        link: photo7,
        name: "фото стоматологии"
    },
    {
        link: photo8,
        name: "фото стоматологии"
    },
    {
        link: photo10,
        name: "фото стоматологии"
    },
]

export const price_therapy = [
    {
        name: "Лечение кариеса (пломба на жевательной поверхности)",
        cost: "3 600₽"
    },
    {
        name: "Лечение кариеса (пломба на контактной поверхности)",
        cost: "3 800₽"
    },
    {
        name: "Лечение кариеса (реставрация фронтального зуба)",
        cost: "4 000₽"
    },
]

export const price_pulpitis = [
    {
        name: "Лечение пульпита: одноканальный зуб",
        cost: "от 6 100₽"
    },
    {
        name: "Лечение пульпита: двухканальный зуб",
        cost: "от 7 200₽"
    },
    {
        name: "Лечение пульпита: трехканальный зуб",
        cost: "от 8 600₽"
    },
    {
        name: "Оказание разовой помощи при острой боли",
        cost: "2 000₽"
    }

]

export const price_surgury = [
    {
        name: "Удаление зуба 3-й степени подвижности",
        cost: "1 000₽"
    },
    {
        name: "Удаление зуба 1-й степени сложности",
        cost: "1 500₽"
    },
    {
        name: "Удаление зуба 2-й степени сложности",
        cost: "2 500₽"
    },
    {
        name: "Удаление зуба 3-й степени сложности",
        cost: "5 000₽"
    },


]
export const price_casts = [
    {
        name: " Металлокерамическая коронка",
        cost: "7 000₽"
    },
    {
        name: "Цельнолитая коронка",
        cost: "4 500₽"
    },
    {
        name: "Безметалловая коронка (ZrO2 E-max)",
        cost: "13 500₽"
    },
    {
        name: "Виниры E.max (+wax up) - 1 ед.",
        cost: "20 000₽"
    },
    {
        name: "Съемный пластмассовый протез",
        cost: "16 000₽"
    },
    {
        name: "Протез с эстетическими кламмерами",
        cost: "18 000₽"
    },
    {
        name: "Бюгельное протезирование",
        cost: "25 000₽"
    }
]
export const price_implant = [
    {
        name: "Коронка на импланте (полная анатомия, диоксид циркония)",
        cost: "20 000₽"
    },
    {
        name: "Коронка на импланте (циркониевый абатмент)",
        cost: "25 000₽"
    },
    {
        name: "Установка импланта Dentium (под ключ)",
        cost: "23 000₽"
    }
]

export const price_other = [
    {
        name: "УЗ чистка зубного камня",
        cost: "2 500₽"
    },
    {
        name: "УЗ чистка зубного камня - 1 ед.",
        cost: "120₽"
    },
    {
        name: "Обезболивание (анестезия)",
        cost: "600₽"
    },
    {
        name: "Прицельный снимок",
        cost: "300₽"
    }
]

