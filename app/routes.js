// grab the nerd model we just created
var Nerd = require('./models/nerd');
var Volt = require('./volt');
var Board = require('./board');

    module.exports = function(app) {
    	
	
        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/nerds', function(req, res) {
            // use mongoose to get all nerds in the database
            Nerd.find(function(err, nerds) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(nerds); // return all nerds in JSON format
            });
        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

		app.get('/api/volt', function(req, res){
			res.json(Volt.request());
		});

		app.get('/api/board/dig', function(req, res){
			console.log('app.get dig');
			res.json(Board.readDigValues());
		});

		app.get('/api/board/ana', function(req, res){
			console.log('app.get ana');
			res.json(Board.readAnaValues());
		});
        // frontend routes =========================================================
        // route to handle all angular requests
        //console.log(app.path);
        app.get('*', function(req, res) {
            res.sendFile(__dirname.replace('app','public/') + 'index.html'); // load our public/index.html file
        });

    };