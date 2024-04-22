document.addEventListener("DOMContentLoaded",getData);
let jsonData = [];

async function getData() {
    const response = await fetch("./data.json");
    const results = await response.json();
    parseResults(results);
  }


function parseResults(results){
    jsonData = results;
    const testData = jsonData[0].category;
    console.log(testData);
}


