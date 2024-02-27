let barCharts = [];
let data;
let cleanData=[];
let numRows;
let data2;
let cleanData2=[];
let numRows2;
let data3;
let cleanData3=[];
let numRows3;

function preload(){
    data = loadTable("data/crimeData3.csv", "csv", "header");
    data2 = loadTable("data/crimeData2.csv", "csv", "header");
    data3 = loadTable("data/crimeData1.csv", "csv", "header");
}

function setup(){
    background(50);
    createCanvas(1900,1700);
    angleMode(DEGREES);    

    numRows = data.rows.length;
    for(let i=0;i<numRows;i++){
        cleanData.push(data.rows[i].obj)
    }
    numRows2 = data2.rows.length;
    for(let i=0;i<numRows2;i++){
        cleanData2.push(data2.rows[i].obj)
    }
    numRows3 = data3.rows.length;
    for(let i=0;i<numRows3;i++){
        cleanData3.push(data3.rows[i].obj)
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
        yPos:500,
        axisLineColour:"#FFF",
        labelTextSize:15,
        labelPadding:20,
        labelColour:'#FFF',
        labelRotation:0,
        barWidth:30,
        chartName: "Total Homicide Offences Per Gender",
        yValue:["Female", "Male"],
        xValue:"Year",
        yLabel: "Number of Suspected Offenders",
        xLabel: "Year",
        xyLabelRotation: 90,
        labelStroke:(0.5)
    };

    // Horizontal Bar Chart
    let barChart02 = {
        data: cleanData2,
        chartWidth: 400,
        chartHeight: 300,
        xPos: 760,
        yPos: 500,
        axisLineColour: "#FFF",
        labelTextSize: 15,
        labelPadding: 10,
        labelColour: "#FFF",
        labelRotation: 45,
        barWidth: 30,
        chartName: "Total Homicide Offences Per Age Group",
        yValue: "VALUE",
        xValue: "Age_Group",
        xLabel: "Age of Suspected Offender at Time of Offence",
        yLabel: "Total Offences (2018-2022)",
        xyLabelRotation: 90,
        labelStroke:(0.5)
      };

      // Stacked Bar Chart
      let barChart03 = {
        data:cleanData,
        chartWidth:400,
        chartHeight:300,
        xPos:1300,
        yPos:500,
        axisLineColour:"#FFF",
        labelTextSize:15,
        labelPadding:10,
        labelColour:'#FFF',
        labelRotation:0,
        barWidth:30,
        chartName: "Total Homicide Offences Per Gender",
        yValue:["Female", "Male"],
        xValue:"Year",
        yLabel: "Number of Suspected Offenders",
        xLabel: "Year",
        xyLabelRotation: 90,
        labelStroke:(0.5)
    };
    // Bar Chart
    let barChart04 = {
        data:cleanData2,
        chartWidth:400,
        chartHeight:300,
        xPos:120,
        yPos:1000,
        axisLineColour:"#FFF",
        labelTextSize:15,
        labelPadding:10,
        labelColour:'#FFF',
        labelRotation:15,
        barWidth:40,
        chartName: "Total Homicide Offences Per Age Group",
        yValue:"VALUE",
        xValue:"Age_Group",
        yLabel: "Total Offences (2018-2022)",
        xLabel: "Age of Suspected Offender at Time of Offence",
        xyLabelRotation: 90,
        barColour: "#cc9a97",
        labelStroke:(0.5)
    };
    // Line Bar Chart
    let barChart05 = {
        data:cleanData,
        chartWidth:400,
        chartHeight:300,
        xPos:675,
        yPos:1000,
        axisLineColour:"#FFF",
        labelTextSize:15,
        labelPadding:10,
        labelColour:'#FFF',
        labelRotation:0,
        barWidth:30,
        chartName: "Total Homicide Offences",
        yValue:"Total",
        xValue:"Year",
        yLabel: "Total Number of Suspected Offenders",
        xLabel: "Year",
        xyLabelRotation: 90,
        labelStroke:(0.5)
    };
    let barChart06 = {
        data:cleanData3,
        chartWidth:400,
        chartHeight:300,
        xPos:1230,
        yPos:1000,
        axisLineColour:"#FFF",
        labelTextSize:15,
        labelPadding:10,
        labelColour:'#FFF',
        labelRotation:0,
        barWidth:30,
        chartName: "Total Homicide Offences Per Age Group",
        yValue:["Under 18","18 - 29 years","30 - 44 years","45 - 59 years","60 years and over"],
        xValue:"Year",
        yLabel: "Number of Suspected Offenders",
        xLabel: "Year",
        xyLabelRotation: 90,
        labelStroke:(0.5)
    };
    
    barCharts.push(new GroupedBarChart(barChart01));
    barCharts.push(new HorizontalBarChart(barChart02));
    barCharts.push(new StackedBarChart(barChart03));
    barCharts.push(new BarChart(barChart04));
    barCharts.push(new LineBarChart(barChart05));
    barCharts.push(new HundredBarChart(barChart06));
    
    console.log(barCharts);
}

function draw() {
    background(50);
    // Title
    fill("white");
    textSize(20);
    text("Recorded Homicide Offences in Ireland from 2018 to 2022",650,70);
    // Legend
    textSize(16);
    text("Gender", 1770, 43);
    text("Age Group", 1770, 135)
    textSize(15);

    fill("#72cc9b");
    rect(1770, 53, 15, 15);
    fill("#6f72c9");
    rect(1770, 76, 15, 15);
    fill("#cc9a97");
    rect(1770, 98, 15, 15);

    fill("#E17075");
    rect(1770, 145, 15, 15);
    fill("#E1A35A");
    rect(1770, 168, 15, 15);
    fill("#86E0CF");
    rect(1770, 190, 15, 15);
    fill("#8289E1");
    rect(1770, 213, 15, 15);
    fill("#D580E0");
    rect(1770, 235, 15, 15);

    // Names
    fill("white");
    text("Female", 1800,68);
    text("Male", 1800,91);
    text("Total", 1800,113);
    text("Under 18", 1800,160);
    text("18-29 Years", 1800,183);
    text("30-44 Years", 1800,205);
    text("45-59 Years", 1800,228);
    text("60+ Years", 1800,250);

    // Calling the redner function to draw the bar charts
    barCharts.forEach((bar) => bar.render());
}

