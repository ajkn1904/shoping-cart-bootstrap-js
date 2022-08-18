
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


document.getElementById('iphone-number-plus').addEventListener('click',function(){
const numberOfPhone = increaseNumbers('iphone-input-number', true);
//const totalPrice = parseInt(numberOfPhone) * 1219;
const perPrice = 1219;
const totalPrice = getPriceUpdate('iphone-price',numberOfPhone, perPrice);

});

document.getElementById('iphone-number-minus').addEventListener('click',function(){
const numberOfPhone = increaseNumbers('iphone-input-number', false);
const perPrice = 1219;
const totalPrice = getPriceUpdate('iphone-price',numberOfPhone, perPrice);
    
    });

document.getElementById('case-number-plus').addEventListener('click',function(){
const numberOfCase = increaseNumbers('case-input-number', true);
//const totalPrice = numberOfCase * 59;
const perPrice = 59;
const totalPrice = getPriceUpdate('case-price', numberOfCase, perPrice);
    
    });

document.getElementById('case-number-minus').addEventListener('click',function(){
const numberOfCase = increaseNumbers('case-input-number', false);
const perPrice = 59;
const totalPrice = getPriceUpdate('case-price', numberOfCase, perPrice);
    
    });