const sumOrderPrice = (orders) => orders.reduce(
    (sum, product) => sum + product.price * (product.quantity || 1),
    0
)

const testOrder1 = [
    { name: 'żwirek dla kota', price: 100 },
    { name: 'sok pomarańczowy', price: 4 },
]

if (sumOrderPrice(testOrder1) !== 104) {
    throw new Error('simple orderis not working')
}
console.log('simple order is working')

const testOrder2 = [
    { name: 'żwirek dla kota', price: 100, quantity: 2, },
    { name: 'sok pomarańczowy', price: 4, quantity: 3, },
]

if (sumOrderPrice(testOrder2) !== 212) {
    throw new Error('order with quantity is not working')
}
console.log('order with quantity is working')

const testOrder3 = [
    { name: 'żwirek dla kota', price: 100, },
    { name: 'sok pomarańczowy', price: 4, quantity: 3, },
]

if (sumOrderPrice(testOrder3) !== 112) {
    throw new Error('order with and without quantity is not working')
}
console.log('order with and without quantity is working')

const testOrder4 = [
    { name: 'żwirek dla kota', price: 100, },
    { name: 'sok pomarańczowy', price: 4, quantity: 3, },
    { name: 'shipment', price: 120 }
]

if (sumOrderPrice(testOrder4) !== 112) {
    throw new Error('order (less then 100) with shipment is not working')
}
console.log('order (less then 100) with shipment is working')

const testOrder5 = [
    { name: 'sok pomarańczowy', price: 4, quantity: 3, },
    { name: 'shipment', price: 120 }
]

if (sumOrderPrice(testOrder5) !== 132) {
    throw new Error('order (more then 100) with shipment is not working')
}
console.log('order (more then 100) with shipment is working')
