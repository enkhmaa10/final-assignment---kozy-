const allProducts = [
    {shop: "Office Desk", photo: "desk.jpg",  rooms: "Living Room" , style: "Art-Deco", colour: "White", isInStock: true, price: 500},
    {shop: "Assorted Lamp", photo: "assorted-lamp.jpg", rooms: "All" , style: "Modern", colour: "Black", isInStock: false, price: 2000},
    {shop: "Vintage Vase Set", photo: "vase-sets.jpg", rooms: "All" , style: "Organic", colour: "Grey", isInStock: true, price: 1000},
    {shop: "Violet Coach", photo: "voilet-coach.svg", rooms: "Living Room" , style: "Eco", colour: "Blue", isInStock: true, price: 2550},
    {shop: "Grey Chair", photo: "grey-chair.svg", rooms: "Living Room" , style: "Vintage", colour: "Purple", isInStock: false, price: 550},
    {shop: "Love Seat", photo: "peach-coach.svg", rooms: "Living Room" , style: "Organic", colour: "Peach", isInStock: true, price: 800},
    {shop: "Patio Set", photo: "patio-table .jpg", rooms: "Patio" , style: "Vintage", colour: "Cyan Blue", isInStock: false, price: 1540},
    {shop: "Flower Vase", photo: "vase.jpg", rooms: "All" , style: "Organic", colour: "White", isInStock: true, price: 60},
    {shop: "Whisker Chair", photo: "whisk-chair.jpg", rooms: "Living Room" , style: "Organic", colour: "Brown", isInStock: false, price: 900},
    {shop: "Desk Lamp", photo: "pink-lamp.jpg", rooms: "Living Room" , style: "Art-Deco", colour: "Pink", isInStock: true, price: 150},
    {shop: "Snake Lamp", photo: "metal-lamp.jpg",  rooms: "All" , style: "Modern", colour: "Metal", isInStock: true, price: 250},
    {shop: "Curtain", photo: "curtain.jpg", rooms: "All" , style: "Modern", colour: "White and Blue", isInStock: false, price: 480},
    {shop: "Persian Rug", photo: "rug.jpg", rooms: "Living Room" , style: "Vintage", colour: "Red", isInStock: true, price: 3897},
    {shop: "Boat Coach", photo: "big-cushion-coach.jpg", rooms: "Living Room" , style: "Modern", colour: "Grey", isInStock: false, price: 5689},
    {shop: "Pillow", photo: "pillow.jpg", rooms: "All" , style: "Comptemprary", colour: "Peach", isInStock: true, price: 50},
]

/**************************************************************
                Search Button
****************************************************************/

const showMatchingName = (query) =>{

    printCountriesToList (countries)
    
}

document.getElementById(`search`).addEventListener(`submit`, (event)=> {
    event.preventDefault(q); 

    //document.getElementById(`search`).resent(); 
});


const formatProduct = (product) => {

    let outOfStock =``; 
    if (product.isInStock == false) {
        outOfStock = ` <div class=no-price>$${product.price}</div>
        <span class="not-available">Out of Stock</span>`;
    }
    else {
        outOfStock = `<div class="price">$${product.price}</div>`;
    }   
    
    return `
    <li class="product-pic">
        <div class = "product"><a href="product-page.html"><img src="img/${product.photo}"></a></div>
        <div class="product-des"><a href="product-page.html">${product.shop}</a></div>
        <div class="price"> Room: ${product.rooms}</div>
        <div class="price"> Style: ${product.style}</div>
        <div class="price"> Colour: ${product.colour}</div>
        <div class="price">${outOfStock}</div>
    </li>`; 
}

// const getProductstoHTML = allProducts.map(formatProduct)
const getProductstoHTML =(prod, start, qty) => {
    return prod.map(formatProduct)
    .slice(start, start+qty)
    .join(``);
}

// Store the Location of the List <ol> 
const $productAList = document.getElementById(`productA`); 
const $bntProducts = document.getElementById(`viewProduct`); 
const $bntB = document.getElementById(`bntB`); 
const $btnPrice = document.getElementById(`btnPrice`)
const $btnStyle = document.getElementById(`btnStyle`)
const $btnRooms = document.getElementById(`btnRooms`)
const $btnColour = document.getElementById(`btnColour`)
const $btnStock = document.getElementById(`btnStock`)

// press for - it gives you the for loop code 

const productAList = () => {

    $productAList.innerHTML += getProductstoHTML(allProducts, nextIndex, nextQty);

    nextIndex += nextQty;

    if (nextIndex >= allProducts.length)
        $bntProducts.style.visibility =  `hidden`;
    else if (allProducts.length >= nextIndex + nextQty)
        $bntProducts.innerHTML = `Show next ${nextQty} products`;
    else if (allProducts.length < nextIndex + nextQty)
        $bntProducts.innerHTML = `Show next ${allProducts.length - nextIndex} products`;

    //$bntProducts.style.visibility=`hidden`;
    //$bntB.style.visibility =`visible`;
    
}

let nextIndex = 0;
let nextQty = 5;

$bntProducts.addEventListener(`click`, productAList); 

const sortPrice = ( start1, end1) => {

document.getElementById(`productA`).innerHTML = allProducts 
.sort ((a,b)=> b.price - a.price ) 
.slice(start1, start1+end1)
.map (formatProduct)
.join (``);

document.getElementById(`title`).innerHTML = `<h1 class="title">Sorted by Price: High to Low</h1>`;

}


$btnPrice.addEventListener(`click`, sortPrice); 
window.addEventListener(`load`, $bntProducts); 



const sortStyle = ( start2, end2) => {

    document.getElementById(`productA`).innerHTML = allProducts 
    .sort ((a,b) => a.style - b.style)
    .slice(start2, start2+end2)
    .map (formatProduct)
    .join (``);
    
    document.getElementById(`title`).innerHTML = `<h1 class="title">Sorted by Style</h1>`;
    
    }

  
$btnStyle.addEventListener(`click`, sortStyle); 

