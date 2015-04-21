describe('Address Book', function() {
	/*
		beforeEach(function(done){
			addressBook.getInitialContacts(function(){
				done();
			});
		});
	
	*/
	it('should be able to add a contact',function(done){
		var addressBook = new AddressBook();
		var thisContact = new Contact();
		
		addressBook.addContact(thisContact);
		expect(addressBook.getContact(0)).toBe(thisContact);
		done();
	});
});