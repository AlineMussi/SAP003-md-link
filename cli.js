#!/usr/bin/env node
const { mdLinks } = require('./lib/index');

const path = process.argv.slice(2).pop();
mdLinks(path)
.then(response => console.log(response))
.catch(err => console.log(err))