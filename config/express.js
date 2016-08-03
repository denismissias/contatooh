var express = require('express');
//var home = require('../app/routes/home'); Não precisa mais, devido ao uso do express-load
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

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

    app.use(cookieParser());
    app.use(session({
        secret: 'Vai Corinthians',
        resave: true,
        saveUnitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());
	
	//home(app); Não precisa mais, devido ao uso do express-load
	load('models', {cwd: 'app'})
	.then('controllers')
	.then('routes')
	.into(app);
	
	return app;
}
