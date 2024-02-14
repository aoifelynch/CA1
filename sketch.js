//Proportion of Attempts/Threats to Murder, Assaults, Harassment and Related offences reported which have led to charge or summons


let barCharts = [];
let data;
let cleanData=[];
let numRows;

function preload(){
    data = loadTable("data/crimeData.csv", "csv", "header");
}

function setup(){
    background(50);
    createCanvas(1000,1200);
    angleMode(DEGREES);    

    numRows = data.rows.length;
    for(let i=0;i<numRows;i++){
        cleanData.push(data.rows[i].obj)
    }
    // cleanData = data.rows.map(d => d.obj);
    console.log(cleanData);

    let barChart01 = {
        data:cleanData,
        chartWidth:400,
        chartHeight:300,
        xPos:100,
        yPos:450,
        axisLineColour:"#FFF",
        labelTextSize:15,
        labelPadding:10,
        labelColour:'#FFF',
        labelRotation:45,
        barWidth:15,
        yValue:"Value",
        xValue:"Year",
        yLabel: "Percentage of Successful Charges",
        xLabel: "Year",
        xyLabelRotation: 90
    }

    //barCharts.push(new BarChart(cleanData,80,80,50,350,"#ff0000"));
    barCharts.push(new BarChart(barChart01));
    // barCharts.push(new BarChart(cleanData,200,200,250,450,"#d9d9d9"));
    //barCharts.push(new BarChart(cleanData,400,400,50,450,"#d9d9d9"))
}

function draw() {
    background(50);
    fill("white");
    textSize(15);
    text("Proportion of Attempts/Threats to Murder, Assaults, Harassment and Related offences reported which have led to charge or summons", 50,50);
    barCharts.forEach(bar => bar.render());
}

