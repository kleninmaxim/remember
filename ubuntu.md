# UBUNTU

### Update system
```shell
sudo apt update && sudo apt upgrade -y
```

### Work with systemd processes
```shell
sudo systemctl restart <systemd-process-name>
sudo systemctl stop <systemd-process-name>
sudo systemctl status <systemd-process-name>
sudo journalctl -f -u <systemd-process-name>
```

### Path where all systemd processes and enable or disable process when server was restarted
```shell
cd /etc/systemd/system/
sudo systemctl enable <systemd-process-name>
sudo systemctl disable <systemd-process-name>
```

### Change right for path for linux user
```shell
sudo chown -R ubuntu:ubuntu /var/www
```

### Get Ip server
```shell
wget -qO- eth0.me
```

### Add new user to ubuntu
Usefully link: [Initial Server Setup with Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04)
```shell
adduser ubuntu
usermod -aG sudo ubuntu
```

### Remove enter password for user
```shell
sudo visudo
ubuntu ALL=(ALL) NOPASSWD:ALL
```

### Missing zip extension and unzip/7z
If you see such error: `ERROR: Failed to download ... from dist: The zip extension and unzip/7z commands are both missing, skipping.`
```shell
sudo apt install zip unzip php8.1-zip -y
```

### Find big files
```shell
find . -mount -type f -size +1G 2>/dev/null
find . -mount -type f -size +100M 2>/dev/null
sudo du -a / | sort -n -r | head -n 20
```

### Firewall
```shell
sudo ufw status
sudo ufw enable
```
**Important!** If you want to connect on your server by ssh, you must allow it in firewall by one of follow commands:

```shell
sudo ufw allow OpenSSH
```
Or `sudo ufw allow 22` or `sudo ufw allow 22/tcp`

Allow port:
```shell
sudo ufw allow 3306
```

Allow Nginx:
```shell
sudo ufw allow 'Nginx HTTP'
```

Get app list:
```shell
sudo ufw app list
```

### Install nginx
```shell
sudo apt install nginx -y
sudo ufw app list
sudo systemctl status nginx
curl -4 icanhazip.com
```

### Made project at nginx with your domain
Usefully link: [Initial Server Setup with Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04)
```shell
sudo mkdir -p /var/www/your_domain
sudo chown -R ubuntu:ubuntu /var/www/your_domain
sudo chmod -R 755 /var/www/your_domain
sudo nano /etc/nginx/sites-available/default
```

### Alias
```shell
sudo nano ~/.bashrc
```
Add alias in file. Example: `alias p='df -h'`
