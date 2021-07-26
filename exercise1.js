// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

//1)

const numberOfCharactersOfAString = (string) => {
  typeof string != "string"
    ? console.log("Error, your input is not a string")
    : console.log(`The string length is: ${string.length}`);
};

//function calls:

// console.log(numberOfCharactersOfAString("Hola Mundo"));
// console.log(numberOfCharactersOfAString(5245));
// console.log(numberOfCharactersOfAString([4, 5, 9, 6, 5, 4, 8]));

//2)

const trimmedText = (string, numOfCharacters) => {
  //   if (typeof string != "string" || typeof numOfCharacters != "number") {
  //     console.log("Error, your input is not a string and a number");
  //   } else {
  //     const trimmedString = string.slice(0, numOfCharacters);
  //     console.log(`The trimmed string is: ${trimmedString}`);
  //   }
  const trimmedString =
    typeof string != "string" || typeof numOfCharacters != "number"
      ? "Error, your input is not a string and a number"
      : `The trimmed string is: ${string.slice(0, numOfCharacters)}`;
  return trimmedString;
};

//function calls:

// console.log(trimmedText("Hola Mundo", 4));
// console.log(trimmedText("Hola Mundo", "4"));

//3)

const stringSplitBySeparator =()=>{

}
