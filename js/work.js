

//numbers = 0.36 0.38 0.38 0.37 0.40 0.38 0.36

let numbers = (document.getElementById('numbers').value).split(" ").map(Number).filter(Boolean);

let tempNums = Array.from([...new Set(numbers)]);
let numsFrequency = tempNums.map(item =>{
    let numMap = {};
    numMap[item] = numbers.filter(x => x==item).length;
    return numMap;
})


function main() {

    // mid Statistical
    let midStatistical = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    document.getElementById('midStatistical').innerHTML = ` <kbd>${midStatistical}</kbd>`;

    //trend
    let trend = numbers.reduce(function (a, b) {
        return Math.max(a, b);
    });
    document.getElementById('trend').innerHTML = ` <kbd>${trend}</kbd>`;

    //median
    // let temp = numbers;
    // temp.sort(function(a,b){
    //     return a-b;
    //   });

    //   var half = Math.floor(values.length / 2);

    //   if (values.length % 2)
    //     return values[half];

    //   return (values[half - 1] + values[half]) / 2.0;

    //span
    let max = trend;
    let min = numbers.reduce(function (a, b) {
        return Math.min(a, b);
    });
    document.getElementById('span').innerHTML = ` <kbd>${min} - ${max}</kbd>`;

    //dispersion
    
    let midStat;

    null;

    //standard dispersion
    null;


}
