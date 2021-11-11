$(document).ready(
    function() {
        $("#submitforcast").click(
            function() {
                return getForecast();
            });
    });

function getForecast() {
    var city = $("#city").val();
    // var API = 'e4f8113a729c6dcdee7d5753ab3f98a4';
    if (city != " ") {
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&appid=c10bb3bd22f90d636baa008b1529ee25',
            type: 'GET',
            dataType: 'jsonp',
            success: function(data) {
                var table = ' ';
                var header = '<h2 style="font - weight: bold;font - size: 30 px;margin - top: 20px;">Weather Forecast For ' + data.city.name + ',' + data.city.country + '</h2>'
                for (var i = 0; i < data.list.length; i++) {
                    table += "<tr>";

                    table += "<td><img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'></td>";
                    table += "<td>" + data.list[i].weather[0].main + "</td>";
                    table += "<td>" + data.list[i].weather[0].description + "</td>";

                    table += "<td>" + data.list[i].temp.min + "&deg;C</td>";
                    table += "<td>" + data.list[i].temp.max + "&deg;C</td>";
                    table += "<td>" + data.list[i].pressure + "hpa</td>";
                    table += "<td>" + data.list[i].humidity + "%</td>";
                    table += "<td>" + data.list[i].speed + "m/s</td>";
                    table += "<td>" + data.list[i].deg + "&deg;</td>";
                }
                $("#forcastweather").html(table);
                $("#header").html(header);
            }
        });

    } else {
        alert('plz enter your city')
    }
}