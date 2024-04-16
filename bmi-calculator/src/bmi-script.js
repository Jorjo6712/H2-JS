
let bmiGroup = document.getElementById("bmi-group");

const calculateBmi = () => {
    let heightInput = document.getElementById("height").value;
    let weightInput = document.getElementById("weight").value;
    
    console.log(heightInput);
    console.log(weightInput);

    heightInput /= 100;

    let bmi = (weightInput / (heightInput * heightInput));
    console.log(bmi);
    
    if (bmi < 18.5) {
        bmiGroup.textContent = "Group: body weight deficit";
    }
    else if (bmi > 18.5 && bmi < 24) {
        bmiGroup.textContent = "Group: norm";
    }
    else if (bmi > 24 && bmi < 30) {
        bmiGroup.textContent = "Group: weight over";
    }
    else if (bmi > 30 && bmi < 35) {
        bmiGroup.textContent = "Group: obesity first degree";
    }
    else if (bmi > 35 && bmi < 40) {
        bmiGroup.textContent = "Group: obesity second degree";
    }
    else if (bmi > 40) {
        bmiGroup.textContent = "Group: obesity third degree";
    }
    else {
        console.log("invalid details");
        bmiGroup.textContent = "invalid details";
    }
};
