# MYSQL AND UBUNTU

### Install mysql
```shell
sudo apt install mysql-server -y
 ```

### Start mysql on wsl ubuntu
```shell
sudo service mysql start
 ```

### Authorize to mysql
```shell
sudo mysql
sudo mysql -u student -pSTUDENT
 ```

### Create Database and user
* Db name is `learn`, and user is `student` with password `STUDENT`
 ```mysql
CREATE DATABASE learn CHARACTER SET utf8;
CREATE USER 'student'@'%' IDENTIFIED BY 'STUDENT';
GRANT ALL PRIVILEGES ON learn.* TO 'student'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;
 ```

### How to find out what user am I logged as i
 ```mysql
SELECT USER(), CURRENT_USER();
 ```

### Change password for user
 ```mysql
SET PASSWORD FOR 'student'@'%' = 'newpassword';
FLUSH PRIVILEGES;
 ```

### Import .sql example
 ```mysql
SOURCE /home/ubuntu/projects/remember/examples/mysql/sakila-db/sakila-schema.sql;
SOURCE /home/ubuntu/projects/remember/examples/mysql/sakila-db/sakila-data.sql;
 ```


### Show full tables
 ```mysql
 SHOW FULL TABLES;
 ```

### Remote mysql connection
```shell
sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
 ```
1) find `bind-address`
2) change to `bind-address            = 0.0.0.0`
 ```
sudo systemctl restart mysql
 ```
