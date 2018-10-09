// НЕОБХОДИМЫЕ ПАКЕТЫ И ПЕРЕМЕННЫЕ
// ==================================================
var express = require('express');
var app     = express();

// КОНФИГУРАЦИЯ ПРИЛОЖЕНИЯ
// ==================================================
// сообщаем Node где лежат ресурсы сайта
app.use(express.static(__dirname + '/public'));

// устанавливаем движок EJS для представления
app.set('view engine', 'ejs');


// УСТАНОВКА МАРШРУТОВ
// ===================================================
// главная страница — популярные изображения
app.get('/', function(req, res) {
  res.render('pages/index');
});
app.get('/anketa', function(req, res) {
  res.render('pages/anketa');
});
app.get('/vacancies', function(req, res) {
  res.render('pages/vacancies');
});
app.get('/employee', function(req, res) {
  res.render('pages/employee');
});
app.get('/career', function(req, res) {
  res.render('pages/career');
});
app.get('/manager', function(req, res) {
  res.render('pages/manager');
});
app.get('/history', function(req, res) {
  res.render('pages/history');
});
app.get('/franchising', function(req, res) {
  res.render('pages/franchising');
});
app.get('/owners', function(req, res) {
  res.render('pages/owners');
});
app.get('/menu', function(req, res) {
  res.render('pages/menu');
});
app.get('/promo', function(req, res) {
  res.render('pages/promo');
});

// ЗАПУСК СЕРВЕРА
// ==================================================
app.listen(8080);
console.log('Приложение запущено! Смотрите на http://localhost:8080');