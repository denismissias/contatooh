var express = require('express');
//var home = require('../app/routes/home'); Não precisa mais, devido ao uso do express-load
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {
	var app = express();
	
	//Configuração da variável de ambiente 'port'
	app.set('port', 3000);
	
	//Configuração do middleware 'express.static'
	app.use(express.static('./public'));
	
	//Configurações das variáveis de ambiente 'view engine' e 'views'
	app.set('view engine', 'ejs');
	app.set('views', './app/views');
	
	//Novos midlewares - method-override e bodyParser
	app.use(bodyParser.urlencoded({extend: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());
	
	//home(app); Não precisa mais, devido ao uso do express-load
	load('models', {cwd: 'app'})
	.then('controllers')
	.then('routes')
	.into(app);
	
	return app;
}