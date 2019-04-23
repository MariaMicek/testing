const add = (a, b) => a + b

if (add(2, 5) !== 7 || add(2, 10) !== 12 || add(0,0) !== 0) {
    throw new Error ('błąd dodawania liczb całkowitych')
}

console.log('dodawanie liczb całkowitych działa')

if (add('2', '5') !== 7) {
    throw new Error ('błąd dodawania liczb w stringach')
}

console.log('dodawanie liczb w stringach działa')

if (add(0.2, 0.4) !== 0.6) {
    throw new Error ('błąd dodawania ułamków')
}

console.log('dodawanie ułamków działa')

