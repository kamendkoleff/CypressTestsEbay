const  _removeFirstItem = '#cart-remove-item';
const  _checkOut = '#cta-top';
const  _guestBtn = '#gxo-btn';

class ShoppingCart {

  // method to take out an item from shopping cart 
  removeFirstItemFromCart() {
      return cy.get(_removeFirstItem)
  }
  
  goToCheckOut() {
      return cy.get(_checkOut).click()
  }

  continueAsAGuest() {
      return cy.get(_guestBtn).click()
  }
}

export default ShoppingCart