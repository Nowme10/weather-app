let leads = "";
let inputEl = document.getElementById("input-el");
// let ulEl = document.getElementById("ulel");




 async function save(){
   
   
   await fetchWeatherData(inputEl.value)
   inputEl.value = ""
//    renderLeads()

}

// function renderLeads() {
//     let listItems = ""
//     for (let i = 0; i < leads.length; i++) {
//         listItems += `
//             <li>
//                 <a target='_blank' href='${leads[i]}'>
//                     ${leads[i]}
//                 </a>
//             </li>
//         `
//     };
//     ulEl.innerHTML = listItems  
// };


async function fetchWeatherData(city) {
    const apiKey = '40708604f674ef12a95b9c5c0ecee725'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

        // Update the UI with fetched data
        document.getElementById('location').textContent = `${"Location :"}  ${data?.name}`;
        document.getElementById('temperature').textContent = ` ${"Feel-like :"}  ${data?.main.feels_like}, ${"Max-Temp :"} ${data?.main.temp_max }`;
        document.getElementById('description').textContent = `${"Weather :"}  ${data?.weather[0].description}`;
        document.getElementById('wind').textContent = `${"Windspeed :"} ${data?.wind.speed}`; 
        document.getElementById('coord').textContent = ` ${"Longitude :"}${data?.coord.lon},  ${" Latitude :"}${data?.coord.lat}`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Event listener for the "Fetch Weather" button
// document.getElementById('fetchWeather').addEventListener('click', fetchWeatherData);
