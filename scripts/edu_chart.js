// my JSON data
var me = {
    personal: {
        born: "1991",
    },
    education: [
        {
            startDate: "2006",
            endDate: "2010",
            degree: "Hight School",
            school: "PTG Ivan Rainov - Yambol",
            fieldStudy: "Industrial Electronics"
        },
        {
            startDate: "2010",
            endDate: "2014",
            degree: "Bachelor's degree",
            school: "Technical University of Sofia",
            fieldStudy: "Electrical Engineering | Pedagogy"
        },
        {
            startDate: "2014",
            endDate: "2016",
            degree: "Master's degree",
            school: "Technical University of Sofia",
            fieldStudy: "Electrical Engineering"
        },
        {
            startDate: "2016",
            endDate: "2019",
            degree: "PhD",
            school: "Technical University of Sofia",
            fieldStudy: "Theoretical Electrical Engineering"
        },
        {
            startDate: "2017",
            endDate: "2017",
            degree: "",
            school: "Jonkoping University",
            fieldStudy: "Computer Programming"
        },
    ],
    experience: [],
    certificates: []

}



function renderChartEducation(obj) {

    // image for pointStyle
    var pointStyleImage = new Image();
    pointStyleImage.height = 50;
    pointStyleImage.width = 50;
    pointStyleImage.src = 'images/others/graduation.png';

    //get object
    var born = 1991;
    var edu = obj.education;

    //prefix dataset
    var dataset = {
        label: 'Education',
        showLine: false,
        fill: false,
        // pointStyle: pointStyleImage,
        backgroundColor: "rgba(246,156,85,0.5)",
        borderColor: "rgba(246,156,85,0.9)",
        borderWidth: 1.2,
        pointRadius: 15,
        pointHoverRadius: 18,
        data: []
    }

    for (i = 0; i < edu.length; i++) {
        var dataPoint = {};
        dataPoint.x = edu[i].endDate;
        dataPoint.y = edu[i].endDate - born;
        dataPoint.degree = edu[i].degree;
        dataPoint.school = edu[i].school;
        dataPoint.fieldStudy = edu[i].fieldStudy;
        dataset.data.push(dataPoint);

    }
    return dataset;
}






// chart js education chart
Chart.defaults.global.defaultFontColor = '#fff';
var ctx = document.getElementById("educationChart").getContext("2d");

var achievementsChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [
                    renderChartEducation(me),
            {

                label: 'asd',
                showLine: false,
                fill: false,
                // pointStyle: education,
                backgroundColor: "rgba(50,205,50,0.5)",
                borderColor: "rgba(50,205,50,0.9)",
                borderWidth: 1.2,
                pointRadius: 10,
                pointHoverRadius: 12,

                data: [{
                    x: 2012,
                    y: 15,
                    label: "hello world"
                    }]
            }


            ]
    },


    options: {
        responsive: true,
        animation: {
            duration: 3000,
        },
        tooltips: {
            mode: 'single', // this is the Chart.js default, no need to set
            callbacks: {
                // main label
                label: function (tooltipItems, data) {
                    tooltipBox = data.datasets[tooltipItems.datasetIndex].label;
                    return tooltipBox;
                },
                // append texts
                afterBody: function (tooltipItems, data) {

                    // dataset index, e.g. education, jobs... 
                    var IndexOfDataset = tooltipItems[0].datasetIndex
                    // index of point
                    var indexOfPoint = tooltipItems[0].index
                    // get custom data object
                    var customDataObj = data.datasets[IndexOfDataset].data[indexOfPoint];
                    // label for th dataset
                    var labelName = data.datasets[IndexOfDataset].label

                    // tooltip array
                    var multistringText = [];

                    switch (labelName) {
                        case "Education":
                            multistringText.push(customDataObj.degree);
                            multistringText.push(customDataObj.school);
                            multistringText.push(customDataObj.fieldStudy);
                            break;
                        default:
                            for (var prop in customDataObj) {
                                props = prop + ": " + customDataObj[prop];
                                multistringText.push(props);
                            }

                    }

                    return multistringText;
                }
            }
        },

        //            title : {
        //                display: true,
        //                text: "my chart",
        //                fontSize: 15
        //            },
        legend: {
            display: true,
            position: "right",
            usePointStyle: true,
            labels: {
                //                usePointStyle: true,
            }
        },
        scales: {
            xAxes: [{
                type: 'time',
                display: true,
                type: 'linear',
                position: 'bottom',
                ticks: {
                    stepSize: 1
                },
                gridLines: {
                    display: false
                }
                }],
            yAxes: [{
                scaleLabel: {
                    display: true
                },
                ticks: {
                    stepSize: 2,
                    suggestedMin: 15,
                    suggestedMax: 30,
                },
                gridLines: {
                    display: false
                }
                }]
        }
    }
});
