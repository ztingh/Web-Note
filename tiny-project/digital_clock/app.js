function clock() {
  //create Date instance
  const fullDate = new Date();
  //get value
  const
    fullDateHours = fullDate.getHours(),
    fullDateMinutes = fullDate.getMinutes(),
    fullDateSeconds = fullDate.getSeconds();

  // put value in document
  document.getElementById('hours').innerHTML = fullDateHours < 10 ? '0' + fullDateHours : fullDateHours;
  document.getElementById('minutes').innerHTML = fullDateMinutes < 10 ? ':0' + fullDateMinutes : ':' + fullDateMinutes;
  document.getElementById('seconds').innerHTML = fullDateSeconds < 10 ? ':0' + fullDateSeconds : ':' + fullDateSeconds;
}


setInterval(clock, 100);
