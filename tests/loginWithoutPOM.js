module.exports = {
 'Guru 99 Login' : function(browser) {
      browser
        .url('http://demo.guru99.com/v4/')
        .setValue('input[name=uid]', "mngr332873")
        .setValue('input[name=password]', "umEtyvy")
        .click('input[name=btnLogin]')
        //.assert.containsText('tr.heading3 > td', 'Manger Id : mngr332873')
        .end()
    }
  }