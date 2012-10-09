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

