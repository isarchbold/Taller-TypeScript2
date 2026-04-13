import { series } from "./data.js";
import { Serie } from "./Serie.js";

const seriesTableBody: HTMLElement = document.getElementById("series-body")!;
const averageSeasonsElement: HTMLElement = document.getElementById("average-seasons")!;
const seriesDetailElement: HTMLElement = document.getElementById("series-detail")!;

renderSeries(series);
showAverageSeasons(series);
showSeriesDetail(series[0]!); 

function renderSeries(seriesList: Serie[]): void {
    seriesList.forEach((serie: Serie) => {
        const row = document.createElement("tr");
        
        row.innerHTML = ` <td>${serie.id}</td>
        <td><a href="#" class="serie-link">${serie.name}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>`;
        
        row.addEventListener("click", () => showSeriesDetail(serie));
        seriesTableBody.appendChild(row);
    });
}

function showAverageSeasons(seriesList: Serie[]): void {
    let totalSeasons: number = 0;
    seriesList.forEach((serie: Serie) => {
        totalSeasons += serie.seasons;});
    const average: number = totalSeasons / seriesList.length;
    averageSeasonsElement.innerHTML = `Seasons average: ${average}`;
}

function showSeriesDetail(serie: Serie): void {
    seriesDetailElement.innerHTML = `
        <div class="card">
            <img class="card-img-top" src="${serie.image}" alt="${serie.name}">
            <div class="card-body">
                <h5 class="card-title">${serie.name}</h5>
                <p class="card-text">${serie.description}</p>
                <a href="${serie.link}" target="_blank">${serie.link}</a>
            </div>
        </div>
    `;
}