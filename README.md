# Ololos-blog-ts (TypeScript version)

It's a blog, which I wrote especially for practice techs, and to finally have a blog :D
It's a travel blog of me and my sweet girlfriend :)

## What I need to run it in dev mode?
Install Gradle 3.1  
Install Node 6.7  
Run:

```
gradle bootRun
gradle npm_install //only on first run, or when package.json dependencies changed
gradle npm_start
```
Or (Recommended):  
Run main method in `Application.java` using IDE of your choice. And then go to frontent module and run
```
npm start -s
```

## How to build for production and run?
Run:
```
gradle clean assemble
cd ololos-backend/build/libs
java -jar project-template-0.0.1-SNAPSHOT.jar
```
It will 
 1. Compile java/groovy classes  
 2. will install npm/node if not installed.
 3. Create minified and compressed js, css, html bundle to /dist folder in "project-template-frontend". Using Webpack
 4. Copy these files to the "/static" folder in jar
 5. ??? PROFIT! Just run the jar with `java -jar nameOfTheBuild.jar`  and app is deployed
 
##How to develop frontend?
Just run backend as separate service any way you like or  `gradle bootRun`, and proxy all calls to `/api` in browsersync server to `localhost:8080`,
or just use some mockApi and run:
```
npm start -s
```
It will run a server in dev mode with hot reloading and other fancy stuff.

### Of course, it's cool, but how to proxy?!
Just uncomment line 30 in file `srcServer.js` in `/tools` folder in frontend module.

### How to test your UI and don't kill everyone around?
Just run:
```
npm run test:watch
```
### Not happy yet? Want to debug it step by step in the IDEA/WebStorm?  
For IDEA: 
 1. Install node plugin.
 2. Go to the run configurations
 3. Create new Mocha test configuration and set it up this way (bellow)
 4. PROFIT! Now you can just run this and it will launch test file by IDE so you can debug it here.

```
Working dir: {YOUR FULL PATH}\project-template\project-frontend-template
Mocha package: \project-template\project-template-frontend\node_modules\mocha
User interface: bdd
Extra Mocha options: tools/testSetup.js
Select: Test file
Choose test file of your choice to test it within IDEA/WebStorm
```

