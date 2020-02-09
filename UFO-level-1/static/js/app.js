// from data.js
var tableData = data;

// YOUR CODE HERE!

var selectButton = d3.select("#filter-btn")

selectButton.on("click", function(){
    var inputElement = d3.select(".form-control")

    var inputValue = inputElement.property("value")

    console.log(inputValue)

    var filterData = tableData.filter(table => table.datetime === inputValue )

    console.log(filterData[0])

    var datetime = filterData.map(table => table.datetime ) 
    var city = filterData.map(table => table.city )
    var state = filterData.map(table => table.state )
    var country = filterData.map(table => table.country )
    var shape = filterData.map(table => table.shape )
    var durationMinutes = filterData.map(table => table.durationMinutes )
    var comments = filterData.map(table => table.comments )

    
    var tbody = d3.select("tbody")
    tbody.html("")
    tLength = filterData.length
    console.log(tLength)

    filterData.forEach((data) => {
        var row = tbody.append("tr");
        Object.entries(data).forEach(([key,value]) => {
        console.log("---------------")
        console.log(value)
        row.append("td").text(value);

        })
    })
    










})

