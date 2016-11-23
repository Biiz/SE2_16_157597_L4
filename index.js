/**
 * @brief Funzione che mostra e nasconde il form per inserire un employee
 */
function showHideForm() {
	//se il form è visibile, nascondilo
    if (document.getElementById('addForm').style.display == 'block') {
        document.getElementById('addForm').style.display = 'none';
    }
    //altrimenti, se il form è nascosto, mostralo e nascondi il resto
    else {
        document.getElementById('addForm').style.display = 'block';
    }
}