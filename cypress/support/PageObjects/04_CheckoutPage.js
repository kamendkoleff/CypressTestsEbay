
const _removeItemCheckout = '#CART_DETAILS_REMOVE_ITEM';
const _payFirstSeller = '#PAY_ONLY_THIS_SELLER';
const _firstName = '#firstName';
const _firstNameError = "#firstName-error";
const _lastName = '#lastName';
const _lastNameError = 'lastName-error';
const _address1 = '#addressLine1';
const _adress1Error = '#addressLine1-error';
const _city = '#city';
const _cityError = '#FLOATING_LABEL_MESSAGE'
const _state = '#stateOrProvince';
const _postalCode = '#postalCode';
const _postalCodeError = '#FLOATING_LABEL_MESSAGE'
const _email = '#email';
const _emailError = 'FLOATING_LABEL_MESSAGE'
const _emailConfirm = '#emailConfirm';
const _emailConfirmError = 'FLOATING_LABEL_MESSAGE';
const _phoneNumber = '#phoneNumber';
const _phoneNumberError = '#phoneNumber-error'
const _doneButton = '#ADD_ADDRESS_SUBMIT';
const _subTotal = 'tr:nth-of-type(1) > .label > span';
const _selectPayment ='#cta-disabled-message';

class CheckOut {

    // method to take out first item from shopping cart 
    removeFirstItemCheckout() {
        return cy.get(_removeItemCheckout)
            .click()
    }
    assertItemNumberChanged() {
        return cy.get(_subTotal)
            .should('have.text', "Items (1)")
    }

    // method for paying only one seller
    payOnlyFirstSeller() {
        return cy.get(_payFirstSeller)
            .click()
    }

    firstNameInput(firstname) {
        return cy.get(_firstName)
            .click()
            .clear()
            .type(firstname)
    }
    //asserts Error input
    assertFirstNameErrorMessage() {
        return cy.get(_firstNameError)
            .should('have.text', "Error: Enter a first name.")
    }
    lastNameInput(lastname) {
        return cy.get(_lastName)
            .click()
            .clear()
            .type(lastname)
    }
    //asserts Error input
    assertLastNameErrorMessage() {
        return cy.get(_lastNameError)
            .should('have.text', 'Error: Enter a last name.')

    }
    addressLine1Input(address) {
        return cy.get(_address1)
            .click()
            .clear()
            .type(address)
    }
    //asserts Error input
    assertLine1Error() {
        return cy.get(_adress1Error)
            .should('have.text', 'Error: Enter a street address.')
    }
    cityInput(cityInput) {
        return cy.get(_city)
            .click()
            .clear()
            .type(cityInput)
    }
    //asserts Error input
    assertCityError() {
        return cy.get(_cityError)
            .should('have.text', 'Error: Enter a city.')
    }

    stateProvinceInput() {
        return cy.get(_state)
            .click()

    }
    //asserts Error input
    postalCodeInput(zipcode) {
        return cy.get(_postalCode)
            .click()
            .clear()
            .type(zipcode)
    }
    //asserts Error input
    assertPostalCodeError() {
        return cy.get(_postalCodeError)
            .should('have.text', 'Error: Enter a ZIP code.')
    }

    emailInput(emailaddress) {
        return cy.get(_email)
            .click()
            .clear()
            .type(emailaddress)
    }
    //asserts Error input
    assertEmailError() {
        return cy.get(_emailError)
            .should('have.text', 'Error: Enter an email address.')
    }
    emailConfirmInput(confirm) {
        return cy.get(_emailConfirm)
            .click()
            .clear()
            .type(confirm)
    }
    //asserts Error input
    assertEmailConfirmError() {
        return cy.get(_emailConfirmError)
            .should('have.text', 'Error: Re-enter email address.')
    }
    phoneNumberRequidInput(phone) {
        return cy.get(_phoneNumber)
            .click()
            .clear()
            .type(phone)
    }
    //asserts Error input
    assertPhoneNumberRequiredError() {
        return cy.get(_phoneNumberError)
            .should('have.text', 'Error: Please enter a phone number.')
    }
    pressDoneButton() {
        return cy.get(_doneButton)
            .click()
    }
    assertSelectPayment(){
        return cy.get(_selectPayment)
        .should('have.text','Select a payment option')
    }
}

export default CheckOut