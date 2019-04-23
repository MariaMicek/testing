const add = (a, b) => Number(a) && Number(b) ? Math.round((Number(a) + Number(b)) * 1000) / 1000 : 0

if (
    add(2, 5) !== 7 || 
    add(2, 10) !== 12 || 
    add(0, 0) !== 0 ||
    add(-10,-30) !== -40
    ) {
    throw new Error('błąd dodawania liczb całkowitych')
}

console.log('dodawanie liczb całkowitych działa')

if (
    add('2', '5') !== 7 || 
    add('2', '10') !== 12 ||
    add('-10','-30') !== -40
    ) {
    throw new Error('błąd dodawania liczb w stringach')
}

console.log('dodawanie liczb w stringach działa')

if (
    add('ala', 'ma kota') !== 0 || 
    add('ala', 5) !== 0
    ) {
    throw new Error('funkcja powinna zwracać zero dla stringów z literami')
}

console.log('funkcja zwraca zero dla stringów z literami')

if (add(0.2, 0.004) !== 0.204) {
    throw new Error('błąd dodawania ułamków')
}

console.log('dodawanie ułamków działa')