// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']})

// Done for each chart:
// 1. Set a callback for it.
// 2. Have the callback function for it.
// 3. Be sure all callback functions have different names.
// 4. Be sure all callback functions use different divs to draw in. 
// 5. Add a new div to HTML for each chart.

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(getRenewProdData)
google.charts.setOnLoadCallback(getConsumedBtusData)


// ================================= PRODUCED =================================

function getRenewProdData(){
  
  // Create a new request object
  let request = new XMLHttpRequest()
  
  // URL to contact
  // documentation: https://www.eia.gov/opendata/qb.php?category=404 26&sdid=SEDS.REPRB.FL.A
  let requestUrl = "https://api.eia.gov/series/?api_key=43fd391551b1a57ac02073fb37571ca7&series_id=SEDS.REPRB.FL.A"
  
  // Open a connection
  request.open('GET', requestUrl, true)

  // Callback for when the request completes
  request.onload = function(){
//    console.log("request.response in getRenewProdData: " + request.response)
    let theActualData = JSON.parse(request.response).series[0].data
    drawRenewProd(theActualData)
  }

  // Callback for when there's an error
  request.error = function(err){
    console.log("error is: ", err)
  }
  
  // Send the request to the specified URL
  request.send()
}

function drawRenewProd(freshData) {
//  console.log("freshData in drawRenewProd: ", freshData)
  freshData.unshift(["Year", "Billion BTUs"])

  var data = google.visualization.arrayToDataTable(freshData);

  var options = {
    title: 'Annual renewable energy production in Florida',
    backgroundColor: "lightgoldenrodyellow",
    legend: { position: 'bottom' },
    pointsVisible: true,
    pointSize: 3,
    reverseCategories: true,
  };

  var chart = new google.visualization.LineChart(document.getElementById('renewableBtusChart'));
  chart.draw(data, options);
}


// ================================= CONSUMED =================================

function getConsumedBtusData(){
  
  // Create a new request object
  let request = new XMLHttpRequest()
  
  // URL to contact
  // documentation: https://www.eia.gov/opendata/qb.php?category=40236&sdid=SEDS.TETCB.FL.A
  let requestUrl = "https://api.eia.gov/series/?api_key=43fd391551b1a57ac02073fb37571ca7&series_id=SEDS.TETCB.FL.A"

  // Open a connection
  request.open('GET', requestUrl, true)

  // Callback for when the request completes
  request.onload = function(){
//    console.log("request.response in getConsumedBtusData: " + request.response)
    let theActualData = JSON.parse(request.response).series[0].data
    drawConsumedBtus(theActualData)
  }

  // Callback for when there's an error
  request.error = function(err){
    console.log("error is: ", err)
  }
  
  // Send the request to the specified URL
  request.send()
}

function drawConsumedBtus(freshData) {
//  console.log("freshData in drawConsumedBtus: ", freshData)
  freshData.unshift(["Year", "Billion BTUs"])

  var data = google.visualization.arrayToDataTable(freshData)

  var options = {
    title: 'Annual total electricity consumption in Florida',
    legend: { position: 'bottom' },
    pointsVisible: true,
    pointSize: 3,
    reverseCategories: true,
    backgroundColor: "lightgoldenrodyellow"
  }

  var chart = new google.visualization.LineChart(document.getElementById('consumedBtusChart'));
  chart.draw(data, options)
}
