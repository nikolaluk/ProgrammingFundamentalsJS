const phonebook = require('../phonebook');
const Contact = require('../models/Contact');

module.exports = {
  index: (req, res) => {
    const contacts = phonebook.getContacts();

    res.render('index', {contacts});
    // TODO: load index page
  },
  addPhonebookPost:(req, res) => {
    //Get input from client
    let name = req.body.name;
    let number = req.body.number;

    //Create model
    const contact = new Contact(name, number);

    // Push model to "do"
    phonebook.addContact(contact);

    // redirect to home page
    res.redirect('/');
  }
}