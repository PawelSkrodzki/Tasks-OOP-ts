import { isStringIsEmpty } from './validation';
import { isElementExistInArray, removeFromArray } from './utils';
import { IContact } from './Contact';
import { IContactGroup } from './ContactGroup';

interface IAddressBook {
  bookName: string;
  list: IContact[];
  groups: IContactGroup[];
  findContact(phrase: string): IContact[];
  addContact(contact: IContact): string;
  removeContactFromBook(contact: IContact): string;
  addGroup(group: IContactGroup): string | void;
  addContactToGroup(group: IContactGroup, contact: IContact): string | void;
  removeContactFromGroup(group: IContactGroup, contact: IContact): string | void;
}

class AddressBook implements IAddressBook {
  public bookName: string;
  public list: IContact[];
  public groups: IContactGroup[];

  constructor(bookName) {
    isStringIsEmpty(bookName);
    this.bookName = bookName;
    this.list = [];
    this.groups = [];
  }

  findContact(phrase: string): IContact[] {
    isStringIsEmpty(phrase);

    const foundContacts = this.list.filter((contact) => contact.contains(phrase));

    return foundContacts;
  }

  addContact(contact: IContact): string {
    if (isElementExistInArray(contact, this.list)) {
      throw new Error('Contact exist so you can not add it');
    }
    this.list.push(contact);
    return 'contact added';
  }

  removeContactFromBook(contact: IContact): string {
    if (!isElementExistInArray(contact, this.list)) {
      throw new Error('Contact does not exist, so you can not delete it');
    }

    removeFromArray(this.list, contact);
    this.groups.forEach((group) => removeFromArray(group.contacts, contact));
    return 'Contact deleted';
  }

  addGroup(group: IContactGroup): string | void {
    if (isElementExistInArray(group, this.groups)) {
      throw new Error('Group exist so you can not add it');
    }
    this.groups.push(group);
    return 'group was added';
  }

  addContactToGroup(group: IContactGroup, contact: IContact): string | void {
    if (!isElementExistInArray(contact, this.list)) {
      throw new Error('Contact doest not exist in adress book list so you cannot add it');
    }

    if (isElementExistInArray(contact, group.contacts)) {
      throw new Error('Contact exist in group contacts so you cannot add it');
    }
    group.contacts.push(contact);
    return 'contact added';
  }

  removeContactFromGroup(group: IContactGroup, contact: IContact): string | void {
    if (!isElementExistInArray(contact, group.contacts)) {
      throw new Error('Contact does not exist in group, so you can not delete it');
    }
    removeFromArray(group.contacts, contact);
    return 'contact was removed';
  }

  removeGroup(group: IContactGroup): string | void {
    if (!isElementExistInArray(group, this.groups)) {
      throw new Error('Group does not exist, so you can not delete it');
    }

    removeFromArray(this.groups, group);
    return 'group was removed';
  }
}

export default AddressBook;
