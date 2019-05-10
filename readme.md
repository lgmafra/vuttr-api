<p align="center">
    <h1 align="center">VUTTR (Very Useful Tools to Remember) API</h1>
</p>

This repository, contains the project of an API to help the user to store Tools to usage.

# Prerequisites

To use this API, the main requirement is that the user have [NodeJS](https://nodejs.org/en/) installed.

After install NodeJS, we need to install `yarn` to use in this project. For this, run:

```
npm install -g yarn
```

# Cloning the project

To clone the project, choose a directory and run the command

```
git clone git@github.com:lgmafra/vuttr-api.git
```

After clone, go to the project directory `vuttr-api` and follow the next steps

# Installation

To run this project, have two ways, using `docker` or run with `yarn` directly.

If you don't have [docker](https://www.docker.com/), first intall and continue.

To run with `docker`, on terminal, run the command

```
docker-compose up
```

If want run directly, first install the `node` packages that will use by the project using the command

```
yarn
```

Then, run the command

```
yarn start
```

When the project was running, access the API documentation using

```
localhost:3000

or

127.0.0.1:3000
```
