class Product {
    static build(name, price) {
        const id = Math.floor(Math.random() * 1000);
        return new Product(id, name, price);
    }

    static getTaxPrice(product) {
        return (product.price * 0.1) + product.price;
    }

    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class DeposableProduct extends Product {
    depose() {
        this.deposed = true;
    }
}

const gum = Product.build('gum', 1000);
console.log(gum);

const clothes = new DeposableProduct(1, 'clothes', 2000);
const taxPrice = DeposableProduct.getTaxPrice(clothes);
console.log(taxPrice);


class ProductWithCode {
    static get CODE_PREFIX() {
        return "PRODUCT-";
    }

    constructor(id) {
        this.id = id;
        this.code = ProductWithCode.CODE_PREFIX + id;
    }
}

const product1 = new ProductWithCode('001');
console.log(ProductWithCode.CODE_PREFIX);
console.log(product1.code);