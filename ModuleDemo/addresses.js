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

var Addresses;
(function (Addresses) {
    var AddressView = (function () {
        function AddressView() {
            this.model = new Addresses.Address();
        }
        return AddressView;
    })();
    Addresses.AddressView = AddressView;    
})(Addresses || (Addresses = {}));

define([
    "require", 
    "exports"
], function (require, exports) {
    exports.Addresses = Addresses;
});
