function AddressBook(){
	var that = this;
	this.contacts = [];
	this.addContact = function(contact){
		that.contacts.push(contact);		
	};
	this.getContact = function(contactID){
		return that.contacts[contactID];	
	}
}