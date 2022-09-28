# MYSQL AND UBUNTU

### Install mysql
```shell
sudo apt install mysql-server -y
 ```

### Create Database and user
* Db name is `learn`, and user is `student` with password `STUDENT`
 ```mysql
CREATE DATABASE learn CHARACTER SET utf8;
CREATE USER 'student'@'%' IDENTIFIED BY 'STUDENT';
GRANT ALL PRIVILEGES ON learn.* TO 'student'@'%' WITH GRANT OPTION;
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
