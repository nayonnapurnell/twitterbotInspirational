var twit = require('twit');
var config = require('./config');

var Twitter = new twit({
  consumer_key: '339wV8hfgM2aPzl7gdubhKl6s',
  consumer_secret: 'SVgu8QHN3Dua7hVjsHs8jlDoYZ0dtttHOSK6ngHYy4MI6I7UW3',
  access_token: '818631596303667201-IRWpjcryJZVqhnOqzjOCU3I0bvOJ7Ey',
  access_token_secret: 'pO2WptP3yiSe0vLMcR9ApBiQ0kUM8CFiDq20UV1QSbR60',
});

//Retweet Bot
var retweet = function() {
  var params = {
    q: '#inspire, #Inspire',
    result_type: 'recent',
    lang: 'en'
  }

Twitter.get('search/tweets', params, function(err, data){
  if(!err){
    var retweetId = data.statuses[0].id_str;
    Twitter.post('statuses/retweet/:id', {
      id: retweetId
    }, function(err, response) {
      if (response) {
        console.log('Retweeted!!!');
      }
      if(err){
        console.log('Something went wrong while RETWEETING...Duplication maybe...');
      }
    });
  }
  else{
    console.log('Something went wrong while SEARCHING...');
  }
});
}

retweet();
setInterval(retweet, 3000000);
