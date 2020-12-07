import Product from './Product'
import Cart from './Cart'

function main() {

    const product1 = new Product('Pudliszki', 100, 'Ketohup');
    // product1.addNextCategory('keczap')
    const product2 = new Product("Gryczana", 200, 'Mąka');
    // const product3 = new Product("Jan", 100, "", 5);
    const backet = new Cart("koszyk");
    // console.log(product1)
    // product1.addNextCategory('Majonezy', 'sdaassd')


    // backet.discountCart('nike20')
    // backet.addProduct(product1);
    // backet.deleteFromCart(product1);
    // backet.addProduct(product3);
    // backet.discountCart('NIke20');
    // console.log(backet);

    // console.log(backet.sumCart());
    // backet.addDiscountCode('nike20');
    // backet.sumCart();
    // console.log(backet);
    product1.addDiscount(30)
    backet.addProduct(product1)
    backet.addProduct(product2)



    backet.addDiscountCode('nike10')
    backet.sumCart()
    console.log(backet);
}

export default main