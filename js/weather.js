function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const key = "b13724e36670a210157a8a9ed27699fa";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const city = document.querySelector("#weather h2:first-child");
        const cityWeather = document.querySelector("#weather h2:nth-child(2)");
        const cityTemp = document.querySelector("#weather h2:last-child");
        city.innerText = data.name;
        cityWeather.innerText = data.weather[0].main;
        cityTemp.innerText = `${Math.floor(data.main["temp"])}°C`;
    });
}
function onGeoError(){
    alert("날씨 정보를 불러오는데 실패하였습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);