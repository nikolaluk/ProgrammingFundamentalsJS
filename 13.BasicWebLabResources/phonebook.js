const Contact = require("./models/Contact");

const phonebook = [];

function getContacts()
{
	return phonebook.slice();
}

function addContact(contact)
{
	phonebook.push(contact);
}

module.exports = {
	getContacts,
	addContact,
}