    //    google grantt chart
    //    google.charts.load('current', {
    //        'packages': ['gantt']
    //    });
    //    google.charts.setOnLoadCallback(drawChart);
    //
    //    function drawChart() {
    //
    //        var data = new google.visualization.DataTable();
    //        data.addColumn('string', 'Task ID');
    //        data.addColumn('string', 'Task Name');
    //        data.addColumn('string', 'Resource');
    //        data.addColumn('date', 'Start Date');
    //        data.addColumn('date', 'End Date');
    //        data.addColumn('number', 'Duration');
    //        data.addColumn('number', 'Percent Complete');
    //        data.addColumn('string', 'Dependencies');
    //
    //        data.addRows([
    //            ['Age 15-19', 'High school education', 'PTG Ivan Rainov - Yambol, Bulgaria; Industrial electronics',
    //                new Date(2006, 1, 00), new Date(2010, 1, 00), null, 100, null
    //            ],
    //
    //            ['Age 19-23', 'Bachelors degree', 'summer',
    //                new Date(2010, 0, 0), new Date(2014, 0, 0), null, 100, null
    //            ],
    //            ['2010a', 'Sliven Electro', 'summer2',
    //                new Date(2010, 0, 0), new Date(2014, 0, 0), null, 100, null
    //            ],
    //            ['2014', 'Master degree', 'summer2',
    //                new Date(2014, 0, 0), new Date(2016, 0, 0), null, 100, null
    //            ],
    //            ['2016', 'PHD', 'summer2',
    //                new Date(2016, 0, 0), new Date(2019, 0, 0), null, 50, null
    //            ],
    //            ['2017', 'Sweden', 'summer2',
    //                new Date(2017, 0, 0), new Date(2017, 12, 0), null, 100, null
    //            ]
    //        ]);
    //
    //        var options = {
    ////            height: 400,
    ////            gantt: {
    ////                trackHeight: 30
    ////            }
    //        };
    //
    //        var chart = new google.visualization.Gantt(document.getElementById('chart_div'));
    //
    //        chart.draw(data, options);
    //    }









    //     chart js education chart
    var ctx1 = document.getElementById("educationChart").getContext("2d");
Chart.defaults.global.defaultFontColor = '#fff';
var data = {
        datasets: [
            {
                label: 'First Dataset',
                data: [
                    {
                        x: 28,
                        y: 30,
                        r: 15,
                        label:"bla bla bla"
                    },
                    {
                        x: 40,
                        y: 10,
                        r: 10
                    }
                ],
                backgroundColor:"#FF6384",
                hoverBackgroundColor: "#FF6384",
            }
        ]
    };
    var myBubbleChart = new Chart(ctx1,{
        type: 'bubble',
        data: data,
options: {

      }
    });

//    var scatterChart = new Chart(ctx1, {
//        type: 'bubble',
//        data: {
//            datasets: [{
//
//                    label: 'Proffesional Technical School IVAN Rainov - Yambol age: ',
//                    backgroundColor: "rgba(246,156,85,1)",
////                    hoverBackgroundColor: "rgba(50,90,100,0)",
//                    fill: false,
//                    borderWidth: 5,
//                    pointRadius: 8,
//                    steppedLine: true,
//                    data: [{
//                        x: 2006,
//                        y: 15
//                    }, {
//                        x: 2010,
//                        y: 19,
//                        label: "hello world"
//                    },
//                          {
//                        x: 2012,
//                        y: 22,
//                        label: "hello world 22"
//                    }]
//                },
//                {
//
//                    label: 'Bachlor degree Electrical eng',
////                    backgroundColor: "rgba(246,156,85,1)",
//                    fill: false,
//                    borderWidth: 5,
//                    pointRadius: 8,
//                    steppedLine: true,
//                    data: [{
//                        x: 2010,
//                        y: 19
//                    }, {
//                        x: 2014,
//                        y: 23
//                    }]
//                },
//                {
//
//                    label: 'master degree',
//                    backgroundColor: "rgba(246,156,85,1)",
//                    fill: false,
//                    borderWidth: 5,
//                    pointRadius: 8,
//                    steppedLine: true,
//                    data: [{
//                        x: 2014,
//                        y: 23
//                    }, {
//                        x: 2016,
//                        y: 25
//                    }]
//                },
//                {
//
//                    label: 'Sweden',
//                    backgroundColor: "rgba(246,156,85,1)",
//                    fill: false,
//                    borderWidth: 5,
//                    pointRadius: 8,
//                    steppedLine: true,
//                    data: [{
//                        x: 2017,
//                        y: 26
//                    }, {
//                        x: 2017,
//                        y: 26
//                    }]
//                },
//                {
//
//                    label: 'PHD',
//                    backgroundColor: "rgba(246,156,85,1)",
//                    fill: false,
//                    borderWidth: 5,
//                    pointRadius: 8,
//                    steppedLine: true,
//                    data: [
//
//                        {
//                            label: 'bla',
//                            x: 2016,
//                            y: 25
//                    }, {
//                            x: 2019,
//                            y: 28
//                    }]
//                },
//
//            ]
//        },


        
//        options: {
//
//
//        if (element.length > 0) {
//
//            var data = this.config.data.datasets[element[0]._datasetIndex].data[element[0]._index];
//
//            console.log(data);
//            // You can have the following for instance :
//            // data -> { x:40, y:10, r:10, symbol:"$", bond_type:"james" }
//        }
//    },
//            
//            legend: {
//                display: false
//            },
//            scales: {
//                xAxes: [{
//                    type: 'linear',
//                    position: 'bottom',
//                    ticks: {
//                        //                        beginAtzero :true,
//                        stepSize: 1
//                    }
//                }],
//                yAxes: [{
//                    scaleLabel: {
//                        display: false
//                    },
//                    ticks: {
//                        //                        beginAtZero :true,
//                        stepSize: 1,
//                        max: 30,
//                        min: 10
//                    }
//                }]
//            }
//        }
//    });

    //var ctx1 = document.getElementById("educationChart").getContext("2d");
    //
    //new Chart(ctx1, {
    //  type: 'line',
    //  data: {
    //    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
    //    datasets: [{ 
    //        data: [86,114,106,106,107,111,133,221,783,2478],
    //        label: "Africa",
    //        borderColor: "#3e95cd",
    //        fill: false
    //      }, { 
    //        data: [282,350,411,502,635,809,947,1402,3700,5267],
    //        label: "Asia",
    //        borderColor: "#8e5ea2",
    //        fill: false
    //      }, { 
    //        data: [168,170,178,190,203,276,408,547,675,734],
    //        label: "Europe",
    //        borderColor: "#3cba9f",
    //        fill: false
    //      }, { 
    //        data: [40,20,10,16,24,38,74,167,508,784],
    //        label: "Latin America",
    //        borderColor: "#e8c3b9",
    //        fill: false
    //      }, { 
    //        data: [6,3,2,2,7,26,82,172,312,433],
    //        label: "North America",
    //        borderColor: "#c45850",
    //        fill: false
    //      }
    //    ]
    //  },
    //  options: {
    //    title: {
    //      display: true,
    //      text: 'World population per region (in millions)'
    //    }
    //  }
    //});
