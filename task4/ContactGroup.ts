import { v4 as uuid } from 'uuid';
import { isStringIsEmpty } from './validation';
import { isElementExistInArray, removeFromArray } from './utils';
import { Contact, IContact } from './Contact';

interface IContactGroup {
  id: string;
  groupName: string;
  contacts: IContact[];
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

  addContact(contact: IContact): string {
    if (isElementExistInArray(contact, this.contacts)) {
      throw new Error('Contact exist so you can not add it');
    }
    this.contacts.push(contact);
    return 'contact added';
  }

  removeContact(contact: IContact): string {
    if (!isElementExistInArray(contact, this.contacts)) {
      throw new Error('Contact does not exist, so you can not delete it');
    }

    removeFromArray(this.contacts, contact);
    return 'contact was removed';
  }

  updateGroupName(name: string): void {
    isStringIsEmpty(name);
    this.groupName = name;
  }

  contains(phrase: string): boolean {
    isStringIsEmpty(phrase);
    const foundPhrasesArray = this.contacts.filter((contact) => contact.contains(phrase));
    return foundPhrasesArray.length > 0;
  }
}

export default ContactGroup;
