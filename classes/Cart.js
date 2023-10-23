class Cart {
    constructor() {
        this.products = [];
        this.total = 0;
    }

    addProduct(product) {
        this.products.push(product);
        this.total += product.price;
    }

    removeProduct(idx) {
        const product = this.products.splice(idx, 1)[0];
        this.total -= product.price;
    }
    getTotal(){
        return this.total;
    }
    clear(){
        this.products = [];
        this.total = 0;
    }
}

module.exports = { Cart };
