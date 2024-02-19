const allButton = document.querySelectorAll('.bttn');
let count = 0;
for(let i = 0;  i <allButton.length; i++){
    const bttn = allButton[i];
    bttn.addEventListener('click',function(event){
        count = count + 1;
        // enable Apply button
        if(count >= 4){
            document.getElementById('apply-button').disabled = false;
        }
        
        // set backgrounf color of seet
        const bgColor = event.target;
        bgColor.style.backgroundColor = '#1DD100';
        bgColor.style.color = 'white';
        event.target.setAttribute('disabled', true);
        
        // ticket title container
        const title = bttn.querySelector('h3').innerText;
        const titleContainer = document.getElementById('title-containet');
        const p = document.createElement('p');
        p.innerText = title;
        titleContainer.appendChild(p);

        // after seat booking count
        const seatCountLeft =parseInt(document.getElementById('seat-left').innerText);
        let seatCount = seatCountLeft - 1;

        classContainer('class-container');
        priceContainer('price-container');
        setInnerText('seat-count', count);
        setInnerText('seat-left', seatCount);
    })
};
// Scroll option
function scrollParibahan(){
    const scrollSection = document.getElementById('scroll');
    scrollSection.scrollIntoView({behavior:'smooth'});
};
// economoy container 
function classContainer(id){
    const titleContainer = document.getElementById(id);
    const p = document.createElement('p');
    p.innerText = 'Economoy';
    titleContainer.appendChild(p);
};
// price container 
function priceContainer(id){
    const priceContainer = document.getElementById(id);
    const p = document.createElement('p');
    p.innerText = '550';
    priceContainer.appendChild(p);
    const ticketPrice = parseFloat(document.getElementById('price-container').childNodes[1].innerText);
    // sum of total ticket price
    const totalPrice = document.getElementById('total');
    const price = parseFloat(document.getElementById('total').innerText);
    const sum = ticketPrice + price;
    totalPrice.innerText = sum;

    // Grand Total Price
    const grandTotal = document.getElementById('grandtotal');
    grandTotal.innerText = sum;
};
// work of input field and coupon
function inputCouponCode(){

    hideSectionById('hidden-section');

    const inputCoupon = document.getElementById('input-field').value.split(' ').join('').toUpperCase();
    const grandTotalCost = parseInt(document.getElementById('grandtotal').innerText);
    if(inputCoupon === 'NEW15'){
        const discount = grandTotalCost - (grandTotalCost * 0.15);
        setInnerText('grandtotal', discount);
    }
    else if(inputCoupon === 'COUPLE20'){
        const discount = grandTotalCost - (grandTotalCost * 0.2);
        setInnerText('grandtotal', discount);
    }
    else{
        const shownSection = document.getElementById('hidden-section');
        const shown = shownSection.classList.remove('hidden');
        alert('Invalid Coupon Code.');
    }
};
function hideSectionById(sectionId){
    const hideSection = document.getElementById(sectionId);
    const hide = hideSection.classList.add('hidden');
};
function showSectionById(sectionId){
    const showSection = document.getElementById(sectionId);
    const shown = showSection.classList.remove('hidden');
};
//  set inner text
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
};
//  input form 
const emailAddress = document.getElementById('email');
emailAddress.addEventListener('input',submitInputText);
const phoneNumber = document.getElementById('phoneNum');
phoneNumber.addEventListener('input',submitInputText);
const submitButton = document.getElementById('submitBtn');
function submitInputText(){
    if(emailAddress.value.trim() !== '' && phoneNumber.value.trim() !== ''){
        submitButton.disabled = false;
    }
    else{
        submitButton.disabled = true;
    }
};
