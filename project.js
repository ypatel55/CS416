async function loadTwo() {
    const data = await d3.csv('https://ypatel55.github.io/CS416/data/CCSOData.csv');

    const blackData = data.filter(function (d) {
        return d.RACE == 'Black'});
    var blackAVG = d3.sum(blackData.map(function(d) {                
        return d.AgeatArrest;                                           
      }))/36319; 

    const whiteData = data.filter(function (d) {
        return d.RACE == 'White'});
    var whiteAVG = d3.sum(whiteData.map(function(d) {                
        return d.AgeatArrest;                                           
      }))/25175;

    const hispanicData = data.filter(function (d) {
        return d.RACE == 'Hispanic'});
    var hispanicAVG = d3.sum(hispanicData.map(function(d) {                
        return d.AgeatArrest;                                           
      }))/4740;

    const asianData = data.filter(function (d) {
        return d.RACE == 'Asian/Pacific Islander'});
    var asianAVG = d3.sum(asianData.map(function(d) {                
        return d.AgeatArrest;                                           
      }))/751;

    const nativeAmericanData = data.filter(function (d) {
        return d.RACE == 'Native American'});
    var nativeAmericanAVG = d3.sum(nativeAmericanData.map(function(d) {                
        return d.AgeatArrest;                                           
      }))/54;

    const whiteHispanicData = data.filter(function (d) {
        return d.RACE == 'White (Hispanic)'});
    var whiteHispanicAVG = d3.sum(whiteHispanicData.map(function(d) {                
        return d.AgeatArrest;                                           
      }))/20;


    const finalData = [{race: "White", value: whiteAVG},{race: "Black", value: blackAVG},{race: "Hispanic", value: hispanicAVG},{race: "Asian/Pacific Islander", value: asianAVG},{race: "Native American", value: nativeAmericanAVG},{race: "White(Hispanic)", value: whiteHispanicAVG}]

    var svg = d3.select("#two"), margin = 200,width = svg.attr("width") - margin,height = svg.attr("height") - margin

    var x = d3.scaleBand().range([0,width]).padding(0.2)
    var y = d3.scaleLinear().range([height,0])
    var color = d3.scaleOrdinal(['#85E3FF','#FFB5E8','#AFF8DB','#B5B9FF','#FFCBC1', '#fff06e']);

    var g = svg.append("g").attr("transform", "translate(" + 100 + "," + 100 + ")");

    x.domain(finalData.map(function(d) { return d.race; }));
    y.domain([0, d3.max(finalData, function(d) { return d.value; })]);

    g.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(x));
    g.append("g").call(d3.axisLeft(y));

    g.selectAll(".bar").data(finalData).enter().append("rect").attr('fill', function(d,i) { return color(i)}).attr("class", "bar").attr("x", function(d) { return x(d.race); }).attr("y", function(d) { return y((d.value)); }).attr("width", x.bandwidth()).attr("height", function(d) { return height - y((d.value)); })
    
    svg.append("text").attr("text-anchor", "middle").attr("x", x.bandwidth()/2+120).attr("y", 115).text(Math.round(100*whiteAVG)/100);
    svg.append("text").attr("text-anchor", "middle").attr("x", x.bandwidth()/2+220).attr("y", 150).text(Math.round(100*blackAVG)/100);
    svg.append("text").attr("text-anchor", "middle").attr("x", x.bandwidth()/2+318).attr("y", 175).text(Math.round(100*hispanicAVG)/100);
    svg.append("text").attr("text-anchor", "middle").attr("x", x.bandwidth()/2+412).attr("y", 212).text(Math.round(100*asianAVG)/100);
    svg.append("text").attr("text-anchor", "middle").attr("x", x.bandwidth()/2+505).attr("y", 95).text(Math.round(100*nativeAmericanAVG)/100);
    svg.append("text").attr("text-anchor", "middle").attr("x", x.bandwidth()/2+605).attr("y", 245).text(Math.round(100*whiteHispanicAVG)/100);

    g.append("text").attr("text-anchor", "end").attr("x", width/2).attr("y", height + 50).text("Race");
    g.append("text").attr("text-anchor", "end").attr("transform", "rotate(-90)").attr("y", -50).attr("x", -200).text("Average age at arrest")
}

