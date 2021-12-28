async function fetchData(city) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e619f5b97d043861915beea27f611710&units=metric`);
    const data = await response.json();

    const result = document.getElementById('result')

    if (data) {
        const temp = document.createElement("p");
        const tempNode = document.createTextNode(`The current Temperature in ${city} City is: ${data.main.temp}`);
        temp.classList.add('temp')
        temp.appendChild(tempNode);
        result.appendChild(temp);

        const minTemp = document.createElement("p");
        const minTempNode = document.createTextNode(`The minimum Temperature in ${city} City is: ${data.main.temp_min}`);
        minTemp.classList.add('temp')
        minTemp.appendChild(minTempNode);
        result.appendChild(minTemp);

        const maxTemp = document.createElement("p");
        const maxTempNode = document.createTextNode(`The maximum Temperature in ${city} City is: ${data.main.temp_max}`);
        maxTemp.classList.add('temp')
        maxTemp.appendChild(maxTempNode);
        result.appendChild(maxTemp);

        const condition = document.createElement("p");
        const conditionNode = document.createTextNode(`The weather condition in ${city} City is: ${data.weather[0].main}`);
        condition.classList.add('temp')
        condition.appendChild(conditionNode);
        result.appendChild(condition);

        const action = document.getElementById('action');
        const actionTodo = document.createElement("h4");
        var actionText;
        const actionNode = document.createTextNode(actionText);
        actionTodo.append(actionNode);
        action.appendChild(actionTodo)
        if (temp < -10 || minTemp < -10) {
            actionText = "Don't go outside, it's too cold"
        }
        else if (temp) { }
    }
};

function getCity() {
    var city = document.getElementById("city").value;
    fetchData(city)
};