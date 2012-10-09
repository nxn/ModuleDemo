var Addresses;
(function (Addresses) {
    var Address = (function () {
        function Address() {
            this.streetname = "Elm St.";
        }
        return Address;
    })();
    Addresses.Address = Address;    
})(Addresses || (Addresses = {}));

