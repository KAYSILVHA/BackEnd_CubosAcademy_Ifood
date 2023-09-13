//criar a função que recebe dois parametros

// function dividirGrupos(nomes, tamanhoDoGrupo){
//     let separarNomes = nomes.slice(0,tamanhoDoGrupo)
//     let separarNomes2 = nomes.slice(tamanhoDoGrupo,tamanhoDoGrupo.lenght);
//     console.log(separarNomes.join(", "))
//     console.log(separarNomes2.join(", "))
// }

// dividirGrupos(['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'],5)


function dividirGrupos(nomes, tamanhoDoGrupo) {
    for (let i = 0; i < nomes.length; i += tamanhoDoGrupo) {
        const grupo = nomes.slice(i, i + tamanhoDoGrupo);
        console.log(`Grupo ${Math.floor(i / tamanhoDoGrupo) + 1}: ${grupo.join(', ')}.`);
    }
}
dividirGrupos(['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego', 'Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'], 4);