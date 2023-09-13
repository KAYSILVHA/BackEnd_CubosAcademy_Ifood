function pegarCarros(nomes, posicao){
    let carros = nomes.slice(posicao,posicao+3)
    console.log(carros.join(" - "))
}

pegarCarros(['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'], 3)

