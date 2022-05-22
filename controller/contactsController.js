const { Contacts } = require('./../models');
module.exports.getContact = (req, res) => {
  const contacts = contactsDbInctace.getContacts();
  res.status(201).send(newContact);
};

module.exports.createContact = (req, res) => {
  const { body } = req;
  const newContact = contactsDbInctace.createContact(body);
  res.status(201).send(newContact);
};
