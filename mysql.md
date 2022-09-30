# MYSQL

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

### Remote mysql connection
```shell
sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
 ```
1) find `bind-address`
2) change to `bind-address            = 0.0.0.0`
 ```shell
sudo systemctl restart mysql
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

### Add foreign key
* Foreign key in field `post_id` of `comments` table, for `posts` field `id`
* `ON DELETE CASCADE` means, if `post` with `id` will be deleted, all `comments` with `post_id` associated will be deleted 
* `ON UPDATE CASCADEE` means, if `post` with `id` will be updated, all `comments` with `post_id` associated will be updated 
 ```mysql
 ALTER TABLE comments ADD FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE ON UPDATE CASCADE;
 ```

### ON update and delete Examples
 ```mysql
ON DELETE CASCADE;
ON DELETE RESTRICT;
ON DELETE SET NULL;
ON UPDATE CASCADE;
ON UPDATE RESTRICT;
ON UPDATE SET NULL;
 ```

### JOIN
* Note: that `innser join` is the same `join` 
 ```mysql
SELECT * FROM store JOIN address ON store.address_id = address.address_id;
 ```
<img alt="Simple Join Example" src=".\images\mysql_join.png" title="Join"/>

 ```mysql
SELECT * FROM store RIGHT JOIN address ON store.address_id = address.address_id;
 ```
<img alt="Simple Right Join Example" src=".\images\mysql_right_join.png" title="Join"/>

 ```mysql
SELECT * FROM store LEFT JOIN address ON store.address_id = address.address_id;
 ```
<img alt="Simple Left Join Example" src=".\images\mysql_left_join.png" title="Join"/>

### JOIN and GROUP BY Example
 ```mysql
SELECT 
    customer.customer_id, 
    customer.first_name, 
    customer.last_name, 
    COUNT(rental_id) 
FROM customer 
    LEFT JOIN rental ON rental.customer_id = customer.customer_id 
GROUP BY customer.customer_id;
 ```
<img alt="JOIN and GROUP BY Example" src=".\images\mysql_join_group_by.png" title="Join"/>

### Multiple JOINS in One Query
 ```mysql
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    store.store_id,
    COUNT(rental_id) rentals_checked_out,
    address.address as store_adress
FROM customer c
         LEFT JOIN rental ON rental.customer_id = c.customer_id
         LEFT JOIN store ON store.store_id = c.store_id
         LEFT JOIN address ON address.address_id = store.address_id
GROUP BY c.customer_id, address.address;
 ```
<img alt="Multiple JOINS Example" src=".\images\mysql_multiple_joins.png" title="Join"/>

### Filtering Aggregated Data
 ```mysql
SELECT title, SUM(amount) sales, COUNT(*) rentals FROM rental
    JOIN payment ON payment.rental_id = rental.rental_id
    JOIN inventory ON inventory.inventory_id = rental.inventory_id
    JOIN film ON film.film_id = inventory.film_id
GROUP BY title
HAVING sales > 200
ORDER BY sales DESC;
 ```
<img alt="Multiple JOINS Example" src=".\images\mysql_filtering_aggregated_data.png" title="Join"/>
