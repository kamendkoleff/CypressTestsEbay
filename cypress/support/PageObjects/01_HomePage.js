const _bannerAcc = '#gdpr-banner-accept';
const _inputBox = '#gh-ac';
const _searchBtn = '#gh-btn'

class HomePage {

acceptBanner() {
    return cy.get(_bannerAcc)
    .click()
}
searchForAnItem(text) {
    return cy.get(_inputBox)
    .click()
    .clear()
    .type(text)
}
getSearchBtn() {
    return cy.get(_searchBtn)
    .click()
}
}
export default HomePage