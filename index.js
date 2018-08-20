const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000


var dbUri = process.env.MONGODB_URI

express()
  .set('views', './views')
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('index'))

server.listen(port, function() {
    console.log("App is running on port " + PORT);
});


//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))
