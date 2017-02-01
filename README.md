Twitter Censor Bot
===

### Getting Started

`yarn && touch .env`

It should contain this config:

```
CONSUMER_KEY=***
CONSUMER_SECRET=***
ACCESS_TOKEN_KEY=***
ACCESS_TOKEN_SECRET=***

LOGGING_URL=*** # Assumes Papertrail.
LOGGING_PORT=*** # Assumes Papertrail.

USER_STREAM_USERNAME='ken_wheeIer'
LISTEN_TO_USERNAME='ken_wheeler'
```

Then all you need is to run:
`yarn start`
