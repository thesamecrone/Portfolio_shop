// // Lesson 3 H/W 1

// const myIterable = {
//     from: 1,
//     to: 99,
//     [Symbol.iterator]() {
//         if (typeof this.from !== 'number' || typeof this.to !== 'number') {
//             throw new Error('Please, enter a number');
//         }
//         if (this.to < this.from) {
//             throw new Error('Invalid range: "to" must be equal to or greater than "from"');
//         }

//         let current = this.from;
//         const last = this.to;

//         return {
//             next() {
//                 if (current <= last) {
//                     return { value: current++, done: false };
//                 }
//                 return { done: true }; 
//             }
//         };
//     }
// };

// // check
// try {
//     for (let num of myIterable) {
//         console.log(num); 
//     }
// } catch (error) {
//     console.error(error.message);
// }

// // H/W 2

// function getPersons(name, age) {
//     return [
//         { name, age },
//         Object.assign({}, { name, age }),
//         Object.create({}, {
//             name: { value: name, writable: true, enumerable: true, configurable: true },
//             age: { value: age, writable: true, enumerable: true, configurable: true }
//         }),
//         JSON.parse(JSON.stringify({ name, age })),
//         structuredClone({ name, age }),
//         { ...{ name, age } }
//     ];
// }

// // check
// const persons = getPersons('Natalia', 27);
// console.log(persons);

// Lesson 4 HW

class Calculator {
    constructor(x, y) {
        if (!Number.isFinite(x) || !Number.isFinite(y)) {
            throw new Error('Please, enter valid finite number');
        }
        this.x = x;
        this.y = y;
    }

    setX = (value) => {
        if (!Number.isFinite(value)) {
            throw new Error('Please, enter a valid finite number');
        }
        this.x = value;
    }

    setY = (value) => {
        if (!Number.isFinite(value)) {
            throw new Error('Please, enter a valid finite number');
        }
        this.y = value;
    }

    logSum = () => {
        return this.x + this.y;
    }

    logMul = () => {
        return this.x * this.y;
    }

    logSub = () => {
        return this.x - this.y;
    }

    logDiv = () => {
        if (this.y === 0) {
            throw new Error("You can't divide by zero");
        }
        return this.x / this.y;
    }
}

// check

try {
    const calculator = new Calculator(22, 11);
    
    console.log(calculator.logSum());
    console.log(calculator.logMul());
    console.log(calculator.logSub());
    console.log(calculator.logDiv());

} catch (error) {
    console.error(error.message);
}