async function loadThree() {
    const data = await d3.csv('https://ypatel55.github.io/CS416/data/CCSOData.csv');

    const blackData = data.filter(function (d) {
        return d.RACE == 'Black'});
    var blackAVG = d3.sum(blackData.map(function(d) {                
        return d.DaysinJail;                                           
      }))/36319; 

    const whiteData = data.filter(function (d) {
        return d.RACE == 'White'});
    var whiteAVG = d3.sum(whiteData.map(function(d) {                
        return d.DaysinJail;                                           
      }))/25175;

    const hispanicData = data.filter(function (d) {
        return d.RACE == 'Hispanic'});
    var hispanicAVG = d3.sum(hispanicData.map(function(d) {                
        return d.DaysinJail;                                           
      }))/4740;

    const asianData = data.filter(function (d) {
        return d.RACE == 'Asian/Pacific Islander'});
    var asianAVG = d3.sum(asianData.map(function(d) {                
        return d.DaysinJail;                                           
      }))/751;

    const nativeAmericanData = data.filter(function (d) {
        return d.RACE == 'Native American'});
    var nativeAmericanAVG = d3.sum(nativeAmericanData.map(function(d) {                
        return d.DaysinJail;                                           
      }))/54;

    const whiteHispanicData = data.filter(function (d) {
        return d.RACE == 'White (Hispanic)'});
    var whiteHispanicAVG = d3.sum(whiteHispanicData.map(function(d) {                
        return d.DaysinJail;                                           
      }))/20;


    const finalData = [{race: "White", value: whiteAVG},{race: "Black", value: blackAVG},{race: "Hispanic", value: hispanicAVG},{race: "Asian/Pacific Islander", value: asianAVG},{race: "Native American", value: nativeAmericanAVG},{race: "White(Hispanic)", value: whiteHispanicAVG}]

    var svg = d3.select("#three"),margin = 200,width = svg.attr("width") - margin,height = svg.attr("height") - margin

    var x = d3.scaleBand().range([0,width]).padding(0.2)
    var y = d3.scaleLinear().range([height,0])
    var color = d3.scaleOrdinal(['#85E3FF','#FFB5E8','#AFF8DB','#B5B9FF','#FFCBC1', '#fff06e']);

    var g = svg.append("g").attr("transform", "translate(" + 100 + "," + 100 + ")");

    x.domain(finalData.map(function(d) { return d.race; }));
    y.domain([0, d3.max(finalData, function(d) { return d.value; })]);

    g.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(x));
    g.append("g").call(d3.axisLeft(y));

    g.selectAll(".bar").data(finalData).enter().append("rect").attr('fill', function(d,i) { return color(i)}).attr("class", "bar").attr("x", function(d) { return x(d.race); }).attr("y", function(d) { return y((d.value)); }).attr("width", x.bandwidth()).attr("height", function(d) { return height - y((d.value)); })

    svg.append("text").attr("text-anchor", "middle").attr("x", x.bandwidth()/2+120).attr("y", 410).text(Math.round(100*whiteAVG)/100);
    svg.append("text").attr("text-anchor", "middle").attr("x", x.bandwidth()/2+220).attr("y", 195).text(Math.round(100*blackAVG)/100);
    svg.append("text").attr("text-anchor", "middle").attr("x", x.bandwidth()/2+315).attr("y", 425).text(Math.round(100*hispanicAVG)/100);
    svg.append("text").attr("text-anchor", "middle").attr("x", x.bandwidth()/2+412).attr("y", 575).text(Math.round(100*asianAVG)/100);
    svg.append("text").attr("text-anchor", "middle").attr("x", x.bandwidth()/2+505).attr("y", 155).text(Math.round(100*nativeAmericanAVG)/100);
    svg.append("text").attr("text-anchor", "middle").attr("x", x.bandwidth()/2+605).attr("y", 95).text(Math.round(100*whiteHispanicAVG)/100);
    
    g.append("text").attr("text-anchor", "end").attr("x", width/2).attr("y", height + 50).text("Race");
    g.append("text").attr("text-anchor", "end").attr("transform", "rotate(-90)").attr("y", -50).attr("x", -200).text("Average number of days in jail")
}

