# Installation of LAMP and phpMyAdmin
Instructions to install Mariadb and phpMyAdmin
###Notes
1. Install LAMP while creatin ec2 instance
2. Set password of root user of db
3. Create db named `posts` and table named `posts`

## Script for bootstrap on ec2 
```
#!/bin/bash
yum update -y
amazon-linux-extras install -y lamp-mariadb10.2-php7.2 php7.2
yum install -y httpd mariadb-server
systemctl start httpd
systemctl enable httpd
usermod -a -G apache ec2-user
chown -R ec2-user:apache /var/www
chmod 2775 /var/www
find /var/www -type d -exec chmod 2775 {} \;
find /var/www -type f -exec chmod 0664 {} \;
echo "<?php phpinfo(); ?>" > /var/www/html/phpinfo.php
```
## On cli of instance
change password for root user of the DB

```
sudo systemctl start mariadb
sudo mysql_secure_installation
```

## Install phpMyAdmin
```
sudo systemctl enable mariadb
sudo yum install php-mbstring php-xml -y
sudo systemctl restart php-fpm
cd /var/www/html
wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.tar.gz
mkdir phpMyAdmin && tar -xvzf phpMyAdmin-latest-all-languages.tar.gz -C phpMyAdmin --strip-components 1
rm phpMyAdmin-latest-all-languages.tar.gz
sudo systemctl start mariadb
```

## Configure DB and users
1. Create user admin
2. Create DB called `posts`
3. Create Table called `posts`
