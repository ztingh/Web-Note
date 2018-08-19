window.onload = function() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status) {
      console.log('success');
      console.log(JSON.parse(this.response));
    }
  }

  xhttp.open("GET", "data/tweets.json", true);
  xhttp.send();
}

// READY STATE
// 0 - request not initialized
// 1 - request has been setup
// 2 - request has been sent
// 3 - request has been process
// 4 - request is complete
//
