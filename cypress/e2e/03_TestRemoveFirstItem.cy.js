
describe('eBay Checkout as Guest', () => {

    beforeEach(() => {
      cy.setupTest();
    });
  
    it('test to remove first item and check form "Confirm And Pay" updates', () => {
    
      checkOut.removeFirstItemCheckout();
      checkOut.assertItemNumberChanged();
      
      })
    })