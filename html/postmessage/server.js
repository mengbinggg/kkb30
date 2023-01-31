const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer(function(req, res) {
    fs.readFile(path.resolve(__dirname, './message.html'), function(error, data) {
        res.writeHeader(200, {
            'content-type': 'text/html;charset="utf-8"'
        })
        res.write(data)
        res.end()
    })
}).listen(8888)

http.createServer(function(req, res) {
    fs.readFile(path.resolve(__dirname, './index.html'), function(error, data) {
        res.writeHeader(200, {
            'content-type': 'text/html;charset="utf-8"'
        })
        res.write(data)
        res.end()
    })
}).listen(9999)