const phonebook = [
	{
		name: 'Pesho',
		number: '123123123',
	},
	{
		name: 'Gosho',
		number: '123456789'
	},
	{
		name: 'Roberto',
		number: '09300098'
	}
];


function getContacts()
{
	return phonebook.slice();
}

module.exports = {
	getContacts,
}