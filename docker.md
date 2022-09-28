# DOCKER

### Run docker container
```shell
docker run <image-name>
docker run -it <id-image> sh
docker run -p 8080:8080 <image-name>
docker run -p 8080:8080 -v /app/node_modules -v $(pwd):/app <image-name>
docker-compose up
docker-compose up --build
docker-compose down
 ```

### Dockerfile build image
```shell
docker build .
docker build -t <user-id>/<name-image>:<version> .
docker build -t kleninm/redis:latest .
```

### Create and start docker container
```shell
docker create <image-name>
docker start -a <id-container>
```

### Logs of containers
```shell
docker logs <id-container>
```

### List of run containers
```shell
docker ps
docker ps --all
```

### Stop container
```shell
docker stop <id-container>
docker kill <id-container>
```

### Execute an additional command in container
```shell
docker exec -it <id-container> <command>
docker exec -it <id-container> sh
```

### Delete everything with docker - containers, images, cache
```shell
docker system prune
```

### Docker failed to initialize. Docker Desktop is shutting down. On Windows Machine
**NOTICE**: "cntr + shift + esc" must not have Docker processes running
```shell
cd C:/Users/Максим
rm -rf .docker/
cd C:/Users/Максим/AppData/Roaming
rm -rf Docker/
```
