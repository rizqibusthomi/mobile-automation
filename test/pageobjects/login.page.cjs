class LoginPage {
    get username() { return $('~test-Username'); }
    get password() { return $('~test-Password'); }
    get loginBtn() { return $('~test-LOGIN'); }
  
    async login(username, password) {
      await this.username.setValue(username);
      await this.password.setValue(password);
      await this.loginBtn.click();
    }
  }
  
  module.exports = new LoginPage();
  