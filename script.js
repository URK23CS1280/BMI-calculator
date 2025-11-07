document.getElementById("calculateBtn").addEventListener("click", function () {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const resultBox = document.getElementById("resultBox");
  const bmiValue = document.getElementById("bmiValue");
  const bmiStatus = document.getElementById("bmiStatus");

  // Input validation
  if (!height || !weight) {
    alert("Please enter both height and weight!");
    return;
  }
  if (height <= 0 || weight <= 0) {
    alert("Height and Weight must be positive numbers!");
    return;
  }

  // BMI calculation
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  // Determine status
  let status = "";
  let color = "";

  if (bmi < 18.5) {
    status = "Underweight";
    color = "#3498db"; // Blue
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    status = "Normal weight";
    color = "#27ae60"; // Green
  } else if (bmi >= 25 && bmi <= 29.9) {
    status = "Overweight";
    color = "#f39c12"; // Orange
  } else {
    status = "Obese";
    color = "#e74c3c"; // Red
  }

  // Display results
  bmiValue.textContent = `Your BMI: ${bmi}`;
  bmiStatus.textContent = `Status: ${status}`;
  bmiStatus.style.color = color;
  resultBox.style.display = "block";
});
