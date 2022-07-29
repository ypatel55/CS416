async function loadTwo() {
    const data = await d3.csv('https://ypatel55.github.io/CS416/data/worldhappiness.csv');

    const margin = {top: 10, right: 20, bottom: 30, left: 50},
    width = 1000 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;

    let svg = d3.select("#chart-1").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform","translate(" + margin.left + "," + margin.top + ")");

    const x = d3.scaleLinear().domain([0, 10]).range([0, width]);
    svg.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(x));

    const y = d3.scaleLinear().domain([0, 10]).range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));

    const z = getBubbleSizeScale()
    const myColor = d3.scaleOrdinal().domain(getContinentKeys()).range(d3.schemeSet2);

    const tooltip = d3.select("#slide-1").append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "black")
    .style("border-radius", "5px")
    .style("padding", "10")
    .style("color", "white")
    .style("width", "150px")
    .style("height", "50px")


    svg.append('g')
    .selectAll("scatterplot-dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "bubbles")
    .attr("cx", function (d) {
        return x(Number(d.HappinessScore));
    })
    .attr("cy", function (d) {
        return y(Number(d.Economy(GDPperCapita)));
    })
    .on("mouseover", function (event, d) {
        tooltip.transition()
            .duration(200)
            .style("opacity", .9);
        tooltip.html(firstChartTooltipHTML(d));
        tooltip.style("left", (event.pageX) + "px")
            .style("top", (event.pageY - 28) + "px")
    })
    .on("mouseout", function (d) {
        tooltip.transition()
            .duration(500)
            .style("opacity", 0);
    })
    .style("fill", function (d) {
        return myColor(d.Region);
    });
    //svg.append('g').selectAll("circle").data(data).enter().append("circle").attr("cx", function (d) {return x(Number(d.AgeatArrest));}).attr("cy", function (d) {return y(Number(d.DaysinJail));})
    


   // var svg = d3.select("#two").append("g").attr("transform","translate("+50+","+50+")");
    //var x = d3.scaleLog().domain([10,150]).range([0,200]);
    //var y = d3.scaleLog().domain([10,150]).range([200,0]);
    //d3.select("#two").append("g").attr("transform","translate("+50+","+50+")").call(d3.axisLeft(y).tickValues([10, 20, 50, 100]).tickFormat(d3.format("~s")));
    //d3.select("#two").append("g").attr("transform","translate("+50+","+(200+50)+")").call(d3.axisBottom(x).tickValues([10, 20, 50, 100]).tickFormat(d3.format("~s")));
    //svg.selectAll("circle").data(data).enter().append("circle").attr("cx", function(d) { return x(d.AgeatArrest)}).attr("cy", function(d) { return y(d.DaysinJail)}).attr("r", function(d) { return 2 + Number.parseInt(d.AgeatArrest) })

}

function getBubbleSizeScale() {
    // Add a scale for bubble size
    const z = d3.scaleLog()
        .domain([200000, 1310000000])
        .range([1, 30]);
    return z;
}

function getContinentKeys() {
    return ["Western Europe", "North America", "Australia and New Zealand", "Middle East and Northern Africa", "Latin America and Caribbean", "Southeastern Asia", "Central and Eastern Europe", "Sub-Saharan Africa"];
}

function firstChartTooltipHTML(object) {
    return "<div>" + object.entity + "</div><div>$" + Math.round(object.AgeatArrest) + "/year</div><div>" + Math.round(object.DaysinJail) + " hrs worked yearly</div>";
}

async function loadThree() {
    const data = await d3.csv('https://ypatel55.github.io/CS416/data/CCSOData.csv');

    const filteredData = data.filter(function (d) {
        return d.RACE != "" && d.RACE != "Unknown" && d.AgeatArrest != "" && d.DaysinJail != ""});

    var svg = d3.select("#three"),
            margin = 200,
            width = svg.attr("width") - margin,
            height = svg.attr("height") - margin

    var x = d3.scaleBand().range([0,width]).padding(0.4)
    var y = d3.scaleLinear().range([height,0])

    var g = svg.append("g").attr("transform", "translate(" + 100 + "," + 100 + ")");

    x.domain(filteredData.map(function(d) { return d.RACE; }));
    y.domain([0, d3.max(filteredData, function(d) { return d.AgeatArrest; })]);

    g.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(x));
    g.append("g").call(d3.axisLeft(y));

    g.selectAll(".bar").data(filteredData).enter().append("rect").attr("class", "bar").attr("x", function(d) { return x(d.RACE); }).attr("y", function(d) { return y(Number(d.AgeatArrest)); }).attr("width", x.bandwidth()).attr("height", function(d) { return height - y(Number(d.AgeatArrest)); });

    g.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(x)).append("text").attr("y", height - 250).attr("x", width - 100).attr("text-anchor", "end").attr("stroke", "black").text("Race");

    g.append("g").call(d3.axisLeft(y)).append("text").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", "-5.1em").attr("text-anchor", "end").attr("stroke", "black").text("Age at Arrest");
}



async function loadFour() {
    //const data = await d3.csv('https://ypatel55.github.io/CS416/data/CCSOData.csv');

    var color = ['pink','lightyellow','lightgreen','lightcyan','lightblue','violet'];
    var pie = d3.pie();

    var data = [4,8,15,16,23,42];

    var svg = d3.select("#four").append("g").attr("transform","translate("+150+","+150+")");

    d3.select("#four").selectAll("path").data(pie([4,8,15,16,23,42])).enter().append("path").attr("d",arc).attr("fill",function(d,I) {return color[I];});
}



