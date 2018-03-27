$(document).ready(function(){
    const url="https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/global-temperature.json";

    d3.json(url,function(data){
        data = data.monthlyVariance;
        data.map(function(d){
            d.month = monthes[d.month-1];
            d.year = d3.time.format("%Y").parse(d.year.toString());
        });

        // declare the scale

        xScale.domain(d3.extend(data,function(data){
            return data.year;
        }));

        colorScale.domain(d3.extend(data,function(d){
            return d.variance;
        }));
    })
});