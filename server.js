var Express = require('express');
var app = new (Express)()
var path = require('path')

var port = 3000

app.use(Express.static(path.join(__dirname, 'public')))

app.listen(port, function (error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
})