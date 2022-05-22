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
module.exports.getContactsById = (req, res) => {
  console.log('req.params', req.params);
  const { id } = req.params;
  const foundContacts = Contacts.getContactById(id);
  if (foundContacts) {
    res.status(200).send(foundContacts);
    return;
  } else {
  }
};
