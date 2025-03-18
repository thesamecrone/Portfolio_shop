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

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
const vowels = ['a', 'e', 'i'];

const consonant = letters.myFilter(letter => !vowels.includes(letter));
console.log(consonant);

// H/A 2

[window.alert, window.prompt, window.confirm] = [window.confirm, window.alert, window.prompt];

// check
alert("Do you confirm this alert?");
prompt("This should be an alert now!");
confirm("What is your input?");

