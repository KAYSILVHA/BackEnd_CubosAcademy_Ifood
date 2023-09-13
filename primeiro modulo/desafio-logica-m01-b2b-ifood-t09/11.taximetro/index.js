function solucao(min, km) {
  let valorAPagar = 0;
  const precoPorMinuto = 50;
  const precoPorKm = 70;
  if (min > 20) {
    const minutosMaisBaratos = (min - 20) * 30;
    const minutosAPagar = 20 * precoPorMinuto + minutosMaisBaratos;
    valorAPagar += minutosAPagar;
  } else {
    valorAPagar += min * precoPorMinuto;
  }

  if (km > 10) {
    const kmsMaisBaratos = (km - 10) * 50;
    const kmsAPagar = 10 * precoPorKm + kmsMaisBaratos;
    valorAPagar += kmsAPagar;
  } else {
    valorAPagar += km * precoPorKm;
  }

  valorAPagar = Math.floor(valorAPagar);
  console.log(valorAPagar);
}

solucao(25, 11.5);