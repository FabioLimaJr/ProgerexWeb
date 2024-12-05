(function ($) {
    "use strict";

    var options = {
        chart: {
            height: 400,
            type: 'bar',
        },
        colors: ["#7ee5e5", "#2f3cff", "#4d8af0"],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            }, {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            }],
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
            title: {
                text: '$ (thousands)'
            }
        },
        fill: {
            opacity: 1

        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        }
    }

    var chart = new ApexCharts(
        document.querySelector("#apex-bar"),
        options
    );

    chart.render();

    var options = {
        chart: {
            height: 500,
            type: 'bar',
            boolean: true,
            stacked: true,
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            }
        },
        colors: ["#7ee5e5", "#2f3cff", "#4d8af0"],
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
            }],
        plotOptions: {
            bar: {
                horizontal: false,
            },
        },
        series: [{
            name: 'PRODUCT A',
            data: [44, 55, 41, 67, 22, 43]
            }, {
            name: 'PRODUCT B',
            data: [13, 23, 20, 8, 13, 27]
            }, {
            name: 'PRODUCT C',
            data: [11, 17, 15, 15, 21, 14]
            }, {
            name: 'PRODUCT D',
            data: [21, 7, 25, 13, 22, 8]
            }],
        xaxis: {
            type: 'datetime',
            categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT'],
        },
        legend: {
            position: 'right',
            offsetY: 40
        },
        fill: {
            opacity: 1
        },
    }

    var chart = new ApexCharts(
        document.querySelector("#apexStacked"),
        options
    );

    chart.render();


    var options = {
        annotations: {
            points: [{
                x: 'Bananas',
                seriesIndex: 0,
                label: {
                    borderColor: '#775DD0',
                    offsetY: 0,
                    style: {
                        color: '#fff',
                        background: '#775DD0',
                    },
                    text: 'Bananas are good',
                }
        }]
        },
        chart: {
            height: 300,
            type: 'bar',
        },
        colors: ["#7ee5e5", "#2f3cff", "#4d8af0"],
        plotOptions: {
            bar: {
                columnWidth: '50%',
                endingShape: 'rounded'
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 2
        },
        series: [{
            name: 'Servings',
            data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
      }],
        grid: {
            row: {
                colors: ['#fff', '#f2f2f2']
            }
        },
        xaxis: {
            labels: {
                rotate: -45
            },
            categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
          'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'
        ],
        },
        yaxis: {
            title: {
                text: 'Servings',
            },

        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: "horizontal",
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 0.85,
                opacityTo: 0.85,
                stops: [50, 0, 100]
            },
        },

    }

    var chart = new ApexCharts(
        document.querySelector("#apexRotated"),
        options
    );

    chart.render();


    var colors = ['#7ee5e5', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'];
    var options = {
        chart: {
            height: 300,
            type: 'bar',
            events: {
                click: function (chart, w, e) {
                    console.log(chart, w, e)
                }
            },
        },
        colors: colors,
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true
            }
        },
        dataLabels: {
            enabled: false,
        },
        series: [{
            data: [21, 22, 10, 28, 16, 21, 13, 30]
            }],
        xaxis: {
            categories: ['John', 'Joe', 'Jake', 'Amber', 'Peter', 'Mary', 'David', 'Lily'],
            labels: {
                style: {
                    colors: colors,
                    fontSize: '14px'
                }
            }
        }
    }

    var chart = new ApexCharts(
        document.querySelector("#apexDistributed"),
        options
    );

    chart.render();


    // Apex Line chart start
    var options = {
        chart: {
            height: 300,
            type: "line",
            parentHeightOffset: 0
        },
        colors: ["#7ee5e5", "#2f3cff", "#4d8af0"],
        grid: {
            borderColor: "rgba(77, 138, 240, .1)",
            padding: {
                bottom: -15
            }
        },
        series: [
            {
                name: "Data a",
                data: [45, 52, 38, 45]
      },
            {
                name: "Data b",
                data: [12, 42, 68, 33]
      },
            {
                name: "Data c",
                data: [8, 32, 48, 53]
      }
    ],
        xaxis: {
            type: "datetime",
            categories: ["2015", "2016", "2017", "2018"]
        },
        markers: {
            size: 0
        },
        stroke: {
            width: 3,
            curve: "smooth",
            lineCap: "round"
        },
        legend: {
            show: true,
            position: "top",
            horizontalAlign: 'left',
            containerMargin: {
                top: 30
            }
        },
        responsive: [
            {
                breakpoint: 500,
                options: {
                    legend: {
                        fontSize: "11px"
                    }
                }
      }
    ]
    };
    var apexlinechartChart = new ApexCharts(document.querySelector("#apexlinechart"), options);
    apexlinechartChart.render();
    // Apex Line chart end

    // Apex Bar chart start
    var options = {
        chart: {
            type: 'bar',
            height: '320',
            parentHeightOffset: 0
        },
        colors: ["#7ee5e5"],
        grid: {
            borderColor: "rgba(77, 138, 240, .1)",
            padding: {
                bottom: -15
            }
        },
        series: [{
            name: 'sales',
            data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
    }],
        xaxis: {
            type: 'datetime',
            categories: ['01/01/1991', '01/01/1992', '01/01/1993', '01/01/1994', '01/01/1995', '01/01/1996', '01/01/1997', '01/01/1998', '01/01/1999']
        }
    }

    var apexbarchartChart = new ApexCharts(document.querySelector("#apexbarchart"), options);

    apexbarchartChart.render();
    // Apex Bar chart end

    // Apex Radar chart start
    var options = {
        chart: {
            height: 300,
            type: 'radar',
            parentHeightOffset: 0,
        },
        colors: ["#7ee5e5", "#2f3cff", "#4d8af0"],
        grid: {
            borderColor: "rgba(77, 138, 240, .1)",
            padding: {
                bottom: -15
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left'
        },
        series: [{
            name: 'Series 1',
            data: [80, 50, 30, 40, 100, 20],
    }, {
            name: 'Series 2',
            data: [20, 30, 40, 80, 20, 80],
    }, {
            name: 'Series 3',
            data: [44, 76, 78, 13, 43, 10],
    }],
        stroke: {
            width: 0
        },
        fill: {
            opacity: 0.4
        },
        markers: {
            size: 0
        },
        labels: ['2011', '2012', '2013', '2014', '2015', '2016']
    }

    var chart = new ApexCharts(
        document.querySelector("#apexradarchart"),
        options
    );

    chart.render();
    // Apex Radar chart end

    // Apex Radialbar chart start
    var options = {
        chart: {
            height: 300,
            type: "radialBar",
            parentHeightOffset: 0
        },
        colors: ["#7ee5e5", "#2f3cff", "#4d8af0", "#fbbc06"],
        grid: {
            borderColor: "rgba(77, 138, 240, .1)",
            padding: {
                top: 10
            }
        },
        plotOptions: {
            circle: {
                dataLabels: {
                    showOn: "hover"
                }
            }
        },
        series: [44, 55, 67, 83],
        labels: ["Sales", "Costs", "Export", "Orders"]
    };

    var chart = new ApexCharts(document.querySelector("#apexRadialBarchart"), options);

    chart.render();

    var chartAreaBounds = chart.w.globals.dom.baseEl.querySelector('.apexcharts-inner').getBoundingClientRect();

    chart.addText({
        x: chartAreaBounds.width / 2,
        y: 10,
        text: "0",
        fontSize: 16,
        textAnchor: "middle"
    });

    chart.addText({
        x: chartAreaBounds.width - 5,
        y: chartAreaBounds.height / 2 + 10,
        text: "90",
        fontSize: 16,
        textAnchor: "start"
    });

    chart.addText({
        x: chartAreaBounds.width / 2,
        y: chartAreaBounds.height + 30,
        text: "180",
        fontSize: 16,
        textAnchor: "middle"
    });

    chart.addText({
        x: 5,
        y: chartAreaBounds.height / 2 + 10,
        text: "270",
        fontSize: 16,
        textAnchor: "end"
    });
    // Apex Radialbar chart end

    /* -----  Apex Bar Chart ----- */
    var options = {
        chart: {
            height: 400,
            type: 'bar',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '25%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        colors: ['#2f3cff', '#d4d8de'],
        series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58]
        }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105]
        }],
        legend: {
            show: false,
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            axisBorder: {
                show: true,
                color: 'rgba(0,0,0,0.05)'
            },
            axisTicks: {
                show: true,
                color: 'rgba(0,0,0,0.05)'
            }
        },
        grid: {
            row: {
                colors: ['transparent', 'transparent'],
                opacity: .2
            },
            borderColor: 'rgba(0,0,0,0.05)'
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        }
    }
    var chart = new ApexCharts(
        document.querySelector("#apex-bar-chart"),
        options
    );
    chart.render();
    
        var chart = AmCharts.makeChart("bar-chart3", {
        "type": "serial",
        "theme": "light",
        "marginTop": 10,
        "marginRight": 0,
        "valueAxes": [{
            "id": "v1",
            "position": "left",
            "gridAlpha": 0,
            "axisAlpha": 0,
            "lineAlpha": 0,
            "autoGridCount": false,
            "labelFunction": function (value) {
                return +Math.round(value) + "00";
            }
        }],
        "graphs": [{
            "id": "g1",
            "valueAxis": "v1",
            "lineColor": ["#1de9b6", "#1dc4e9"],
            "fillColors": ["#1de9b6", "#1dc4e9"],
            "fillAlphas": 1,
            "type": "column",
            "title": "Last Week ",
            "valueField": "sales2",
            "columnWidth": 0.2,
            "legendValueText": "$[[value]]M",
            "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
        }, {
            "id": "g2",
            "valueAxis": "v1",
            "lineColor": ["#a389d4", "#899ed4"],
            "fillColors": ["#a389d4", "#899ed4"],
            "fillAlphas": 1,
            "type": "column",
            "title": "Market Place ",
            "valueField": "sales1",
            "columnWidth": 0.2,
            "legendValueText": "$[[value]]M",
            "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
        }],
        "chartCursor": {
            "pan": true,
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true,
            "cursorAlpha": 0,
            "valueLineAlpha": 0.2
        },
        "categoryField": "date",
        "categoryAxis": {
            "dashLength": 1,
            "gridAlpha": 0,
            "axisAlpha": 0,
            "lineAlpha": 0,
            "minorGridEnabled": true
        },
        "legend": {
            "useGraphSettings": true,
            "position": "top"
        },
        "balloon": {
            "borderThickness": 1,
            "shadowAlpha": 0
        },
        "dataProvider": [{
            "date": "Q1",
            "sales1": 4.5,
            "sales2": 5.5
        }, {
            "date": "Q2",
            "sales1": 5,
            "sales2": 6.5
        }, {
            "date": "Q3",
            "sales1": 6.5,
            "sales2": 5.5
        }, {
            "date": "Q4",
            "sales1": 6,
            "sales2": 7
        }]
    });

})(jQuery);