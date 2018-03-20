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

# Postgres
## SQL CLI
```
docker ps --format '{{.Names}}' | grep booster_postgres // Get the NAME of the container
docker exec -it <container_name> psql -U booster -d booster
```

## List tables
```sql
SELECT * FROM pg_catalog.pg_tables;
```
