const phonebook = require('../phonebook');
const Contact = require('../models/Contact');

module.exports = {
  index: (req, res) => {
    const contacts = phonebook.getContacts();

    res.render('index', { contacts });
  },
  addPhonebookPost:(req, res) => {
    // Get input from client
    let name = req.body.name;
    let number = req.body.number;

    // Create model
    const contact = new Contact(name, number);

    // Check if contacts exists
    if (phonebook.hasContact(contact)){
      return res.render('404');
    }    

    // Push model to "db"
    phonebook.addContact(contact);

    // redirect to home page
    res.redirect('/');
  }
}