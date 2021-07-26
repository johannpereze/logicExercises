// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

//1)

const numberOfCharactersOfAString = (string) =>
  typeof string != "string"
    ? console.warn("Error, your input is not a string")
    : console.log(`The string length is: ${string.length}`);

//function calls:

// numberOfCharactersOfAString("Hola Mundo");
// numberOfCharactersOfAString(5245);
// numberOfCharactersOfAString([4, 5, 9, 6, 5, 4, 8]);
// numberOfCharactersOfAString();

//2)

const trimmedText = (string, numOfCharacters) => {
  const trimmedString =
    typeof string != "string" || typeof numOfCharacters != "number"
      ? console.warn("Error, your input is not a string and a number")
      : console.log(
          `The trimmed string is: ${string.slice(0, numOfCharacters)}`
        );
  return trimmedString;
};

//function calls:

// trimmedText("Hola Mundo", 4);
// trimmedText("Hola Mundo", "4");
// trimmedText("Hola Mundo");

//3)

const stringSplitBySeparator = (string, separator) =>
  typeof string === "string" &&
  (typeof separator === "string" || typeof separator === "number")
    ? console.log(string.split(separator))
    : console.warn(
        "Error. You have to input a string and a separator that can be a character, a string or a number"
      );

//function calls:

// stringSplitBySeparator("Hola mundo, me llamo Johann", " ");
// stringSplitBySeparator("Hola mundo, me llamo Johann", "a");
// stringSplitBySeparator(56456456465, "6");
// stringSplitBySeparator("56456456465", "6");
// stringSplitBySeparator("56456456465", 6);
// stringSplitBySeparator("21/09/2021", "/");
// stringSplitBySeparator();

//4)

const stringRepeatXTimes = (string, repeatTimes) => {
  let stringRepeat = [];
  if (typeof string != "string" || typeof repeatTimes != "number")
    return (stringRepeat = console.warn(
      "Error. You have to input a string and a number"
    ));
  if (repeatTimes === 0)
    return console.warn("Error. You can't repeat it 0 times");
  if (Math.sign(repeatTimes) === -1)
    return console.warn("Error. You can't repeat it negative times");
  for (let i = 0; i < repeatTimes; i++) {
    stringRepeat.push(string);
  }
  return (stringRepeat = console.warn(stringRepeat.join(" ")));
};

// //function calls:
// stringRepeatXTimes("Hola Mundo", 5);
// stringRepeatXTimes("Hola Mundo", 2.5);
// stringRepeatXTimes("Hola Mundo", "5");
// stringRepeatXTimes(["Hola Mundo", "Adios Mundo"], "5");
// stringRepeatXTimes(5, 5);
// stringRepeatXTimes("Hola Mundo", 5);
// stringRepeatXTimes("Hola Mundo", -5);
// stringRepeatXTimes("Hola Mundo", 0);

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

//5)

const reverseString = (string) =>
  typeof string != "string"
    ? console.warn("You have to input a string")
    : console.log(string.split("").reverse().join(""));

//function calls:

//reverseString("Hola Mundo");

//6)

const timesWordRepeats = (string, repeatedWord) => {
  const regex = new RegExp(repeatedWord, "ig");
  if (typeof string != "string")
    return console.warn("Your first argument must be a string");
  if (typeof repeatedWord != "string")
    return console.warn("Your second argument must be a string");
  return console.log(string.match(regex).length);
};

//function calls:

timesWordRepeats("hola mundo adios mundo, que mundo tan Mundo", "mundo");

//7)

const esPalindromo = (string) => {
  if (typeof string != "string")
    return console.warn("Your input must be a string");
  const reversedString = string.split("").reverse().join("");
  return string.toLowerCase() === reversedString.toLowerCase();
};

//function calls:

esPalindromo("Salas");
esPalindromo("salas");

//8)

const deleteCharacters = (string, characters) => {
  if (typeof string != "string")
    return console.warn("Your first argument must be a string");
  if (typeof characters != "string")
    return console.warn("Your second argument must be a string too");
  return console.log(string.split(characters).join(""));
};

//function calls:

deleteCharacters("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
