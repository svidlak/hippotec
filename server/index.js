const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/getTranslate', (req, res) => {
    res.send({
        "success": true,
        "data": {
            "en": {"hello": "hello", "welcome": "welcome", "flower guide": "flower guide"},
            "he": {
                "hello": "שלום",
                "welcome": "ברוכים הבאים",
                "flower guide": "מדריך פרחים",
                "summer": "קיץ",
                "winter": "חורף",
                "fall": "סתיו",
                "spring": "אביב",
                "blossom season": "blossom season",
                "rose": "ורדז",
                "Calla lily": "לילך",
                "sunset safari": "לויקודנדרון",
                "hypericum": "פרע",
                "orchid Phalaenopsis": "סחלב"
            },
            "ru": {
                "hello": "Здравствуйте",
                "welcome": "Добро пожаловать!",
                "flower guide": "Цветочный буклет",
                "summer": "Лето",
                "winter": "Зима",
                "fall": "Осень",
                "spring": "Весна",
                "blossom season": "Сезон цветения",
                "rose": "Роза",
                "Calla lily": "Лилия",
                "sunset safari": "Сафари",
                "hypericum": "Зверобой",
                "orchid Phalaenopsis": "Орхидея"
            },
            "jap": {
                "hello": "こんにちは",
                "welcome": "ようこそ!",
                "flower guide": "花ガイド",
                "summer": "夏",
                "winter": "冬",
                "fall": "秋",
                "spring": "春",
                "blossom season": "花の季節",
                "rose": "ローズ",
                "Calla lily": "ユリ",
                "sunset safari": "サファリ",
                "hypericum": "ヒペリカム",
                "orchid Phalaenopsis": "蘭"
            }
        }
    })
});

app.get('/getFlowers', (req, res) => {
    res.send({
        "success": true,
        "data": [{
            "name": "rose",
            "best season": "fall",
            "image link": "http://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/photo_9705.jpg?itok=44DBZcZV"
        }, {
            "name": "Calla lily",
            "best season": "summer",
            "image link": "https://www.gardenia.net/rendition.slider_detail/uploads/plant/1429882990-890258a76fbc11f3a/41305.jpg"
        }, {
            "name": "sunset safari",
            "best season": "winter",
            "image link": "http://sierraflowerfinder.blob.core.windows.net/medias/FlowerPictures/792/safari%20sunset1.jpg"
        }, {
            "name": "hypericum",
            "best season": "winter",
            "image link": "http://chrysalflowerfood.com/blog/wp-content/uploads/2014/04/Hot-Pink-Bouquet-Filled-with-Callas-Gomphrena-Hot-Pink-Princess-Roses-and-Bright-Green-Hypericum-Berries-The-French-Bouquet-James-Walton-Photo.jpg"
        }, {
            "name": "orchid Phalaenopsis",
            "best season": "winter to spring",
            "image link": "http://agroflora.ru/wp-content/uploads/2015/08/cvetok-orhidei.jpg"
        }]
    })
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));