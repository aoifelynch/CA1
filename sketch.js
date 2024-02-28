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
let myFont;

function preload(){
    data = loadTable("data/crimeData3.csv", "csv", "header");
    data2 = loadTable("data/crimeData2.csv", "csv", "header");
    data3 = loadTable("data/crimeData1.csv", "csv", "header");
    myFont = loadFont("./font/Roboto-Regular.ttf")
}

function setup(){
    background(50);
    createCanvas(1900,1700);
    textFont(myFont);
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
        labelStroke:(1)
    };

    // Horizontal Bar Chart
    let barChart02 = {
        data: cleanData2,
        chartWidth: 400,
        chartHeight: 300,
        xPos:750,
        yPos:1000,
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
        labelStroke:(1)
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
        labelStroke:(1),
        colourPallet: ["#72cc9b", "#6f72c9"],
        xlabelX: 150,
        xlabelY: 70
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
        yValue:["VALUE"],
        xValue:"Age_Group",
        yLabel: "Total Offences (2018-2022)",
        xLabel: "Age of Suspected Offender at Time of Offence",
        xyLabelRotation: 90,
        labelStroke:(1),
        colourPallet:["#cc9a97"],
        xlabelX: 30,
        xlabelY: 80
    };
    // Line Bar Chart
    let barChart05 = {
        data:cleanData,
        chartWidth:400,
        chartHeight:300,
        xPos: 760,
        yPos: 500,
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
        labelStroke:(1),
        lineColour: "#cc9a97"
    };
    // 100% Bar Chart
    let barChart06 = {
        data:cleanData3,
        chartWidth:400,
        chartHeight:300,
        xPos:1300,
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
        labelStroke:(1)
    };
    
    barCharts.push(new GroupedBarChart(barChart01));
    barCharts.push(new HorizontalBarChart(barChart02));
    barCharts.push(new BarChart(barChart03));
    barCharts.push(new BarChart(barChart04));
    barCharts.push(new LineBarChart(barChart05));
    barCharts.push(new HundredBarChart(barChart06));
    
    console.log(barCharts);
}

function draw() {
    background(50);
    // Title
    fill("white");
    textSize(30);
    stroke(255);
    strokeWeight(1.5);
    text("Recorded Homicide Offences in Ireland from 2018 to 2022",570,70);
    // Legend
    textSize(16);
    text("Gender", 1770, 250);
    text("Age Group", 1770, 720)
    noStroke();
    textSize(15);

    fill("#72cc9b");
    rect(1770, 265, 15, 15);
    fill("#6f72c9");
    rect(1770, 290, 15, 15);
    fill("#cc9a97");
    rect(1770, 315, 15, 15);

    fill("#E17075");
    rect(1770, 740, 15, 15);
    fill("#E1A35A");
    rect(1770, 765, 15, 15);
    fill("#86E0CF");
    rect(1770, 790, 15, 15);
    fill("#8289E1");
    rect(1770, 815, 15, 15);
    fill("#D580E0");
    rect(1770, 840, 15, 15);

    // Names
    fill("white");
    text("Female", 1800,277);
    text("Male", 1800,302);
    text("Total", 1800,327);
    text("Under 18", 1800,752);
    text("18-29 Years", 1800,777);
    text("30-44 Years", 1800,802);
    text("45-59 Years", 1800,827);
    text("60+ Years", 1800,852);

    // Calling the redner function to draw the bar charts
    barCharts.forEach((bar) => bar.render());
}

