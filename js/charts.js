//---------
// CHARTS
//---------

//poligon
var poli = document.getElementById('poligon').getContext('2d');
var chart = new Chart(poli, {
    type: 'line',
    data: {
        labels: [...uniqueNums],
        datasets: [{
            label: 'Полігон частот',
            borderColor: 'black',
            data: uniqueFrequencies,
            lineTension: 0
        }],
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//cumulative curve
var cum = document.getElementById('cumulative').getContext('2d');
let sum = 0;
let dataset = [];
[...uniqueFrequencies].forEach(val => {
    sum += val;
    dataset.push(sum);
})
var chart = new Chart(cum, {
    type: 'line',
    data: {
        labels: [...uniqueNums],
        datasets: [{
            label: 'Кумулятивна крива',
            borderColor: 'black',
            data: dataset
        }],
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//cumulative rel




//empirical function
let dataset2 = [];
sum = 0;
[...uniqueFrequencies].forEach(val => {
    sum += val / numbers.length;
    dataset2.push(sum);
})

let text = [];
for (i = 0; i < uniqueNums.length; i++) {
    if (i == 0)
        text.push(`${uniqueNums[0]}-${uniqueNums[1]}`);
    else if (i == uniqueNums.length - 1)
        text.push(`${uniqueNums[uniqueNums.length - 1]}-infinity`);
    else
        text.push(`${uniqueNums[i]}-${uniqueNums[i + 1]}`);
}

var emp = document.getElementById('empirical').getContext('2d');
var chart = new Chart(emp, {
    type: 'bar',
    data: {
        labels: text,
        datasets: [{
            label: 'Емпірична функція розподілу',
            borderWidth: 2,
            borderColor: 'black',
            barPercentage: 0.5,
            barThickness: 75,
            maxBarThickness: 180,
            minBarLength: 2,
            data: dataset2
        }],
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});