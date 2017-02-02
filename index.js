const app = require('express')();
const logger = require('./logger');
const swearjar = require('swearjar');
const createTwitterStreamListener = require('./stream');

function tweetFriendlierVersionOfTweet(tweet, T) {
  const { text } = tweet;
  if (swearjar.profane(text)) {
    const censoredStatus = swearjar.censor(text)
    T.post('statuses/update', { status: censoredStatus }, (err, data, resp) => {
      if (!err) {
        logger.info(`===Tweeted!===\n`);
      }
    });
  }
}

createTwitterStreamListener({
  onTweet: tweetFriendlierVersionOfTweet,
});

/* This will keep the service running. I am sorry PaaS providers. */
app.get('/keepalive', (req, res) => res.send('ok'));
app.listen(3000, (err) => {
  logger.info('Listening...');
})
