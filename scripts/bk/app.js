//
//
// APPLICATION CORE FUNCTIONS
//
//


// render portfolio projects
function renderPortfolioItems(obj) {

    let projects = obj.projects;
    let portfolioCards = "";

    if (projects != "" && projects.length > 0) {

        for (i = 0; i < projects.length; i++) {
            portfolioCards += "<div class=\"col-md-4\">";
            portfolioCards += "<div class=\"thumbnail\">";
            portfolioCards += "<div class=\"portfolio-item\">";
            portfolioCards += "<div class=\"hover-bg\">";

            if (projects[i].screenshots != "" && projects[i].screenshots.length > 0) {
                //array with images
                for (j = 0; j < projects[i].screenshots.length; j++) {
                    portfolioCards += "<a href=\"images/portfolio/" + projects[i].screenshots[j] + "\" title=\"" + projects[i].title + "\" data-lightbox-gallery=\"" + projects[i].title + "\">";
                }
            } else {
                //if not array with defined images
                portfolioCards += "<a href=\"images/portfolio/" + projects[i].image + "\" title=\"" + projects[i].title + "\" data-lightbox-gallery=\"" + projects[i].title + "\">";

            };

            portfolioCards += "<div class=\"hover-text\">";
            portfolioCards += "<h4>" + projects[i].title + "</h4>";
            portfolioCards += "</div>";
            portfolioCards += "<img src=\"images/portfolio/" + projects[i].image + "\" class=\"img-responsive\" alt=\"" + projects[i].title + "\"></a>";
            portfolioCards += "</div>";
            portfolioCards += "</div>";
            portfolioCards += "<div class=\"caption\">";
            portfolioCards += "<h4>" + projects[i].title + "</h4>";
            portfolioCards += "<p>" + projects[i].description + "</p>";
            if (projects[i].demoUrl != "") {
                portfolioCards += "<a href=\"" + projects[i].demoUrl + "\" target=\"_blank\">Try it out</a>";
            }
            portfolioCards += "</div>";
            portfolioCards += "</div>";
            portfolioCards += "</div>";
        }
    } else {
        portfolioCards += "<p>There is no projects to display</p>"
    }
    document.getElementById("portfolioItems").innerHTML = portfolioCards
};

