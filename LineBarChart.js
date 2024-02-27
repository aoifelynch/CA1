class LineBarChart{
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
        this.labelStroke = obj.labelStroke;
        this.chartName = obj.chartName;
    }
    render(){
        push ();
        translate (this.xPos,this.yPos);
        stroke(this.axisLineColour)
        line (0,0,0,-this.chartHeight);
        line (0,0,this.chartWidth,0);

        let gap = (this.chartWidth - (this.data.length * this.barWidth))/(this.data.length +1)
        let labels = this.data.map(d => d[this.xValue]);
        let scale = this.chartHeight / max(this.data.map(d => d[this.yValue]));
        //This loop draws the horizontal elements, bars and labels
        push()
        translate(gap + this.barWidth / 2,0);
        stroke(255);
        strokeWeight(this.labelStroke);
        text(this.xLabel,130,50);
        noStroke();
        textSize(17.5);
        text(this.chartName, 30, -350);
        
        beginShape();
        for (let i = 0; i < this.data.length; i++) {
          // Draws the lines
          stroke(255);
          noFill();
          strokeWeight(2);
    
          let x = i * (gap + this.barWidth);
          let y = -this.data[i][this.yValue] * scale;
          vertex(x, y);
          endShape();
    
          // Draws labels
          textSize(this.labelTextSize);
          noStroke();
          fill(this.labelColour);
          textAlign(CENTER,CENTER);
    
          push();
          translate(0, this.labelPadding);
          text(labels[i], x, 0);
          pop();
        }
        // endShape();
        pop();
        
        //This draws the vertical elements
        let tickGap = this.chartHeight/5;
        let tickValue = max(this.data.map(d => d[this.yValue]))/5;
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
        stroke(255);
        strokeWeight(this.labelStroke);
        text(this.yLabel, -40, 80);
        pop ();
    }
}
