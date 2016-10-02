# Ololos-blog-ts (TypeScript version)

Technically it's empty project with TypeScript + Redux + React + Spring Boot ready for further development
For backend calls in dev mode please add proxy from /api pattern calls to 8080 port and change frontend 
running port to 3000

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
Run main method in `OlolosWebappApplication.java` using IDE of your choice. And then go to frontent module and run
```
npm start -s
```

## How to build for production and run?
Run:
```
gradle clean assemble
cd ololos-backend/build/libs
java -jar ololos-blog-ts-0.0.1-SNAPSHOT.jar
```
It will 
 1. Compile java/groovy classes  
 2. will install npm/node if not installed.
 3. Create minified and compressed js, css, html bundle to /dist folder in "project-template-frontend". Using Webpack
 4. Copy these files to the "/static" folder in jar
 5. ??? PROFIT! Just run the jar with `java -jar nameOfTheBuild.jar`  and app is deployed
 

