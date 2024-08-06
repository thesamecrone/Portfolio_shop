module.exports = function solution(config) {
    const vars = {};
    const formulas = {};

    config.vars.forEach(variable => {
        if (variable.value !== undefined) {
            vars[variable.id] = variable.value;
        } else {
            vars[variable.id] = null;
            formulas[variable.id] = variable.formula;
        }
    });

    const calculations = {};
    config.calculations.forEach(calc => {
        calculations[calc.id] = calc.formula;
    });

    function canEvaluate(formula) {
        return formula.split(' ').every(token => {
            if (token.startsWith('$')) {
                const varName = token.slice(1);
                return vars[varName] !== null;
            }
            return true;
        });
    }

    function evaluate(formula) {
        const expression = formula.split(' ').map(token => {
            if (token.startsWith('$')) {
                const varName = token.slice(1);
                return vars[varName];
            }
            return token;
        }).join(' ');

        return eval(expression);
    }

    let updated = true;
    while (updated) {
        updated = false;

        for (const [id, formulaId] of Object.entries(formulas)) {
            if (vars[id] === null && calculations[formulaId] && canEvaluate(calculations[formulaId])) {
                vars[id] = evaluate(calculations[formulaId]);
                updated = true;
            }
        }
    }

    for (const id of Object.keys(formulas)) {
        if (vars[id] === null) {
            return "impossible";
        }
    }

    return vars;
};
