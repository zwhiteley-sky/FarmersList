class Cart {
    constructor() {
        this.products = [];
        this.total = 0;
    }

    addProduct(product, quantity) {
        if(product.quantity < quantity) throw `I'm sorry there are only ${product.quantity} of this product left`
        for(let i = 0; i < quantity; i++){
            this.products.push(product);
            this.total += product.price;
            product.quantity--
        }
        if(product.quantity === 0){
            product.inStock = false;
        }
        return product
    }

    removeProduct(idx) {
        const product = this.products.splice(idx, 1)[0];
        this.total -= product.price;
    }

    getTotal() {
        return this.total;
    }

    clear() {
        this.products = [];
        this.total = 0;
    }

    removeProductByName(name) {
        const idx = this.products.indexOf(p => p.name === name);
        if (idx === -1) return;
        this.removeProduct(idx);
    }
}

module.exports = { Cart };
