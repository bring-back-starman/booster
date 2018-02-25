# Commands
List of useful commands for this fine ass project

## Installation
```
$ git clone git@github.com:bring-back-starman/booster.git
$ cd booster
$ cp .env.example .env.[development | production]
$ // Edit the .env file
```

## Run (development)
```
$ docker-compose run --service-ports --rm booster npm run dev
```

## Run (production)
```
$ docker-compose up -d
```
