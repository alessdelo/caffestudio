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
