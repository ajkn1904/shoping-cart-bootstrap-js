
function increaseNumbers(getById, isIncrease){
    const numberOfVaules = document.getElementById(getById);
    const previousNumberOfValuesString = numberOfVaules.value;
    const previousNumberOfValues = parseInt(previousNumberOfValuesString);
    
    let newValues;
    
    if(isIncrease){
        newValues = previousNumberOfValues + 1;
    }
    else{
        newValues = previousNumberOfValues - 1;
    }

    numberOfVaules.value = newValues;
    
    return newValues;
}

function getPriceUpdate(getUpdateById, perPrice, value)
{
    const priceUpdate = document.getElementById(getUpdateById);

    const previousPriceString = priceUpdate.innerText;
    const newPrice = perPrice * value;
    priceUpdate.innerText = newPrice;


    return newPrice;

}

function getSubtotalUpdate( value1, value2String){
const previousSubtotal = document.getElementById('subtotal-field');
const value2 = parseFloat(value2String);
const newSubtotal = value1 + value2;
previousSubtotal.innerText = newSubtotal;

const previousTaxString = document.getElementById('tax-field');
const previousTax = parseFloat(previousTaxString.innerText);
 
const newTax = (newSubtotal*.1).toFixed(2);
previousTaxString.innerText = newTax;

const previousTotalString = document.getElementById('total-field');
const previousTotal = parseFloat(previousTotalString.innerText);

const newTotal = parseFloat(newSubtotal) + parseFloat(newTax);
previousTotalString.innerText = newTotal;

}




document.getElementById('iphone-number-plus').addEventListener('click',function(){
const numberOfPhone = increaseNumbers('iphone-input-number', true);
//const totalPrice = parseInt(numberOfPhone) * 1219;
const perPrice = 1219;
const totalPrice = getPriceUpdate('iphone-price',numberOfPhone, perPrice);

const casePriceString = document.getElementById('case-price').innerText;
const subTotalUpdate = getSubtotalUpdate(totalPrice, casePriceString)


});

document.getElementById('iphone-number-minus').addEventListener('click',function(){
const numberOfPhone = increaseNumbers('iphone-input-number', false);
const perPrice = 1219;
const totalPrice = getPriceUpdate('iphone-price',numberOfPhone, perPrice);

const casePriceString = document.getElementById('case-price').innerText;
const subTotalUpdate = getSubtotalUpdate(totalPrice, casePriceString)
    
    });

document.getElementById('case-number-plus').addEventListener('click',function(){
const numberOfCase = increaseNumbers('case-input-number', true);
//const totalPrice = numberOfCase * 59;
const perPrice = 59;
const totalPrice = getPriceUpdate('case-price', numberOfCase, perPrice);

const phonePriceString = document.getElementById('iphone-price').innerText;
const subTotalUpdate = getSubtotalUpdate(totalPrice, phonePriceString)

    
    });

document.getElementById('case-number-minus').addEventListener('click',function(){
const numberOfCase = increaseNumbers('case-input-number', false);
const perPrice = 59;
const totalPrice = getPriceUpdate('case-price', numberOfCase, perPrice);

const phonePriceString = document.getElementById('iphone-price').innerText;
const subTotalUpdate = getSubtotalUpdate(totalPrice, phonePriceString)
    
    });



    
    
