var c=0;
let weather = {
    "apiKey": "34a3f3dd57b75b815ad3080499b10207",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=34a3f3dd57b75b815ad3080499b10207")
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
            
    },
    displayWeather: function (data) {
        c=1;
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity, temp_max, temp_min } = data.main;
        const { speed } = data.wind;
        const { sunrise, sunset } = data.sys;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector("#icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".cityname h2").innerHTML = name;
        document.querySelector(".icon-degree span").innerHTML = temp + " °C";
        document.querySelector("#item-1 p").innerHTML = temp_max + " °C";
        document.querySelector("#item-2 p").innerHTML = speed + " km/hr";
        var date = new Date(sunrise * 1000);
        var timestr = date.toLocaleTimeString();
        document.querySelector("#item-3 p").innerHTML = timestr;
        document.querySelector("#item-4 p").innerHTML = temp_min + " °C";
        document.querySelector("#item-5 p").innerHTML = humidity + " %";
        var date = new Date(sunset * 1000);
        var timestr = date.toLocaleTimeString();
        document.querySelector("#item-6 p").innerHTML = timestr;

        // console.log(formatAMPM(new Date));
    }
}





function cityName() {
    const val = document.querySelector('input').value;
    return val;
}
function searchButton() {
    const val = cityName();
    weather.fetchWeather(val);
    // let city=document.querySelector(".cityname h2");
    // city.innerHTML=val;
    if(c==0){
        console.log("error");
    }
    let newDate = new Date();
    let dat = newDate.getDate();
    let month = newDate.getMonth();
    let day = newDate.getDay();
    arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    arr1 = ["January", "february", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let weekDay = arr[day];
    let fin = weekDay + ", " + dat + " " + arr1[month];
    document.querySelector(".cityname p").innerHTML = fin;
}
// function formatAMPM(date) {
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var ampm = hours >= 12 ? 'pm' : 'am';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     minutes = minutes < 10 ? '0'+minutes : minutes;
//     var strTime = hours + ':' + minutes + ' ' + ampm;
//     return strTime;
//   }




