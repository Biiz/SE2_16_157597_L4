//lista di impiegati
var employees_list =[];

//Costruttore di un employee
var Employee = function(id, name, surname, level, salary) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.level = level;
    this.salary = salary;
}

var MaxID = function(){
	var newId = 0;
	//funzione per trovare il massimo ID presente
	for (var i = 0; i < Object.keys(employees_list).length; i++) {
	    if (employees_list[i].id >= newId)  newId= parseInt(employees_list[i].id)+1;  
	}
	//ritorno l'ID
	return newId;
}



var Add_Employee = function (employee, alreadyIn){

	alreadyIn = false;

	//itero la lista degli impiegati per vedere se l'employee è già presente
	for (var i = 0; i < Object.keys(employees_list).length; i++) {
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
	if(!alreadyIn)  employees_list.push(employee);
}


var Search_Employee = function (id){
	var found_employee;
	//itero la lista degli impiegati per vedere se l'employee è già presente
	for (var i = 0; i < Object.keys(employees_list).length; i++) {
		if (employees_list[i].id == id){
			found_employee = employees_list[i];
		}
	}
	return found_employee;
}

var Delete_Employee = function (id){
	//itero la lista degli impiegati per vedere se l'employee è presente
    for (var i = 0; i < Object.keys(employees_list).length; ++i) {
    	//se l'employee è presente lo cancello
        if (employees_list[i].id == id){
            employees_list.splice(i, 1);
            return true;
        }
    }
    return false;
}


//export functions (if not defined here, it is private)
exports.Employee = Employee;
exports.MaxID = MaxID; 
exports.Add_Employee = Add_Employee;
exports.Search_Employee = Search_Employee;
