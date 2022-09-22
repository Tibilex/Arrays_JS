let facultyList = 
[{name:"mechanic", group:"m-05-09", size: 15},
{name:"mechanic", group:"m-05-11", size: 12},
{name:"electric", group:"e-06-09", size: 19},
{name:"electric", group:"e-06-11", size: 17},
{name:"managment", group:"me-06-09", size: 13},
{name:"managment", group:"me-06-11", size: 14},
{name:"it", group:"it-06-11", size: 19},
{name:"it", group:"it-06-11", size: 11},
];

function showAll(){
    facultyList.forEach((e => {console.log(`${e.name}, group ${e.group}, size ${e.size}`)}));
}

function showByGroupName(item){
    facultyList.forEach((e => {
        if (e.name == item)
        console.log(`group ${e.group}, size ${e.size}`)
    }));
}

function groupMatch(item){
    facultyList.forEach((e => {
        if (e.group == item.group && e.size == item.size)
        console.log(`${e.name}, group ${e.group}, size ${e.size}`)
    }));
}

function SortList(){
    facultyList.sort(function (a, b) {
        if (a.size > b.size) {
          return 1;
        }
        if (a.size < b.size) {
          return -1;
        }
        return 0;
      });
}

function SortByName(){
    facultyList.sort(function (a, b) {
        if (a.group > b.group) {
          return 1;
        }
        if (a.group < b.group) {
          return -1;
        }
        return 0;
      });
}

showAll();
console.log("\n");
console.log("display \"it\" faculty");
showByGroupName("it");
console.log("\n");
console.log("suitable for \" group m-05-11 size 12\"");
groupMatch({group:"m-05-11", size: 12});
console.log("\n");
console.log("Sorted by group \"size\"");
SortList();
showAll();
console.log("\n");
console.log("Sorted by group \"group\"");
SortByName();
showAll();

