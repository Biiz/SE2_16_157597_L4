//librerie
var express = require('express');
var util = require('util');
var bodyParser = require('body-parser');
var app = express();

//lista di impiegati
var employees_list =[];

//Costruttore di un employee
function Employee (id, name, surname, level, salary) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.level = level;
    this.salary = salary;
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 1337));

var headers = {};
    headers["Access-Control-Allow-Origin"] = "*"; //for cross enviroment request
    headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";//methods allowed to responce
    headers["Access-Control-Allow-Credentials"] = false;
    headers["Access-Control-Max-Age"] = '86400'; // 24 hours
    headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"; //type of headers
    //answer
    headers["Content-Type"] = "application/json";//format response

//use: for both POST and GET
app.use('/', function(request, response){

    console.log("INCOMING POST/GET REQUEST\n");
    //set the headers of the responce
    response.writeHead(200, headers);

	var text = '';

	//codice da eseguire se il body della request è correttamente definito
	if ( typeof request.body !== 'undefined' && request.body){

		console.log("request.body: " + util.inspect(request.body) + "\n");
        var json;
        
        var option;
        var id;
        var name;
        var surname;
        var level;
        var salary;
        
        //inizializzo l'opzione che intendo eseguire
        if ( typeof request.body.option !== 'undefined' && request.body.option)
			option = request.body.option;

        //codice da eseguire se la scelta è di aggiungere un employee
		if (option =="addEmployee") {
        }

        //codice da eseguire se la scelta è di cercare un employee
        else if (option =="searchEmployee") {
        }
        
		//codice da eseguire se la scelta è di cancellare un employee
        else if (option =="deleteEmployee") {
        }
	}
	//codice da eseguire se il body della request non è stato definito
	else {
        json = JSON.stringify({ 
            answer: "body undefined"
        });
	}
    console.log(json);
    console.log("END OF POST/GET REQUEST\n");
    //answer a JSON file
    response.end(json);

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


