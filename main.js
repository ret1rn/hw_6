// Задания №1

let products = [
    {
        model: "Tesla Model X",
        price: "15000"
    },
    {
        model: "Tesla Model S Plaid",
        price: "50000"
    },
    {
        model: "Hyudai Sonata",
        price: "35000"
    },
    {
        model: "BMW M8 Competition",
        price: "300000"
    },
    {
        model: "Ford Raptor",
        price: "60000"
    },
    {
        model: "Volkswagen ID.4 Pure Plus 2022",
        price: "33500"
    },
    {
        model: "Toyota Land Cruiser 200 2012",
        price: "28000"
    },
    {
        model: "BMW X5 2016",
        price: "29800"
    },
    {
        model: "Chevrolet Сamaro (б/у)",
        price: "34500"
    },
]

let expensive = []
let сheap = []

products.filter(car => car.price >= 35000 ? expensive.push(car) : сheap.push(car))

console.log(
    expensive,
    сheap
)


// Задания №2

let index = prompt("Any number?")

let arr = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica']

arr[index] ?  arr.splice(index, + 1) : alert("Нету такого элемента")

console.log(arr);


// Задания №3

let arr_2 = [[{ a: { price: 20 } }],[{ a: { price: 35 } }],[{ a: { price: 44 } }]]
let total = 0

arr_2.filter(item => total += item[0].a.price)

console.log(total);