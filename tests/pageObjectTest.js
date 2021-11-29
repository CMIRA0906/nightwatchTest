module.exports = {

    afterEach : function(browser,done) {

        browser.end();
        browser.endSauce(done);

    },

'Demo guru99 using page object' : function (browser) {
    let myPage = browser.page.login();
    myPage.navigate()
    .setValue('@userTxt', 'mngr332873')
    .setValue('@passwordTxt', 'umEtyvy')
    //.click('@sendBtn')
    .getValue('@userTxt')
    //.text.to.equals('@userTxt','mngr332873')
    .pause(3000)
    .assert.value('@userTxt','mngr332873')
    
}
}