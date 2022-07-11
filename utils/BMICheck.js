const BMICheck = (HeightCm, weight) => {
  let height = HeightCm / 100;
  const bmi = (weight / height).toFixed(1);
  let res = { BMI: bmi, BMICategory: "", HealthRisk: "" };
  if (bmi < 18.4) {
    res.BMICategory = "Underweight";
    res.HealthRisk = "Malnutrition risk";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    res.BMICategory = "Normal weight";
    res.HealthRisk = "Low risk";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    res.BMICategory = "Overweight";
    res.HealthRisk = "Enhanced risk";
  } else if (bmi >= 30.0 && bmi <= 34.9) {
    res.BMICategory = "Moderately obese";
    res.HealthRisk = "Medium risk";
  } else if (bmi >= 35.0 && bmi <= 39.9) {
    res.BMICategory = "Severel obese";
    res.HealthRisk = "High risk";
  } else {
    res.BMICategory = "Very severely obese";
    res.HealthRisk = "Very high risk";
  }
  return res;
};

module.exports = BMICheck;
