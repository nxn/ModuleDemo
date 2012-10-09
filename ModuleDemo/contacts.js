var Contacts;
(function (Contacts) {
    var Contact = (function () {
        function Contact() {
            this.something = "something";
        }
        return Contact;
    })();
    Contacts.Contact = Contact;    
})(Contacts || (Contacts = {}));

var Contacts;
(function (Contacts) {
    var ContactView = (function () {
        function ContactView() {
            this.model = new Contacts.Contact();
        }
        return ContactView;
    })();
    Contacts.ContactView = ContactView;    
})(Contacts || (Contacts = {}));

define([
    "require", 
    "exports"
], function (require, exports) {
    exports.Contacts = Contacts;
});
