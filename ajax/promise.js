var get = function(url) {
  var promise = new Promise(function(resolve, reject){
    var xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
      if (this.status == 200) {
        resolve(JSON.parse(this.response));
      } else {
        reject(this.status);
      }
    }

    xhttp.onError = function() {
      reject(this.status);
    }

    xhttp.open('GET', url, true);
    xhttp.send();

  });
  return promise;
}

$.get('data/tweets.json').then(function(data) {
  console.log(data);
});
// get('data/tweets.json').then(function(data){
//   console.log(data);
//   return get('data/friends.json');
// }).then(function(data) {
//   console.log(data);
//   return get('data/videos.json');
// }).then(function(data) {
//   console.log(data);
// }).catch(function(error) {
//   console.log(error);
// });
