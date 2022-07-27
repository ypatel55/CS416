async function loadTwo() {
    const data = await d3.csv('https://ypatel55.github.io/CS416/data/CCSOData.csv');

    var svg = d3.select("#two").append("g").attr("transform","translate("+50+","+50+")");

    var x = d3.scaleLog().domain([10,150]).range([0,200]);
    var y = d3.scaleLog().domain([10,150]).range([200,0]);
    
    d3.select("#two").append("g").attr("transform","translate("+50+","+50+")").call(d3.axisLeft(y).tickValues([10, 20, 50, 100]).tickFormat(d3.format("~s")));
    
    d3.select("#two").append("g").attr("transform","translate("+50+","+(200+50)+")").call(d3.axisBottom(x).tickValues([10, 20, 50, 100]).tickFormat(d3.format("~s")));
    
    svg.selectAll("circle").data(data).enter().append("circle").attr("cx", function(d) { return x(d.AgeatArrest)}).attr("cy", function(d) { return y(d.DaysinJail)}).attr("r", function(d) { return 2 + Number.parseInt(d.AgeatArrest) })

}

async function loadThree() {
    const data = await d3.csv('https://ypatel55.github.io/CS416/data/CCSOData.csv');




    var x = d3.scaleBand().range([0,600]).padding(0.4)
    var y = d3.scaleLinear().range([600,0])

    x.domain(data.map(function(d) { return d.RACE; }));
    y.domain([0, d3.max(data, function(d) { return d.AgeatArrest; })]);

    d3.select("#three").attr("width",200+(2*50)).attr("height",200+(2*50)).append("g").attr("transform","translate("+50+","+50+")").selectAll().data(data).enter().append("rect").attr("x", function(d,I) {return (200/6)*I}).attr("y",function(d,i) {return 200-(200*(i/42))}).attr("width", x.bandwidth()).attr("height", function(d,i) {return 200*(i/42)});

    d3.select("#three").append("g").attr("transform","translate("+50+","+50+")").call(d3.axisLeft(y));

    d3.select("#three").append("g").attr("transform","translate("+50+","+(200+50)+")").call(d3.axisBottom(x));
}



