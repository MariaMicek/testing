const add = (a, b) => {
    const aToNumber = Number(a)
    const bToNumber = Number(b)

    if (aToNumber && bToNumber) {
        return aToNumber + bToNumber
    } else {
        return 0
    }
}


if (add(2, 5) !== 7 || add(2, 10) !== 12 || add(0,0) !== 0) {
    throw new Error ('błąd dodawania liczb całkowitych')
}

console.log('dodawanie liczb całkowitych działa')

if (add('2', '5') !== 7 || add('2', '10') !== 12) {
    throw new Error ('błąd dodawania liczb w stringach')
}

console.log('dodawanie liczb w stringach działa')

if (add('ala', 'ma kota') !== 0 || add('ala', 5) !== 0) {
    throw new Error ('funkcja powinna zwracać zero dla stringów z literami')
}

console.log('funkcja zwraca zero dla stringów z literami')

// if (add(0.2, 0.4) !== 0.6) {
//     throw new Error ('błąd dodawania ułamków')
// }

// console.log('dodawanie ułamków działa')