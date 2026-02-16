const commonLightBtn = document.getElementById('commonLightsBtn');
const lightsBox = document.querySelector('.lightsBox');
const fastLightBtn=document.getElementById('fastLightMovementBtn');
const colors = ["red", "yellow", "green", "blue", "orange", "purple"];

let fastLightTimer = null;
let lightsAreOn = false

function createLights() {    
    for (let i = 0; i < 16; i++) {
        const bulb = document.createElement("div");
        bulb.classList.add("bulb"); 
        bulb.dataset.index = i;
        lightsBox.append(bulb)
    }
}




commonLightBtn.addEventListener("click", () => {
    const bulbs = document.querySelectorAll('.bulb');
    if (!lightsAreOn) {
        bulbs.forEach((bulb, n) => {
        const chosenColor = colors[n % colors.length];
        bulb.style.backgroundColor = chosenColor;
        bulb.style.color = chosenColor;
        bulb.classList.add('on');          
        });
        lightsAreOn = true;
    }
    else if (lightsAreOn) {
        bulbs.forEach((bulb, n) => {
            bulb.style.backgroundColor = "gray";
            bulb.style.color= "gray";
            bulb.classList.remove('on');
        })        
        lightsAreOn= false;
        clearInterval(fastLightTimer);
    } 
});

fastLightBtn.addEventListener("click", () => {
    const bulbs = document.querySelectorAll('.bulb');
    if (lightsAreOn) {
        bulbs.forEach((bulb, n) => {
        const chosenColor = colors[n % colors.length];
        bulb.style.backgroundColor = chosenColor;
        bulb.style.color = chosenColor;
        bulb.classList.remove('on');
        
        });
        if (fastLightTimer) {
        clearInterval(fastLightTimer);
        }     
        fastLightTimer = setInterval(() => {
            const bulbs = document.querySelectorAll('.bulb');
            bulbs.forEach((bulb, n) => {
                bulb.classList.toggle('on');
            });
        }, 300);
    }
    else {
        console.log('')
    }
    
})

createLights();