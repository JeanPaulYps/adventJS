const isValid = (letter) => {
    const INVALID_CHARACTERS = ["{", "[" ];
    const letterArray = Array.from(letter);
    let openCharacters = [];
    for (const [index, character] of letterArray.entries() ){
        if (INVALID_CHARACTERS.includes(character)) {
            return false;
        }
        else if (character == '(') {
            if (index + 1 < letterArray.length && letterArray[index + 1] == ")") {
                return false; 
            }
            openCharacters.push('(');
        }
        else if (character == ')') {
            if (openCharacters.length === 0) {
                return false;
            }
            openCharacters.pop();
        }
    }
    if (openCharacters.length > 0 ){
        return false; 
    }
    return true;
}

const datos = ["bici coche (balón) bici coche peluche", // -> ✅
"(muñeca) consola bici", // ✅
"bici coche (balón bici coche", // -> ❌
"peluche (bici [coche) bici coche balón", // -> ❌
"(peluche {) bici", // -> ❌
"() bici" // ❌
];

for (letter of datos) {
    console.log(letter);
    console.log(isValid(letter));
}

