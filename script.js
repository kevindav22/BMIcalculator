function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  if (isNaN(weight) || isNaN(height) || height === 0) {
    alert('Masukkan berat badan dan tinggi badan yang valid.');
    return;
  }

  const bmi = weight / (height / 100) ** 2;
  document.getElementById('bmiResult').textContent = bmi.toFixed(2);

  let bmiStatus = '';
  if (bmi < 18.5) {
    bmiStatus = 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiStatus = 'Normal';
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiStatus = 'Overweight';
  } else {
    bmiStatus = 'Obesity';
  }

  const bmiStatusElement = document.getElementById('bmiStatus');
  bmiStatusElement.textContent = bmiStatus;
  bmiStatusElement.className = bmiStatus; // Mengatur kelas CSS sesuai kategori BMI
}
