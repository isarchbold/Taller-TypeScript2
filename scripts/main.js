import { series } from "./data.js";
import { Serie } from "./Serie.js";
var seriesTableBody = document.getElementById("series-body");
var averageSeasonsElement = document.getElementById("average-seasons");
var seriesDetailElement = document.getElementById("series-detail");
renderSeries(series);
showAverageSeasons(series);
showSeriesDetail(series[0]);
function renderSeries(seriesList) {
    seriesList.forEach(function (serie) {
        var row = document.createElement("tr");
        row.innerHTML = " <td>".concat(serie.id, "</td>\n        <td><a href=\"#\" class=\"serie-link\">").concat(serie.name, "</a></td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>");
        row.addEventListener("click", function () { return showSeriesDetail(serie); });
        seriesTableBody.appendChild(row);
    });
}
function showAverageSeasons(seriesList) {
    var totalSeasons = 0;
    seriesList.forEach(function (serie) {
        totalSeasons += serie.seasons;
    });
    var average = totalSeasons / seriesList.length;
    averageSeasonsElement.innerHTML = "Seasons average: ".concat(average);
}
function showSeriesDetail(serie) {
    seriesDetailElement.innerHTML = "\n        <div class=\"card\">\n            <img class=\"card-img-top\" src=\"".concat(serie.image, "\" alt=\"").concat(serie.name, "\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">").concat(serie.name, "</h5>\n                <p class=\"card-text\">").concat(serie.description, "</p>\n                <a href=\"").concat(serie.link, "\" target=\"_blank\">").concat(serie.link, "</a>\n            </div>\n        </div>\n    ");
}
//# sourceMappingURL=main.js.map