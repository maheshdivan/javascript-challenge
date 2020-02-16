// from data.js
var tableData = data;

// YOUR CODE HERE!


var date = []
var city = []
var state = []
var country = []
var shape = []

select = document.getElementById( 'date' );
tableData.forEach(function(table){
    if (date.indexOf(table["datetime"]) == -1){
        select.add( new Option( table["datetime"] ))
        date.push(table["datetime"])
    }
}) 

select = document.getElementById( 'city' );
tableData.forEach(function(table){
    if (city.indexOf(table["city"]) == -1) {
        select.add( new Option( table["city"] ))
        city.push(table["city"])
    }
}) 

select = document.getElementById( 'state' );
tableData.forEach(function(table){
    if (state.indexOf(table["state"]) == -1) {
        select.add( new Option( table["state"] ))
        state.push(table["state"])
    }
}) 

select = document.getElementById( 'country' );
tableData.forEach(function(table){
    if (country.indexOf(table["country"]) ==-1 ){
        select.add( new Option( table["country"] ))
        country.push(table["country"])
    }
}) 

select = document.getElementById( 'shape' );
tableData.forEach(function(table){
    if (shape.indexOf(table["shape"]) == -1) {
        select.add( new Option( table["shape"] ))
        shape.push(table["shape"])
    }
}) 

var selectButton = d3.select("#filter-btn")

selectButton.on("click", function(){
    
    valueSelect = []
    keySelect = []
    var noData = " "
    var data = " "
    console.log(noData)

    var inputValueDate=d3.select("#date").node().value
    console.log(inputValueDate)

    var inputValueCity=d3.select("#city").property("value")
    console.log(inputValueCity)

    var inputValueState=d3.select("#state").property("value")
    console.log(inputValueState) 
    
    var inputValueCountry=d3.select("#country").property("value")
    console.log(inputValueCountry)
    
    var inputValueShape=d3.select("#shape").property("value")
    console.log(inputValueShape)    

   var andLoop = false

    var filterData = tableData.filter(function(table){
        console.log(noData)

        if (table.datetime === inputValueDate && table.city === inputValueCity && table.state === inputValueState && table.country === inputValueCountry && table.shape === inputValueShape ) {
                console.log("Inside and")
                andLoop=true
                data = "yes"
                noData = " "
                return table
        } 
        else {
               noData = "No Data Macthing selection Criteria, please select other combination of Date, City, State,County and Shape"
        }
        
   })

   console.log(filterData)
   console.log(data)

   if (data === "yes"){
       console.log("Actual")
        var tbody = d3.select("tbody")
        tbody.html("")
        filterData.forEach((data) => {
             var row = tbody.append("tr");
             Object.entries(data).forEach(([key,value]) => {
             row.append("td").text(value);

             })
         })     

    }
    console.log(noData)
    if(data != "yes"){
        console.log()
        var tbody = d3.select("tbody")
        tbody.html(noData)
    }   

})
