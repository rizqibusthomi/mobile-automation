const LoginPage = require('../pageobjects/login.page.cjs');
const ProductsPage = require('../pageobjects/product.page.cjs');

describe('Products screen test', () => {
  before('login',async () => {
    await LoginPage.login('standard_user', 'secret_sauce');
  });

  it('should display static page title', async () => {
    await expect(ProductsPage.title).toBeDisplayed();
  });

  it('should add static product to cart', async () => {
    await ProductsPage.addItemToCart('Sauce Labs Backpack');
    await expect(ProductsPage.cartIcon).toBeDisplayed();
  });

  it('should add another dynamic product to cart', async () => {
    const productName = 'Sauce Labs Bike Light'; // Dynamic name
    const productElement = await ProductsPage.productItemByName(productName);
    await expect(productElement).toBeDisplayed();
    await ProductsPage.addItemToCart(productName);
  });
});
