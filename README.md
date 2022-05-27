# form_app-2.0
# strait run ###################################################################################
sudo -i
apt clean all && sudo apt update && sudo apt dist-upgrade
rm -rf /var/www/html
apt install -y nginx 
rm /etc/nginx/sites-available/default
rm /etc/nginx/sites-enabled/default
nano /etc/nginx/sites-available/netflix

#Use public ip of web server
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

# strait run ###################################################################################
ln -s /etc/nginx/sites-available/netflix /etc/nginx/sites-enabled/netflix
mkdir /var/www/netflix
mkdir /var/www/netflix/client
nano /var/www/netflix/client/index.html


# strait run ###################################################################################
systemctl start nginx
cd
apt install git
mkdir netflix
cd netflix
git clone <your repository>

# strait run ###################################################################################
cd ~/netflix/form_app-2.0/backend
nano .env

PORT = 8080
# Database credentials
DB_USERNAME= admin
DB_PASSWORD= password
DB_DATABASE= posts
DB_HOST= database-1.c5q6kqir4w0q.us-east-1.rds.amazonaws.com


# strait run ###################################################################################
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
nvm install 16.15.0
npm i
cd ../client
nano .env

#Use public ip
REACT_APP_API_URL = "http://172.31.89.26:8080/"


# strait run ###################################################################################
npm i
npm run build
rm -rf /var/www/netflix/client/*
cp -r build/* /var/www/netflix/client