// Certificates timeline
function renderCertificates(obj) {
    /*{
           date: "",
           title:"",
           organization: "",
           description: "",
    }*/
    //    note: apply revealr after this function

    var items = obj.certificates;
    var htmlString = "";

    if (items != "" && items.length > 0) {

        htmlString += "<div class=\"wrapper box\">";
        htmlString += "<ol class=\"timeline revealed\">";

        for (i = 0; i < items.length; i++) {

            // <div class="timeline-counter is-circle"></div>
            // <div class="timeline-counter is-triangle"></div>

            htmlString += "<li class=\"timeline-item\">";
            htmlString += "<div class=\"timeline-line\"></div>";
            if (i == 0) {
                htmlString += "<div class=\"timeline-counter\"></div>";
            } else if (i == items.length - 1) {
                htmlString += "<div class=\"timeline-counter is-triangle\"></div>";
            } else {
                htmlString += "<div class=\"timeline-counter is-circle\"></div>";
            };

            htmlString += "<div class=\"timeline-heading\">" + items[i].date + "</div>";
            htmlString += "<div class=\"timeline-text\">";
            htmlString += "<p>" + items[i].title + "</p>";
            htmlString += "<p>" + items[i].organization + "</p>";
            htmlString += "</div>";
            htmlString += "</li>";
        }

        htmlString += "</ol>";
        htmlString += "<div class=\"timeline-fader\"></div>";
        htmlString += "</div>";
        htmlString += "<button id=\"btnCer\" class=\"timeline-reveal btn btn-default btn-block\">View Full Timeline</button>";

    } else {
        htmlString += "<p>There is no certificates to display</p>";
    }
    document.getElementById("certificatesTimeline").innerHTML = htmlString;
}
// certificates timeline
var showHideTimeline = {
    revealTimeline: function revealTimeline(e) {
        
        e.preventDefault();
        var button = e.target;
        var container = button.parentElement;
        var wrapper = container.querySelector('.wrapper');
        var fader = container.querySelector('.timeline-fader');
        var list = container.querySelector('.timeline');
        if (list.classList.contains('revealed')) {
            fader.style.opacity = 1;
            list.classList.remove('revealed');
            wrapper.style.maxHeight = '300px';
            button.innerHTML = 'View Full Timeline';
        } else {
            fader.style.opacity = 0;
            list.classList.add('revealed');
            wrapper.style.maxHeight = list.offsetHeight + 'px';
            button.innerHTML = 'Collapse Timeline';
        }
    },
    // init
    init: function init(target) {
        var button = document.getElementById(target);
        button.addEventListener('click', this.revealTimeline, false);
    }
};
// creates Achievements chart
function achievementsChart(obj) {

    this.born = 1991;
    this.dataObj = obj;

    dataObj = obj;
    Chart.defaults.global.defaultFontColor = '#fff';

    var ctx = document.getElementById("educationChart").getContext("2d");

    var chartColors = {
        red: 'rgb(255, 99, 132)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(54, 162, 235)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(231,233,237)',
        greyy: 'rgb(220, 220, 220)',
        indigo: 'rgb(63, 81, 181)'
    };

    this.chartOptions = {
        responsive: true,
        animation: {
            duration: 3000,
        },
        tooltips: {
            mode: 'single',
            callbacks: {
                // main label
                label: function (tooltipItems, data) {
                    var tooltipBox = data.datasets[tooltipItems.datasetIndex].label;
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
                    var labelName = data.datasets[IndexOfDataset].label;

                    // tooltip array
                    var multistringText = [];

                    switch (labelName) {
                        case "Education":
                            multistringText.push(customDataObj.degree);
                            multistringText.push(customDataObj.school);
                            multistringText.push(customDataObj.fieldStudy);
                            break;
                        case "Experience":
                            multistringText.push(customDataObj.company);
                            multistringText.push(customDataObj.title);
                            multistringText.push(customDataObj.duration);
                            break;
                        case "Publications":
                            multistringText.push(customDataObj.title);
                            multistringText.push(customDataObj.publisher);
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
        legend: {
            display: true,
            position: "top",
            labels: {
                //                 usePointStyle: true,
            }
        },
        scales: {
            xAxes: [{
                type: 'time',
                display: true,
                position: 'bottom',
                ticks: {},
                gridLines: {
                    display: false
                },
                time: {
                    displayFormats: {
                        "year": "YYYY"
                    },
                    tooltipFormat: "YYYY",
                    unit: "year",
                },
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
    };

    var chartData = {
        datasets: [
                    this.renderChartEducation(),
                    this.renderChartExperience(),
                    this.renderChartPublications()
                  ]
    };

    new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: this.chartOptions
    });
};

achievementsChart.prototype.renderChartEducation = function () {
    var born = this.born;
    var edu = this.dataObj.education;

    var dataset = {
        label: 'Education',
        showLine: false,
        fill: false,
        backgroundColor: "rgba(255, 99, 132,0.5)",
        borderColor: "rgba(255, 99, 132,0.9)",
        borderWidth: 1.2,
        pointRadius: 17,
        pointHoverRadius: 18,
        data: []
    }

    for (i = 0; i < edu.length; i++) {
        var dataPoint = {};
        dataPoint.x = new Date(edu[i].endDate);
        dataPoint.y = new Date(edu[i].endDate).getFullYear() - born;
        dataPoint.degree = edu[i].degree;
        dataPoint.school = edu[i].school;
        dataPoint.fieldStudy = edu[i].fieldStudy;
        dataset.data.push(dataPoint);
    }
    return dataset;
}

achievementsChart.prototype.renderChartExperience = function () {

    var born = this.born;
    var exp = this.dataObj.experience;

    //prefix dataset
    var dataset = {
        label: 'Experience',
        showLine: false,
        fill: false,
        // pointStyle: pointStyleImage,
        backgroundColor: "rgba(75, 192, 192,0.5)",
        borderColor: "rgba(75, 192, 192,0.9)",
        borderWidth: 1.2,
        pointRadius: 17,
        pointHoverRadius: 18,
        data: []
    }

    for (i = 0; i < exp.length; i++) {
        var dataPoint = {};
        dataPoint.x = new Date(exp[i].from);
        dataPoint.y = new Date(exp[i].from).getFullYear() - born;
        // dataPoint.x = exp[i].from;
        // dataPoint.y = exp[i].from - born;
        dataPoint.company = exp[i].company;
        dataPoint.title = exp[i].title;
        dataPoint.duration = exp[i].duration;
        dataset.data.push(dataPoint);

    }
    return dataset;
}

achievementsChart.prototype.renderChartPublications = function () {

    // image for pointStyle
    // var pointStyleImage = new Image();
    // pointStyleImage.height = 50;
    // pointStyleImage.width = 50;
    // pointStyleImage.src = 'images/others/graduation.png';

    //get object
    var born = this.born;
    var pbl = this.dataObj.publications;

    //prefix dataset
    var dataset = {
        label: 'Publications',
        showLine: false,
        fill: false,
        // pointStyle: pointStyleImage,
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 0.9)",
        borderWidth: 1.2,
        pointRadius: 17,
        pointHoverRadius: 18,
        data: []
    }

    for (i = 0; i < pbl.length; i++) {
        var dataPoint = {};
        dataPoint.x = new Date(pbl[i].date);
        dataPoint.y = new Date(pbl[i].date).getFullYear() - born;
        //console.log("x: " + dataPoint.x + " y: " + dataPoint.y);
        //        date
        //        title
        //        publisher
        //        authors
        dataPoint.title = pbl[i].title;
        dataPoint.publisher = pbl[i].publisher;
        dataPoint.authors = pbl[i].authors;
        dataset.data.push(dataPoint);

    }
    return dataset;
}

achievementsChart.prototype.renderChartCertificates = function () {

    var born = this.born;
    var cer = this.dataObj.certificates;

    //prefix dataset
    var dataset = {
        label: 'Certificates',
        showLine: false,
        fill: false,
        // pointStyle: pointStyleImage,
        backgroundColor: "rgba(220, 220, 220,0.5)",
        borderColor: "rgba(220, 220, 220,0.9)",
        borderWidth: 0.8,
        pointRadius: 8,
        pointHoverRadius: 10,
        data: []
    }

    for (i = 0; i < cer.length; i++) {
        // date: "",
        // title: "",
        // organization: "",
        // description: ""

        var dataPoint = {};
        dataPoint.x = new Date(cer[i].date);
        dataPoint.y = new Date(cer[i].date).getFullYear() - born;
        //console.log("x: " + dataPoint.x + " y: " + dataPoint.y);
        dataPoint.title = cer[i].title;
        dataPoint.organization = cer[i].organization;
        dataPoint.description = cer[i].description;
        dataset.data.push(dataPoint);

    }
    return dataset;
}
