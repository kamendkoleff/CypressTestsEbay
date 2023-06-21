
import data from "../support/data/data"
  
  describe('eBay Checkout as Guest', () => {
  
    beforeEach(() => {
      cy.setupTest();
    });

  it('Checkout with one item, input all address fields and Done', () => {

    // Fill in the address fields with valid input values
    checkOut.firstNameInput(data.FIRSTNAME_VALID);
    checkOut.lastNameInput(data.LASTNAME_VALID);
    checkOut.addressLine1Input(data.STREETADDRESS_VALID);
    checkOut.cityInput(data.CITY_VALID);
    checkOut.postalCodeInput(data.ZIP_VALID);
    checkOut.emailInput(data.IMAIL_VALID);
    checkOut.emailConfirmInput(data.EMAILCONFIRM_VALID);
    checkOut.phoneNumberRequidInput(data.PHONE_VALID);
    checkOut.pressDoneButton();
    //Assert the correctly input data, takes you to the payment page 
    checkOut.assertSelectPayment()


  })
})