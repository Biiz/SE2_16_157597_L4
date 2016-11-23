/**
 * @brief Funzione che mostra e nasconde il form per inserire un employee e nasconde il form risultante dalla ricerca di un employee
 */
function showHideForm() {
	//se il form è visibile, nascondilo
    if (document.getElementById('addForm').style.display == 'block') {
        document.getElementById('addForm').style.display = 'none';
    }
    //altrimenti, se il form è nascosto, mostralo e nascondi il resto
    else {
        document.getElementById('addForm').style.display = 'block';
        document.getElementById('searchResult').style.display = "none";

    }
}

/**
 * @brief Questa funzione spedisce e riceve un JSON, processandolo.
 * @param [in] object form per processare i dati che contiene.
 * @param [in] string option una stringa indicante l'azione da svolgere.
 * @return il JSON processato.
 */
function retrieveData(form, option) {
    // itera il form per collezionare gli input
    var data = {};
    for (var i = 0; i < form.length; i++) {
        var input = form[i];
        if (input.name) {
            data[input.name] = input.value;
        }
    }
    //set dell'opzione da eseguire
    data['option']=option;
    console.log(data);

    //procedura di invio JSON
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.send(JSON.stringify(data));
    //ritorno il JSON
    return xhr;
}

//variabile globale che rappresenta il form sul quale stiamo agendo
var form;

/**
 * @brief Funzione che svuota i campi degli altri form, prende i valori dal form:
 * se almeno uno è mancante, segnala tramite un alert, altrimenti prepara il JSON
 * per spedirlo.
 */
function addEmployee(){
	//svuoto l'input del form di eliminazione employee
	document.getElementById('deleteEmployeeForm').reset();
	//svuoto l'input del form di ricerca employee
	document.getElementById('searchForm').reset();

	// inizializzo il form
    form = document.getElementById("addForm");
    //creo e inizializzo i campi del form
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var level = document.getElementById('level').value;
    var salary = document.getElementById('salary').value;
    
    //se un campo è vuoto viene mostrato un alert
    if (name == '' || surname == '' || level == '' || salary == '')
        alert("manca almeno un input");
    // altrimenti invoco la funzione per gestire il JSON
    else {
    	//spedisco il JSON invocando la procedura
        xhr = retrieveData(form,"addEmployee");
        //ricevo  il response del JSON
        xhr.onloadend = function (){
        	// responseText returns the body of the server's response as a string
            var result=xhr.responseText;
        };
		//svuoto l'input del form di aggiunta employee       
		document.getElementById("addForm").reset();
    }
}

/**
 * @brief Funzione che resetta i campi di input degli altri form e nasconde il form di inserimento employee
 * prende l'ID dal form, se assente segnala tramite un alert, altrimenti prepara il JSON per spedirlo.
 */
function searchEmployee(){
	//svuoto l'input del form di aggiunta employee       
	document.getElementById("addForm").reset();
	//svuoto l'input del form di eliminazione employee
	document.getElementById('deleteEmployeeForm').reset();
	//nascondo il form di aggiunta employee
	document.getElementById('addForm').style.display = 'none';


    //svuoto l'input del form di ricerca employee
	document.getElementById('searchForm').reset();
}

/**
 * @brief Funzione che resetta i campi di input degli altri form, nascondendo anche eventuali risultati non pertinenti con l'eliminazione di un employee.
 * Prende l'ID dal form, se non è valido segnala con un alert, altrimenti preparara il JSON per spedirlo
 */
function deleteEmployee(){
	//svuoto l'input del form di aggiunta employee       
	document.getElementById("addForm").reset();
	//svuoto l'input del form di ricerca employee
	document.getElementById('searchForm').reset();
	//nascondo il risultato della ricerca employee
	document.getElementById('searchResult').style.display = 'none';
	//nascondo il form di aggiunta employee
	document.getElementById('addForm').style.display = 'none';
	

    //svuoto l'input del form di eliminazione employee
	document.getElementById('deleteEmployeeForm').reset();
}