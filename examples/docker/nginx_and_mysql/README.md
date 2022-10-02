# DOCKER NGINX AND MYSQL

* Note: create src/ directory if you have no
* Better watch original code [here](https://github.com/laracasts/lc-the-docker-tutorial)

### Build Nginx Image
```shell
cd examples/docker/nginx_and_mysql/nginx/
docker build . --no-cache -t nginx
```

### Run container nginx with volume
```shell
docker run --rm -p 80:80 -v /home/ubuntu/projects/remember/examples/docker/nginx_and_mysql/src:/var/www/html/public nginx
```

### Run container with nginx and mysql
```shell
docker compose up
```

### Run container with nginx and mysql if you have an error, rebuild images
```shell
docker compose up --build
```

### Run container with nginx and mysql if you have an error, rebuild images
```shell
docker compose run --rm composer create-project laravel/laravel .
docker compose run --rm composer require spatie/laravel-permission
docker compose run --rm composer dump-autoload
docker compose run --rm npm install 
docker compose run --rm npm run dev
```
