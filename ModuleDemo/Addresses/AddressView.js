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

