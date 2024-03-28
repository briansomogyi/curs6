function sumaMatrice(matrice1, matrice2) {

    let matrice3 = []
    for (let index = 0; index < matrice1.length; index++) {
        matrice3.push([])
        for (let jindex = 0; jindex < matrice1[index].length; jindex++) {
            matrice3[index].push({ brian: matrice1[index][jindex].brian + matrice2[index][jindex].brian })

        }

    }
    return matrice3

}

let matrice1 = [[{ brian: 14 }, { brian: 15 }], [{ brian: 16 }, { brian: 17 }], [{ brian: 18 }, { brian: 19 }]]
let matrice2 = [[{ brian: 20 }, { brian: 21 }], [{ brian: 22 }, { brian: 23 }], [{ brian: 24 }, { brian: 25 }]]
console.log(sumaMatrice(matrice1, matrice2))
