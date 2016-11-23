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
 * @brief Funzione che svuota i campi degli altri form, prende i valori dal form:
 * se almeno uno è mancante, segnala tramite un alert, altrimenti prepara il JSON
 * per spedirlo.
 */
function addEmployee(){
	//svuoto l'input del form di eliminazione employee
	document.getElementById('deleteEmployeeForm').reset();
	//svuoto l'input del form di ricerca employee
	document.getElementById('searchForm').reset();

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