async function loadFour() {
    const csvData = await d3.csv('https://ypatel55.github.io/CS416/data/CCSOData.csv');
    //data created with count of each race's bookings amount
    var data = [{race: "White", value: 25175},{race: "Black", value: 36319},{race: "Hispanic", value: 4740},{race: "Asian/Pacific Islander", value: 751},{race: "Native American", value: 54},{race: "White(Hispanic)", value: 20}]

    var width = 800, height = 800, opacity = 1, hoverOpacity = 0.50, other = 1, tooltipSize = 15, piechart = "#four";

    var radius = Math.min(width, height) / 2;
    var color = d3.scaleOrdinal(['#85E3FF','#FFB5E8','#AFF8DB','#B5B9FF','#FFCBC1', '#fff06e']);

    var svg = d3.select(piechart).append('svg').attr('class','pie').attr('width', width).attr('height', height);
    var g = svg.append('g').attr('transform', 'translate(' + (width/2) + ',' + (height/2) + ')');
    var arc = d3.arc().innerRadius(radius - 200).outerRadius(radius);

    var pie = d3.pie().value(function(d) { return d.value; });

    var path = g.selectAll('path').data(pie(data)).enter().append("g").append('path').attr('d', arc).attr('fill', function(d,i) { return color(i)}).style('opacity', opacity).style('stroke', 'white')
    .on("mouseover", function(d) {
      d3.selectAll('path')
        .style("opacity", other);
      d3.select(this) 
        .style("opacity", hoverOpacity);

    let g = d3.select("svg")
        .style("cursor", "pointer")
        .append("g")
        .attr("class", "tooltip")
        .style("opacity", 1);

        g.append("text")
        .attr("class", "name-text")
        .text(`${d.data.race} (${d.data.value}) (${(Math.round(1000 * d.data.value / 67059) / 10) + '%'})`)
        .attr('text-anchor', 'middle');
      })
    .on("mousemove", function(d) {
          let mousePosition = d3.mouse(this);
          let x = mousePosition[0] + width/2;
          let y = mousePosition[1] + height/2 - tooltipSize;
      
          let text = d3.select('.tooltip text');
          d3.select('.tooltip')
            .style("opacity", 1)
            .attr('transform',`translate(${x}, ${y})`);
      })
    .on("mouseout", function(d) {   
        d3.select("svg") 
          .select(".tooltip").remove();
      d3.selectAll('path')
          .style("opacity", opacity);
      })

    let legend = d3.select("#four").append('div')
      .attr('class', 'legend')
      .style('margin-top', '30px');

let keys = legend.selectAll('.key')
      .data(data)
      .enter().append('div')
      .attr('class', 'key')
      .style('display', 'flex')
      .style('align-items', 'center')
      .style('margin-right', '20px');

    keys.append('div')
      .attr('class', 'symbol')
      .style('height', '10px')
      .style('width', '10px')
      .style('margin', '5px 5px')
      .style('background-color', (d, i) => color(i));

    keys.append('div')
      .attr('class', 'race')
      .text(d => `${d.race}`);

    keys.exit().remove();
}

async function loadFive() {
    const data = await d3.csv('https://ypatel55.github.io/CS416/data/CCSOData.csv');

    const races = ["White", "Black", "Hispanic", "Asian/Pacific Islander","Native American","White (Hispanic)"]

    d3.select("#select-race")
            .selectAll('options')
            .data(races)
            .enter()
            .append('option')
            .text(function (d) {
                return d;
            }) 
            .attr("value", function (d) {
                return d;
            })

    var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 800 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;

    var svg = d3.select("#five").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform","translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scaleLinear().domain([0, d3.max(data, function(d) { return d.AgeatArrest; })]).range([ 0, width ]);
    svg.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(x).ticks(7));
    
    var y = d3.scaleLinear().domain([0, d3.max(data, function(d) { return d.DaysinJail; })]).range([ height, 0 ]);
    svg.append("g").call(d3.axisLeft(y));

    svg.selectAll("circle").data(data.filter(function(d){return d.RACE=="White"})).enter().append("circle").attr("cx", function(d) { return x(d.AgeatArrest)}).attr("cy", function(d) { return y(d.DaysinJail)}).attr("r", 3).attr("fill", "navy")

    function update(selectedGroup) {
        var dataFilter = data.filter(function(d){return d.RACE==selectedGroup})
        svg.selectAll("circle").remove()
        svg.selectAll("circle").data(dataFilter).enter().append("circle").attr("cx", function(d) { return x(d.AgeatArrest)}).attr("cy", function(d) { return y(d.DaysinJail)}).attr("r", 3).attr("fill", "navy")
     }
  
    d3.select("#select-race").on("change", function(d) {
        var selectedOption = d3.select(this).property("value")
        update(selectedOption)
    })    

    svg.append("text").attr("text-anchor", "end").attr("x", width/2).attr("y", height + margin.top + 18).text("Age at arrest");
    svg.append("text").attr("text-anchor", "end").attr("transform", "rotate(-90)").attr("y", -margin.left+20).attr("x", -250).text("Number of days in jail")
}