// Ordenar a lista e eliminar os numeros iguais nesta
function ordenarListaRemoverDuplicata(lista) {
    lista.sort((a, b) => a - b)
    const listaSet = new Set(lista);
    lista = [...listaSet]
    return lista;
}

// Testar a funcao ordenaLista
function testeOrdenaLista() {
    // MONTAGEM
    let lista1 = [1, 1, 1, 1, 1, 0, 9]
    let lista2 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    let lista3 = [8, 5, 10, 5, 2, 4, 4, 3]

    const ListaEsperado1 = [0, 1, 10]
    const ListaEsperado2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const ListaEsperado3 = [2, 3, 4, 5, 8, 10]

    let key = true;

    // ACAO
    lista1 = ordenarListaRemoverDuplicata(lista1)
    lista2 = ordenarListaRemoverDuplicata(lista2)
    lista3 = ordenarListaRemoverDuplicata(lista3)

    // TESTES
    // TESTE 1: entrada de uma lista com varios elementos repetidos
    console.log("Test 1: ")

    if(lista1.length === ListaEsperado1.length) {
        for (let i = 0; i < lista1.length; i++)
            if (lista1[i] !== ListaEsperado1[i])
                key = false

        if (key === true)
            console.log(key)
        else
            console.log("Expected: " + ListaEsperado1 + " Was: " + lista1)
    } else
        console.log("Expected: " + ListaEsperado1 + " Was: " + lista1)

    // TESTE 2: entrada com uma lista totalmente decrescente
    console.log("Test 2: ")

    key = true

    if(lista2.length === ListaEsperado2.length) {
        for (let i = 0; i < lista2.length; i++)
            if (lista2[i] !== ListaEsperado2[i])
                key = false

        if (key === true)
            console.log(key)
        else
            console.log("Expected: " + ListaEsperado2 + " Was: " + lista2)
    } else
        console.log("Expected: " + ListaEsperado2 + " Was: " + lista2)

    // TESTE 3: entrada da lista no enunciado do problema
    console.log("Test 3: ")

    key = true

    if(lista3.length === ListaEsperado3.length) {
        for (let i = 0; i < lista3.length; i++)
            if (lista3[i] !== ListaEsperado3[i])
                key = false

        if (key === true)
            console.log(key)
        else
            console.log("Expected: " + ListaEsperado3 + " Was: " + lista3)
    } else
        console.log("Expected: " + ListaEsperado3 + " Was: " + lista3)
}

testeOrdenaLista()

