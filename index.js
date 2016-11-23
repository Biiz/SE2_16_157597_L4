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
            //verifico la presenza dell'ID
            if ( typeof request.body.id !== 'undefined' && request.body.id) {
                id = request.body.id;
            }
            //se l'ID non è stato inserito viene generato incrementando il più grande ID esistente
            else {
                var newId = 0;
                //funzione per trovare il massimo ID presente
                for (var i = 0; i < Object.keys(employees_list).length; i++) {
                    if (employees_list[i].id >= newId)  newId= parseInt(employees_list[i].id)+1;  
                }
                //eguaglio l'ID dell'employee al massimo ID presente, maggiorato
                id = newId;
            }

            //controlli per verificare la corretta presenza dei valori
            if ( typeof request.body.name !== 'undefined' && request.body.name)
                name = request.body.name;
            if ( typeof request.body.surname !== 'undefined' && request.body.surname)
                surname = request.body.surname;
            if ( typeof request.body.level !== 'undefined' && request.body.level)
                level = request.body.level;
            if ( typeof request.body.salary !== 'undefined' && request.body.salary)
                salary = request.body.salary;

            //creo un nuovo employee che identifico come non presente
            var employee = new Employee(id, name, surname, level, salary);
            var alreadyIn = false;

            //itero la lista degli impiegati per vedere se l'employee è già presente
            for (var i = 0; i < Object.keys(employees_list).length; ++i) {
                //se l'employee è presente, ne aggiorno i valori
                if (employees_list[i].id == id){
                    alreadyIn = true;
                    employees_list[i].id= employee.id,
                    employees_list[i].name= employee.name, 
                    employees_list[i].surname= employee.surname, 
                    employees_list[i].level= employee.level,
                    employees_list[i].salary= employee.salary
                    console.log("Employee aggiornato correttamente");
                }
            }
            //se l'employee non è presente nella lista, lo aggiungo
            if(!alreadyIn) {
                employees_list.push(employee);
            }
            console.log("Numero di employees_list registrati: " + Object.keys(employees_list).length
                       + ", employee appena aggiunto:");
            //converto in una stringa JSON
            json = JSON.stringify({ 
                ID: employee.id,
                name: employee.name, 
                surname: employee.surname, 
                level: employee.level,
                salary: employee.salary
            });
            
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


