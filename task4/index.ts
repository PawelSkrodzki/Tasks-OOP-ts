import AddressBook from './AddressBook';
import ContactGroup from './ContactGroup';
import { Contact } from './Contact';

function main() {
  //  initializing data

  const contact1 = new Contact('Janek', 'Nowak', 'pawel@gmail.com');
  const contact2 = new Contact('Marian', 'Janusz', 'Marian@gmail.com');
  const contact3 = new Contact('Aasa', 'Jasinska', 'Marian@gmail.com');
  const contact4 = new Contact('Xasarian', 'Daniński', 'Marian@gmail.com');
  const contact5 = new Contact('MEW', 'Mariniński', 'Marian@gmail.com');
  const group1 = new ContactGroup('grupa1');
  const group2 = new ContactGroup('grupa2');
  // const group2 = new ContactGroup("grupa2");
  // const group3 = new ContactGroup("grupa3");
  const addressBook1 = new AddressBook('ksiazka');
  // const group2 = new ContactGroup("grupa2");

  // addGroupContact
  group1.addContact(contact1);
  group1.addContact(contact2);
  group2.addContact(contact1);
  group2.addContact(contact2);
  // group3.addContact(contact5);
  // console.log(group1)
  // console.log(group2)

  // removeContactFromGroup
  // group1.removeContact(contact1);
  // group1.removeContact(contact2);

  // addressbook addGroup
  addressBook1.addGroup(group1);
  addressBook1.addGroup(group2);
  // console.log(addressBook1)

  // addressbook removeGroup
  // addressBook1.removeGroupFromBook(group1)
  // console.log(addressBook1)

  // AdressBook addContact
  addressBook1.addContact(contact3);
  addressBook1.addContact(contact2);
  addressBook1.addContact(contact1);
  addressBook1.addContact(contact4);
  // console.log(addressBook1)

  // AB remove
  addressBook1.removeContactFromBook(contact1);
  console.log(addressBook1);

  // console.log(group1.contains('Mar'))
  // Ab FindPhrase
  // console.log(addressBook1)
  // console.log(addressBook1.findContact('now'))
  // addressBook1.findContact('Jan')
}

export default main;
