// H/A 1
// console.log(String.fromCharCode(84, 104, 101, 32, 77, 97, 116, 114, 105, 120, 32, 104, 97, 115, 32, 121, 111, 117));

// // H/A 2
// function toBinary(num) {
//     return num.toString(2);
// }

// const number = Number(prompt("Enter a number:"));
// alert(isNaN(number) ? "Please enter a valid number." : `Binary representation: ${toBinary(number)}`);

// H/A 1

const myFilter = function (callback, thisArg) {
    const filteredArr = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            const result = callback.call(thisArg, this[i], i, this);

            if (result) {
                filteredArr.push(this[i]);
            }
        }
    }
    return filteredArr;
}

// check

Array.prototype.myFilter = myFilter;

const letters = ['a', 'b', 'c', 'd', 'e,', 'f', 'g', 'h', 'i'];

const vowels = ['a', 'e', 'i'];
const consonant = letters.myFilter(i != vowels);
console.log(consonant);


// H/A 2

document.addEventListener('DOMContentLoaded', () => {
    // Переназначаем методы глобального объекта window
    [window.alert, window.prompt, window.confirm] = [window.confirm, window.alert, window.prompt];

    // Проверка работы
    alert("Do you confirm this alert?");      // Откроется окно с логикой confirm
    prompt("This should be an alert now!");  // Откроется окно с логикой alert
    confirm("What is your input?");          // Откроется окно с логикой prompt
});

