class StackedBarChart{
    constructor(obj){
        this.data = obj.data;
        this.chartWidth=obj.chartWidth;
        this.chartHeight=obj.chartHeight;
        this.xPos = obj.xPos;
        this.yPos = obj.yPos;
        this.axisLineColour = obj.axisLineColour;
        this.barWidth = 20;
        this.labelTextSize = obj.labelTextSize;
        this.labelPadding = obj.labelPadding;
        this.labelColour = obj.labelColour;
        this.labelRotation = obj.labelRotation;
        this.barWidth = obj.barWidth;
        this.yValue = obj.yValue;
        this.xValue = obj.xValue;
        this.yLabel = obj.yLabel;
        this.xLabel = obj.xLabel;
        this.xyLabelRotation = obj.xyLabelRotation;
        this.colourPallete = ["#72cc9b", "#6f72c9"];
    }

    render(){
        push ();
        translate (this.xPos,this.yPos);
        stroke(this.axisLineColour)
        line (0,0,0,-this.chartHeight);
        line (0,0,this.chartWidth,0);

        // This get the max data which we use to get a new scale formula
        let dataMax = 0;
        let dataMaxs = [];

        for (let i = 0; i < this.yValue.length; i++){
            dataMaxs.push(max(this.data.map((row) => +row[this.yValue[i]])));
        }
        // t = total number, c = current number, 0 = starting value
        dataMax = dataMaxs.reduce((t,c) => t + c, 0);

        let scale = this.chartHeight / dataMax;
        let gap = (this.chartWidth - (this.data.length * this.barWidth))/(this.data.length +1)
        let labels = this.data.map(d => d[this.xValue]);

        //This loop draws the horizontal elements, bars and labels
        push()
        translate(gap,0);
        noStroke();
        text(this.xLabel,150,70);
        for (let i = 0; i < this.data.length; i++) {
            // draws the bars

            stroke(255);
            // This creates a loop that makes the two bars and translates them to be on top of each other. Also adds in a colour pallette to make the bars different colours
            push();
            for (let j = 0; j < this.yValue.length; j++){
                fill(this.colourPallete[j]);
                rect(0, 0, this.barWidth, -this.data[i][this.yValue[j]] * scale);
                translate(0,-this.data[i][this.yValue[j]] * scale);
                
            }
            pop();
            // draws the labels
            textSize(this.labelTextSize);
            noStroke();
            fill(this.labelColour);
            textAlign(LEFT, CENTER);
      
            push();
            translate(this.barWidth / 2, this.labelPadding);
            rotate(this.labelRotation);
            text(labels[i], -15, 10);
            pop();
      
            translate(gap + this.barWidth, 0);
        }
        pop()
        
        // draws the vertical elements
        let tickGap = this.chartHeight/5;
        let tickValue = dataMax/5;


        for (let i=0; i<=5; i++){
            stroke(255)
            line(0,-i*tickGap,-20,-i*tickGap);
            textSize(this.labelTextSize);
            noStroke();
            fill(this.labelColour);
            textAlign(RIGHT,CENTER);
            text(round(tickValue*i),-20,-i*tickGap);
        }
        
        
        rotate(this.xyLabelRotation);
        text(this.yLabel, -50, 80);
        pop ();
    }
}

