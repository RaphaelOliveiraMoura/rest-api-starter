## Overview
```
# git clone https://github.com/RaphaelOliveiraMoura/rest-api-starter.git
> Create a .env file and configure it
> Create a credentials.json file and configure it
# npm install
# npm run migrate
# npm run start:build
```

## Table of contents
1. [Overview](#overview) 👀
1. [Description](#description) 📝
1. [Installation](#installation) 🚀
   1. [Preparing Environment](#prepare-environment)
   1. [Environment Variables](#environment-variables)
   1. [Settings configurations](#configurations)
   1. [Running Application](#running)
1. [Usage](#usage) ✔️
   1. [Application Scripts](#scripts)
   1. [Tests](#tests)
   1. [Documentation](#documentation)
   1. [Routes](#routes)
   1. [Controllers](#controllers)
   1. [Services](#services)
   1. [Models](#models)
1. [Technologies](#technologies) 📦
1. [Architeture](#architeture) 📐
1. [Future Goals](#goals) 🎯
1. [Contributing](#contributing) 🎈

## description
This is a base to create APIS with nodeJs, using Typescript. This project will help you start your project with some functionalities already implemented. 

## installation

### prepare-environment

### environment-variables

#### 🗄️ .env file
This file contains all informations about run time environments variables.
It should be created in the root diretory of the project.
The structure of .env file can suport this field:
```
NODE_ENV=development

HOST=localhost
PORT=3004

DATABASE_LOG=true

DATABASE_DIALECT=mysql
DATABASE_NAME=prod_db
DATABASE_HOST=127.0.0.1
DATABASE_USERNAME=root
DATABASE_PASSWORD=root

DEV_DATABASE_DIALECT=mysql
DEV_DATABASE_NAME=dev_db
DEV_DATABASE_HOST=127.0.0.1
DEV_DATABASE_USERNAME=root
DEV_DATABASE_PASSWORD=root

TEST_DATABASE_DIALECT=mysql
TEST_DATABASE_NAME=test_db
TEST_DATABASE_HOST=127.0.0.1
TEST_DATABASE_USERNAME=root
TEST_DATABASE_PASSWORD=root
```

#### 🗄️ credentials.json
This file contains secrets informations about you application.
This informations is important to generate tokens and hash in the app.
It should be created in the root diretory.
The structure of the json file should look like this:
```
{
    "secret": "asda6s5d4a-das564d65a4s-dasd54as65d-asdas"
}
```

### configurations

### running

## usage

### scripts

npm run model:create -- --name=UserRules --attributes=userId:number,ruleId:number

### tests

### documentation

### routes

### controllers

### services

### models

## technologies

## architeture
The code structure is like this:
- 📂 basedir
    - 📂 __tests__
        - 📂 database
        - 📂 integration
        - 📂 unit
    - 📂 database
    - 📂 documentation
    - 📂 source
        - 📂 configuration
        - 📂 controllers
        - 📂 database
        - 📂 middlewares
        - 📂 models
        - 📂 routes
        - 📂 services
        - 📂 utils

## goals

## contributing
