function sumaMatrice(matrice1, matrice2) {
    if (typeof matrice1 == "object" && typeof matrice2 == "object") {
        let matrice3 = []
        for (let index = 0; index < matrice1.length; index++) {
            matrice3.push([])
            for (let jindex = 0; jindex < matrice1[index].length; jindex++) {
                matrice3[index].push(matrice1[index][jindex] + matrice2[index][jindex])

            }

        }
        return matrice3
    } else {
        console.log("Suma nu a putut fi efectuata.")
        return []
    }
}

let matrice1 = [[14, 15], [16, 17], [18, 19]]
let matrice2 = [[20, 21], [22, 23], [24, 25]]
console.log(sumaMatrice(matrice1, matrice2))
