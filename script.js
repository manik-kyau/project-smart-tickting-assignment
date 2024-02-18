const allButton = document.querySelectorAll('.bttn');
let count = 0;
for(let i = 0;  i <allButton.length; i++){
    const bttn = allButton[i];
    bttn.addEventListener('click',function(){
        // ticket title container
        const title = bttn.querySelector('h3').innerText;
        const titleContainer = document.getElementById('title-containet');
        const p = document.createElement('p');
        p.innerText = title;
        titleContainer.appendChild(p);

        classContainer('class-container');
        priceContainer('price-container');

        
        
    })
}
// economoy container 
function classContainer(id){
    const titleContainer = document.getElementById(id);
    const p = document.createElement('p');
    p.innerText = 'Economoy';
    titleContainer.appendChild(p);
}

// price container 
function priceContainer(id){
    const priceContainer = document.getElementById(id);
    const p = document.createElement('p');
    p.innerText = '550'
    priceContainer.appendChild(p);
    const ticketPrice = parseInt(document.getElementById('price-container').childNodes[1].innerText);
    // sum of total ticket price
    const totalPrice = document.getElementById('total');
    const price = parseInt(document.getElementById('total').innerText);
    const sum = ticketPrice + price;
    totalPrice.innerText = sum;

    // Grand Total Price
    const grandTotal = document.getElementById('grandtotal');
    grandTotal.innerText = sum;
}
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
};