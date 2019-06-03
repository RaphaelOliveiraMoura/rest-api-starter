## Starting Ṕroject

### Preview
```
npm install
npm run build
npm run start
```

### Instalation

To run the application, first verify if this softwares are installed:

- Node v10.15.3
- Npm (Node package manager) v6.9.0

To certify that this softwares are installed in your environment, just go in terminal and type:
```
node -v
npm -v
```

After install this softwares, you need follow this steps:

> 1: Install project dependences
Just go in the base project folder in cmd and type it, to install all project dependences:
```
npm install
```
To see the project dependences, just go in package.json

> 2: Build the project 
The appication are made with typescript, so to run it you need transpile the typescript files to js files.
To build the project just go in base project folder in cmd and type it:
```
npm run build
```
In the package.json you can see all script of the application

### Configurations

The mainly file to configure the way that the app is behave are the .env file.
#### OBS: the .env file isn't imported or exported to the project repository, then you need create your own .env file

The .env file contains the environment informations as database connection or the type of environment the app is running

> This is the .env configuration template:
```
ENV = development

HOST = localhost
PORT = 3003

DATABASE_DIALECT = mysql
DATABASE_NAME = dev_db
DATABASE_HOST = 127.0.0.1
DATABASE_USERNAME = root
DATABASE_PASSWORD = root

TEST_DATABASE_DIALECT = mysql
TEST_DATABASE_NAME = test_db
TEST_DATABASE_HOST = 127.0.0.1
TEST_DATABASE_USERNAME = root
TEST_DATABASE_PASSWORD = root
```

In the .env.md file contains all information about the all properties of .env file.

### Starting

Has many possibilities to start the project

> To just start the application normaly, type it:
```
npm run start
or
node .
```

> To build the application and start when the build are completed, type it:
```
npm run start:build
```

> To build the application, run the tests and start when the build and the tests are completed, type it:
```
npm run start:test
```

> To build the application and start it in the development mode, just type:
```
npm run start:dev
```
This way, the application will start and are stay listen any alteration in js builded files. And if one .js file changed the application will be restarted