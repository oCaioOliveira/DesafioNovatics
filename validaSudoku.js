// Validar todos os aspectos de uma tabela Sudoku: linhas, colunas e mini tabelas.
function validarTabelaSudoku(tabelaSudoku) {
    if (validarLinhaSudoku(tabelaSudoku) === true &&
        validarColunaSudoku(tabelaSudoku) === true &&
        validarMiniTabelaSudoku(tabelaSudoku) === true)
        return true
    else
        return false
}

// Validar as linhas da tabela Sudoku recebida.
function validarLinhaSudoku(tabelaSudoku) {
    for (let i = 0; i < tabelaSudoku.length; i++) {
        for (let j = 0; j < tabelaSudoku[i].length; j++) {
            if (tabelaSudoku[i][j] === ".")
                continue
            else if (tabelaSudoku[i].filter(element => element == tabelaSudoku[i][j]).length > 1)
                return false
        }
    }
    return true
}

// Validar as colunas da tabela Sudoku.
function validarColunaSudoku(tabelaSudoku) {
    let tabelaSudokuColuna = [["", "", "", "", "", "", "", "", ""]
                            , ["", "", "", "", "", "", "", "", ""]
                            , ["", "", "", "", "", "", "", "", ""]
                            , ["", "", "", "", "", "", "", "", ""]
                            , ["", "", "", "", "", "", "", "", ""]
                            , ["", "", "", "", "", "", "", "", ""]
                            , ["", "", "", "", "", "", "", "", ""]
                            , ["", "", "", "", "", "", "", "", ""]
                            , ["", "", "", "", "", "", "", "", ""]]

    tabelaSudokuColuna = transformarColunaLinha(tabelaSudoku, tabelaSudokuColuna)

    return validarLinhaSudoku(tabelaSudokuColuna)
}

// Transformar cada coluna em uma linha da tabela Sudoku.
function transformarColunaLinha(tabelaSudoku, tabelaSudokuColuna) {
    for (let i = 0; i < tabelaSudoku.length; i++) {
        for (let j = 0; j < tabelaSudoku[i].length; j++) {
            tabelaSudokuColuna[j][i] = tabelaSudoku[i][j]
        }
    }
    return tabelaSudokuColuna;
}

// Validar as mini tabelas da tabela Sudoku.
function validarMiniTabelaSudoku(tabelaSudoku) {

    let tabelaSudokuMini =   [["", "", "", "", "", "", "", "", ""]
                            , ["", "", "", "", "", "", "", "", ""]
                            , ["", "", "", "", "", "", "", "", ""]
                            , ["", "", "", "", "", "", "", "", ""]
                            , ["", "", "", "", "", "", "", "", ""]
                            , ["", "", "", "", "", "", "", "", ""]
                            , ["", "", "", "", "", "", "", "", ""]
                            , ["", "", "", "", "", "", "", "", ""]
                            , ["", "", "", "", "", "", "", "", ""]]

    tabelaSudokuMini = transformarMiniTabelaLinha(tabelaSudoku, tabelaSudokuMini)

    return validarLinhaSudoku(tabelaSudokuMini)
}

// Transformar cada mini tabela em uma linha da tabela Sudoku.
function transformarMiniTabelaLinha(tabelaSudoku, tabelaSudokuMini) {
    for (let i = 0; i < tabelaSudoku.length; i += 3) {
        for (let j = 0; j < tabelaSudoku[i].length; j++) {
            if (j < 3) {
                tabelaSudokuMini[i][j] = tabelaSudoku[i][j]
                tabelaSudokuMini[i][j + 3] = tabelaSudoku[i + 1][j]
                tabelaSudokuMini[i][j + 6] = tabelaSudoku[i + 2][j]
            }
            else if (j >= 3 && j < 6) {
                tabelaSudokuMini[i + 1][j - 3] = tabelaSudoku[i][j]
                tabelaSudokuMini[i + 1][j] = tabelaSudoku[i + 1][j]
                tabelaSudokuMini[i + 1][j + 3] = tabelaSudoku[i + 2][j]
            }
            else if (j >= 6 && j < 9) {
                tabelaSudokuMini[i + 2][j - 6] = tabelaSudoku[i][j]
                tabelaSudokuMini[i + 2][j - 3] = tabelaSudoku[i + 1][j]
                tabelaSudokuMini[i + 2][j] = tabelaSudoku[i + 2][j]
            }
        }
    }
    return tabelaSudokuMini
}

// Teste integrado para testar todas as funcoes do sistema.
function testarValidarTabelaSudoku() {
    // MONTAGEM
    const tabelaSudoku1 =    [["5", "3", ".", ".", "7", ".", ".", ".", "."]
                            , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
                            , [".", "9", ".", ".", ".", ".", ".", "6", "."]
                            , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
                            , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
                            , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
                            , [".", "6", ".", ".", ".", ".", "2", "8", "."]
                            , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
                            , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

    const tabelaSudoku2 =    [["8", "3", ".", ".", "7", ".", ".", ".", "."]
                            , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
                            , [".", "9", "8", ".", ".", ".", ".", "6", "."]
                            , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
                            , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
                            , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
                            , [".", "6", ".", ".", ".", ".", "2", "8", "."]
                            , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
                            , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

    // ACAO
    const esperado1 = validarTabelaSudoku(tabelaSudoku1)
    const esperado2 = validarTabelaSudoku(tabelaSudoku2)

    // TESTES
    // TESTE 1: entrada de uma tabela valida.
    console.log("Test 1: ")

    if (esperado1 === true)
        console.log(true)
    else
        console.log("Expected: " + true + " Was: " + false)

    // TESTE 2: entrada de uma tabela nao valida.
    console.log("\n" + "Test 2: ")

    if (esperado2 === false)
        console.log(false)
    else
        console.log("Expected: " + false + " Was: " + true)
}

testarValidarTabelaSudoku();