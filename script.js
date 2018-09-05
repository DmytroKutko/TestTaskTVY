
function CitySearch() {

    var cityName = document.city.name.value;
    cityName = cityName.charAt(0).toUpperCase() + cityName.substr(1).toLowerCase();
    var cityExist = true;

    $.getJSON("cities.json", function (json) {
        var city;

        json.forEach(function (element) {
            if (element.name == cityName) {
                city = element;
                cityExist = false;
                console.log(city);
            }
        });

        if (cityExist){
            alert("This city is not exist")
        }

        var HttpClient = function () {
            this.get = function (aUrl, aCallback) {
                var anHttpRequest = new XMLHttpRequest();
                anHttpRequest.onreadystatechange = function () {
                    if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                        aCallback(anHttpRequest.responseText);
                };
                anHttpRequest.open("GET", aUrl, true);
                anHttpRequest.send(null);
            }
        };

        var lat = city['lat'];
        var lng = city['lng'];

        var theurl = 'https://api.sunrise-sunset.org/json?lat=' + lat + '&lng=' + lng + '&date=today';
        var client = new HttpClient();
        client.get(theurl, function (response) {
            var response1 = JSON.parse(response);

            document.getElementById("cityName").innerHTML = city['name'];
            document.getElementById("sunrise").innerHTML = response1.results.sunrise;
            document.getElementById("sunset").innerHTML = response1.results.sunset;
            document.getElementById("solar_noon").innerHTML = response1.results.solar_noon;
            document.getElementById("day_length").innerHTML = response1.results.day_length;
            document.getElementById("civil_twilight_begin").innerHTML = response1.results.civil_twilight_begin;
            document.getElementById("civil_twilight_end").innerHTML = response1.results.civil_twilight_end;
            document.getElementById("nautical_twilight_begin").innerHTML = response1.results.nautical_twilight_begin;
            document.getElementById("nautical_twilight_end").innerHTML = response1.results.nautical_twilight_end;
            document.getElementById("astronomical_twilight_begin").innerHTML = response1.results.astronomical_twilight_begin;
            document.getElementById("astronomical_twilight_end").innerHTML = response1.results.astronomical_twilight_end;

        });
    });
}

function CurrentLoc() {

    $.getJSON('http://ip-api.com/json', function (data) {

        $.getJSON("cities.json", function (json) {

            var cityName = data['city'];
            var city;

            json.forEach(function (element) {
                if (element.name == cityName) {
                    city = element;
                }
            });

            var HttpClient = function () {
                this.get = function (aUrl, aCallback) {
                    var anHttpRequest = new XMLHttpRequest();
                    anHttpRequest.onreadystatechange = function () {
                        if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                            aCallback(anHttpRequest.responseText);
                    };
                    anHttpRequest.open("GET", aUrl, true);
                    anHttpRequest.send(null);
                }
            };

            var lat = city['lat'];
            var lng = city['lng'];

            var theurl = 'https://api.sunrise-sunset.org/json?lat=' + lat + '&lng=' + lng + '&date=today';
            var client = new HttpClient();
            client.get(theurl, function (response) {
                var response1 = JSON.parse(response);

                document.getElementById("cityName").innerHTML = city['name'];
                document.getElementById("sunrise").innerHTML = response1.results.sunrise;
                document.getElementById("sunset").innerHTML = response1.results.sunset;
                document.getElementById("solar_noon").innerHTML = response1.results.solar_noon;
                document.getElementById("day_length").innerHTML = response1.results.day_length;
                document.getElementById("civil_twilight_begin").innerHTML = response1.results.civil_twilight_begin;
                document.getElementById("civil_twilight_end").innerHTML = response1.results.civil_twilight_end;
                document.getElementById("nautical_twilight_begin").innerHTML = response1.results.nautical_twilight_begin;
                document.getElementById("nautical_twilight_end").innerHTML = response1.results.nautical_twilight_end;
                document.getElementById("astronomical_twilight_begin").innerHTML = response1.results.astronomical_twilight_begin;
                document.getElementById("astronomical_twilight_end").innerHTML = response1.results.astronomical_twilight_end;

            });
        });
    });
};
