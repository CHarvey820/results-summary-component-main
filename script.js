document.addEventListener("DOMContentLoaded", getData);

const scoreTotal = document.querySelector(".scoreTotal");

let average = 0;

async function getData() {
  const response = await fetch("./data.json");
  const results = await response.json();
  parseResults(results);
}

function parseResults(results) {
  getAverage(results);

  results.forEach((result) => {
    let strToUpdate = (result.category.toLowerCase());
    document.querySelector(`.${strToUpdate}Score`).innerHTML += `
    ${result.score} <span class="scoreGray"> / 100</span>
    `;

    document.querySelector(`.${strToUpdate}IconTitle`).innerHTML += `
    <img src=${result.icon} alt="icon for ${result.category}" />${result.category}
    `;
  });
}

function getAverage(results) {
  let accum = 0;

  results.forEach((result) => {
    accum += Number(result.score);
  });

  average = Math.round(accum / 4);
  scoreTotal.innerHTML += `
  <h1>${average}</h1>
  <span>of 100</span>
  `;
}
