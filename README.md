# cm_front_css
Course frontend 2023

## FrontEnd course CSS 
Home Work 5

## Run for develop
``` $ npm run serve ```

## Steps
1. Create new repository on github
2. ``` $ npm init ```
3. ``` $ npm i -D webpack webpack-cli ```
4. Configure package.json, add ```"dev": "webpack --mode development",```
5. Run ``` $ npm run dev``` -> /dev/main.js
6. Add plugin ``` $ npm i -D html-webpack-plugin ```
7. Create webpack.config.js with copy index.html to /dist
8. Add local web server ``` $ npm install -D webpack-dev-server ```
9. In package.json add  "serve": "webpack serve --open --mode development"
10. No need add file serve.config.js '--config dev/serve.config.js'
11. Run ``` $ npm run serve ``` -> open http://localhost:8080/
12. Do not auto reboot page after save
13. Add 'devServer' param in webpack.config.js -> autoreboot page http://localhost:9000
14. Add entry point in webpack.config.js -> ``` $ npm run dev ``` -> /dist/index.2a807a189b9b51451290.js  
15. Clear /dist ``` $ npm i -D filemanager-webpack-plugin ``` + FileManagerPlugin in config

