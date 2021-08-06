// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

//1)

const numberOfCharactersOfAString = (string) =>
  typeof string !== "string"
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
    typeof string !== "string" || typeof numOfCharacters !== "number"
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
  if (typeof string !== "string" || typeof repeatTimes !== "number")
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
  typeof string !== "string"
    ? console.warn("You have to input a string")
    : console.log(string.split("").reverse().join(""));

//function calls:

//reverseString("Hola Mundo");

//6)

const timesWordRepeats = (string, repeatedWord) => {
  const regex = new RegExp(repeatedWord, "ig");
  if (typeof string !== "string")
    return console.warn("Your first argument must be a string");
  if (typeof repeatedWord !== "string")
    return console.warn("Your second argument must be a string");
  return console.log(string.match(regex).length);
};

//function calls:

//timesWordRepeats("hola mundo adios mundo, que mundo tan Mundo", "mundo");

//7)

const esPalindromo = (string) => {
  string = string.toLowerCase();
  if (typeof string !== "string")
    return console.warn("Your input must be a string");
  const reversedString = string.split("").reverse().join("");
  return string === reversedString;
};

//function calls:

// esPalindromo("Salas");
// esPalindromo("salas");

//8)

const deleteCharacters = (string, characters) => {
  if (typeof string !== "string")
    return console.warn("Your first argument must be a string");
  if (typeof characters !== "string")
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
  if (typeof number !== "number")
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
//   if (typeof number !== 'number' || number <= 0) return console.log("Your input must be an integer number bigger than 0")
//   const positiveIntegers = arrayOfPositiveIntegers(number);
//   const factorial = positiveIntegers.reduce(
//     (accumulator, currentValue) => accumulator * currentValue
//   );
//   return console.log(factorial);
// };

const factorialOf = (number) => {
  if (typeof number !== "number" || number <= 0)
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
  if (typeof number !== "number" || number <= 0)
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
  if (typeof temperature !== "number")
    return console.log("The first value must be a number");
  system = system.toLowerCase();
  if (system !== "c" && system !== "f")
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
  if (typeof number !== "number")
    return console.log("You must input a number as first parameter");

  if ((base !== 2 && base !== 10) || typeof base !== "number")
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
  if (typeof price !== "number" || typeof discount !== "number")
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
  if (!date instanceof Date) return console.log("You must input a valid date");
  console.log(
    `Han pasado ${((Date.now() - date.getTime()) / 86400000 / 365.25).toFixed(
      3
    )} años desde la fecha dada`
  );
};

//function calls:

// howManyYearsFrom(new Date(1984, 4, 23)); //devolverá 37 años
// howManyYearsFrom(new Date(1991, 7, 1)); //
// howManyYearsFrom(new Date(1966, 3, 3)); //
// howManyYearsFrom(new Date("azgdsz")); //

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

//verificar que todo sean letras
//borrar los espacios
//contar las vocales
//contar las consonantes

//18)

const countVowelsAndConsonants = (string) => {
  const vowels = string.match(/[aeiouáéíóúü]/gi);
  const consonants = string.match(/[qwertypsdfghjklñzxcvbnm]/gi);
  console.log(
    `The sentence has ${vowels.length} vowels and ${consonants.length} consonants`
  );
};

//function calls:

// countVowelsAndConsonants("Hola Mundo")
// countVowelsAndConsonants("Johann Sebastian")
// countVowelsAndConsonants("Cuantas vocales y consonantes tiene esta frase?")

//19)

const isValidName = (userName = undefined) => {
  if (userName === undefined) return console.log("You must input something");
  return console.log(
    `We believe your names is ${/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
      userName
    )}`
  );
};

//function calls:

// isValidName("Jon Mircha");
// isValidName("Johann Sebastian Pérez");
// isValidName("Jon8965");
// isValidName("Jon_Mircha");
// isValidName(5456456);
// isValidName();

//20

const isValidEMail = (eMail = undefined) => {
  if (eMail === undefined) return console.log("You must input something");
  return console.log(
    `We believe your e-mail is ${/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      eMail
    )}`
  );
};

//function calls:

// isValidEMail("sebas.jsp@gmail.com")
// isValidEMail("sebas.jsp&gmail.com")
// isValidEMail("sebas.jsp@gmail.c")
// isValidEMail("a@gmail.com")
// isValidEMail("sebas.jsp@.com")
// isValidEMail("sebas.jsp@gmail.com ")
// isValidEMail("sebas.jsp @gmail.com")
// isValidEMail(654564564)
// isValidEMail()

// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

//21)

const numbers = [4, 8, 5, 2, 9, 8, 5, 5];

const powerOf2 = (array) => {
  if (!(array instanceof Array))
    return console.log("Your input must be an array");
  if (array.length === 0)
    return console.log("Your input can't be an empty array");
  let invalidValues = 0;
  array.forEach((value) => {
    if (typeof value !== "number") {
      invalidValues += 1;
    }
  });
  if (invalidValues > 0)
    return console.log("Your array contains not numerical values");
  const poweredNumbers = array.map((value) => Math.pow(value, 2));
  return console.log(poweredNumbers);
};

//function calls:

// powerOf2(numbers);
// console.log(numbers);
// powerOf2([1, 5, 6, 2, 5, 9, 87, 74]);
// powerOf2(8);
// powerOf2([]);
// powerOf2({});
// powerOf2("9");
// powerOf2(89);
// powerOf2([87, 85, 96, "dsjhfj", "dfsgsdf", "5456456 ", 45]);

//22)

const higherLower = (array) => {
  if (!(array instanceof Array))
    return console.log("Your input must be an array");
  let invalidValues = 0;
  array.forEach((value) => {
    if (typeof value !== "number") {
      invalidValues += 1;
    }
  });
  if (invalidValues > 0)
    return console.log("Your array contains not numerical values");
  let higher = array[0];
  let lower = array[0];
  array.forEach((value) => {
    if (value > higher) {
      higher = value;
    }
    if (value < lower) {
      lower = value;
    }
  });
  return console.log([higher, lower]);
};

//function calls:

// higherLower([1, 4, 5, 99, -60]); //devolverá [99, -60].
// higherLower([]);
// higherLower([-58]);
// higherLower(58);
// higherLower("[-5871, -4, -5, -99, -60]");

//23)

const evenAndOdd = (array) => {
  if (!(array instanceof Array))
    return console.log("Your input must be an array");
  let invalidValues = 0;
  array.forEach((value) => {
    if (typeof value !== "number") {
      invalidValues += 1;
    }
  });
  if (invalidValues > 0)
    return console.log("Your array contains not numerical values");
  let pares = [],
    impares = [];
  array.forEach((value) =>
    value % 2 ? impares.push(value) : pares.push(value)
  );
  return console.log({ pares, impares });
};

//function calls:

// evenAndOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); //devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
// evenAndOdd([]);
// evenAndOdd("[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]");
// evenAndOdd(4);
// evenAndOdd(true);

// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

//24)

const arraySorting = (array) => {
  const ascendent = array.map((el) => el).sort((a, b) => a - b);
  const descendent = array.map((el) => el).sort((a, b) => b - a);
  return console.log({ ascendent, descendent });
};

//function calls:

// arraySorting([7, 5, 7, 8, 6]); //devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }

//25)

const cleanArray = (array) => {
  const cleanedArray = array.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  return console.log(cleanedArray);
};

//function calls:

// cleanArray(["x", 10, "x", 2, "10", 10, true, true]); //devolverá ["x", 10, 2, "10", true].

//26)

const promedio = (array) => {
  const promed = array.reduce((previous, current) => previous + current);
  return console.log(promed / array.length);
};

//function calls:

//promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]); //devolverá 4.5.

// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3
//     instancias de la clase de forma automatizada e imprime la ficha técnica
//     de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

class Pelicula {
  constructor({
    id,
    titulo,
    director,
    anioEstreno,
    paisesDeOrigen,
    generos,
    calificacionIMBD,
  }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.anioEstreno = anioEstreno;
    this.paisesDeOrigen = paisesDeOrigen;
    this.generos = generos;
    this.calificacionIMBD = calificacionIMBD;

    this.validateIMDB(id);
    this.validateTitle(titulo);
    this.validateDirector(director);
    this.validateYear(anioEstreno);
    this.validateOriginCountries(paisesDeOrigen)
  }

  validateLength(property, value, maxLength) {
    if (value.length > maxLength)
      return console.error(
        `${property} "${value}" exceeds the maximun length of ${maxLength}`
      );
    return true;
  }

  validateString(property, value) {
    if (!value) return console.warn(`${property} "${value}" it's empty`);
    if (typeof value !== "string")
      return console.error(`${property} "${value}" is not a text string`);
    return true;
  }
  validateNumber(property, value) {
    if (!value) return console.warn(`${property} "${value}" it's empty`);
    if (typeof value !== "number")
      return console.error(`${property} "${value}" is not a number`);
    return true;
  }
  validateArrayofStrings(property, array) {
    if (!array) return console.error("Your array can not be empty");
    if (!(array instanceof Array))
      return console.error(`${property} "${array}" is not an array`);
    if (array.length < 1)
      return console.error(`${property} array can not be empty`);
    array.forEach((element) => {
      if (typeof element !== "string")
        return console.error(`${property} "${element}" is not a string`);
    });
    return true;////
  }

  validateIMDB(id) {
    if (this.validateString("IMDBid", id)) {
      if (!/^([a-z]){2}([0-9]){7}$/.test(id))
        return console.error(
          `IMDB id "${id}" must begin with 2 lower case letters followed by 7 numbers`
        );
    }
  }
  validateTitle(title) {
    if (this.validateString("Title", title)) {
      this.validateLength("título", title, 100);
    }
    return true;
  }
  validateDirector(director) {
    if (this.validateString("Director", director)) {
      this.validateLength("Director", director, 50);
    }
    return true;
  }
  validateYear(year) {
    if (this.validateNumber("Año de estreno", year)) {
      if (!(Number.isInteger(year) && year > 1000 && year < 9999))
        return console.error(
          `Year "${year}" must be an integer number of 4 digits`
        );
      return true;
    }
  }
  validateOriginCountries(paisesDeOrigen) {
    if (this.validateArrayofStrings('Countries of origin',paisesDeOrigen))
      return true
  }
}

// const titanic = new Pelicula({
//   id: "aa1234567",
// });
const avengers = new Pelicula({
  id: "tt7865746",
  titulo: "Titanic",
  director: "James Cameron",
  anioEstreno: 1991,
  paisesDeOrigen: ['Colombia', 'Puerto Rico'],
  // generos,
  // calificacionIMBD,
});

// console.log(titanic);
// console.log(avengers);
