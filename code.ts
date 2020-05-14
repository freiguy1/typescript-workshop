import axios from 'axios';
const dateFormat = require('dateformat');

//--------------------- EXAMPLE 1 (parameter types) --------------------------
function sum(x, y) {
    return x + y;
}

console.log(sum('3', 4));














// ---------------------- EXAMPLE 2 (nulls) --------------------------------
function getMonth(date) {
    return date.getMonth() + 1;
}

// console.log(getMonth(null));















// ---------------------- EXAMPLE 3 (parameter order) --------------------
function printReviewedCaseCount(userName, date, caseCount) {
    let formattedDate = dateFormat(date, "m/d/yy");
    console.log(`User ${userName} signed out ${caseCount} cases on ${formattedDate}.`);
}

// printReviewedCaseCount("pinkmanJ", 10, new Date());
















// -------------------- EXAMPLE 4 (object properties) ---------------------
// https://jsonplaceholder.typicode.com/todos
async function printTodoInfo(i) {
    const url = `https://jsonplaceholder.typicode.com/todos/${i}`;
    const response = await axios.get(url);
    const todo = response.data;
    console.log(`
        The todo with ID: ${todo.ID}
        Has a title of: ${todo.Title}
        Is it finished?: ${todo.Finished}
    `);
}

// printTodoInfo(1);