    
//    google grantt chart
    google.charts.load('current', {
        'packages': ['gantt']
    });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Task ID');
        data.addColumn('string', 'Task Name');
        data.addColumn('string', 'Resource');
        data.addColumn('date', 'Start Date');
        data.addColumn('date', 'End Date');
        data.addColumn('number', 'Duration');
        data.addColumn('number', 'Percent Complete');
        data.addColumn('string', 'Dependencies');

        data.addRows([
            ['Age 15-19', 'High school education', 'PTG Ivan Rainov - Yambol, Bulgaria; Industrial electronics',
                new Date(2006, 1, 00), new Date(2010, 1, 00), null, 100, null
            ],

            ['Age 19-23', 'Bachelors degree', 'summer',
                new Date(2010, 0, 0), new Date(2014, 0, 0), null, 100, null
            ],
            ['2010a', 'Sliven Electro', 'summer2',
                new Date(2010, 0, 0), new Date(2014, 0, 0), null, 100, null
            ],
            ['2014', 'Master degree', 'summer2',
                new Date(2014, 0, 0), new Date(2016, 0, 0), null, 100, null
            ],
            ['2016', 'PHD', 'summer2',
                new Date(2016, 0, 0), new Date(2019, 0, 0), null, 50, null
            ],
            ['2017', 'Sweden', 'summer2',
                new Date(2017, 0, 0), new Date(2017, 12, 0), null, 100, null
            ]
        ]);

        var options = {
            height: 400,
            gantt: {
                trackHeight: 30
            }
        };

        var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

        chart.draw(data, options);
    }


    
    
    
    
    
    
    
    
    
    // chart js education chart
    var ctx1 = document.getElementById("educationChart").getContext("2d");

    var scatterChart = new Chart(ctx1, {
        type: 'line',
        data: {
            datasets: [{

                    label: 'Proffesional technical school PTG IVAN rainov \n bads',
                    backgroundColor: "rgba(246,156,85,1)",
                    hoverBackgroundColor: "rgba(50,90,100,0)",
                    fill: false,
                    borderWidth: 20,
                    pointRadius: 5,
                    data: [{
                        x: 2006,
                        y: 15
                    }, {
                        x: 2010,
                        y: 19
                    }]
                },
                {

                    label: 'Scatter Dataset',
                    backgroundColor: "rgba(246,156,85,1)",
                    fill: false,
                    borderWidth: 20,
                    pointRadius: 5,
                    data: [{
                        x: 2010,
                        y: 19
                    }, {
                        x: 2014,
                        y: 23
                    }]
                }
            ]
        },



        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'bottom',
                    ticks: {
                        //                        beginAtzero :true,
                        stepSize: 1
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: false
                    },
                    ticks: {
                        //                        beginAtZero :true,
                        stepSize: 1,
                        max: 30,
                        min: 10
                    }
                }]
            }
        }
    });
