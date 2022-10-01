# DOCKER SIMPLE EXAMPLE

### Build Image
```shell
cd examples/docker/simple/
docker build . --no-cache -t json-server
```

### Run container
```shell
docker run --rm -p 3000:3000 json-server
```

### Run container with specified file
```shell
docker run --rm -p 3000:3000 json-server alt.json
```