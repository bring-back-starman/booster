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

# Docker
## List containers
```
// Options: 
// -a: List every containers (running + stopped)
// -q: Get only container ID
// -f status=exited: Get stopped containers
$ docker ps
```


## Delete container
```
// Options:
// -f: Force removal (for running containers)
$ docker rm <CONTAINER_ID>

// Delete all containers
$ docker rm $(docker ps -a -q)
```
