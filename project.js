async function loadIntro() {
    const data = await d3.csv('https://github.com/ypatel55/CS416/main/data/CCSOData.csv');

    var svg = d3.select("#two").append("g").attr("transform","translate("+50+","+50+")");

    var x = d3.scaleLog().domain([10,150]).range([0,200]);
    var y = d3.scaleLog().domain([10,150]).range([200,0]);
    
    d3.select("#two").append("g").attr("transform","translate("+50+","+50+")").call(d3.axisLeft(y).tickValues([10, 20, 50, 100]).tickFormat(d3.format("~s")));
    
    d3.select("#two").append("g").attr("transform","translate("+50+","+(200+50)+")").call(d3.axisBottom(x).tickValues([10, 20, 50, 100]).tickFormat(d3.format("~s")));
    
    svg.selectAll("circle").data(data).enter().append("circle").attr("cx", 10).attr("cy", 5).attr("r", 5)

}



