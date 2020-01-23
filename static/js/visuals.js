
// JSON test file '../../static/test-data/migrant_incidents_date_fix.json'
var migrant_API_link = "https://migrant-crossing-app.herokuapp.com/api/v1/migrant_incidents"

d3.json(migrant_API_link, function(incident_data) {


  var port_coord_organizer = []
  
  
  for (var nearest_port_index = 0; nearest_port_index < incident_data.length; nearest_port_index++) {

    var nearest_port_record = incident_data[nearest_port_index]
    
    var nearest_name = nearest_port_record.nearest_port_name
    var nearest_port_lat = nearest_port_record.nearest_port_lat
    var nearest_port_lng = nearest_port_record.nearest_port_lng
  

    if (port_coord_organizer.includes(nearest_name) === false) {
      port_coord_organizer.push(nearest_name)
      port_coord_organizer.push([nearest_port_lat, nearest_port_lng])
    } 
    
  
  }
  

  // Populate well with port data
  var select_Port_Values = d3
  .selectAll("#portSelection")
  .selectAll(`port`)
  .data(
    d3.map(incident_data, function(d){
      return d.nearest_port_name
    }).keys()
  )


  // FILTER DATA TO DISTINCT PORT VALUES
  select_Port_Values
  .enter()
  .append('option')
  .classed(`port`, true)
  .attr('value', function(d) {
      return d;
    })
  .text(function(d) {
      return `${d}`;
  })
  .exit()
  .remove()  

  // Select all dropdown items and fire updatePlotly on change
  d3.selectAll("#portSelection").on("change", update);

  function update() {
    var portMenu_selection = d3.select("#portSelection");
    var selected_Port = portMenu_selection.property("value");
    console.log(`Menu: Selection made for Port: ${selected_Port}`)
    
    function indexer (array) {
      return port_coord_organizer.indexOf(array)
    }

    var port_index_val = indexer(selected_Port)

    // data[port_index_value]
    var selected_port_coords = port_coord_organizer[port_index_val+1]
    console.log("coords for port:", selected_port_coords)

  
  //   // Create Migrant Graph
  //   var migrant_graph_setup = {
  //     x: VALUE NEEDED,
  //     y: VALUE NEEDED,
  //     text: VALUE NEEDED,
  //     type: 'bar',
  //     orientation: 'h'
  //   }

  //   var migrant_graph_data = [migrant_graph_setup]

  //   var migrant_graph_layout = {
  //     title: "TITLE NEEDED",
  //     barmode: "grouped"
  //   }


  // Plotly.newPlot('migrant-graph-tag', migrant_graph_data, migrant_graph_layout);
    
    // dashboard_map.panTo(new L.LatLng(selected_port_coords[0], selected_port_coords[1]));
    
  }
 
  
})

d3.json(migrant_API_link, function(incident_data) {

  // This function sends the incident data to dashboard-leaflet.js for plotting on the map
  sendIncidentsToLeaflet(incident_data)

})

// JSON test file = '../../static/test-data/summary_crossings.json'
var border_API_link = "https://migrant-crossing-app.herokuapp.com/api/v1/summary_crossings"

d3.json(border_API_link, function(port_data) {


  

  //     // Create Border Graph
  //     var border_graph_setup = {
  //       x: VALUE NEEDED,
  //       y: VALUE NEEDED,
  //       text: VALUE NEEDED,
  //       type: 'bar',
  //       orientation: 'h'
  //     }
  
  //     var border_graph_data = [border_graph_setup]
  
  //     var border_graph_layout = {
  //       title: "TITLE NEEDED",
  //       barmode: "grouped"
  //     }
  
  
  //   Plotly.newPlot('border-graph-tag', border_graph_data, border_graph_layout);
  
  
  // This function sends the border data to dashboard-leaflet.js for plotting on the map
  sendBordersToLeaflet(port_data)
})




