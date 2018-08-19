{
  "name": "Caffe Studio Design Lab",
  "version": "1.0.0",
  "description": "first Caffe Studio Design Lab App",
  "engines": {
    "node": "8.9.1"
  },
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "ejs": "^2.5.6",
    "express": "^4.15.2",
    "mongodb": "^3.0.5",
    "mongoose": "^5.0.11",
    "body-parser": "^1.18.2",
    "ol": "^4.6.5",
    "three":"^0.94.0"
  },
  "devDependencies": {
    "request": "^2.81.0",
    "tape": "^4.7.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/alessdelo/caffestudiodesignlab.git"
  },
  "keywords": [
    "design",
    "interior",
    "restaurants"
  ],
  "license": "MIT"
}

// **********************************************
// **********************************************

const express = require('express')

const path = require('path')

const mongoose = require('mongoose')
const assert = require('assert')
const bodyParser = require('body-parser')
const THREE = require('three')


const PORT = process.env.PORT || 5000

 var dbUri = process.env.MONGODB_URI

 // -------------------------------------------------

 var fs = require('fs')


var index = 'views/pages/index'
var header = "../partials/header.ejs"
var nav = "../partials/nav.ejs"
var footer = "../partials/footer.ejs"


var pageData = {
  home: {
    title: 'Home Page',
    content:'../contents/home.ejs', 
    nav: nav,
    header: header,
    footer: footer,
    params: []
  },
  page1: {
    title:'page 1',
    content:'../contents/page1.ejs',
    nav: nav,
    header: header,
    footer: footer,
    params: []
  }
  
 }

var app = express()
  // app.use(express.static(path.join(__dirname, 'public')))
  app.use('/static', express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')

// ---------------------------------
// MAIN

app.get('/', (req, res) => res.render(index,pageData.home))


// ---------------------------------
// HOME	

app.get('/home', (req, res) => res.render(index,pageData.home))

// ---------------------------------
// PAGE1	

app.get('/page1', (req, res) => res.render(index,pageData.page1))

// ----------------------------------
// ----------------------------------
// ----------------------------------

 app.listen(PORT, () => console.log(`Listening on ${ PORT }`))


// **********************************************
// **********************************************

{
  "name": "Caffe Studio Design Lab",
  "version": "1.0.0",
  "description": "Caffe Studio Design Lab App ",
  "main": "index.js",
  "author": "",
  "license": "ISC",
  "engines": {
      "node": "8.9.2",
      "npm": "5.7.1"
  },
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "ejs": "^2.5.7",
    "express": "^4.15.2",
    "path": "^0.12.7"
  }
 }

// **********************************************
// **********************************************

const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .set('views', './views')
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


// **********************************************
// **********************************************
