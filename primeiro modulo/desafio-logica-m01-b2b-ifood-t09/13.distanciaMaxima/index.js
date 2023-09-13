function processData(input) {
  const linhas = input.trim().split("\n");
  const n = parseInt(linhas[0], 10);
  const coordenadas = [];

  for (let i = 1; i < linhas.length; i++) {
    const coord = linhas[i].split(" ");
    coordenadas.push({
      x: parseFloat(coord[0]),
      y: parseFloat(coord[1]),
    });
  }

  let maxDistance = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const { x: x1, y: y1 } = coordenadas[i];
      const { x: x2, y: y2 } = coordenadas[j];
      const distancia = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
      maxDistance = Math.max(maxDistance, distancia);
    }
  }

  console.log(maxDistance);
}