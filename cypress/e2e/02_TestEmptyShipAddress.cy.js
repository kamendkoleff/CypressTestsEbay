import data from "../support/data/data"

describe('eBay Checkout as Guest', () => {

  beforeEach(() => {
    cy.setupTest();
  });

  it('test with no input in the address box ', () => {

    // Fill in the address fields with invalid input values 
    checkOut.firstNameInput(data.FIRSTNAME_INVALID);
    checkOut.lastNameInput(data.LASTNAME_INVALID);
    checkOut.addressLine1Input(data.STREETADDRESS_INVALID);
    checkOut.cityInput(data.CITY_INVALID);
    checkOut.postalCodeInput(data.ZIP_INVALID);
    checkOut.emailInput(data.IMAIL_INVALID);
    checkOut.emailConfirmInput(data.EMAILCONFIRM_INVALID);
    checkOut.phoneNumberRequidInput(data.PHONE_INVALID);
    checkOut.pressDoneButton();

    // Validate the error messages for each field
    checkOut.assertFirstNameErrorMessage();
    checkOut.assertLastNameErrorMessage();
    checkOut.assertLine1Error();
    checkOut.assertCityError();
    checkOut.assertPostalCodeError();
    checkOut.assertEmailError();
    checkOut.assertEmailConfirmError();
    checkOut.assertPhoneNumberRequiredError();


  })
})