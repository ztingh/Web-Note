const
  celciusInput  = document.querySelector('#celcius > input'),
  farhrenheitInput = document.querySelector('#farhrenheit > input'),
  kelvinInput = document.querySelector('#kelvin > input');

function roundNum(num) {
  return Math.round(num * 100) / 100;
}

function celciusToFarhrenheitAndKelvin() {
    const
      cTemp = parseFloat(celciusInput.value),
      fTemp = (cTemp * (9/5) + 32),
      kTemp = (cTemp + 273.15);
    console.log(kTemp);
    farhrenheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
}

function farhrenheitTocelciusAndKelvin() {
  const
    fTemp = parseFloat(farhrenheitInput.value),
    cTemp = (fTemp - 32) * (5/9),
    kTemp = (fTemp + 459.67) * (5/9);
  celciusInput.value = roundNum(cTemp);
  kelvinInput.value = roundNum(kTemp);
}

function kelvintoCelciusAndFarhrenheit() {
  const
    kTemp = parseFloat(kelvinInput.value),
    cTemp = kTemp - 273.15,
    fTemp = 9/5 * (kTemp - 273.15) + 32;
  celciusInput.value = roundNum(cTemp);
  farhrenheitInput.value = roundNum(fTemp);
}

celciusInput.addEventListener('input', celciusToFarhrenheitAndKelvin);
farhrenheitInput.addEventListener('input', farhrenheitTocelciusAndKelvin);
kelvinInput.addEventListener('input', kelvintoCelciusAndFarhrenheit);
