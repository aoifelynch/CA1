let barCharts = [];
let data;
let cleanData=[];
let numRows;

function preload(){
    data = loadTable("data/crimeData3.csv", "csv", "header");
}

function setup(){
    background(50);
    createCanvas(1700,1700);
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
    // 100% Bar Chart
    let barChart04 = {
        data:cleanData,
        chartWidth:400,
        chartHeight:300,
        xPos:120,
        yPos:900,
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
    // Line Bar Chart
    let barChart05 = {
        data:cleanData,
        chartWidth:400,
        chartHeight:300,
        xPos:650,
        yPos:900,
        axisLineColour:"#FFF",
        labelTextSize:15,
        labelPadding:10,
        labelColour:'#FFF',
        labelRotation:0,
        barWidth:30,
        yValue:"Total",
        xValue:"Year",
        yLabel: "Number of Suspected Offenders",
        xLabel: "Year",
        xyLabelRotation: 90
    };
    barCharts.push(new BarChart(barChart01));
    barCharts.push(new HorizontalBarChart(barChart02));
    barCharts.push(new StackedBarChart(barChart03));
    barCharts.push(new HundredBarChart(barChart04));
    barCharts.push(new LineBarChart(barChart05));
    
    console.log(barCharts);
}

function draw() {
    background(50);
    // Title of Charts
    fill("white");
    textSize(18);
    text("Number of Homicide Offences commited by Males and Females from 2018-2022",450,70);
    // Legend
    textSize(15);
    fill("#72cc9b")
    rect(1470, 53, 15, 15);
    fill("#6f72c9")
    rect(1470, 76, 15, 15);
    fill("#cc9a97")
    rect(1470, 98, 15, 15);
    fill("white");
    text("Female", 1500,68);
    text("Male", 1500,91);
    text("Total", 1500,113);
    // Calling the redner function to draw the bar charts
    barCharts.forEach((bar) => bar.render());
}

