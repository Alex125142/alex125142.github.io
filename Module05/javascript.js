var table = prompt();             
var operator = 'Multiplication'; 
var i = 1;                
var msg = '<h2>Multiplication Table</h2>';             
if (operator === 'Multiplication') {
 
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}
var el = document.getElementById('blackboard');
el.innerHTML = msg; 
