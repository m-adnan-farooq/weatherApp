async function fetchData(city) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e619f5b97d043861915beea27f611710&units=metric`);
    const data = await response.json();

    const result = document.getElementById('result')

    if (data) {
        const tempData = data.main.temp;
        const temp = document.createElement("p");
        const tempNode = document.createTextNode(`The current Temperature in ${city} City is: ${tempData}`);
        temp.classList.add('temp')
        temp.appendChild(tempNode);
        result.innerText = '';
        result.appendChild(temp);

        const minTempData = data.main.temp_min
        const minTemp = document.createElement("p");
        const minTempNode = document.createTextNode(`The minimum Temperature in ${city} City is: ${minTempData}`);
        minTemp.classList.add('temp')
        minTemp.appendChild(minTempNode);
        result.appendChild(minTemp);

        const maxTempData = data.main.temp_max
        const maxTemp = document.createElement("p");
        const maxTempNode = document.createTextNode(`The maximum Temperature in ${city} City is: ${maxTempData}`);
        maxTemp.classList.add('temp')
        maxTemp.appendChild(maxTempNode);
        result.appendChild(maxTemp);

        const conditionData = data.weather[0].main
        const condition = document.createElement("p");
        const conditionNode = document.createTextNode(`The weather condition in ${city} City is: ${conditionData}`);
        condition.classList.add('temp')
        condition.appendChild(conditionNode);
        result.appendChild(condition);

        const action = document.getElementById('action');

        if (tempData < - 10 || minTempData < -10) {
            action.innerText = "Don't go outside, it's too cold";
        }
        else if (tempData > 35 || maxTempData > 35) {
            action.innerText = "Dont go outside its too hot";
        }
        else if ((tempData >= -10 && tempData <= 5) || (minTempData >= -10 && minTempData <= 5)) {
            action.innerText = "Carry coat and be care full";
        }
        else if ((tempData > 5 && tempData <= 20) || (minTempData > 5 && minTempData <= 20)) {
            action.innerText = "Carry jacket with you";
        }
        else if (tempData > 20 && tempData <= 35) {
            action.innerText = "Dont carry jacket";
        }
    }
};

function getCity() {
    var city = document.getElementById("city").value;
    fetchData(city)
};