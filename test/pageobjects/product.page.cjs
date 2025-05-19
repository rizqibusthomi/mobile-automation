class ProductsPage {
    get title() { return $('//android.widget.TextView[@text="PRODUCTS"]'); } // Static element
    get cartIcon() { return $('//android.view.ViewGroup[@content-desc="test-Cart"]'); }
  
    // Dynamic selector (item name bisa berbeda-beda)
    productItemByName(name) {
      return $(`//android.widget.TextView[@text="${name}"]`);
    }
  
    // Dynamic selector for "Add to Cart" button
    addToCartButtonByName(name) {
      return $(`//android.widget.TextView[@text="${name}"]/../..//android.widget.TextView[@text="ADD TO CART"]`);
    }
  
    async addItemToCart(name) {
      const addBtn = await this.addToCartButtonByName(name);
      await addBtn.click();
    }
  }
  
  module.exports = new ProductsPage();
  