// Solves equation that is in string format
function Parse(calculation: string) {
    return Function('"use strict";return (' + calculation + ')')();
}

export default Parse;