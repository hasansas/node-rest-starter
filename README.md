# Node Modular RESTful API Strater
> Modular RESTful API with Node, Express, Sequelize, Socket.IO, Javascript Standard Style and PostgreSQL starter template

[![Node Version](https://img.shields.io/badge/node-%3E=%2014.16.1-success)](https://nodejs.org)


## Development Environment Setup
1. Make sure you have nvm, node v14.16.1 or LTS version of node installed
2. Install PostgreSql >= v9


## Quick Start
1. Clone the repository
2. Install the dependencies `npm install`
3. Create Databases
4. Copy `.env.example` `.env` and populate it with the correct credentials and settings
5. Run database migration `npx sequelize-cli db:migrate`
6. Run the application in development mode with `npm run dev`


## Overview
1. Uses Node.js > v14
2. Written using ES6
3. Uses npm for package dependency management
4. Uses JavaScript Standard Style
5. Uses sequelize and sequelize-cli as ORM and data migration tool
6. Filename convention - camelCase should never be used. Uses snake_case for file.


## Tech stack
* [Express](https://expressjs.com/) - Node Framweork
* [Nodemon](https://nodemon.io/) - Use for development file reload.
* [pg](https://www.npmjs.com/package/pg) - JavaScript and optional native libpq bindings
* [pg-hstore](https://www.npmjs.com/package/pg-hstore) - A node package for serializing and deserializing JSON data to hstore format
* [Sequalize](https://sequelize.org) - promise-based ORM for Node.js
* [Json Webtoken](https://github.com/auth0/node-jsonwebtoken) - An implementation of JSON Web Tokens.
* [Socket.IO](https://socket.io/) - Library that enables low-latency, bidirectional and event-based communication between a client and a server


## JavaScript Standard Style
### The Rules

1. **2 spaces** – for indentation
2. **Single quotes for strings** – except to avoid escaping
3. **No unused variables** – this one catches tons of bugs!
4. **No semicolons** 
6. **Space after keywords** `if (condition) { ... }`
7. **Space after function name** `function name (arg) { ... }`
8. **Always use === instead of ==** – but `obj == null` is allowed to check `null || undefined`
9. **Always handle the node.js err function parameter**

[Learn more](https://standardjs.com/)
