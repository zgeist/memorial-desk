var express = require('express'),
    ECT     = require('ect');

var app = express();

var ectRenderer = ECT({ watch: true, root: __dirname + '/views', ext: '.ect' });
console.log(__dirname + '/views')

app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);

app.use(express.static(__dirname + '/bower_components'));

app.get('/', function(request, response){
    response.render('index');
});

app.listen(8080);

console.log('Server start on port: 8080');

module.exports = app;