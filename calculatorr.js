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

    function convertToExpression(formula) {
        return formula.split(' ').map(token => {
            if (token.startsWith('$')) {
                const varName = token.slice(1);
                if (vars[varName] === null) {
                    throw new Error(`Variable ${varName} is not defined`);
                }
                return vars[varName];
            }
            return token;
        }).join(' ');
    }


    function safeEval(expression) {
        try {
            return new Function('return ' + expression)();
        } catch (e) {
            throw new Error('Error in evaluating expression: ' + expression);
        }
    }


    let updated = true;
    while (updated) {
        updated = false;

        for (const [id, formulaId] of Object.entries(formulas)) {
            if (vars[id] === null && calculations[formulaId] && canEvaluate(calculations[formulaId])) {
                try {
                    const expression = convertToExpression(calculations[formulaId]);
                    vars[id] = safeEval(expression);
                    updated = true;
                } catch (e) {

                    return "impossible";
                }
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

