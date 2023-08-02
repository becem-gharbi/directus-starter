# Install Directus on Ubuntu v20.04

## Install Node.js
- Install Node Version Manager
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```
- Source `.bashrc` file
```bash
source ~/.bashrc
```
- Install LTS version
```bash
nvm install lts/hydrogen
```

## Install process manager
- Install PM2 
```bash
npm install pm2 -g
```
- Install PM2 CLI auto completion
```bash
pm2 completion install
```

## Prepare Directus
- Clone repository
```bash
git clone https://github.com/becem-gharbi/directus-starter.git
```
- Change directory
```bash
cd directus-starter/directus
```
- Install dependencies
```bash
npm install
```
- Rename `example.env` to `.env`
```bash
mv example.env .env
```
- Set environment variables
```bash
nano .env
```

### Start Directus
```bash
pm2 start npm --name "directus" -- start
```