// page scroll
function utilities() {(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

	// affix the navbar after scroll below header
$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});	

	
  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	

    // Nivo Lightbox 
    $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });
 

}())};
utilities();

// render portfolio projects
var portfolioItems = document.getElementById("portfolioItems");
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
    portfolioItems.innerHTML = portfolioCards
};
renderPortfolioItems(portfolio);


/*

Achievements chart

*/

// creates education datasets for the chart
function renderChartEducation(obj) {

    // image for pointStyle
    // var pointStyleImage = new Image();
    // pointStyleImage.height = 50;
    // pointStyleImage.width = 50;
    // pointStyleImage.src = 'images/others/graduation.png';

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
        dataPoint.x = new Date(edu[i].endDate);
        dataPoint.y = new Date(edu[i].endDate).getFullYear() - born;
        dataPoint.degree = edu[i].degree;
        dataPoint.school = edu[i].school;
        dataPoint.fieldStudy = edu[i].fieldStudy;
        dataset.data.push(dataPoint);

    }
    return dataset;
}

// creates experience datasets for the chart
function renderChartExperience(obj) {

    // image for pointStyle
    // var pointStyleImage = new Image();
    // pointStyleImage.height = 50;
    // pointStyleImage.width = 50;
    // pointStyleImage.src = 'images/others/briefcase.png';

    //get object
    var born = 1991;
    var exp = obj.experience;

    //prefix dataset
    var dataset = {
        label: 'Experience',
        showLine: false,
        fill: false,
        // pointStyle: pointStyleImage,
        backgroundColor: "rgba(75, 192, 192,0.5)",
        borderColor: "rgba(75, 192, 192,0.9)",
        borderWidth: 1.2,
        pointRadius: 20,
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

// creates certificates datasets for the chart
function renderChartCertificates(obj) {

    // image for pointStyle
    // var pointStyleImage = new Image();
    // pointStyleImage.height = 50;
    // pointStyleImage.width = 50;
    // pointStyleImage.src = 'images/others/graduation.png';

    //get object
    var born = 1991;
    var cer = obj.certificates;

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

// creates publication datasets for the chart
function renderChartPublications(obj) {

    // image for pointStyle
    // var pointStyleImage = new Image();
    // pointStyleImage.height = 50;
    // pointStyleImage.width = 50;
    // pointStyleImage.src = 'images/others/graduation.png';

    //get object
    var born = 1991;
    var pbl = obj.publications;

    //prefix dataset
    var dataset = {
        label: 'Publications',
        showLine: false,
        fill: false,
        // pointStyle: pointStyleImage,
        backgroundColor: "rgba(54, 162, 235,0.5)",
        borderColor: "rgba(54, 162, 235,0.9)",
        borderWidth: 0.8,
        pointRadius: 8,
        pointHoverRadius: 10,
        data: []
    }

    for (i = 0; i < pbl.length; i++) {
        var dataPoint = {};
        dataPoint.x = new Date(pbl[i].date);
        dataPoint.y = new Date(pbl[i].date).getFullYear() - born;
        //console.log("x: " + dataPoint.x + " y: " + dataPoint.y);
        dataPoint.title = pbl[i].title;
        dataPoint.organization = pbl[i].organization;
        dataPoint.description = pbl[i].description;
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
            renderChartExperience(me), renderChartEducation(me),
            renderChartCertificates(me), renderChartPublications(me)
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
        legend: {
            display: true,
            position: "right",
            usePointStyle: true,
            labels: {
               // usePointStyle: true,
            }
        },
        scales: {
            xAxes: [{
                type: 'time',
                display: true,
                position: 'bottom',
                ticks: {
                    // stepSize: 1
                },
                gridLines: {
                    display: false
                },
                time: {
                    displayFormats: {
                        "year": "YYYY"
                    },
                    tooltipFormat: "YYYY-MM-DD",
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
    }
});
window.chartColors = {
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