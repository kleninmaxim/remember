# LARAVEL

### Install on ubuntu using nginx
**Before:** you need to install php libraries. (such as php-fpm)
* Create project
```shell
sudo apt update && sudo apt upgrade -y
sudo chown -R ubuntu:ubuntu /var/www
composer create-project laravel/laravel example-app
```
* Change rights
```shell
sudo chown -R www-data.www-data /var/www/example-app/storage
sudo chown -R www-data.www-data /var/www/example-app/bootstrap/cache
```
* Nginx Settings. Get code from [documentation](https://laravel.com/docs/9.x/deployment)
```shell
sudo nano /etc/nginx/sites-available/default
```
```shell
sudo systemctl restart nginx.service
```
* Confirm that the configuration does not contain any syntax errors
```shell
sudo nginx -t
```

### Artisan examples make commands
* `php artisan make:controller AuthController` - Make controller
* `php artisan make:middleware EnsureTokenIsValid` - Make middleware
* `php artisan make:model User -m` - Make Model and add migration

### Artisan migrations
* `php artisan migrate` - Migrate tables to db
* `php artisan migrate:refresh` - Full refresh tables
* `php artisan migrate:refresh --seed` - Full refresh tables and add seed data


### route.php examples
Use controller AuthController, that has registration and authentication methods
```php
Route::controller(AuthController::class)->group(function () {
    Route::post('/registration', 'registration');
    Route::post('/authentication', 'authentication')->middleware(UserToken::class);
});
```
