// Fetching products
fetch('http://localhost:5000/products')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log( data);
let products = document.getElementById('products');
    data.forEach (item => {
let items = document.createElement('li')
    items.innerText = `${item.name}`
    products.appendChild(items)
})
})
.catch(function (error) {
    console.log('error', error);
});

// Fetching fruits
fetch('http://localhost:5000/products/fruits')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log( data);
let fruit = document.getElementById('fruList');
    data.forEach (item => {
let items = document.createElement('li')
    items.innerText = `${item.name}`
    fruit.appendChild(items)
})
})
.catch(function (error) {
    console.log('error', error);
});

// Fetching vegetables
fetch('http://localhost:5000/products/vegetables')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log( data);
let vegies = document.getElementById('vegList');
    data.forEach (item => {
let items = document.createElement('li')
    items.innerText = `${item.name}`
    vegies.appendChild(items)
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