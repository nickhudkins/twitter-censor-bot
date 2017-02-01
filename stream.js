const logger = require('./logger');
const Twit = require('twit');
const config = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
};

function _onTweet({ text }) {
  logger.info('Found Tweet: ', text);
}

module.exports = ({ onTweet = _onTweet }) => {
  const T = new Twit(config);
  const s = T.stream('user', { with: process.env.USER_STREAM_USERNAME })
  s.on('connected', () => {
    logger.info('===Connected!===');
  })
  s.on('disconnect', (msg) => {
    logger.info(`===Disconnected===\n${msg}\n================`);
  })
  s.on('tweet', (tweet) => {
    if (tweet.user.screen_name.toLowerCase() === process.env.LISTEN_TO_USERNAME) {
      onTweet(tweet, T);
    }
  })
}
