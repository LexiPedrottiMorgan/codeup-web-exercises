// Output should include:
// - total number of employees
// - total number of units sold
// - avg units sold per employee
// - Then output should share employee production, ordered from highest to lowest # of units
// * Units   |     Full Name       |   Employee Number
// * 5             Bob Boberson        2


var reportContents = "Monthly Sales Report\nDate: 03-17-2015\nOffice: Codeup\n ===================================================\nEmployee Number, First Name, Last Name, Sales Units\n**********************************************************";

var reportContentsArray = reportContents.split("\n");


document.body.innerHTML += "<ul><li>" + reportContentsArray.join("</li><li>") + "</li></ul>";

var dataString = "1, Jane, Janeway, 3\n3, Tricia, Triciason, 5\n4, Jeannette, Jeanson, 4\n5, Charles Emmerson III, Winchester, 2\n6, Chet, Chedderson, 8\n7, Chaiam, Chaiamson, 12\n8, Dale, Dalesinger, 1\n9, Zig, Ziglar, 50\n10, Henry, Kissinger, 1\n11, Arthur Herbert, Fonzarelli, 23\n12, Betty, Boop, 67";

var dataArray = [];

    dataString.split("\n").forEach(function(data) {
    if (data) {
        dataArray.push(data.trim().split(","));
    }
} );


dataArray.splice(1, 0, ["2", " Bob", " Boberson", " 5"]);


var dataArrayOrder = dataArray.sort(sortNumber);
    function sortNumber(a, b) {
            return b[3] - a[3];
        }



document.body.innerHTML += "<ul><li>" + dataArrayOrder.join("</li><li>") + "</li></ul>";
console.log(dataArrayOrder);

//total number of employees

var totalNumberOfEmployees = dataArray.length;
document.body.innerHTML += "There are " + totalNumberOfEmployees + " employees." + "<br>";

//average sales per employee
// all sales / number of employees = average sales
var totalSales = 0;
for (var i = 0; i<= dataArray.length -1; i++) {
    for (var a = 0; a <= dataArrayOrder[i].length -1; a++) {
        totalSales += parseFloat(dataArrayOrder[i][a]);
    }
}

console.log(totalSales);
var averageSales = totalSales / totalNumberOfEmployees;


document.body.innerHTML += "The average sales per employee are " + averageSales.toFixed(0) + ".";


