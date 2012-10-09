///<reference path="Contact.ts" />

module Contacts {
    export class ContactView {
        model: Contacts.Contact;
        constructor() {
            this.model = new Contacts.Contact();
        }
    }
}