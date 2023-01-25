function printCombDeux() {
    for (let a = 0; a <= 99; a++) {
        for (let b = a + 1; b <= 99; b++) {
            if (a < 10 && b < 10) {
                console.log("0" + a + " 0" + b);
            } else if (a < 10 && b >= 10) {
                console.log("0" + a + " " + b);
            } else if (a >= 10 && b < 10) {
                console.log(a + " 0" + b);
            } else {
                console.log(a + " " + b);
            }
        }
    }
}

printCombDeux();