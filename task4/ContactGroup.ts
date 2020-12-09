import { v4 as uuid } from 'uuid';
import { isStringIsEmpty } from './validation';
import { isElementExistInArray, removeElementFromArray } from './utils';
import { Contact, IContact } from './Contact';

interface IContactGroup {
  id: string;
  groupName: string;
  contacts: IContact[];
  addContact(contact: IContact): void;
  removeContact(contact: IContact): void;
  updateGroupName(name: string): void;
  isElementContains(phrase: string): boolean;
}

class ContactGroup implements IContactGroup {
  public id: string;
  public groupName: string;
  public contacts: IContact[];
  constructor(groupName) {
    isStringIsEmpty(groupName);
    this.id = uuid();
    this.groupName = groupName;
    this.contacts = [];
  }

  addContact(contact: IContact): void {
    if (isElementExistInArray(contact, this.contacts)) {
      throw new Error('Contact exist so you can not add it');
    }
    this.contacts.push(contact);
  }

  removeContact(contact: IContact): void {
    if (!isElementExistInArray(contact, this.contacts)) {
      throw new Error('Contact does not exist, so you can not delete it');
    }

    removeElementFromArray(this.contacts, contact);
  }

  updateGroupName(name: string): void {
    isStringIsEmpty(name);
    this.groupName = name;
  }

  isElementContains(phrase: string): boolean {
    isStringIsEmpty(phrase);
    const foundPhrasesArray = this.contacts.filter((contact) => contact.contains(phrase));
    return foundPhrasesArray.length > 0;
  }
}

export { ContactGroup, IContactGroup };
