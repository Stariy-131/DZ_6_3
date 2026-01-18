const area = document.querySelectorAll(".setting textarea");
const ageItem = document.querySelector("#years-age-item");
const weightItem = document.querySelector("#weight-item");
const heightItem = document.querySelector("#height-item");
const btn = document.querySelector("#compilat-btn");
const infoAboutCompilat = document.querySelector(".info");
const targetValue = document.querySelectorAll(".target");

const info = infoAboutCompilat;

// area.addEventListener("input", () => {
//     area.value = area.value.replace(/[^\d]/g, "");
// });

btn.onclick = () => {
    const age = Number(ageItem.value);
    const weight = Number(weightItem.value);
    const height = Number(heightItem.value);
    
    divText.innerHTML = "";
    
    if (!divText.parentElement) {
        info.appendChild(divText);
    }
    
    const bmiResult = result(age, weight, height);
    
    if (age >= 18) {
        divText.innerHTML = `Your BMI = ${bmiResult.toFixed(2)}. <br> <br> 
            Age norm: <br>
            18–25 years old: Normal 19,5–22,9. <br>
            25–34 years old: Optimal 20–25. <br>
            35–44 years old: 21–26. <br>
            45–54 years old: 22–27. <br>
            55–64 years old: 23–28. <br>
            65 years old  and older: 24–29.`;
        console.log("Your IMB", "=", bmiResult);

    } 
    if (age < 18) {
        divText.innerHTML = `Your BMI = ${bmiResult.toFixed(2)}. <br> <br> 
            Excuse me, but about this <br> i don't have a true informatio...`;
        console.log("Your IMB", "=", bmiResult);

    } 
}  

function result(age, weight, height) {
    if (Number.isNaN(age) || Number.isNaN(weight) || Number.isNaN(height)) {
        createRemove();
        return null;
    }
    const heightX2 = height * height;
    const convert = heightX2 / 100;
    const trall = weight / convert;
    const summ = trall * 100;
    return summ;
}

function createRemove() {
    targetValue.forEach(target => {
        target.innerHTML = "";
    });
    
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "Please send a number";
    
    targetValue.forEach(target => {
        const errorMsg = paragraph.cloneNode(true);
        target.appendChild(errorMsg);
        target.innerHTML = "Please send a number"
    });

    return paragraph;
}

function createBlockParagraph() {
    const divText = document.createElement("div");
    divText.className = "information";

    return divText;    
}

const divText = createBlockParagraph();

// function addText() {
//     const paragraph = document.createElement("p")
//     divText.append(paragraph);
//     paragraph.innerHTML = "";
//     paragraph.style.color = "red";
// }



