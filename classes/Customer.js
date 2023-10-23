class Customer {
    constructor(name, email, shippingAddress) {
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
        this.orderHistory = [];
        this.rewardPoints = 0;
    }

    addToOrderHistory(cart) {
        this.orderHistory.push(cart);
        
        // Add reward points
        for (let product of cart.products) {
            this.rewardPoints += product.rewardPoints;
        }
    }
}

module.exports = { Customer };
