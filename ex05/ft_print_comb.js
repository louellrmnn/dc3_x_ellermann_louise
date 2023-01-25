function printComb() {
    for (let a = 0; a <= 7; a++) {
        for (let b = a + 1; b <= 8; b++) {
            for (let c = b + 1; c <= 9; c++) {
                console.log(a, b, c);
            }
        }
    }
}

printComb();