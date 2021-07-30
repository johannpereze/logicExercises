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

//timesWordRepeats("hola mundo adios mundo, que mundo tan Mundo", "mundo");

//7)

const esPalindromo = (string) => {
  string = string.toLowerCase();
  if (typeof string != "string")
    return console.warn("Your input must be a string");
  const reversedString = string.split("").reverse().join("");
  return string === reversedString;
};

//function calls:

// esPalindromo("Salas");
// esPalindromo("salas");

//8)

const deleteCharacters = (string, characters) => {
  if (typeof string != "string")
    return console.warn("Your first argument must be a string");
  if (typeof characters != "string")
    return console.warn("Your second argument must be a string too");
  return console.log(string.split(characters).join(""));
};

//function calls:

// deleteCharacters("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

//9)

const numFrom501to600 = () =>
  console.log(Math.round(Math.random() * 100 + 500));

//function calls:

//numFrom501to600()

//10)

const evalCapicua = (number) => {
  if (typeof number != "number")
    return console.log("Your input must be a number");
  number = number.toString(10);
  const numberReversed = number.split("").reverse().join("");
  return console.log(number === numberReversed);
};

//function calls:

//evalCapicua(42011024);
//evalCapicua("42011024");

//11 //Volver a resolver este pero sin convertir nada a array

// const arrayOfPositiveIntegers = (number) => {
//   const array = [number];
//   let newNumber = number;
//   for (let i = 1; i < number; i++) {
//     array.unshift((newNumber -= 1));
//   }
//   return array;
// };

// const factorialOf = (number) => {
//   if (typeof number != 'number' || number <= 0) return console.log("Your input must be an integer number bigger than 0")
//   const positiveIntegers = arrayOfPositiveIntegers(number);
//   const factorial = positiveIntegers.reduce(
//     (accumulator, currentValue) => accumulator * currentValue
//   );
//   return console.log(factorial);
// };

const factorialOf = (number) => {
  if (typeof number != "number" || number <= 0)
    return console.log("Your input must be an integer number bigger than 0");
  let factorial = number;
  let acumulador = number;
  for (let i = 1; i < number; i++) {
    acumulador = acumulador - 1;
    factorial = factorial * acumulador;
  }
  return console.log(factorial);
};

//function calls:

// factorialOf(5); //120
// factorialOf(6); //720
// factorialOf("6");
// factorialOf(0);
// factorialOf(-25);

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

//12)

const isPrime = (number) => {
  if (typeof number != "number" || number <= 0)
    return console.log("Your input must be an integer number bigger than 0");
  for (let i = 2; i < number; i++) {
    console.log(`${number} % ${i} = ${number % i} `);
    if (number % i === 0) {
      return console.log(false);
    }
  }
  return console.log(true);
};

//function calls:

//isPrime(2);
// isPrime(7);
// isPrime("7");
// isPrime(995);

//13)

const evenOrOdd = (number) =>
  number % 2 ? console.log("impar") : console.log("par");

//function calls:

// evenOrOdd(1)
// evenOrOdd(2)
// evenOrOdd(3)
// evenOrOdd(4)
// evenOrOdd(86)
// evenOrOdd(109)

//14)

const temperatureConversor = (temperature, system) => {
  if (typeof temperature != "number")
    return console.log("The first value must be a number");
  system = system.toLowerCase();
  if (system != "c" && system != "f")
    return console.log("The second argument must be C or F");
  if (system === "c") {
    console.log(`${temperature}ºC es igual a ${(temperature * 9) / 5 + 32}ºF`);
  } else {
    console.log(
      `${temperature}ºF es igual a ${((temperature - 32) * 5) / 9}ºC`
    );
  }
};

//(0 °C × 9/5) + 32 = 32 °F
//(32 °F − 32) × 5/9 = 0 °C

//function calls:

// temperatureConversor(0,"C")
// temperatureConversor(32,"F")
// temperatureConversor(45,"C")
// temperatureConversor(1220,"F")
// temperatureConversor(423,"C")
// temperatureConversor(3452,"F")

// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

//15)

const changeNumberBase = (number, base) => {
  if (typeof number != "number")
    return console.log("You must input a number as first parameter");

  if ((base != 2 && base != 10) || typeof base != "number")
    return console.log(
      "You must input the number 2 if the number is binary or the number 10 if i'ts decimal as a second argument"
    );

  base === 10
    ? console.log(parseInt(number, 10).toString(2))
    : console.log(parseInt(number, 2).toString(10));
};

//function calls:

// changeNumberBase(100, 2); //4
// changeNumberBase(100, 10); //1100100
// changeNumberBase(11101100, 2); //236
// changeNumberBase(1000000, 2); //64
// changeNumberBase(1000000, 10); //11110100001001000000
// changeNumberBase(1000000, 8); //error
// changeNumberBase(1000000, 0); //error
// changeNumberBase(1000000, "10"); //error
// changeNumberBase("1000000", 10); //error

//16)

const priceDiscoutTotal = (price, discount) => {
  if (typeof price != "number" || typeof discount != "number")
    return console.log("The arguments must be numbers");
  console.log((price * (100 - discount)) / 100);
};

//function calls:

// priceDiscoutTotal(100, 20); //80
// priceDiscoutTotal("100", 20); //error
// priceDiscoutTotal(100, "20"); //error
// priceDiscoutTotal(100); //error
// priceDiscoutTotal(243900,30); //

//17)

const howManyYearsFrom = (date) => {
  console.log(`Han pasado ${(((Date.now() - Date.parse(date))/86400000)/365.25).toFixed(3)} años desde la fecha dada`); 
};

//function calls:

howManyYearsFrom(new Date(1984, 4, 23)); //devolverá 37 años
howManyYearsFrom(new Date(1991, 7, 1)); //
howManyYearsFrom(new Date(1966, 3, 3)); //
