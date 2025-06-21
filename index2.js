function allTheStations(){
    let arr = [];
let metroKeys1 = Object.keys(metro);

for (let i = 0; i < metroKeys1.length; i++) {
    if (metroKeys1[i].endsWith("Interchange")) continue;

    let stations = metro[metroKeys1[i]];
    for (let j = 0; j < stations.length; j++) {
        if (!arr.includes(stations[j])) {
            arr.push(stations[j]);
        }
    }
}
arr.sort();
return arr;
}

let allStations= allTheStations();

console.log("All Stations: ", allStations);


let selects = document.getElementsByClassName("stationSelection");
for (let s = 0; s < selects.length; s++) {
    for (let i = 0; i < allStations.length; i++) {
        let option = document.createElement("option");
        option.value = allStations[i];
        option.text = allStations[i];
        selects[s].appendChild(option);
    }
}


function printRoute(initialStart,finalDestination){
    let route = directionedRoute(initialStart, finalDestination);
    let routeDiv = document.querySelector(".route");
    let line = "REDLINE";
    let lineText;
    let interchange =0;
    let Html = ``;
    let lastLine = null;
    for(let i = 0; i < route.length; i++) {
        if(route[i].startsWith("Start")|| route[i].startsWith("Interchange")) {
            interchange++;
            pseudoLine = route[i].split(" ");
            line = pseudoLine[1];
            let currentLine = pseudoLine[1];
            let towards=``;
             if (currentLine === lastLine) continue; // skip duplicate
            lastLine = currentLine;
            for (let j = 3; j < pseudoLine.length; j++) {
              towards += `${pseudoLine[j]} `;
              }
            if (line === "REDLINE"){
              lineText = "Red Line";
            }else if (line === "BLUELINEMAIN"){
              lineText = "Main Blue Line";
            
            }else if (line === "BLUELINEBRANCH"){
              lineText = "Branched Blue Line";
            }
            else if (line === "YELLOWLINE"){
              lineText = "Yellow Line";
            }
            else if (line === "PINKLINE"){
              lineText = "Pink Line";
            }
            else if (line === "MAGENTALINE"){
              lineText = "Magenta Line";
            }
            else if (line === "VIOLETLINE"){
              lineText = "Violet Line";
            }else if(line === "GREENLINE"){
              lineText = "Green Line";
            }
            Html +=`<div class="InterChange stationContainer">
                <div class="stationDot">
                    <i class="ri-walk-line"></i>
                </div>
                <div class="routeStationName">
                    <h1>${pseudoLine[0]} to ${lineText} <p>towards ${towards}</p> </h1>
                    </div>
            </div>`
        }
        else if(i== route.length-1){
          Html += `<div class="last ${line} stationContainer">
                <div class="stationDot">
                    <div class="outerRing">
                        <div class="innerRing"></div>
                    </div>
                </div>
                <div class="routeStationName">
                    <h1>${route[i]}</h1>
                </div>
            </div>`
        }
        else{
            Html += `<div class="${line} stationContainer">
                <div class="stationDot">
                    <div class="outerRing">
                        <div class="innerRing"></div>
                    </div>
                </div>
                <div class="routeStationName">
                    <h1>${route[i]}</h1>
                </div>
            </div>`;
        }
    }
    routeDiv.innerHTML = Html;
    document.querySelector(".numberOfStation .stationName").innerText = `${route.length - interchange}`;
    document.querySelector(".toStation .stationName").innerText = `${finalDestination}`;
    document.querySelector(".fromStation .stationName").innerText = `${initialStart}`;
}
 function searchButtonCall() {
  if (document.querySelector('#start').value !== document.querySelector('#end').value) {
    printRoute(document.querySelector('#start').value, document.querySelector('#end').value);
    document.querySelector('.results').style.display = 'flex';
  } else {
    const warning = document.querySelector('.warning');
    warning.classList.remove('hideError'); 
    setTimeout(() => {
      warning.classList.add('hideError'); 
    }, 3000);
  }
}

function showMenu(){
  const menu = document.querySelector('.hamBurgerMenu');
  if(menu.classList.contains('hideMenu')){
    menu.classList.remove('hideMenu');
    menu.classList.add('showMenu');
    document.body.classList.add('no-scroll');
  }else{
    menu.classList.remove('showMenu');
    menu.classList.add('hideMenu');
    document.body.classList.remove('no-scroll');
  }
}

// const menu = document.querySelector('.hamBurgerMenu');
// menu.style.height = `${document.body.scrollHeight}px`;
