/* Funktioner i JavaScript */
/* 
    Vi har 3 olika sätt att definiera/skapa funktioner i JS.
    1. Function Declarations
    2. Function Expressions
    3. Arrow Functions
*/

// FUNCTION DECLARATION...
// Detta funkar tack vare Hoisting...
/* writeToLog();

function writeToLog(message = '') {
  if (message.length > 0) {
    console.log('Detta är ett meddelande ifrån writeToLog', message);
  } else {
    console.log('Detta är ett meddelande ifrån writeToLog');
  }
}

writeToLog('Michael');

function writeToLogWithMessage(message) {
  console.log('Detta är ett meddelande ifrån writeToLog, ' + message);
}

writeToLogWithMessage('Här kommer jag');

const func2 = writeToLog;
console.log(func2);
func2(); */

// save(); //Funkar inte variabler hoistas inte!!!
// FUNCTION EXPRESSIONS...
// Anonyma funktioner
const save = function (data) {
  console.log('Spara till lagring');
};

save();

// ARROW FUNCTIONS...
// Anonyma funktoiner
const saveAgain = (data) => {
  console.log('Spara data, ' + data);
};

const saveAgain2 = (data) => console.log('Spara data, ' + data);

saveAgain('Nisse');
saveAgain2('Eva');
