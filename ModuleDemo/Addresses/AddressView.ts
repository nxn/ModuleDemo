///<reference path="Address.ts" />

module Addresses {
    export class AddressView {
        model: Addresses.Address;
        constructor() {
            this.model = new Addresses.Address();
        }
    }
}