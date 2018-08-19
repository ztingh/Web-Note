window.onload = function(){
  genWarp(function* () {
    var tweets = yield $.get('data/tweets.json');
    console.log(tweets);
    var friends = yield $.get('data/friends.json');
    console.log(friends);
    var videos = yield $.get('data/videos.json');
    console.log(videos);
  });

  function genWarp(generator) {
    var gen = generator();

    function handleGen(yielded) {
      if(!yielded.done){
        // yielded.value is instance of promise
        yielded.value.then(function(data){
          return handleGen(gen.next(data));
        });
      }
    }

    return handleGen(gen.next());
  }
}
