fetch('http://localhost:5000/products')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log( data);
let goods = document.getElementById('products');
    data.forEach (item => {
let items = document.createElement('li')
    items.innerText = `${item.name}`
    goods.appendChild(items)
})
})
.catch(function (error) {
    console.log('error', error);
});


fetch('http://localhost:5000/products/fruits')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log( data);
let goods = document.getElementById('fruList');
    data.forEach (item => {
let items = document.createElement('li')
    items.innerText = `${item.name}`
    goods.appendChild(items)
})
})
.catch(function (error) {
    console.log('error', error);
});


fetch('http://localhost:5000/products/vegetables')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log( data);
let goods = document.getElementById('vegList');
    data.forEach (item => {
let items = document.createElement('li')
    items.innerText = `${item.name}`
    goods.appendChild(items)
})
})
.catch(function (error) {
    console.log('error', error);
});


// let card = document.createElement('li')
// card.className = "card"
// card.innerHTML = `
// <h2>Name: ${products.name}</h2>
// `