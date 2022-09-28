# PHP AND UBUNTU.

### [Install php](#install-php)
### [Install php libraries](#install-php-libraries)
### [Install composer](#install-composer)
### [Change php version](#change-php-version)
### [Turn on php error_log to file](#turn-on-php-error_log-to-file)

## Install php
 ```shell
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update
sudo apt install php8.1 -y
 ```

## Install php libraries
 ```shell
sudo apt install php8.1-common
sudo apt install php8.1-cli
sudo apt install php8.1-fpm
sudo apt install php8.1-mysql
sudo apt install php8.1-memcache
sudo apt install php8.1-memcached -y
sudo apt install php8.1-bcmath
sudo apt install php8.1-curl
sudo apt install php8.1-mbstring -y
sudo apt install php8.1-gmp -y
sudo apt install php8.1-zip -y
sudo apt install php8.1-xml -y
```
 ```shell
sudo apt install php8.1-common && sudo apt install php8.1-cli && sudo apt install php8.1-fpm && sudo apt install php8.1-mysql && sudo apt install php8.1-memcache && sudo apt install php8.1-memcached -y && sudo apt install php8.1-bcmath && sudo apt install php8.1-curl && sudo apt install php8.1-mbstring -y && sudo apt install php8.1-gmp -y && sudo apt install php8.1-zip -y && sudo apt install php8.1-xml -y
 ```

## Install composer
 ```shell
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '55ce33d7678c5a611085589f1f3ddf8b3c52d662cd01d4ba75c0ee0459970c2200a51f492d557530c71c15d8dba01eae') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
sudo mv composer.phar /usr/local/bin/composer
```

## Change php version
 ```shell
sudo update-alternatives --config php
 ```

## Turn on php error_log to file
 ```shell
cd /etc/php/8.1/cli
sudo nano /etc/php/8.1/cli/php.ini
 ```
1) press: f6
2) type: `;error_log = php_errors.log`
3) set directory. As example: `/home/ubuntu/logs/php_errors.log`

