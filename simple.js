"use strict";

// подключаем библиотеку
const express = require('express');

// поднимаем сервер
const app = express();
const port = 5000;
app.listen(port);
console.log("Server port: " + port);

// получаем GET запрос
app.get("/api/work", function(request, response) {
    // выводим информацию о процессе и запросе
    console.log("Process: " + process.pid + ": " + request.url);
    // получаем переменные запроса
    const a = request.query.a;
    const b = request.query.b;
    // получаем сумму чисел на отрезке
    const s = countNumber(a, b);
    // отправляем ответ клиенту
    response.end(s.toString());
});

// функция для получения суммы чисел на отрезке
function countNumber(a, b) {
    // преобразую параметры функции к целочисленному виду
    a = parseInt(a);
    b = parseInt(b);
    // переменная для накопления суммы
    let s = 0;
    // перебираю все числа отрезка
    for(let i = a; i <= b; i++) {
        // увеличиваю сумму
        s += i;
    }
    // возвращаю полученную сумму
    return s;
}
