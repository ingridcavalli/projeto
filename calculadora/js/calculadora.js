function soma() {
    let numero1 = document.getElementById('num1').value;
    let numero2 = document.getElementById('num2').value;

    if (numero1.trim() === '' || numero2.trim() === '') {
        alert('Insirir os dois números');
        return;
      }
  
    if (isNaN(numero1) || isNaN(numero2) || parseFloat(numero1) < 0 || parseFloat(numero2) < 0) {
      alert('Números inválidos. Colocar valores maiores ou iguais a zero');
      return;
    }
  
    let resultado = parseFloat(numero1) + parseFloat(numero2);
    document.getElementById('resultado').value = resultado;
  }
  
  function subtrai() {
    let numero1 = document.getElementById('num1').value;
    let numero2 = document.getElementById('num2').value;

    if (numero1.trim() === '' || numero2.trim() === '') {
        alert('Insirir os dois números');
        return;
      }
  
    if (isNaN(numero1) || isNaN(numero2) || parseFloat(numero1) < 0 || parseFloat(numero2) < 0) {
      alert('Números inválidos. Colocar valores maiores ou iguais a zero');
      return;
    }
  
    let resultado = parseFloat(numero1) - parseFloat(numero2);
    document.getElementById('resultado').value = resultado;
  }
  
  function multiplica() {
    let numero1 = document.getElementById('num1').value;
    let numero2 = document.getElementById('num2').value;

    if (numero1.trim() === '' || numero2.trim() === '') {
        alert('Insirir os dois números');
        return;
      }
  
    if (isNaN(numero1) || isNaN(numero2) || parseFloat(numero1) < 0 || parseFloat(numero2) < 0) {
      alert('Números inválidos. Colocar valores maiores ou iguais a zero');
      return;
    }
  
  
    let resultado = parseFloat(numero1) * parseFloat(numero2);
    document.getElementById('resultado').value = resultado;
  }
  
  function divide() {
    let numero1 = document.getElementById('num1').value;
    let numero2 = document.getElementById('num2').value;

    if (numero1.trim() === '' || numero2.trim() === '') {
        alert('Insirir os dois números');
        return;
      }
  
    if (isNaN(numero1) || isNaN(numero2) || parseFloat(numero1) < 0 || parseFloat(numero2) < 0) {
      alert('Números inválidos. Colocar valores maiores ou iguais a zero');
      return;
    }
  
  
    let resultado = parseFloat(numero1) / parseFloat(numero2);
    document.getElementById('resultado').value = resultado;
  }
  
function potenciacão(){
    let numero1 = document.getElementById('num1').value;
    let numero2 = document.getElementById('num2').value;

    
    if (numero1.trim() === '' || numero2.trim() === '') {
        alert('Insirir os dois números');
        return;
      }
  
    if (isNaN(numero1) || isNaN(numero2) || parseFloat(numero1) < 0 || parseFloat(numero2) < 0) {
      alert('Números inválidos. Colocar valores maiores ou iguais a zero');
      return;
    }
  

    potencia = Math.pow(numero1, numero2);

    return document.getElementById('resultado').value = potencia;
}
function raiz(){
    let numero1 = document.getElementById('num1').value;

    
    if (numero1.trim() === '' ) {
        alert('Inserir um número');
        return;
      }

    if (isNaN(numero1) || numero1 <= 0) {
        alert('Número inválido. Colocar valor maior ou igual a zero ');
        return;
    }

    resultado = Math.sqrt(numero1);

    return document.getElementById('resultado').value = resultado;
}
function factorialize(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorialize(num - 1);
    }
}
function fatoracao() {
    let numero1 = document.getElementById('num1').value;

    if (numero1.trim() === '' ) {
        alert('Inserir um número');
        return;
      }

    if (isNaN(numero1) || numero1 <= 0) {
        alert('Número inválido. Colocar valor maior ou igual a zero ');
        return;
    }

    let fatorial = factorialize(numero1);
  
    document.getElementById('resultado').value = fatorial;
}
function log() {
    let numero1 = document.getElementById('num1').value;

    if (numero1.trim() === '' ) {
        alert('Inserir um número');
        return;
      }

    if (isNaN(numero1) || numero1 <= 0) {
        alert('Número inválido. Colocar valor maior ou igual a zero ');
        return;
    }
    let logaritmo = Math.log(numero1);

    document.getElementById('resultado').value = logaritmo;
}
  