describe('Login test', () => {
    it('should show login screen', async () => {
      // const loginBtn = await $('~Login');
      // await loginBtn.click();
  
      const username = await $('~test-Username');
      await username.setValue('standard_user');
  
      const password = await $('~test-Password');
      await password.setValue('secret_sauce');
  
      const submit = await $('~test-LOGIN');
      await submit.click();
  
      // Assertion
      const productTitlePage = await $('//android.widget.TextView[@text="PRODUCTS"]')
      await expect(productTitlePage).toBeDisplayed(); 
    });
  });
  