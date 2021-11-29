module.exports = {
    'Google search test': function (browser) {
        let google = browser.page.google();
        debugger;
        google.navigate()
            .pause(3000)

            .assert.title('Google')
            .assert.visible('@searchBar')
            .setValue('@searchBar', 'nightwatch')
           
    }
}