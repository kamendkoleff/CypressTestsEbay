const _firstItem = "ul.srp-results > li:first-child > div > div:nth-child(2) > a";

class SearchPage {

    getFirstElementAndClick() {
        return cy.get(_firstItem).click()
    }
}

export default SearchPage
// we should have added a couple of different items at this stage
// but due to the blocker we assume that items are added and move to 
// the Shopping Cart Page 