const solution = require('./calculator');

const config = {
    vars: [
        { id: 'a', formula: 'calcA' },
        { id: 'b', formula: 'calcB' },
        { id: 'c', formula: 'calcC' },
        { id: 'd', value: 5 },
        { id: 'f', value: 5 }
    ],
    calculations: [
        { id: 'calcA', formula: '$b + $c' },
        { id: 'calcB', formula: '$d * ( $f + 5 )' },
        { id: 'calcC', formula: '$f + $b' }
    ]
};

console.log(solution(config));
