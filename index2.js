let allStations= [
  "Adarsh Nagar",
  "AIIMS",
  "Akshardham",
  "Anand Vihar",
  "Arjan Garh",
  "Ashok Park Main",
  "Ashram",
  "Azadpur",
  "Bahadurgarh City",
  "Barakhamba Road",
  "Bata Chowk",
  "Bhikaji Cama Place",
  "Botanical Garden",
  "Brigadier Hoshiyar Singh",
  "Central Secretariat",
  "Chandni Chowk",
  "Chawri Bazar",
  "Chhatarpur",
  "Chirag Delhi",
  "Civil Lines",
  "Dabri Mor - Janakpuri South",
  "Delhi Cantt",
  "Delhi Gate",
  "Dilshad Garden",
  "Durgabai Deshmukh South Campus",
  "Dwarka",
  "Dwarka Mor",
  "Dwarka Sector 10",
  "Dwarka Sector 11",
  "Dwarka Sector 12",
  "Dwarka Sector 13",
  "Dwarka Sector 14",
  "Dwarka Sector 21",
  "Dwarka Sector 8",
  "Dwarka Sector 9",
  "East Azad Nagar",
  "ESI Hospital",
  "Escorts Mujesar",
  "Ghitorni",
  "Golf Course",
  "Gokulpuri",
  "Govind Puri",
  "Green Park",
  "Greater Kailash",
  "Ghevra",
  "GTB Nagar",
  "Guru Dronacharya",
  "Haiderpur Badli Mor",
  "Harkesh Nagar Okhla",
  "Hauz Khas",
  "Hazrat Nizamuddin",
  "Hindon River",
  "HUDA City Centre",
  "IFFCO Chowk",
  "INA",
  "InderLok",
  "Indraprastha",
  "ITO",
  "IIT Delhi",
  "Jamia Millia Islamia",
  "Janakpuri East",
  "Janakpuri West",
  "Janpath",
  "Jangpura",
  "Jasola Apollo",
  "Jasola Vihar Shaheen Bagh",
  "Jaffrabad",
  "Jama Masjid",
  "Jhandewalan",
  "Johri Enclave",
  "Jor Bagh",
  "Kailash Colony",
  "Kalkaji Mandir",
  "Kanhaiya Nagar",
  "Karol Bagh",
  "Karkarduma",
  "Karkarduma Court",
  "Kashmere Gate",
  "Keshav Puram",
  "Kirti Nagar",
  "Krishna Nagar",
  "Lajpat Nagar",
  "Lal Qila",
  "Laxmi Nagar",
  "Lok Kalyan Marg",
  "Madipur",
  "Majlis Park",
  "Major Mohit Sharma Rajendra Nagar",
  "Malviya Nagar",
  "Mandi House",
  "Mansarovar Park",
  "Mayapuri",
  "Mayur Vihar Extension",
  "Mayur Vihar Phase-1",
  "Mayur Vihar Pocket-1",
  "Mewla Maharajpur",
  "Model Town",
  "Mohan Estate",
  "Mohan Nagar",
  "Moolchand",
  "Motinagar",
  "Munirka",
  "Mundka",
  "Mundka Industrial Area",
  "Nangloi",
  "Nangloi Railway Station",
  "Naraina Vihar",
  "Netaji Subhash Place",
  "Nehru Enclave",
  "Nehru Place",
  "New Ashok Nagar",
  "New Delhi",
  "Noida City Centre",
  "Noida Electronic City",
  "Noida Sector 15",
  "Noida Sector 16",
  "Noida Sector 18",
  "Noida Sector 34",
  "Noida Sector 52",
  "Noida Sector 59",
  "Noida Sector 61",
  "Noida Sector 62",
  "Nawada",
  "NHPC Chowk",
  "Okhla Bird Sanctuary",
  "Okhla NSIC",
  "Okhla Vihar",
  "Old Faridabad",
  "Palam",
  "Pandit Shree Ram Sharma",
  "Paschim Vihar East",
  "Paschim Vihar West",
  "Patel Chowk",
  "Patel Nagar",
  "Peeragarhi",
  "Pitam Pura",
  "Pratap Nagar",
  "Preet Vihar",
  "Pul Bangash",
  "Punjabi Bagh",
  "Punjabi Bagh West",
  "Qutub Minar",
  "Raj Bagh",
  "Rajdhani Park",
  "Rajendra Place",
  "Rajiv Chowk",
  "Rajouri Garden",
  "Ramesh Nagar",
  "Rithala",
  "RK Ashram Marg",
  "R.K. Puram",
  "Rohini East",
  "Rohini Sector 18, 19",
  "Rohini West",
  "Sadar Bazar Cantonment",
  "Samaypur Badli",
  "Sant Surdas (Sihi)",
  "Sarita Vihar",
  "Sarojini Nagar",
  "Seelampur",
  "Sector 28",
  "Shaheed Nagar",
  "Shaheed Sthal (New Bus Adda)",
  "Shadipur",
  "Shahdara",
  "Shalimar Bagh",
  "Shankar Vihar",
  "Shastri Nagar",
  "Shastri Park",
  "Shiv Vihar",
  "Shivaji Park",
  "Shyam Park",
  "Sikandarpur",
  "Sir Vishweshwaraiah Moti Bagh",
  "South Extension",
  "Subhash Nagar",
  "Sukhdev Vihar",
  "Sultanpur",
  "Supreme Court",
  "Tagore Garden",
  "Terminal 1 IGI Airport",
  "Tilak Nagar",
  "Tikri Border",
  "Tikri Kalan",
  "Tis Hazari",
  "Trilokpuri Sanjay Lake",
  "Tughlakabad",
  "Udyog Bhawan",
  "Udyog Nagar",
  "Uttam Nagar East",
  "Uttam Nagar West",
  "Vaishali",
  "Vasant Vihar",
  "Vidhan Sabha",
  "Vinobapuri",
  "Vinod Nagar East",
  "Vinod Nagar West",
  "Vishwa Vidyalaya",
  "Welcome",
  "Yamuna Bank"
];

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