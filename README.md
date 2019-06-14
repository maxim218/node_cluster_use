# Использование кластера

Установка библиотек

```
npm install
```

Запуск кластера

```
npm start
```

Запуск обычного сервера

```
node simple.js
```

Пример запроса

```
http://localhost:5000/api/work?a=5&b=8
```

Запуск нагрузочного тестирования

```
ab -n 10000 -c 100 'http://localhost:5000/api/work?a=-100000000&b=100000001'
```

Ссылка на полезную статью

```
https://www.sitepoint.com/how-to-create-a-node-js-cluster-for-speeding-up-your-apps/
```

