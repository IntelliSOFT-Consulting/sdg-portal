function countryDemographicsChart(countryID) {
    var countryDemoDataURL = 'assets/data/' + countryID + 'DemographicsChartData.json';
    $.getJSON(countryDemoDataURL, function (data) {
        var chart = AmCharts.makeChart("chartdiv", {
            "type": "serial",
            "theme": "light",
            "rotate": true,
            "marginBottom": 50,
            "dataProvider": data,
            "startDuration": 1,
            "graphs": [{
                "fillAlphas": 0.8,
                "lineAlpha": 0.2,
                "type": "column",
                "valueField": "male",
                "title": "Male",
                "labelText": "[[value]]",
                "clustered": false,
                "labelFunction": function (item) {
                    return Math.abs(item.values.value);
                },
                "balloonFunction": function (item) {
                    return item.category + ": " + Math.abs(item.values.value) + "%";
                }
            }, {
                "fillAlphas": 0.8,
                "lineAlpha": 0.2,
                "type": "column",
                "valueField": "female",
                "title": "Female",
                "labelText": "[[value]]",
                "clustered": false,
                "labelFunction": function (item) {
                    return Math.abs(item.values.value);
                },
                "balloonFunction": function (item) {
                    return item.category + ": " + Math.abs(item.values.value) + "%";
                }
            }],
            "categoryField": "age",
            "categoryAxis": {
                "gridPosition": "start",
                "gridAlpha": 0.2,
                "axisAlpha": 0
            },
            "valueAxes": [{
                "gridAlpha": 0,
                "ignoreAxisWidth": true,
                "labelFunction": function (value) {
                    return Math.abs(value) + '%';
                },
                "guides": [{
                    "value": 0,
                    "lineAlpha": 0.2
                }]
            }],
            "balloon": {
                "fixedPosition": true
            },
            "chartCursor": {
                "valueBalloonsEnabled": false,
                "cursorAlpha": 0.05,
                "fullWidth": true
            },
            "allLabels": [{
                "text": "Male",
                "x": "28%",
                "y": "97%",
                "bold": true,
                "align": "middle"
            }, {
                "text": "Female",
                "x": "75%",
                "y": "97%",
                "bold": true,
                "align": "middle"
            }],
            "export": {
                "enabled": true
            }

        });
    }).fail(function () {
        console.log("error fetching countryDemographicsChart Data")
    });
}
