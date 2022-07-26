async function loadIntro() {
    const data = await d3.csv('https://uofi.box.com/shared/static/9elozjsg99bgcb7gb546wlfr3r2gc9b7.csv');

    var svg = d3.select("#chart2").append("svg").attr("width", 200).attr("height", 200).append("g").attr("transform","translate("+50+","+50+")");

    var x = d3.scaleLog().domain([10,150]).range([0,200]);
    var y = d3.scaleLog().domain([10,150]).range([200,0]);
    
    d3.select("svg").append("g").attr("transform","translate("+50+","+50+")").call(d3.axisLeft(y).tickValues([10, 20, 50, 100]).tickFormat(d3.format("~s")));
    
    d3.select("svg").append("g").attr("transform","translate("+50+","+(200+50)+")").call(d3.axisBottom(x).tickValues([10, 20, 50, 100]).tickFormat(d3.format("~s")));
    
    svg.selectAll("circle").data(data).enter().append("circle").attr("cx", function(d) { return x(d.AgeatArrest)}).attr("cy", function(d) { return y(d.DaysinJail)}).attr("r", function(d) { return 2 + Number.parseInt(d.AgeatArrest) })
}