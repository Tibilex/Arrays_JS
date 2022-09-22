let receipt = 
[{name:"apple", count: 12, bought:"no"},
{name:"juice", count: 3, bought:"no"},
{name:"salami", count: 2, bought:"yes"},
{name:"vine", count: 1, bought:"yes"},
{name:"potato", count: 15, bought:"yes"},
{name:"tomato", count: 25, bought:"yes"},
{name:"rice", count: 7, bought:"no"}];

function ShowAll(){
    receipt.forEach(e => {console.info(`${e.name} count = ${e.count} bought = ${e.bought}`)} )
}

function SortList(){
    receipt.sort(function (a, b) {
        if (a.bought > b.bought) {
          return 1;
        }
        if (a.bought < b.bought) {
          return -1;
        }
        return 0;
      });
}

function addItem(item){
    if(receipt.find((e) => e.name === item.name && e.bought === item.bought)) {
        receipt.find((e) => e.name === item.name && e.bought === item.bought).count+= item.count;
    } 
    else receipt.push(item);
}

function BuyItem(item){
    if(receipt.find((e) => e.name === item.name && e.count === item.count)) {
        receipt.find((e) => e.name === item.name && e.count === item.count).bought = item.bought;
    } 
    else receipt.push(item);
}


SortList();
ShowAll();
console.info("\n");

addItem({name: "cheder", count:1, bought: "yes"});
console.log("item added");
ShowAll();

console.info("\n");
BuyItem({name: "rice", count:7, bought: "yes"});
ShowAll();

