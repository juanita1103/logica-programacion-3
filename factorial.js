const formulario = document.getElementById('formularioFactorial');
const numero = document.getElementById('numeroIngresado');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  const numero1 = parseFloat((numero).value);

  if (isNaN(numero1)) {
      resultado.textContent = "Ingrese un número valido";
      return;
  }

  let factorial = 1;
  for (let i = 1; i <= numero1; i++) {
      factorial *= i;
  }

  document.getElementById('resultado').textContent = `El factorial de ${numero1} es: ${factorial}`;
});
