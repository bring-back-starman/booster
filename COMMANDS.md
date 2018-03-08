# Commands
List of useful commands for this fine ass project

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
