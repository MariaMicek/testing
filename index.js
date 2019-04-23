const add = (a, b) => a + b

if (add(2, 7) !== 7) {
    throw new Error ('błąd dodawania')
}

console.log('dodawanie działa')