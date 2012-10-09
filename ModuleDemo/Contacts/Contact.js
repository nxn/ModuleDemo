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

