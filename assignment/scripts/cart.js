console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

console.log(basket);

function addItem(item){
 if (item) {
    basket.push(item)
    return true;
 } else {
    return false;
 }
};

console.log('should return false ', addItem());

console.log(addItem('Cheese'));
console.log(addItem('Eggs'));
console.log(addItem('Milk'));

console.log('basket is now ', basket);

function listItems(array) {
  for (i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
listItems(basket);


function empty (basket){
    basket.length = 0;
    return basket;
}

empty(basket);

console.log(basket);








// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
