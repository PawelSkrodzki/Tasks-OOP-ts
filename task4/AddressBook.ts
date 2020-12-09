import { isStringIsEmpty } from './validation';
import { isElementExistInArray, removeElementFromArray } from './utils';
import { IContact } from './Contact';
import { IContactGroup } from './ContactGroup';

interface IAddressBook {
  bookName: string;
  list: IContact[];
  groups: IContactGroup[];
  findContact(phrase: string): IContact[];
  addContact(contact: IContact): void;
  removeContactFromBook(contact: IContact): void;
  addGroup(group: IContactGroup): string | void;
  addContactToGroup(group: IContactGroup, contact: IContact): string | void;
  removeContactFromGroup(group: IContactGroup, contact: IContact): string | void;
}

class AddressBook implements IAddressBook {
  public bookName: string;
  public list: IContact[];
  public groups: IContactGroup[];

  constructor(bookName: string) {
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

  addContact(contact: IContact): void {
    if (isElementExistInArray(contact, this.list)) {
      throw new Error('Contact exist so you can not add it');
    }
    this.list.push(contact);
  }

  removeContactFromBook(contact: IContact): void {
    if (!isElementExistInArray(contact, this.list)) {
      throw new Error('Contact does not exist, so you can not delete it');
    }

    removeElementFromArray(this.list, contact);
    this.groups.forEach((group) => removeElementFromArray(group.contacts, contact));
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
    removeElementFromArray(group.contacts, contact);
    return 'contact was removed';
  }

  removeGroup(group: IContactGroup): string | void {
    if (!isElementExistInArray(group, this.groups)) {
      throw new Error('Group does not exist, so you can not delete it');
    }

    removeElementFromArray(this.groups, group);
    return 'group was removed';
  }
}

export default AddressBook;
