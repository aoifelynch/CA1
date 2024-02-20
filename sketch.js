let barCharts = [];
let data;
let cleanData=[];
let numRows;

function preload(){
    data = loadTable("data/crimeData3.csv", "csv", "header");
}

function setup(){
    background(50);
    createCanvas(1700,700);
    angleMode(DEGREES);    

    numRows = data.rows.length;
    for(let i=0;i<numRows;i++){
        cleanData.push(data.rows[i].obj)
    }

    // femaleData = cleanData.map(row => row.Female);
    // maleData = cleanData.map(row => row.Male);
    // cleanData = data.rows.map(d => d.obj);
    // console.log(cleanData);

    // Grouped Bar Chart
    let barChart01 = {
        data:cleanData,
        chartWidth:400,
        chartHeight:300,
        xPos:120,
        yPos:450,
        axisLineColour:"#FFF",
        labelTextSize:15,
        labelPadding:20,
        labelColour:'#FFF',
        labelRotation:0,
        barWidth:30,
        yValue:["Female", "Male"],
        xValue:"Year",
        yLabel: "Number of Suspected Offenders",
        xLabel: "Year",
        xyLabelRotation: 90
    };

    // Horizontal Bar Chart
    let barChart02 = {
        data: cleanData,
        chartWidth: 400,
        chartHeight: 300,
        xPos: 650,
        yPos: 450,
        axisLineColour: "#FFF",
        labelTextSize: 15,
        labelPadding: 10,
        labelColour: "#FFF",
        labelRotation: 45,
        barWidth: 30,
        yValue: "Total",
        xValue: "Year",
        chartTitle: "",
        xLabel: "Year",
        yLabel: "Number of Suspected Offenders",
        xyLabelRotation: 90,
      };

      // Stacked Bar Chart
      let barChart03 = {
        data:cleanData,
        chartWidth:400,
        chartHeight:300,
        xPos:1190,
        yPos:450,
        axisLineColour:"#FFF",
        labelTextSize:15,
        labelPadding:10,
        labelColour:'#FFF',
        labelRotation:0,
        barWidth:30,
        yValue:["Female", "Male"],
        xValue:"Year",
        yLabel: "Number of Suspected Offenders",
        xLabel: "Year",
        xyLabelRotation: 90
    };

    barCharts.push(new BarChart(barChart01));
    barCharts.push(new HorizontalBarChart(barChart02));
    barCharts.push(new StackedBarChart(barChart03));
    
    console.log(barCharts);
}

function draw() {
    background(50);
    fill("white");
    textSize(15);
    text("Number of Homicide Offences commited by Males and Females from 2018-2022",250,70);
    barCharts.forEach((bar) => bar.render());
}

