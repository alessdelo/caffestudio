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


var index = 'pages/index5'
var header = "../partials/header2.ejs"
var nav = "../partials/nav7.ejs"
var footer = "../partials/footer1.ejs"


var pageData = {
  home: {
    title: 'Home Page',
    content:'../contents/home.ejs', 
    nav: nav,
    header: header,
    footer: footer,
    params: []
  },
  gallery1: {
    title:'page 1',
    content:'../contents/page1.ejs',
    nav: nav,
    header: header,
    footer: footer,
    params: []
  }
  
 }
