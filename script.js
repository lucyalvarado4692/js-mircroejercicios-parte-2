//ejercicio numero 1 Escribe un programa que pida dos números y escriba en la pantalla cuál es el mayor.
let click1 = document.getElementById("click1");
click1.onclick = click1Action;
function click1Action() {
  let firstNumber = prompt("Escribe un número");
  let secondNumber = prompt("Escribe otro número");
  let biggerNumber = bigger();
  function bigger() {
    if (firstNumber > secondNumber) {
      return firstNumber;
    } else {
      return secondNumber;
    }
  }
  window.alert("El mayor es: " + biggerNumber);
  let result = document.getElementById("result1");
  result.innerHTML = "El mayor es: " + biggerNumber;
  return result;
}
// ejercicio 2 Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let click2 = document.getElementById("click2");
click2.onclick = click2Action;
function click2Action() {
  let firstNumber = prompt("Escribe un número");
  let secondNumber = prompt("Escribe otro número");
  let thirdNumber = prompt("Escribe otro ultimo número");
  let biggerNumber = bigger();
  function bigger() {
    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
      return firstNumber;
    } else if (secondNumber > thirdNumber) {
      return secondNumber;
    } else {
      return thirdNumber;
    }
  }
  window.alert("El mayor es: " + biggerNumber);
  let result = document.getElementById("result2");
  result.innerHTML = "El mayor es: " + biggerNumber;
  return result;
}
//ejercicio 3 Escribe un programa que pida un número y diga si es divisible por 2
let click3 = document.getElementById("click3");
click3.onclick = click3Action;
function click3Action() {
  let number1 = prompt("Escribe un número");
  let divisibleFor2 = divisible();
  function divisible() {
    if (number1 % 2 == 0) {
      return "Es divisible por 2";
    } else {
      return "No es divisible por 2";
    }
  }
  window.alert(divisibleFor2);
  let result = document.getElementById("result3");
  result.innerHTML = divisibleFor2;
}
// Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
let click4 = document.getElementById("click4");
click4.onclick = click4Action;
function click4Action() {
  let phrase = prompt("Escribe una frase");
  let string = phrase.toLowerCase().split("");
  let stringWithA = string.filter((character) => character == "a");
  window.alert("Tiene " + stringWithA.length + "letras a");
  let result = document.getElementById("result4");
  result.innerHTML = "Tiene " + stringWithA.length + " letras a";
}

