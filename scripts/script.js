const commonLightBtn = document.getElementById('commonLightsBtn');
const lightsBox = document.querySelector('.lightsBox')
const colors = ["red", "yellow", "green", "blue", "orange", "purple"];

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
    bulbs.forEach((bulb, n) => {
        const chosenColor = colors[n % colors.length];
        bulb.style.backgroundColor = chosenColor;
        bulb.style.color = chosenColor;
        bulb.style.gap = 
        bulb.classList.add('on');        
    });
    
});


createLights();