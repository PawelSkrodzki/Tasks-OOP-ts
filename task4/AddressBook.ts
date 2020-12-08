import { isStringIsEmpty } from './validation';
import { isElementExistInArray, removeFromArray } from './utils';
import { Contact, IContact } from './Contact';
import ContactGroup from './ContactGroup';

class AddressBook {
  constructor(bookName) {
    isStringIsEmpty(bookName);
    this.bookName = bookName;
    this.list = [];
    this.groups = [];
  }

  findContact(phrase) {
    validateString(phrase);

    const foundContacts = this.list.filter((contact) => contact.contains(phrase));

    return foundContacts;
  }

  addContact(contact) {
    validateClass(contact, Contact);
    if (isElementExistInArray(contact, this.list)) {
      throw new Error('Contact exist so you can not add it');
    }
    this.list.push(contact);
    return 'contact added';
  }

  removeContactFromBook(contact) {
    validateClass(contact, Contact);
    if (!isElementExistInArray(contact, this.list)) {
      throw new Error('Contact does not exist, so you can not delete it');
    }

    removeFromArray(this.list, contact);
    this.groups.forEach((group) => removeFromArray(group.contacts, contact));
    return 'Contact deleted';
  }

  addGroup(group) {
    validateClass(group, ContactGroup);
    if (isElementExistInArray(group, this.groups)) {
      throw new Error('Group exist so you can not add it');
    }
    this.groups.push(group);
    return 'group was added';
  }

  addContactToGroup(group, contact) {
    validateClass(contact, Contact);
    validateClass(group, ContactGroup);

    if (!isElementExistInArray(contact, this.list)) {
      throw new Error('Contact doest not exist in adress book list so you cannot add it');
    }

    if (isElementExistInArray(contact, group.contacts)) {
      throw new Error('Contact exist in group contacts so you cannot add it');
    }
    group.contacts.push(contact);
    return 'contact added';
  }

  removeContactFromGroup(group, contact) {
    validateClass(contact, Contact);
    if (!isElementExistInArray(contact, group.contacts)) {
      throw new Error('Contact does not exist in group, so you can not delete it');
    }
    removeFromArray(group.contacts, contact);
    return 'contact was removed';
  }

  removeGroup(group) {
    validateClass(group, ContactGroup);
    if (!isElementExistInArray(group, this.groups)) {
      throw new Error('Group does not exist, so you can not delete it');
    }

    removeFromArray(this.groups, group);
    return 'group was removed';
  }
}

export default AddressBook;
