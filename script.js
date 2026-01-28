// Calculate button functioning
function calculateWaterDemand() {
    // getting values which were inputted by user
    let pop = document.getElementById("population").value;
    let temp = document.getElementById("temperature").value;
    let rain = document.getElementById("rainfall").value;
    let season = document.getElementById("season").value;
    let day = document.getElementById("dayType").value;
    let isFestival = document.getElementById("festival").checked;
    let industry = document.getElementById("industrial").value;

    // Start with basic usage as 150 liters per person and divide by 1000 because population is in thousands
    let baseUsage = pop * 0.15;
    let finalDemand = baseUsage;

    // If it's hot (over 30°C), people use 20% more water
   if (temp > 35) {
        finalDemand = finalDemand + (baseUsage * 1.5);
        document.getElementById("weatherEffect").innerText = "High (Heatwave)";
    } 
    else if(temp > 25){
         finalDemand = finalDemand + (baseUsage * 1.2);
        document.getElementById("weatherEffect").innerText = "Moderate";
    }
    else {
        document.getElementById("weatherEffect").innerText = "Normal";
    }

    // If raining people use 10% less water 
    if (rain > 5) {
        finalDemand = finalDemand - (baseUsage * 0.1);
    }

    // Summer season increases the demand for water
    if (season == "summer") {
        finalDemand = finalDemand + (baseUsage * 0.15);
        document.getElementById("seasonEffect").innerText = "Higher (Summer Peak)";
    }
     else if(season == "winter"){
        finalDemand = finalDemand - (baseUsage * 0.15);
        document.getElementById("seasonEffect").innerText = "Normal Winter";
    }
    else {
        document.getElementById("seasonEffect").innerText = "Normal";
    }

    // Festivals or Special Occassions or event add extra demand
    if (isFestival) {
        finalDemand = finalDemand + 10;
    }

    // If factory and Industrial usage 
    let indUsage = (industry / 100) * 50;
    finalDemand = finalDemand + indUsage;

    //Show the Results on the screen
    document.getElementById("resultNumber").innerText = finalDemand.toFixed(2);
    document.getElementById("peopleUse").innerText = baseUsage.toFixed(2);
    document.getElementById("industryUse").innerText = indUsage.toFixed(2);

    // Show the result box and move the bar
    document.getElementById("resultBox").style.display = "block";

    // Add a row to the forecast table
    let table = document.getElementById("forecastTable");
    let row = table.insertRow(-1); // Add to the bottom
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerText = "Selected Date ";
    cell2.innerText = finalDemand.toFixed(2) + " ML";
}
