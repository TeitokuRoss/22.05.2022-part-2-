const express = require('express');

const { getContacts } = require('./controller/contactsController');
const { contactsController } = requier('./controller');
const app = express();
//встроенный middleware, чтобы спарсить body в объект
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).end();
});
app.post('/', (req, res) => {});
app.patch('/', (req, res) => {});
app.delete('/', (req, res) => {});

app.get('/contests', (req, res) => {
  res.status(200).send({ id: 1 });
  //создать http-запрос
  //сформировать в ответ объект-заглушку
  //200, {id:1}
});
app.post('/contests', (req, res) => {
  res.status(200).send({ id: 2 });
  //создать http-запрос
  //сформировать в ответ объект-заглушку
  //200, {id:2}
});
app.patch('/contests/1', (req, res) => {});
app.delete('/contests/1', (req, res) => {});

app.get('/contacts', (req, res) => {});

// app.get('/contacts', (req, res) => {
//   const contacts = contactsDbInstace.getContacts();
//   res.status(200).send(contacts);
// });
// app.post('/contacts', (req, res) => {
//   const { body } = req;
//   const newContact = contactsDbInstace.createContact(body);
//   res.status(201).send(newContact);
// });
app.get('/contacts', contactsController.getContacts);
app.post('/contacts', contactsController.createContact);

// параметры маршрута

// GET http://127.0.0.1:5000/contacts/55
app.get('/contacts/:id', (req, res) => {
  
});

module.exports = app;
