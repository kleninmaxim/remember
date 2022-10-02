# DOCKER

### Install Docker
* Official docs [here](https://docs.docker.com/engine/install/ubuntu/)
```shell
sudo apt-get update

sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

sudo mkdir -p /etc/apt/keyrings

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
  
sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin

sudo service docker start

sudo docker run hello-world
```

### Permission denied for user to se docker
* Get Message: `Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get "http://%2Fvar%2Frun%2Fdocker.sock/v1.24/containers/json": dial unix /var/run/docker.sock: connect: permission denied`
* If you get error again try reboot server
```shell
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
```

### List of run containers
```shell
docker ps
```

### List of all containers was run
```shell
docker ps --all
```

### Automatically remove the container when it exits
* Container is `hello-world`
```shell
docker run --rm hello-world
```

### Dockerfile build image different version
```shell
docker build .
docker build . --no-cache
docker build -t <user-id>/<name-image>:<version> .
docker build -t ubuntu/redis:latest .
```

### Stop container
```shell
docker stop <id-container>
docker kill <id-container>
```

### Add volume when run docker container
* File for example in `/home/ubuntu/src` folder 
```shell
docker run -v /home/ubuntu/src:/var/www/html/public
```

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

### Create and start docker container
```shell
docker create <image-name>
docker start -a <id-container>
```

### Logs of containers
```shell
docker logs <id-container>
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
