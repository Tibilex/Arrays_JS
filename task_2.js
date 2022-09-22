let receipt = 
[{name:"apple", price: 50, count: 12},
{name:"juice", price: 30, count: 3},
{name:"salami", price: 150, count: 2},
{name:"vine", price: 200, count: 1},
{name:"potato", price: 10, count: 15},
{name:"tomato", price: 30, count: 25},
{name:"rice", price: 80, count: 7}];

function ShowAll(){
    receipt.forEach(e => {console.info(`${e.name} price = ${e.price} count = ${e.count}`)} )
};

function GeCheckValue(){
    let totalValue = 0;
    receipt.forEach(e => totalValue += (e.count * e.price));
    return totalValue;
};

function MaxValue(){
    let maxValue = 0;
    receipt.forEach(e => maxValue = ((e.count * e.price) > maxValue ? (e.count * e.price) : maxValue));
    let itemName;
    receipt.forEach(e => {
        if (e.count * e.price === maxValue)
        {
            itemName = e.name;
        }
    });
    return console.info(`${itemName} = ${maxValue}`);
};

function GetAverageSum(){
    let averageSum = 0, itemCount = 0, totalSum = 0;
    receipt.forEach(e => itemCount += e.count);
    return console.info(`Average sum in check = ${GeCheckValue() / itemCount} \n`)
}

ShowAll();
console.info("\n");
console.info(`Total sum in check = ${GeCheckValue()} \n`);
console.info("\n");
MaxValue();
console.info("\n");
GetAverageSum();