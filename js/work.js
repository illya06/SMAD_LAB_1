

//numbers = 0.36 0.38 0.38 0.37 0.40 0.38 0.36

let numbers = (document.getElementById('numbers').value).split(" ").map(Number).filter(Boolean);

let uniqueNums = Array.from([...new Set(numbers)]);
let numsFrequency = new Map();
uniqueNums.map(item => numsFrequency.set(item, numbers.filter(x => x == item).length));


function main() {

    // mid Statistical
    let midStat = 0;
    numsFrequency.forEach((apearence, number) => {
        midStat += (number * apearence) / numbers.length;
    });
    document.getElementById('midStatistical').innerHTML = ` <kbd>${midStat}</kbd>`;

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
    let dispersion = 0;
    numsFrequency.forEach((apearence, number) => {
        dispersion += (number * number * apearence) / numbers.length;
    });
    dispersion -= midStat;
    document.getElementById('dispersion').innerHTML = ` <kbd>${dispersion}</kbd>`;


    null;

    //standard dispersion
    null;


}
