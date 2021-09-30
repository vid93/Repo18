let shoppingList = new Map([
    ["Banana", 3],
    ["Pineapple", 5],
    ["Pear", 2],
    ["Carrot", 10],
    ["Apple", 1.5]
]);

const arrKey = [];
for(let keys of shoppingList){
    arrKey.push("groceries: " + keys[0])
}

const arrValue = [];
for(let value of shoppingList){
    arrValue.push("amount: " + value[1])
}

for(let col of shoppingList.entries()){
    console.log([col[0], col[1]]);
}

module.exports = {shoppingList, arrKey, arrValue}