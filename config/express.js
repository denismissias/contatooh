var express = require('express');
//var home = require('../app/routes/home'); N�o precisa mais, devido ao uso do express-load
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {
	var app = express();
	
	//Configura��o da vari�vel de ambiente 'port'
	app.set('port', 3000);
	
	//Configura��o do middleware 'express.static'
	app.use(express.static('./public'));
	
	//Configura��es das vari�veis de ambiente 'view engine' e 'views'
	app.set('view engine', 'ejs');
	app.set('views', './app/views');
	
	//Novos midlewares - method-override e bodyParser
	app.use(bodyParser.urlencoded({extend: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());
	
	//home(app); N�o precisa mais, devido ao uso do express-load
	load('models', {cwd: 'app'})
	.then('controllers')
	.then('routes')
	.into(app);
	
	return app;
}