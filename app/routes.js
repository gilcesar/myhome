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

		app.get('/api/board/:pin', function(req, res){
			var pin = req.params.pin;
			console.log('app.get ' + pin);
			res.json(Board.getPinStatus(pin));
		});

		app.get('/api/board/set/:pin', function(req, res){
			var pin = req.params.pin;
			res.json(Board.setPin(pin));
		});

		app.get('/api/board/unset/:pin', function(req, res){
			var pin = req.params.pin;
			res.json(Board.unsetPin(pin));
		});

        // frontend routes =========================================================
        // route to handle all angular requests
        //console.log(app.path);
        app.get('*', function(req, res) {
            res.sendFile(__dirname.replace('app','public/') + 'index.html'); // load our public/index.html file
        });

    };