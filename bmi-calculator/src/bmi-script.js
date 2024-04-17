
let bmiGroup = document.getElementById("bmi-group");

const calculateBmi = () => {
    let heightInput = document.getElementById("height").value;
    let weightInput = document.getElementById("weight").value;

    heightInput /= 100;

    let bmi = (weightInput / (heightInput * heightInput));
    console.log(bmi);
    
    if (bmi < 18.5) {
        bmiGroup.textContent = "Group: body weight deficit";
        bmiGroup.style.color = "#00a8ff";
    }
    else if (bmi > 18.5 && bmi < 24) {
        bmiGroup.textContent = "Group: norm";
        bmiGroup.style.color = "#52ff00";
    }
    else if (bmi > 24 && bmi < 30) {
        bmiGroup.textContent = "Group: weight over";
        bmiGroup.style.color = "#a8ff00";
    }
    else if (bmi > 30 && bmi < 35) {
        bmiGroup.textContent = "Group: obesity first degree";
        bmiGroup.style.color = "#ffc000";
    }
    else if (bmi > 35 && bmi < 40) {
        bmiGroup.textContent = "Group: obesity second degree";
        bmiGroup.style.color = "#ff7300";
    }
    else if (bmi > 40) {
        bmiGroup.textContent = "Group: obesity third degree";
        bmiGroup.style.color = "#ff1d00";
    }
    else {
        console.log("invalid details");
        bmiGroup.textContent = "invalid details";
    }
};
