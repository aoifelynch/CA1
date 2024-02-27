class HundredBarChart{
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
        this.colourPallete = ["#E17075","#E1A35A","#86E0CF","#8289E1","#D580E0"];
        this.labelStroke = obj.labelStroke;
        this.chartName = obj.chartName;
    }

    render(){
        push ();
        translate (this.xPos,this.yPos);
        stroke(this.axisLineColour)
        line (0,0,0,-this.chartHeight);
        line (0,0,this.chartWidth,0);

        // This gets the max value which we use to get a new scale formula
        let dataMax;
        let dataMaxs = [];

        // This gets the max values from each element in the yValue array and pushes them to a new array (dataMaxs)
        for (let i = 0; i < this.yValue.length; i++){
            dataMaxs.push(max(this.data.map((row) => +row[this.yValue[i]])));
        }

        // Reduce adds all elements of the array into a single value. It is taking both the female and male values and adding them together to get a total number for the scale. 
        //t = total number, c = current number, 0 = starting value
        dataMax = dataMaxs.reduce((t,c) => t + c, 0);

        // New array to get the total value of each bar by adding all values in yValue together
        let totalValues = [];
        this.data.forEach(row => {
            let sum = 0;
            this.yValue.forEach(y => {
                sum += +row[y];
            })
            totalValues.push(sum);
        })
        
        let gap = (this.chartWidth - (this.data.length * this.barWidth))/(this.data.length +1)
        let labels = this.data.map(d => d[this.xValue]);

        //This loop draws the horizontal elements, bars and labels
        push()
        translate(gap,0);
        stroke(255);
        strokeWeight(this.labelStroke);
        text(this.xLabel,150,70);
        noStroke();
        textSize(17.5);
        text(this.chartName, 0, -330);
        for (let i = 0; i < this.data.length; i++) {
            // draws the bars

            stroke(255);
            // This creates a loop that makes the two bars and translates them to be on top of each other. Also adds in a colour pallette to make the bars different colours
            push();
            for (let j = 0; j < this.yValue.length; j++){
                //The scale gets recalculated in the loop as it will be different for each bar in order to make them all 100%
                scale = this.chartHeight / totalValues[i];
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
        let tickValue = 100/5;


        for (let i=0; i<=5; i++){
            stroke(255)
            line(0,-i*tickGap,-20,-i*tickGap);
            textSize(this.labelTextSize);
            noStroke();
            fill(this.labelColour);
            textAlign(RIGHT,CENTER);
            text(round(tickValue*i)+"%",-20,-i*tickGap);
        }
        
        
        rotate(this.xyLabelRotation);
        stroke(255);
        strokeWeight(this.labelStroke);
        text(this.yLabel, -50, 80);
        pop ();
    }
}

