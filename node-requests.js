var http = require("http");

var requestOptions = {
  host: "example.com",
  path: "/"
};

function printExampleHTML(callback) {
  var html = "";

  http.get(requestOptions, (response) => {    // HTTP Response Callback

    response.setEncoding("utf8");             // Use UTF-8 encoding

    response.on("data", function(data) {           // On Data Received
      html += data;
    });

    response.on("end", function() {                // On Data Completed
      callback(html);
    });

  });

  }

printExampleHTML(function(exampleHTML) {
  console.log(exampleHTML);
});



// var http = require("http");

// var requestOptions = {
//   host: "example.com",
//   path: "/"
// };

// http.get(requestOptions, (response) => {    // HTTP Response Callback

//   response.setEncoding("utf8");             // Use UTF-8 encoding

//   response.on("data", function(data) {           // On Data Received
//     console.log("Chunk Received. Length:", data.length);
//   });

//   response.on("end", function() {                // On Data Completed
//     console.log("Response stream complete.");
//   });

// });