//Escribe un programa que pida una frase y escriba las vocales que aparecen
let click5 = document.getElementById("click5");
click5.onclick = click5Action;
function click5Action() {
  let text = prompt("Escribe una frase");
  let vocal = text.match(/[aeiou]/gi);
  window.alert("Tenemos las siguientes vocales: " + vocal);
  let result = document.getElementById("result5");
  result.innerHTML = "Tenemos las siguientes vocales: " + vocal;
}
//Escribe un programa que pida una frase y escriba cuántas vocales hay en la frase.
let click6 = document.getElementById("click6");
click6.onclick = click6Action;
function click6Action() {
  let text = prompt("Escribe una frase");
  let vocal = text.match(/[aeiou]/gi);
  window.alert("El número de vocales es: " + vocal.length);
  let result = document.getElementById("result6");
  result.innerHTML = "El número de vocales es: " + vocal.length;
}
//
let click7 = document.getElementById("click7");
click7.onclick = click7Action;
function click7Action() {
  let text = prompt("Escribe una frase");
  let vocal = text.match(/[aeiou]/gi);
  let count = {};
  vocal.forEach(function (valor) {
    if (count[valor] === undefined) {
      count[valor] = 1;
    } else {
      count[valor] += 1;
    }
  });
  for (let letter in count) {
    let text = `${letter} = ${count[letter]}<br>`;
    document.getElementById("result7").innerHTML += text;
  }
}
//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
let click8 = document.getElementById("click8");
click8.onclick = click8Action;
function click8Action() {
  let number = prompt("Escribe un número");
  let divisibleFor = divisible();
  function divisible() {
    if (
      number % 2 === 0 ||
      number % 3 === 0 ||
      number % 5 === 0 ||
      number % 7 === 0
    ) {
      return "Es divisible por 2, 3, 5 o 7";
    } else {
      return "No es divisible ni por 2, ni por 3, ni por 5, ni por 7";
    }
  }
  window.alert(divisibleFor);
  let result = document.getElementById("result8");
  result.innerHTML = divisibleFor;
}
//Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
let click9 = document.getElementById("click9");
click9.onclick = click9Action;
function click9Action() {
  let number = prompt("Escribe un número");
  let divisibleFor = divisible();
  function divisible() {
    if (
      number % 2 === 0 &&
      number % 3 === 0 &&
      number % 5 === 0 &&
      number % 7 === 0
    ) {
      return "Es divisible por 2, por 3, por 5, y por 7";
    }
    if (number % 2 === 0 && number % 3 === 0 && number % 5 === 0) {
      return "Es divisible por 2, por 3, y por 5";
    }
    if (number % 2 === 0 && number % 3 === 0 && number % 7 === 0) {
      return "Es divisible por 2, por 3, y por 7";
    }
    if (number % 2 === 0 && number % 5 === 0 && number % 7 === 0) {
      return "Es divisible por 2, por 5, y por 7";
    }
    if (number % 3 === 0 && number % 5 === 0 && number % 7 === 0) {
      return "Es divisible por 3, por 5, y por 7";
    }
    if (number % 5 === 0 && number % 7 === 0) {
      return "Es divisible por 5, y por 7";
    }
    if (number % 3 === 0 && number % 7 === 0) {
      return "Es divisible por 3, y por 7";
    }
    if (number % 2 === 0 && number % 7 === 0) {
      return "Es divisible por 2, y por 7";
    }
    if (number % 3 === 0 && number % 5 === 0) {
      return "Es divisible por 3, y por 5";
    }
    if (number % 2 === 0 && number % 5 === 0) {
      return "Es divisible por 2, y por 5";
    }
    if (number % 2 === 0 && number % 3 === 0) {
      return "Es divisible por 2, y por 3";
    }
    if (number % 2 === 0) {
      return "Es divisible por 2";
    }
    if (number % 3 === 0) {
      return "Es divisible por 3";
    }
    if (number % 5 === 0) {
      return "Es divisible por 5";
    }
    if (number % 7 === 0) {
      return "Es divisible por 5";
    } else {
      return "No es divisible ni por 2, ni por 3, ni por 5, ni por 7";
    }
  }
  let result = document.getElementById("result9");
  result.innerHTML = divisibleFor;
}
//Escribir un programa que escriba en pantalla los divisores de un número dado
let click10 = document.getElementById("click10");
click10.onclick = click10Action;
function click10Action() {
  let number = prompt("Escribe un número");
  let divisor;
  let text = "";
  for (divisor = 2; divisor < number / 2; divisor++) {
    if (number % divisor === 0) {
      text += divisor + ",";
    }
  }
  document.getElementById("result10").innerHTML = "Los divisores son: " + text;
}
//Escribir un programa que escriba en pantalla los divisores comunes de dos números dados
let click11 = document.getElementById("click11");
click11.onclick = click11Action;
function click11Action() {
  let firstNumber = prompt("Escribe un número");
  let secondNumber = prompt("Escribe un número");
  let divisor;
  let text = "";
  let biggerNumber = bigger();
  function bigger() {
    if (firstNumber > secondNumber) {
      return firstNumber;
    } else {
      return secondNumber;
    }
  }
  for (divisor = 2; divisor < biggerNumber / 2; divisor++) {
    if (firstNumber % divisor === 0 && secondNumber % divisor === 0) {
      text += divisor + ",";
    }
  }
  document.getElementById("result11").innerHTML = "Los divisores son: " + text;
}

//Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)
let click12 = document.getElementById("click12");
click12.onclick = click12Action;
function click12Action() {
  let number = prompt("Escribe un número");
  let divisor;
  let primo = true;
  for (divisor = 2; divisor < number / 2; divisor++) {
    if (number % divisor === 0) {
      primo = false;
    }
  }
  if (primo) {
    document.getElementById("result12").innerHTML = "El número es primo";
  } else {
    document.getElementById("result12").innerHTML = "El número no es primo";
  }
}
