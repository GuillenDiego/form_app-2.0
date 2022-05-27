# form_app-2.0

1. Deployment of  MySQL Express React Node.JS 
2. Deploy DB server first and make new user
Set DB = posts and table = posts
## Install and configure nginx

```
sudo -i
apt clean all && sudo apt update && sudo apt dist-upgrade
rm -rf /var/www/*
apt install -y nginx 
rm /etc/nginx/sites-available/default
rm /etc/nginx/sites-enabled/default
nano /etc/nginx/sites-available/netflix
```

Use public ip of web server
```
server {
  listen 80;

  location / {
        root /var/www/netflix/client;
        index  index.html index.htm;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        try_files $uri $uri/ /index.html;
  }
  location /api {
        proxy_pass http://172.31.89.26:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
  }
}
```

## Finish configuring server nginx and clone git
```
ln -s /etc/nginx/sites-available/netflix /etc/nginx/sites-enabled/netflix
mkdir /var/www/netflix
mkdir /var/www/netflix/client
systemctl start nginx
apt install git
mkdir netflix
cd netflix
git clone https://github.com/GuillenDiego/form_app-2.0.git
cd ~/netflix/form_app-2.0/backend
nano .env
```
This goes in `.env`
```
PORT = 8080
# Database credentials
DB_USERNAME= admin
DB_PASSWORD= password
DB_DATABASE= posts
DB_HOST= database-1.c5q6kqir4w0q.us-east-1.rds.amazonaws.com
```

# Install Node 16.15.0 set `.env` of client
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
nvm install 16.15.0
npm i
cd ../client
nano .env
```
Use public ip of web server
```
REACT_APP_API_URL = "http://172.31.89.26:8080/"
```


# Build react and place it in `/var/www/`
start or restart nginx
```
npm i
npm run build
rm -rf /var/www/netflix/client/*
cp -r build/* /var/www/netflix/client
systemctl start nginx
cd ~/netflix/form_app-2.0/backend
node index.js
```
